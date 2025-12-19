package com.jrconstructions.backend.controller;

import com.jrconstructions.backend.entity.ContactMessage;
import com.jrconstructions.backend.repository.ContactRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/contact")
public class ContactController {

    private final ContactRepository contactRepository;

    public ContactController(ContactRepository contactRepository) {
        this.contactRepository = contactRepository;
    }

    // Public: Send a message
    @PostMapping
    public ContactMessage sendMessage(@RequestBody ContactMessage message) {
        return contactRepository.save(message);
    }

    // Admin Only: Read all messages
    @GetMapping
    public List<ContactMessage> getAllMessages() {
        return contactRepository.findAll();
    }
}
