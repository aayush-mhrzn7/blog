import { Account, Client, ID } from "appwrite";
import config from "../config/config";

export class AuthService {
  client = new Client();
  account;
  constructor() {
    this.client.setProject(config.appwriteID).setEndpoint(config.appwriteURl);
    this.account = new Account(this.client);
  }
  async signup({ name, email, password }) {
    try {
      const user = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (user) {
        return this.login({ email, password });
      } else {
        return user;
      }
    } catch (error) {
      console.log("error during signup", error);
    }
  }
  async verification() {
    try {
      return this.account.createVerification(
        "http://localhost:5173/verification"
      );
    } catch (error) {
      console.log("error made by verification part 1");
    }
  }
  async updateVerification(userId, secret) {
    try {
      return this.account.updateVerification(userId, secret);
    } catch (error) {
      console.log("error during part two of verificaion");
    }
  }
  async login({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      console.log("error during login", error);
    }
  }
  async getUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log("error getting the data of the user:", error);
    }
  }
  async forgetPassword({ email }) {
    try {
      return await this.account.createRecovery(
        email,
        "http://localhost:5173/forgot-password"
      );
    } catch (error) {
      console.log("error during part 1 of forgot password");
    }
  }

  async updatePassword(userId, secret, { password, repassword }) {
    try {
      return this.account.updateRecovery(userId, secret, password, repassword);
    } catch (error) {
      console.log("error during part 2 of forgot");
    }
  }
  async OauthGoogle() {
    try {
      this.account.createOAuth2Session(
        google,
        "http://localhost:5173/sucess",
        "http://localhost:5173/failed"
      );
    } catch (error) {
      console.log("error during O Auth connection");
    }
  }
  async logout() {
    try {
      await this.account.deleteSession("current");
    } catch (error) {
      console.log("failed to perform logout ");
    }
  }
}

const authService = new AuthService();
export default authService;
