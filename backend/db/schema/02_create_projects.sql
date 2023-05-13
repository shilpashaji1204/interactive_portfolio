DROP TABLE IF EXISTS projects CASCADE;
-- CREATE projects
CREATE TABLE projects (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255),
  description VARCHAR(255),
  features TEXT,
  tech_stack TEXT,
  image_url VARCHAR(255) NOT NULL,
  project_url VARCHAR(255) NOT NULL, 
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE
);