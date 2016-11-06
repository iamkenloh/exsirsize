package com.exsirsize.restapi.interfaces;

import com.exsirsize.restapi.model.UserRequest;
import com.exsirsize.restapi.model.UserResponse;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;

/**
 * Created by iamkenloh on 06/11/16.
 */
@Produces(MediaType.APPLICATION_JSON)
public interface UserResource {

    @POST
    @RequestMapping("get-user-info")
    @Consumes(MediaType.APPLICATION_JSON)
    public UserResponse getUserInfo(UserRequest user);

    @GET
    @RequestMapping("test")
    public UserResponse test();

    @GET
    @RequestMapping("log-in")
    public UserResponse logIn(
            @QueryParam("username") String username,
            @QueryParam("password") String password
    );

}
