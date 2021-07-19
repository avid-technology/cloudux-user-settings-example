/* eslint-disable */
import appConfig from '../package';

const appName = appConfig.identity.appName;

const default_msg = "User setting not found!";
let objectId = '';
let id = '';

const put_principal = async (objectId, body) => {
    let request = await fetch('/apis/avid.iam;version=3;realm=global/principals/self/settings?kind=' + appName + '&key=' + 'user-settings-' + appName + '&masterRegion=local', {
        method: 'PUT',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    });

    let principal_put_result = await request.json();
    id = principal_put_result.entity.id;
};


const get_principal_list = async (value) => {
    let request = await fetch('/apis/avid.iam;version=3;realm=global/principals/self/settings?kind=nux-ui-settings&key=user-settings', {
        method: 'GET',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    let principal_list = await request.json();
    objectId = principal_list.entity[0].objectId;

    const body_for_principal = {
        serviceType: "avid.iam",
        serviceRealm: "global",
        serviceVersion: 3,
        contentType: "application/json",
        op: "createPrincipalSetting",
        paramSet: {
            entity: {
                objectId: objectId,
                kind: appName,
                key: "user-settings-" + appName,
            }
        }
    };

    const body_value = {
        entity: {
            value: {
                name: "message",
                value: value
            },
            masterRegion: "local"
        }
    };

    let exist = 0;
    for (let i = 0; i < principal_list.entity.length; i++) {
        if (principal_list.entity[i].kind == appName) {
            console.log('principal exist');
            exist = 1;
            break;
        }
    }
    if (exist == 0) {
        await put_principal(objectId, body_for_principal);
        await put_principal(objectId, body_value);
        const elem = document.getElementById("settings_val");
        elem.innerHTML = '<div>Custom message: ' + value + '</div>'; 
    } else {
        await put_principal(objectId, body_value);
        const elem = document.getElementById("settings_val");
        elem.innerHTML = '<div>Custom message: ' + value + '</div>'; 
    }
};

const delete_settings = async () => {
    if (id == '') {
        alert('Couldn’t find object!');
    } else {
        let request = await fetch('/apis/avid.iam;version=3;realm=global/principals/' + objectId + '/settings/' + id, {
            method: 'DELETE',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        let principal_list = await request.json();
        const elem = document.getElementById("settings_val");
        elem.innerHTML = '<div>' + default_msg + '</div>'; 
        id = '';
    }
};

const get_value_from_settins = async () => {
    let request = await fetch('/apis/avid.iam;version=3;realm=global/principals/self/settings?entity=' + encodeURIComponent('{"kind":"' + appName + '","key":"user-settings-' + appName + '"}'), {
        method: 'GET',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    let msg_value = await request.json();


    if (msg_value.entity[0] == null ){
        return default_msg;
    } else {
        return 'Custom message: ' + msg_value.entity[0].value.value;
    }
}

export { get_principal_list, get_value_from_settins, delete_settings };