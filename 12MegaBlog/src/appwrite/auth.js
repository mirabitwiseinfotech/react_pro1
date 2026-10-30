import  conf from '../conf/conf';
import { Client, Account, ID } from "appwrite";





export class AuthServices{
    Client =new Client();
    account;

    constructor(){

         console.log("Appwrite URL:", conf.appwriteUrl);
        console.log("Project ID:", conf.appwriteProjectId);
        this.Client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account =new Account(this.Client);
    }

    async createAccount({email,password,name}){
        try{
            const userACCOUNT = await this.account.create(ID.unique(),email,password,name);
            if (userACCOUNT){
                //call another method
                return this.Login({email,password});  

            }else{
                return userACCOUNT;
            }

        }
        catch(error){
            throw error;

        }
        
    }

    async Login({email,password}){
        try {
            return await this.account.createEmailPasswordSession(email,password);
        } catch (error) {
            
        }
    }

  async getCurrentUser() {
  try {
    return await this.account.get();
  } catch (error) {
    if (error.code === 401) {
      return null;
    }
    throw error;
  }
}

    async LogOut(){
        try {
            await this.account.deleteSessions();
        } catch (error) {
            throw error;
        }
    }

}


const authService =new AuthServices();
export default authService