package com.example.serviceb;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class ServiceBApplication {


	final
	MyMessages myMessages;

	public ServiceBApplication(MyMessages myMessages) {
		this.myMessages = myMessages;
	}

	@GetMapping
	public String getMessage(){
		return myMessages.getMessage();
	}

	public static void main(String[] args) {
		SpringApplication.run(ServiceBApplication.class, args);
	}

}
