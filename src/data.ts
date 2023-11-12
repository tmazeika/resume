export default {
  name: 'TJ Mazeika',
  position: 'Software engineer at JPMorgan Chase & Co.',
  location: 'Austin, TX',
  email: 'mazeika.tj@gmail.com',
  githubUsername: 'tmazeika',
  linkedInUsername: 'tj-mazeika',
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
      position: 'Software Engineer',
      product: ['Payments Developer Portal', 'https://developer.payments.jpmorgan.com'],
      start: 'December 2022',
      end: 'Present',
      body: [
        "Led research, planning, and development of quarter-long project to migrate core functionality of Payments Developer Portal to use new internal APIs, data models, and usage patterns.",
        'Decreased time to onboard new clients from months to minutes by automating the process of requesting and approving access to APIs while also instantly providing a sandbox environment for testing.',
        "Mentored associate engineers in Java, Spring Boot, React, and Next.js and offered guidance on best practices for writing readable and maintainable code in pair-programming sessions and PR reviews.",
        "Initiated and implemented a comprehensive end-to-end testing suite (Kotlin) for the entire distributed system. The suite ran hourly and prevented several major bugs from reaching production.",
      ],
    },
    {
      company: 'Hitch',
      companyUrl: 'https://usehitch.com',
      position: 'Software Engineer Contractor (Part-time)',
      start: 'May 2022',
      end: 'December 2022',
      body: [
        'Built MVP for home equity line of credit online application (Next.js, MongoDB) for seed-stage fintech startup. Founders demoed product to potential partner banks, data providers, and investors.',
        'Secured sensitive user data and refined requirements to minimize stored personal identifiable information.',
        "Integrated third-party financial services to pull applicants' debts, credit reports, and property values in real time."
      ],
    },
    {
      company: 'Urban Emu',
      position: 'Software Engineer',
      start: 'August 2021',
      end: 'December 2022',
      body: [
        "Owned the agency's first interactive Next.js SPA to elevate their advertised capabilities. The application enabled the US Department of Agriculture (USDA) to more efficiently create healthy eating plans for Americans.",
        "Proposed and developed an internal Google Calendar add-on (TypeScript) to automate completion of daily client-specific timesheets. Saved every employee several non-billable hours per month.",
        'Formulated a trending content page based on the floating average z-score of page view changes over time.',
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
