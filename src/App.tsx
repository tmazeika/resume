import { ReactNode } from 'react';
import data from './data.yml';

function App() {
  return (
    <div className="space-y-4 font-serif">
      <div className="flex justify-between">
        <div>
          <h1 className="font-bold text-4xl">TJ Mazeika</h1>
          <p>Software Engineer</p>
        </div>
        <div className="flex flex-col items-end">
          <p>Austin, TX</p>
          <p>mazeika.tj@gmail.com</p>
          <div className="flex items-center">
            <img className="w-4 h-4" src="/github.svg" alt="GitHub logo" />
            <p>/tmazeika</p>
          </div>
        </div>
      </div>
      <SectionTitle>Experience</SectionTitle>
      <div>
        <ItemTitle
          company="Urban Emu"
          position="Software Engineer"
          start="January 2022"
          end="Present"
        />
        <List>
          <li>
            Built a highly interactive healthy eating planner in Next.js and Tailwind CSS with data
            from the USDA's FoodData Central database.
          </li>
          <li>Implemented search functionality over a Drupal API.</li>
          <li>Responded to rapidly changing client needs and requests.</li>
        </List>
      </div>
      <div>
        <ItemTitle
          company="FoldLeft"
          position="Founder & Software Engineer"
          start="November 2020"
          end="Present"
        />
        <List>
          <li>Founded an LLC to offer web development services.</li>
          <li>
            Gained four major clients, building and maintaining both public and internal Next.js,
            Vue.js, and jQuery web applications.
          </li>
          <li>Refined end-to-end Cypress tests.</li>
          <li>
            Improved the performance and maintainability of a complex React application with
            Zustand.
          </li>
        </List>
      </div>
      <div>
        <ItemTitle
          company="AIR Worldwide"
          position="Software Engineer Co-op"
          start="January"
          end="June 2021"
        />
        <List>
          <li>Enhanced the performance of an internal .NET and React application by 90%.</li>
          <li>
            Boosted product owner productivity by aggregating metrics from Azure DevOps REST and
            OData endpoints.
          </li>
          <li>Performed and submitted code reviews to promote code quality and readability.</li>
        </List>
      </div>
      <div>
        <ItemTitle
          company="Digitas"
          position="DevOps Engineer Co-op"
          start="January"
          end="July 2020"
        />
        <List>
          <li>Streamlined front-end QA automation processes with Selenium Java.</li>
          <li>
            Automated Jenkins-Confluence synchronization to improve information accessibility.
          </li>
          <li>Employed AWS services for audio transcription and video text recognition.</li>
        </List>
      </div>
      <SectionTitle>Skills</SectionTitle>
      <div>
        <ItemTitle
          company="Northeastern University"
          position="Bachelor of Science in Computer Science"
          start="September 2018"
          end="December 2021"
        />
        <p>GPA: 3.9</p>
      </div>
      <SectionTitle>Education</SectionTitle>
      {data.education.map(({ body, ...title }, i) => (
        <div key={i}>
          <ItemTitle {...title} />
          <p>{body}</p>
        </div>
      ))}
    </div>
  );
}

export default App;

function SectionTitle({ children }: { children: ReactNode }) {
  return <h1 className="pb-1 border-b border-gray-400 text-2xl">{children}</h1>;
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
        <p className="font-bold">{company}</p>
        <p className="italic">{position}</p>
      </div>
      <p>
        {start} &mdash; {end}
      </p>
    </div>
  );
}

function List({ children }: { children: ReactNode }) {
  return <ul className="list-disc pl-6">{children}</ul>;
}
