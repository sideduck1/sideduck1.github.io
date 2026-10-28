import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  return (
    <Link
      to={`/projects/${project.id}`}
      className="group block bg-(--surface) rounded-lg overflow-hidden border border-(--bordercolor) hover:border-(--accent) transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer">

      {/* Thumbnail met overlay */}
      <div className="relative aspect-[16/9] overflow-hidden">
        <img src={project.thumbnail} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-(--overlay) opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <span className="text-(--text) font-semibold text-lg group-hover:translate-y-0 translate-y-2 transition-transform duration-300">Bekijk Project →</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-(--text) mb-2 group-hover:text-(--accent) transition-colors">
          {project.title}
        </h3>
        <p className="text-base text-(--muted) line-clamp-2 mb-4 group-hover:text-(--text) transition-colors">{project.tagline}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-4">
          {project.tags.map((tag) => (
            <span key={tag} className="tag group-hover:bg-(--accent) group-hover:bg-opacity-20 transition-colors">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}