import UserContainer from '../../app/settings';

const ViewConfig = {
    config: {
        index: 101,
        displayName: 'Simple user settings',
    },
    factory: () => {
        return new UserContainer();
    },
};

export default ViewConfig;
