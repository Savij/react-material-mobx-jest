import * as History from 'history';
import { action, decorate, observable } from 'mobx';
import { BearerToken } from '../Api/BearerToken';
import AuthToken from '../Models/AuthToken';
import SharedItems from './SharedItems';

export default class StoreBase {
    public history: History.History;

    public async isAuthenticated() {
        return BearerToken.Instance.accessToken;
    }

    public setToken(token: AuthToken) {
        SharedItems.authToken = token;
    }

    public getToken() {
        return SharedItems.authToken;
    }
}
decorate(StoreBase, {
    getToken: action,
    history: observable,
    isAuthenticated: action,
    setToken: action
});