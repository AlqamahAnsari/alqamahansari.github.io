// src/components/ProjectCard.jsx
import React from "react";

export default function ProjectCard({ title, description, tech = [], repo, image, imageAlt }) {
  return (
    <article className="border rounded-lg p-5 bg-white shadow-sm hover:shadow-md transition">
      {image ? (
        <div className="mb-4 overflow-hidden rounded">
          <img src={image} alt={imageAlt || title} className="object-cover w-full h-40" />
        </div>
      ) : null}

      <h3 className="text-xl font-semibold mb-1">{title}</h3>
      <p className="text-sm text-slate-600 mb-3">{description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((t) => (
          <span key={t} className="bg-blue-100 text-black px-3 py-1 rounded-full text-xs">{t}</span>
        ))}
      </div>

      <div className="flex items-center gap-4">
        {repo ? (
          <a href={repo} target="_blank" rel="noopener noreferrer" className="text-indigo-600 underline">View Code</a>
        ) : (
          <span className="text-sm text-slate-400">No repo</span>
        )}
      </div>
    </article>
  );
}
