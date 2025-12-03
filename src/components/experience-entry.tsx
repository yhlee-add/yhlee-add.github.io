import { Experience } from "@/data/experience";

export function ExperienceEntry({ experience }: { experience: Experience }) {
  return (
    <div>
      <span className="text-xs text-zinc-500 mb-2">{experience.date}</span>
      <h3 className="text-base font-serif mb-1">
        {/* {experience.title} —{" "} */}
        {experience.companyUrl ? (
          <a
            href={experience.companyUrl}
            className="hover:text-zinc-600 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            {experience.company}
          </a>
        ) : (
          experience.company
        )}
      </h3>
      {/* <p className="text-sm text-zinc-600 leading-relaxed">{experience.title}</p> */}

      <div className="col-span-3 flex flex-col">
        <p className="text-sm text-zinc-600 leading-relaxed">
          {experience.title},
          {experience.manager && (
            <span> Manager: {experience.manager}</span>
          )}
          {experience.advisor && experience.manager && <span>,</span>}
          {experience.advisor && (
            <span> Advisor: {experience.advisor}</span>
          )}
        </p>
        {experience.description && (
          <ul className="list-disc pl-4 text-sm text-zinc-600 leading-relaxed mt-2">
            {experience.description.map((desc, index) => (
              <li key={index}>{desc}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
