package com.shconstructions.backend.service;

import com.shconstructions.backend.entity.Service;
import com.shconstructions.backend.repository.ServiceRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import java.util.Arrays;

@Component
public class DataSeeder implements CommandLineRunner {

    private final ServiceRepository serviceRepository;

    public DataSeeder(ServiceRepository serviceRepository) {
        this.serviceRepository = serviceRepository;
    }

    @Override
    public void run(String... args) throws Exception {
        // Only add data if the table is empty
        if (serviceRepository.count() == 0) {
            Service s1 = new Service();
            s1.setTitle("Residential Construction");
            s1.setDescription("Building dream homes from the ground up with precision and quality materials.");
            s1.setIconUrl("https://cdn-icons-png.flaticon.com/512/609/609803.png");

            Service s2 = new Service();
            s2.setTitle("Commercial Projects");
            s2.setDescription("State-of-the-art office spaces, shopping complexes, and industrial warehouses.");
            s2.setIconUrl("https://cdn-icons-png.flaticon.com/512/3058/3058970.png");

            Service s3 = new Service();
            s3.setTitle("Renovation & Remodeling");
            s3.setDescription("Transforming old structures into modern, functional, and beautiful spaces.");
            s3.setIconUrl("https://cdn-icons-png.flaticon.com/512/1005/1005141.png");

            serviceRepository.saveAll(Arrays.asList(s1, s2, s3));
            System.out.println("--- SUCCESS: SAMPLE SERVICES ADDED TO DATABASE ---");
        }
    }
}
