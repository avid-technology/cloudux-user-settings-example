
// import PaneContainer from './containers/MainPaneContainer';

import { get_principal_list, delete_settings } from './iam';
import * as styles from './index.scss';

export default class UserContainer {
    getTitle() {
        return 'Your first AVID app title';
    }
    render(element) {
        const div_container = document.createElement('div');
        const div2 = document.createElement('DIV');
        div2.classList.add('cux-toolbar');
        div2.classList.add(styles.textwraper);

        const label = document.createElement('label');
        label.innerHTML = 'Set custom message:';
        label.classList.add('cux-textbox-label');
        label.classList.add(styles.labelsettings);

        const input = document.createElement('INPUT');
        input.setAttribute('type', 'text');
        input.setAttribute('placeholder', 'test');
        input.setAttribute('name', 'text_value');
        input.classList.add(styles.inputsettings);

        const submit_btn = document.createElement('BUTTON');
        submit_btn.innerHTML = 'Set message';
        submit_btn.setAttribute('type', 'submit');
        submit_btn.classList.add(styles.submitbtn);

        const delete_btn = document.createElement('BUTTON');
        delete_btn.innerHTML = 'Delete';
        delete_btn.classList.add(styles.deletebtn);


        element.domElement.append(div_container);
        div2.appendChild(label);
        div2.appendChild(input);
        div2.appendChild(submit_btn);
        div2.appendChild(delete_btn);
        div_container.appendChild(div2);


        submit_btn.addEventListener('click', function () {
            console.log(input.value);
            get_principal_list(input.value); 
        });

        delete_btn.addEventListener('click', function () {
            delete_settings();
        });
    }
}
