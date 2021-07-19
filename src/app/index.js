/**
 * Copyright 2019 by Avid Technology, Inc.
 */

import { get_value_from_settins } from './iam';
import * as styles from './index.scss';

export default class ApplicationContainer {
    getTitle() {
        return 'Your first AVID app title';
    }

    render(element) {
        const newElement = document.createElement('div');
        newElement.classList.add(styles.container);
        newElement.innerHTML = '<div class="tc"><p class="f2 lh-copy shadow-3">Hello, ' + `${window.AV.User.name}` + '!</p><p>This sample UI app displaying user settings.</p></div>';
        element.appendChild(newElement);
        const valueElement = document.createElement('div');
        valueElement.id = 'settings_val';
        newElement.appendChild(valueElement);
        get_value_from_settins().then((value) => {
            const elem = document.getElementById('settings_val');
            elem.innerHTML = '<div>' + value + '</div>';   
        });
    }
}
