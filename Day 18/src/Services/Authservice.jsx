import { authApi } from "../api/axios";

class Authservice{
    Login =(login)=>authApi.post('/login',login);

    Signup =(signup)=>authApi.post('/signup',signup);
}
export default new Authservice;