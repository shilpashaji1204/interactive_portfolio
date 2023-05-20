import React, { useState } from 'react';

const ProjectForm = () => {
  const [projects, setProjects] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [features, setFeatures] = useState('');
  const [techStack, setTechStack] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [projectUrl, setProjectUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const projectData = {
      id: Date.now(),
      title,
      description,
      features,
      techStack,
      imageUrl,
      projectUrl,
    };

    setProjects([...projects, projectData]);

    setTitle('');
    setDescription('');
    setFeatures('');
    setTechStack('');
    setImageUrl('');
    setProjectUrl('');
  };

  const handleDelete = (projectId) => {
    const updatedProjects = projects.filter((project) => project.id !== projectId);
    setProjects(updatedProjects);
  };

  return (
    <div>
      <h1>Project Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <label>Features:</label>
          <textarea
            id="features"
            value={features}
            onChange={(e) => setFeatures(e.target.value)}
          />
        </div>
        <div>
          <label>Tech Stack:</label>
          <input
            type="text"
            id="techStack"
            value={techStack}
            onChange={(e) => setTechStack(e.target.value)}
          />
        </div>
        <div>
          <label>Image URL:</label>
          <input
            type="text"
            id="imageUrl"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </div>
        <div>
          <label>Project URL:</label>
          <input
            type="text"
            id="projectUrl"
            value={projectUrl}
            onChange={(e) => setProjectUrl(e.target.value)}
          />
        </div>
        <button type="submit">Create</button>
      </form>

      <h2>Projects:</h2>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p>{project.features}</p>
            <p>{project.techStack}</p>
            <p>{project.imageUrl}</p>
            <p>{project.projectUrl}</p>
            <button onClick={() => handleDelete(project.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectForm;