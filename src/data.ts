export default {
  name: 'TJ Mazeika',
  position: 'Software engineer at JPMorgan Chase & Co.',
  location: 'Austin, TX',
  email: 'mazeika.tj@gmail.com',
  githubUsername: 'tmazeika',
  education: [
    {
      company: 'Northeastern University',
      position: 'Bachelor of Science in Computer Science, 3.9/4.0 GPA',
      location: 'Boston, MA',
      start: 'September 2018',
      end: 'December 2021',
    },
  ],
  experience: [
    {
      company: 'JPMorgan Chase & Co.',
      position: 'Software Engineer, Payments Developer Portal',
      start: 'December 2022',
      end: 'Present',
      body: [
        "Led the research, planning, and development of a quarter-long epic to update core functionality to use new major versions of internal APIs. Worked closely with the relevant teams across business units to understand the new APIs' data models and usage.",
        'Enabled clients of JPMorgan Payments APIs to browse documentation, request access, and manage authentication and encryption certificates (Java, Spring Boot, AWS).',
        'Decreased time to onboard new clients from months to minutes by automating the process of requesting and approving access to APIs while also instantly providing a sandbox environment for testing.',
        "Mentored associate engineers in Java and React and offered guidance on best practices for writing readable and maintainable code.",
        "Initiated and helped implement a comprehensive end-to-end testing suite (Kotlin) for the entire distributed system. This suite ran on a schedule and prevented several major bugs from reaching production.",
      ],
    },
    {
      company: 'Hitch',
      position: 'Software Engineer Contractor (Part-time)',
      start: 'January 2022',
      end: 'December 2022',
      body: [
        'Digitized the process of applying for a home equity line of credit (Next.js, MongoDB).',
        'Built as the MVP for a seed-stage fintech startup. Frequently demoed as a proof-of-concept to potential vendors, like partner banks and data providers, and investors to secure funding.',
        'Secured sensitive user data and pushed to refine requirements to minimize the amount of stored PII.',
        "Integrated third-party financial services to pull applicants' debts, credit reports, and property values in real time."
      ],
    },
    {
      company: 'Urban Emu',
      position: 'Software Engineer',
      start: 'August 2021',
      end: 'December 2022',
      body: [
        "Owned the agency's first interactive Next.js SPA. This fetched data from the US Department of Agriculture's (USDA) database of foods to enable the USDA to more efficiently build healthy eating plans for Americans. Elevated the agency's advertised capabilities.",
        "Proposed and developed an internal Google Calendar add-on (TypeScript) to automate the process of completing multiple daily client-specific timesheets, ultimately saving every employee several non-billable hours every month.",
        'Worked in an international team of four to build features including filtered and paginated fuzzy searching of a database, as well as a trending content page based on the z-score of page view changes over time (PHP).',
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
    {
      category: 'Hobbies',
      items: ['Woodworking', 'photography'],
    },
  ],
} as const;
