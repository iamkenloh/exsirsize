package com.exsirsize.restapi.model;

/**
 * Created by iamkenloh on 06/11/16.
 */
public class UserResponse extends UserKeys {

    private String firstName;
    private String lastName;
    private String role;
    private String responseMessage;
    private int code;

    //move to Enums
    public final static int OK = 800;
    public final static int ERROR = 666;
    public final static String ERROR_TEXT = "Invalid Username and Password combination; please try again";

    public String getResponseMessage() {
        return responseMessage;
    }

    public void setResponseMessage(String responseMessage) {
        this.responseMessage = responseMessage;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public int getCode() {
        return code;
    }

    public void setCode(int code) {
        this.code = code;
    }
}
