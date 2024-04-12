/* eslint-disable no-useless-catch */
import { Client, Account, ID } from "appwrite";
import conf from '../conf/conf'

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)
        this.account = new Account(this.client);
    }

    async createAccount({email, password, name}) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name)
            if (userAccount){
                // call the login method
                this.login({email, password})
            }
            else{
                return userAccount;
            }
        } catch (error) {
            throw error;
        }
    }

    async login({email, password}) {
        try {
            return await this.account.createSession(email, password);
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            const currentUser = await this.account.get();
            return currentUser;
        } catch (error) {
            console.log("AuthService::getCurrentUser::error", error);
        }
        return null;
    }

    async logout(){
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("AuthService::Logout::error", error);
        }
    }
}

const authService = new AuthService();

export default authService