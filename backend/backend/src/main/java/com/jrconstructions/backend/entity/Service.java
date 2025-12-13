package com.jrconstructions.backend.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Service {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    
    @Column(length = 1000)
    private String description;
    
    private String iconUrl; // URL for an icon image
}
