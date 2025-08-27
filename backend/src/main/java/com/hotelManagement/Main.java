package com.hotelManagement;

import jakarta.annotation.PostConstruct;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.TimeZone;

@SpringBootApplication
public class Main {

    public static void main(String[] args) {
        SpringApplication.run(Main.class, args);
    }


    @PostConstruct
    public void init() {
        TimeZone.setDefault(TimeZone.getTimeZone("Europe/Paris"));
        System.out.println("Timezone par défaut : " + TimeZone.getDefault().getID());

    }
}
