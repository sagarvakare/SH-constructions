package com.SH construction.backend.service;

import com.SH construction.backend.entity.Project;
import com.SH construction.backend.repository.ProjectRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ProjectService {

    private final ProjectRepository projectRepository;

    public ProjectService(ProjectRepository projectRepository) {
        this.projectRepository = projectRepository;
    }

    public List<Project> getAllProjects() {
        return projectRepository.findAll();
    }

    public Project getProjectById(Long id) {
        return projectRepository.findById(id).orElseThrow(() -> new RuntimeException("Project not found"));
    }

    public Project saveProject(Project project) {
        return projectRepository.save(project);
    }

    public Project updateProject(Long id, Project updatedProject) {
        Project existing = getProjectById(id);
        existing.setTitle(updatedProject.getTitle());
        existing.setDescription(updatedProject.getDescription());
        existing.setImageUrl(updatedProject.getImageUrl());
        existing.setClientName(updatedProject.getClientName());
        existing.setLocation(updatedProject.getLocation());
        existing.setCompletionDate(updatedProject.getCompletionDate());
        return projectRepository.save(existing);
    }

    public void deleteProject(Long id) {
        projectRepository.deleteById(id);
    }
}
