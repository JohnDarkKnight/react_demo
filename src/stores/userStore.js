import {observable, action} from 'mobx';

class UserStore {

    @observable
    userInfo = {
        name: null,
    };

    @action
    updateName = (name) => {
        this.userInfo.name = name;
    };
}

export default new UserStore();