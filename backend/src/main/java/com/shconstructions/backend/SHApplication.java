package com.shconstructions.backend;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication; // <--- This import is crucial!
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.shconstructions.backend.entity.User;
import com.shconstructions.backend.repository.UserRepository;

import io.github.cdimascio.dotenv.Dotenv;

@SpringBootApplication
public class SHApplication {

    // --- Load .env variables before the app starts ---
    static {
        try {
            Dotenv dotenv = Dotenv.load();
            System.setProperty("DB_USERNAME", dotenv.get("DB_USERNAME"));
            System.setProperty("DB_PASSWORD", dotenv.get("DB_PASSWORD"));
            System.setProperty("JWT_SECRET", dotenv.get("JWT_SECRET"));
            System.setProperty("DB_URL", dotenv.get("DB_URL"));
        } catch (Exception e) {
            System.out.println("Warning: .env file not found. Assuming variables are set in environment.");
        }
    }

    public static void main(String[] args) {
        SpringApplication.run(SHApplication.class, args);
    }

    // Creates the Admin user if it doesn't exist
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

//register
//login