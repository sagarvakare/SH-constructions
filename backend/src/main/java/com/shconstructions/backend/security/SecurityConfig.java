package com.shconstructions.backend.security; // ADJUST PACKAGE NAME IF NEEDED

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

import java.util.List;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            // 1. DISABLE CSRF (Not needed for JWT)
            .csrf(csrf -> csrf.disable())
            
            // 2. ENABLE CORS (The Fix!)
            .cors(cors -> cors.configurationSource(corsConfigurationSource()))
            
            // 3. DEFINE PUBLIC ENDPOINTS
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/auth/**").permitAll() // Login/Register is public
                .anyRequest().authenticated()            // Everything else needs a token
            )
            
            // 4. STATELESS SESSION (For JWT)
            .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS));

        return http.build();
    }

    // --- THE CORS CONFIGURATION BEAN ---
    @Bean
    public UrlBasedCorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration config = new CorsConfiguration();
        
        // ALLOW YOUR FRONTEND URLS HERE
        config.setAllowedOrigins(List.of(
            "http://localhost:5173",                      // Localhost
            "https://jr-constructions-clone.onrender.com" // Your Render Frontend
        ));
        
        config.setAllowedMethods(List.of("GET", "POST", "PUT", "DELETE", "OPTIONS"));
        config.setAllowedHeaders(List.of("Authorization", "Content-Type"));
        config.setAllowCredentials(true);

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", config);
        return source;
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration config) throws Exception {
        return config.getAuthenticationManager();
    }
}