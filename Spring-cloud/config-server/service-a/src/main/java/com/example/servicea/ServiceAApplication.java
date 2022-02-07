package com.example.servicea;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.context.config.annotation.RefreshScope;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
@RefreshScope
public class ServiceAApplication {


	@Value("${my.message: hi}")
	private String message;

	@GetMapping
	public String getMessage(){
		return message;
	}


	public static void main(String[] args) {
		SpringApplication.run(ServiceAApplication.class, args);
	}

}
