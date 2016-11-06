package com.exsirsize;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * Created by iamkenloh on 06/11/16.
 */
@SpringBootApplication
@EnableAutoConfiguration
public class ExSirSizeRestService {

    public static void main(String[] args){
        SpringApplication.run(ExSirSizeRestService.class,args);
    }
}
