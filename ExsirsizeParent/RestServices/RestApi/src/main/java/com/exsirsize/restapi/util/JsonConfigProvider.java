package com.exsirsize.restapi.util;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;

import javax.ws.rs.ext.ContextResolver;

/**
 * Created by iamkenloh on 06/11/16.
 */
public class JsonConfigProvider implements ContextResolver<ObjectMapper> {


    @Override
    public ObjectMapper getContext(Class<?> aClass) {
        ObjectMapper mapper = new ObjectMapper();
        mapper.configure(SerializationFeature.WRITE_DATES_AS_TIMESTAMPS,false);
        return mapper;
    }
}
