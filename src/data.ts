export default {
  name: 'TJ Mazeika',
  position: 'Software engineer at JPMorgan Chase & Co.',
  location: 'Austin, TX',
  email: 'mazeika.tj@gmail.com',
  githubUsername: 'tmazeika',
  education: [
    {
      company: 'Northeastern University',
      position: 'Bachelor of Science in Computer Science, summa cum laude',
      location: 'Boston, MA',
      start: 'September 2018',
      end: 'December 2021',
    },
  ],
  experience: [
    {
      company: 'JPMorgan Chase & Co.',
      position: 'Software Engineer',
      start: 'December 2022',
      end: 'Present',
      body: [
        "Engineered critical back-end features for a public developer-focused web interface used for managing access to JPMorgan Payments APIs (Java, Spring Boot, AWS).",
        "Mentored associate engineers in React and offered guidance on best practices for writing maintainable and efficient code.",
        "Initiated and helped implement a comprehensive end-to-end testing suite (Kotlin) for the entire distributed system. This suite ran on a schedule and prevented at least two major bugs and several minor ones from reaching production.", 
        "Actively presented solutions and offered insights in a four-person team during retrospectives and daily standups.",
      ],
    },
    {
      company: 'Urban Emu',
      position: 'Software Engineer',
      start: 'August 2021',
      end: 'December 2022',
      body: [
        "Owned the agency's first interactive Next.js SPA. This fetched data from the USDA's 3 GB database of foods to enable the client to more efficiently build healthy eating plans. Elevated the agency's advertised capabilities.",
        "Proposed and developed an internal Google Calendar add-on (TypeScript) to automate the process of completing multiple daily client-specific timesheets, ultimately saving every employee about six hours every month.",
        'Worked in an international team of four to build features including filtered and paginated fuzzy searching of a database, as well as a trending content page based on the z-score of page view changes over time (PHP).',
      ],
    },
    {
      company: 'AIR Worldwide',
      position: 'Software Engineer Co-op',
      start: 'January 2021',
      end: 'June 2021',
      body: [
        'Enriched product owner insights into team productivity by tracking Azure DevOps issue-closing activity. Consumed data from REST and OData API endpoints and displayed them in graphs.',
        'Halved the loading time of an internal application (C#, .NET, React) by parallelizing back-end and front-end network calls. In weekly live surveys thereafter, users reported a significantly improved UX.',
      ],
    },
  ],
  projects: [
    {
      name: 'apt-tracker',
      url: 'github.com/tmazeika/apt-tracker',
      body: [
        'Screen-scraped apartment websites to track pricing and availability (Python).',
        'Uploaded data to Supabase (PostgreSQL).',
      ],
    },
    {
      name: 'Hitch',
      url: 'usehitch.com',
      body: [
        'Digitized the process of applying for a home equity line of credit (Next.js, MongoDB).',
        'Built as the MVP for a seed-stage fintech startup.',
        'Securely handled sensitive user data and pushed to refine the client\'s requirements to minimize the amount of stored PII.',
        "Integrated third-party financial services to pull applicants' debts, credit reports, and property values in real time."
      ],
    },
  ],
  skills: [
    {
      category: 'Languages',
      items: ['Kotlin', 'Java', 'TypeScript', 'Go'],
    },
    {
      category: 'Tools',
      items: ['Ktor', 'Spring Boot', 'Node.js/Next.js', '*nix'],
    },
  ],
} as const;
