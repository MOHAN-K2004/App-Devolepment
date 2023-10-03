package com.example.demo.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.v3.oas.annotations.tags.Tag;

@RestController
public class ServiceController {
	
	@Tag(name="Mohan k" , description="VMS")
	@GetMapping("/")
	 public String Getting() {
		return "Get the data";
	}
	
	

}
