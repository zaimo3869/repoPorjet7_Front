
import appelAxios from '../requette';

class userService  {
    getAllUser () {
        return appelAxios.get("/users")
    }
    signup (dataSignup ) {
        
        return appelAxios.post("/auth/signup", dataSignup )
    }
    login (dataLogin ) {
        return appelAxios.post("/auth/login/", dataLogin)
    }
    

}
export default new userService () ;