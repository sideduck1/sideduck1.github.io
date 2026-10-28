import { useState, useMemo } from "react";
import { siteConfig } from "../siteConfig";
import ProjectCard from "../components/ProjectCard";
import projectData from "../data/projectdata.json";

export default function Projects() {
  const projects = projectData.projects;
  const [selectedTags, setSelectedTags] = useState([]);

  // Get all unique tags from projects
  const allTags = useMemo(() => {
    const tags = new Set();
    projects.forEach(project => {
      project.tags.forEach(tag => tags.add(tag));
    });
    return Array.from(tags).sort();
  }, [projects]);

  // Filter projects based on selected tags
  const filteredProjects = useMemo(() => {
    if (selectedTags.length === 0) return projects;
    return projects.filter(project =>
      selectedTags.every(tag => project.tags.includes(tag))
    );
  }, [projects, selectedTags]);

  // Toggle tag selection
  const toggleTag = (tag) => {
    setSelectedTags(prev =>
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  return (
    <div>
      {/* Projecten Section */}
      <section className="pt-28 pb-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-(--text) mb-8 text-center">Mijn Projecten</h2>

          {/* Filter Tags */}
          <div className="mb-12 flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                  selectedTags.includes(tag)
                    ? "bg-(--accent) text-(--accent-text) shadow-lg"
                    : "bg-(--surface) text-(--text) border border-(--bordercolor) hover:border-(--accent) hover:text-(--accent)"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Verticale lijst met ProjectCards */}
          <div className="flex flex-col gap-8 max-w-2xl mx-auto">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))
            ) : (
              <div className="text-center py-12">
                <p className="text-lg text-(--muted)">Geen projecten met deze tags gevonden.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
