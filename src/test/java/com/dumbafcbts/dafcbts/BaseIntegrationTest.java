package com.dumbafcbts.dafcbts;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.web.server.LocalServerPort;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public abstract class BaseIntegrationTest {
    protected final static ObjectMapper objectMapper = new ObjectMapper();
    
    @LocalServerPort
    protected int port;
}
