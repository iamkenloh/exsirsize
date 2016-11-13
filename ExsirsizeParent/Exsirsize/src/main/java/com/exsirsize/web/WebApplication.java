package com.exsirsize.web;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * Created by iamkenloh on 07/11/16.
 */
@SpringBootApplication
@EnableAutoConfiguration
public class WebApplication {

    public static void main(String[] args){
        SpringApplication.run(WebApplication.class, args);
    }

}
