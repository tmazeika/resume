export default {
  name: 'TJ Mazeika',
  position: 'Software Engineer',
  location: 'Austin, TX',
  email: 'mazeika.tj@gmail.com',
  githubUsername: 'tmazeika',
  skills: [
    {
      category: 'Languages',
      items: ['TypeScript', 'Go', 'Java', 'C#', 'C/C++'],
    },
    {
      category: 'Tools',
      items: ['Node.js/Next.js', 'MongoDB', 'PostgreSQL', 'Firebase', 'Docker/Rancher', '*nix'],
    },
  ],
  education: [
    {
      company: 'Northeastern University',
      position: 'Bachelor of Science in Computer Science',
      start: 'September 2018',
      end: 'December 2021',
      body: 'GPA: 3.9',
    },
  ],
  experience: [
    {
      company: 'Urban Emu',
      position: 'Software Engineer',
      start: 'January 2022',
      end: 'Present',
      body: [
        "Produced the company's first fully custom and interactive React SPA which enabled it to sell a new category of development services to clients.",
        'Automated time-tracking synchronization between Google Calendar and FreshBooks company-wide to eliminate unbillable time spent on manual entry.',
      ],
    },
    {
      company: 'FoldLeft',
      position: 'Founder & Software Engineer',
      start: 'November 2020',
      end: 'Present',
      body: [
        'Founded an LLC to offer web development services to several small businesses and startups; started greenfield projects and enhanced existing ones.',
        'Bootstrapped a fintech startup from Figma designs; continuously gathered requirements from the client and promptly responded to feedback throughout.',
      ],
    },
    {
      company: 'AIR Worldwide',
      position: 'Software Engineer Co-op',
      start: 'January',
      end: 'June 2021',
      body: [
        'Enriched product owner insights into developer productivity by tracking Azure DevOps activity from its REST and OData API endpoints; displayed in graphs with the Highcharts library.',
        'Boosted the performance of an internal .NET and React application by 90% through more modern data loading techniques.',
        'Pair-programmed with team members and submitted code reviews to promote code quality.',
      ],
    },
    {
      company: 'Digitas',
      position: 'DevOps Engineer Co-op',
      start: 'January',
      end: 'July 2020',
      body: [
        'Streamlined front-end QA automation processes with Selenium Java.',
        'Automated Jenkins-Confluence synchronization to improve information accessibility team-wide.',
        'Utilized AWS audio transcription and video text recognition services for faster QA of video content.',
      ],
    },
  ],
  keywords: [
    'GCP',
    'Linux',
    'Bash',
    'JavaScript',
    'Kotlin',
    'Git',
    'GitHub',
    'Jira',
    'VSCode',
    'PHP',
    'Python',
    'HTML',
    'CSS',
    'JS',
  ],
} as const;
