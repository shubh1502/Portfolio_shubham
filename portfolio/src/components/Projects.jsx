import React from 'react';
import styled from 'styled-components';
import { projectsData } from '../data';

const Projects = () => {
  return (
    <ProjectContainer>
      {projectsData.map((project) => (
        <ProjectCard key={project.id} href={project.link} target="_blank" rel="noopener noreferrer">
          <ProjectImage src={project.image} alt={project.title} />
          <ProjectContent>
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectDescription>{project.description}</ProjectDescription>
            <ProjectTech>Technologies: {project.technologies.join(', ')}</ProjectTech>
          </ProjectContent>
        </ProjectCard>
      ))}
    </ProjectContainer>
  );
};

export default Projects;

// Styled Components
const ProjectContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
  padding: 2rem;
`;

const ProjectCard = styled.a`
  width: 300px;
  background-color: #f9f9f9;
  text-decoration: none;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;
  color: #333;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ProjectContent = styled.div`
  padding: 1rem;
`;

const ProjectTitle = styled.h3`
  margin: 0 0 0.5rem 0;
`;

const ProjectDescription = styled.p`
  font-size: 0.95rem;
`;

const ProjectTech = styled.p`
  font-size: 0.85rem;
  color: #666;
`;
