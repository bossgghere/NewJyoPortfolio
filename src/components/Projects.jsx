import * as React from "react";
import DialogProjects from "./DialogProjects";

import boneFracture from "../assets/projects/bone-fracture.jpg";
import rateLimiter from "../assets/projects/rate-limiter.jpg";
import liteSql from "../assets/projects/litesql.jpg";
import blog from "../assets/projects/blog-platform.jpg";

// Clicking a card opens a small popup with the description and a GitHub button
const projectList = [
  {
    title: "Bone Fracture Detection",
    imgSrc: boneFracture,
    description:
      "A web app that finds and classifies bone-fracture types in X-ray images with a custom-trained YOLOv8 model, then explains the result with Gemini-generated analysis.",
    tags: ["Python", "YOLOv8", "FastAPI", "Streamlit", "Gemini API"],
    github: "https://github.com/jyoshika12/Bone-Fracture-Detection-and-Diagnosis",
  },
  {
    title: "Quota - API Rate Limiter",
    imgSrc: rateLimiter,
    description:
      "Redis-backed rate limiting with Free, Pro and Admin tiers, using an atomic sliding-window check. Comes with an interactive dashboard, integration tests and a Docker setup.",
    tags: ["Node.js", "TypeScript", "Express", "Redis", "Docker"],
    github: "https://github.com/jyoshika12/API-Rate-Limiter",
  },
  {
    title: "LiteSQL",
    imgSrc: liteSql,
    description:
      "A lightweight SQL engine built from scratch in Python. Supports core SQL commands, primary-key auto-indexing, JSON persistence, a CLI shell and Pytest tests.",
    tags: ["Python", "Pytest", "CLI", "DBMS"],
    github: "https://github.com/jyoshika12/LiteSQL",
  },
  {
    title: "BlogPost",
    imgSrc: blog,
    description:
      "A type-safe multi-user blogging platform with full CRUD for posts and categories, category filters and an admin dashboard. Live on Vercel.",
    tags: ["Next.js", "tRPC", "Drizzle ORM", "Zod", "PostgreSQL"],
    github: "https://github.com/jyoshika12/blogpost",
    live: "https://blogpost-liart-three.vercel.app",
  },
];

function Projects() {
  return (
    <div id="projects">
      <h1>
        Projects <strong style={{ color: "#006AFF" }}>.</strong>
      </h1>
      <div className="projectsDiv">
        {projectList.map((data) => (
          <DialogProjects key={data.title} {...data} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
