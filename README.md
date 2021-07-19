# Example for storing user settings in Attribute Service

This example show how you can use user settings tab in Avid MediaCentral | Cloud UX.

> :warning: **Disclaimer**: Apis used in this example will work for UI apps only! 

> This example is built using Avid cloudux-starter-kit v. 2.0.9 [cloudux-starter-kit](https://www.npmjs.com/package/cloudux-starter-kit).
Please follow the [Quick Start](http://developer.avid.com/quickStart.html) and [UI Plugins](http://developer.avid.com/mcux_ui_plugin/clux-api/plugins/index.html) to get up to speed on how to use the example below.

## Prerequisites
To run this application you will need following things:

1. running MediaCentral | Cloud UX machine
2. [node.js and npm](https://nodejs.org)

## How to run example
1. Before running

Configure package.json file:

```text 
"alias": "your-avid-app-id",
"secret": "your-app-secret-from-myavid-com"
```

Configure connection in project.config.json:

```text
"connection": {
    "hostIp": "your-mediacentral-cloudux-machine-address",
	"hostPort": "",
	"proxyPort": "443"
}
```

From plugin folder in cli type:

```text
npm install
npm start
```

Go to https://localhost/ in browser to see the app.

## Structure of the plugin

View for user settings tab describes in ./avid_api/config/ViewConfig and imports into index.js.
Making user settings tab visible:


./src/index.js:
```text	

    import ViewUser_settings from './avid_api/config/ViewConfig';

    ...

    {
        name: `${appConfig.identity.appName}-user-settings`,
        provides: ['user-settings'],
        create: () => ViewUser_settings,
    }
```
	  
User tab layout describes in ./src/app/settings.js. Functions for getting, storing and deleting user settings describes in ./src/app/iam.js.

### How to use CloudUX plugin
Appearance of the plugin:
![image](/uploads/330647e424525bdd1ac2487f250dc2b5/image.png)

To see user setting click on user icon and select **User Settings**:
![image](/uploads/e4f01105af5b36dacc6bffe376ae314a/image.png)

To add/change user settings click on **Simple user settings** tab and set a custom message:
![image](/uploads/e4a9af2c942f76f394c5bebfebeb1902/image.png)

Click "Delete" button to delete user settings for current user.
