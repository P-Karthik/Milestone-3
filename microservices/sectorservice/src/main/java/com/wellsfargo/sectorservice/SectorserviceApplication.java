package com.wellsfargo.sectorservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableEurekaClient
public class SectorserviceApplication {

	public static void main(String[] args) {
		SpringApplication.run(SectorserviceApplication.class, args);
	}

}
