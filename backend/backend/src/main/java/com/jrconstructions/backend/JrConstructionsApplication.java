package com.jrconstructions.backend;

import com.jrconstructions.backend.entity.User;
import com.jrconstructions.backend.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.password.PasswordEncoder;

@SpringBootApplication
public class JrConstructionsApplication {

    public static void main(String[] args) {
        SpringApplication.run(JrConstructionsApplication.class, args);
    } // <--- The main method MUST end here.

    // This method sits OUTSIDE of main
    @Bean
    public CommandLineRunner run(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        return args -> {
            if (userRepository.findByUsername("admin").isEmpty()) {
                User admin = new User();
                admin.setUsername("admin");
                admin.setPassword(passwordEncoder.encode("admin123")); 
                admin.setRole("ADMIN");
                userRepository.save(admin);
                System.out.println("Admin user created: admin / admin123");
            }
        };
    }
}