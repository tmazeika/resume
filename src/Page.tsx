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
            <p>
              <a href={`mailto:${data.email}`}>{data.email}</a>
            </p>
            <div className='flex gap-3'>
              <a href={`https://linkedin.com/in/${data.linkedInUsername}`} className="flex items-center gap-px">
                <img className="w-3.5 h-3.5" src="linkedIn.png" alt="LinkedIn logo" />
                <p>/{data.linkedInUsername}</p>
              </a>
              <a href={`https://github.com/${data.githubUsername}`} className="flex items-center gap-px">
                <img className="w-3.5 h-3.5" src="github.svg" alt="GitHub logo" />
                <p>/{data.githubUsername}</p>
              </a>
            </div>
          </div>
        </div>

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

        <SectionTitle>Education</SectionTitle>
        {data.education.map(({ body, ...title }, i) => (
          <div key={i}>
            <ItemTitle {...title} />
            <List>
              {body.map((text, i) => (
                <li key={i} className='whitespace-pre-wrap'>{text}</li>
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

function ItemTitle(props: {
  company: string;
  companyUrl?: string;
  position: string;
  product?: readonly [string, string];
  start?: string;
  end?: string;
}) {
  return (
    <div className="flex justify-between">
      <div>
        <p>
          {props.company && (
            <strong className='mr-2'>
              {props.companyUrl ? (
                <a href={props.companyUrl}>{props.company}</a>
              ) : (
                <>{props.company}</>
              )}
            </strong>
          )}<em>{props.position}{props.product && (
            <>, <a href={props.product[1]}>{props.product[0]}</a></>
          )}</em>
        </p>
      </div>
      <p>
        {props.start && props.end && (
          <>{props.start} &mdash; {props.end}</>
        )}
      </p>
    </div>
  );
}

function List({ children }: { children: ReactNode }) {
  return <ul className="list-disc pl-5">{children}</ul>;
}
