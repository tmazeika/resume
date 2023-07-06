import { ReactNode } from 'react';
import data from './data';

function Page() {
  return (
    <>
      <div className="space-y-3 font-serif text-sm">
        <div className="flex justify-between">
          <div className="space-y-3">
            <h1 className="font-bold text-3xl">{data.name}</h1>
          </div>
          <div className="flex flex-col items-end">
            <p>{data.location}</p>
            <p>{data.email}</p>
            <div className="flex items-center">
              <img className="w-4 h-4" src="github.svg" alt="GitHub logo" />
              <p>/{data.githubUsername}</p>
            </div>
          </div>
        </div>

        <SectionTitle>Education</SectionTitle>
        {data.education.map((title, i) => (
          <div key={i}>
            <ItemTitle {...title} />
          </div>
        ))}

        <SectionTitle>Experience</SectionTitle>
        {data.experience.map(({ body, ...title }, i) => (
          <div key={i}>
            <ItemTitle {...title} />
            <List>
              {body.map((text, i) => (
                <li key={i} className='whitespace-pre-wrap'>{text}</li>
              ))}
            </List>
          </div>
        ))}

        <SectionTitle>Projects</SectionTitle>
        {data.projects.map(({ name, url, body }, i) => (
          <div key={i}>
            <p>
              <strong className='mr-2'>{name}</strong><em>{url}</em>
            </p>
            <List>
              {body.map((text, i) => (
                <li key={i}>{text}</li>
              ))}
            </List>
          </div>
        ))}

        <SectionTitle>Skills</SectionTitle>
        <div className='flex gap-4'>
          {data.skills.map(({ category, items }, i) => (
            <div key={i}>
              <strong className="pr-2">{category}</strong>
              {items.join(', ')}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Page;

function SectionTitle({ children }: { children: ReactNode }) {
  return <h1 className="pb-0.5 border-b border-gray-400 text-xl">{children}</h1>;
}

function ItemTitle({
  company,
  position,
  start,
  end,
}: {
  company: string;
  position: string;
  start: string;
  end: string;
}) {
  return (
    <div className="flex justify-between">
      <div>
        <p>
          <strong className='mr-2'>{company}</strong><em>{position}</em>
        </p>
      </div>
      <p>
        {start} &mdash; {end}
      </p>
    </div>
  );
}

function List({ children }: { children: ReactNode }) {
  return <ul className="list-disc pl-5">{children}</ul>;
}
