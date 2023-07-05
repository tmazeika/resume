import { ReactNode } from 'react';
import data from './data';

function Page() {
  return (
    <>
      <div className="space-y-3 font-serif text-sm">
        <div className="flex justify-between">
          <div className="space-y-3">
            <h1 className="font-bold text-3xl">{data.name}</h1>
            {/* <p className="max-w-sm">{data.position}</p> */}
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
                <li key={i}>{text}</li>
              ))}
            </List>
          </div>
        ))}

        <SectionTitle>Skills</SectionTitle>
        <table>
          <tbody>
            {data.skills.map(({ category, items }, i) => (
              <tr key={i}>
                <td className="pr-3 text-right align-top font-bold">{category}</td>
                <td>{items.join(', ')}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* <p className="absolute inset-0 bottom-auto text-blue-400 print:text-white text-xs">
        {data.keywords.join(', ')}
      </p> */}
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
          <strong>{company}</strong>
        </p>
        <p>
          <em>{position}</em>
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
