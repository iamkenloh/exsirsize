package com.exsirsize.restimpl;

import com.exsirsize.restapi.interfaces.UserResource;
import com.exsirsize.restapi.model.UserRequest;
import com.exsirsize.restapi.model.UserResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by iamkenloh on 06/11/16.
 */
@RestController
@RequestMapping("api/v1.0/user")
public class UserResourceImpl implements UserResource{

    private final static Logger logger = LoggerFactory.getLogger(UserResourceImpl.class);

    @Override
    public UserResponse getUserInfo(UserRequest user) {
        return null;
    }

    @Override
    public UserResponse test() {
        logger.info("Here i am");
        return new UserResponse();
    }

    @Override
    public UserResponse logIn(String username, String password) {
        logger.info("Log-in request for: username="+username+", password={REDACTED}");
        UserResponse response = new UserResponse();
        if("meziskeen".equals(username) && "guest".equals(password)){
            response.setUsername(username);
            response.setFirstName("Mezikeen");
            response.setLastName("Daughter of Lilith");
            response.setRole("Bad Ass");
            response.setCode(UserResponse.OK);
        } else if ("iamkenloh".equals(username) && "guest".equals(password)) {
            response.setUsername(username);
            response.setFirstName("Iam");
            response.setLastName("KenLoh");
            response.setRole("Phatfingers");
            response.setCode(UserResponse.OK);
        } else {
            response.setResponseMessage(UserResponse.ERROR_TEXT);
            response.setCode(UserResponse.ERROR);
        }

        return response;
    }
}
