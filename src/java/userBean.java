/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import javax.enterprise.context.RequestScoped;
import javax.inject.Named;


@Named(value = "userBean")
@RequestScoped
public class userBean {

    private String userLogin;
    private String userPassword;

    public userBean() {
    }

    public String getUserLogin() {
        return userLogin;
    }

    public void setUserLogin(String userLogin) {
        this.userLogin = userLogin;
    }

    public String getUserPassword() {
        return userPassword;
    }

    public void setUserPassword(String userPassword) {
        this.userPassword = userPassword;
    }
    
    public String authorizateUser() {
        if ("Andrey".equals(this.userLogin) && "Kadyrov".equals(this.userPassword)) {
            return "success";
        }
        return "failure";   
    }

}
