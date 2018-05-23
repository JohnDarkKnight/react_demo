import {observable, action} from 'mobx';

export default class LoadingStore {

    @observable
    loading = false;

    @action
    updateLoading = (boolean) => {
        this.loading = boolean;
    }
}