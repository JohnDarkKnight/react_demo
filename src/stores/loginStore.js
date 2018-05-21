import {observable, action} from 'mobx';

export default class LoginStore {

    @observable
    loading = false;

    @action
    updateLoading = (boolean) => {
        this.loading = boolean;
    }
}