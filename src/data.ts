export default {
  name: 'TJ Mazeika',
  location: 'Austin, TX',
  email: 'mazeika.tj@gmail.com',
  githubUsername: 'tmazeika',
  linkedInUsername: 'tmazeika',
  experience: [
    {
      company: 'Amazon',
      position: 'Software Development Engineer II, Amazon Business',
      start: 'March 2024',
      end: 'Present',
      body: [
        'Fostered knowledge-sharing and growth within a new, nine-person team by hosting regular demo sessions, actively mentoring junior and newly-hired engineers, and providing meaningful code reviews.',
        'Championed operational excellence, improving developer experience and confidence, by increasing automated production deployments from 76% to 90% through proactive monitoring, quick fixes, and creating sustainable long-term plans.',
        'Owned critical projects like resolving blocking issues for high-priority migrations, effectively balancing between new feature development and operational work while collaborating with cross-functional stakeholders.',
      ],
    },
    {
      company: 'JPMorgan Chase & Co.',
      position: 'Software Engineer',
      product: ['Payments Developer Portal', 'https://developer.payments.jpmorgan.com'],
      start: 'December 2022',
      end: 'March 2024',
      body: [
        "Led research, planning, and development of highly-visible quarter-long project to migrate core functionality of Payments Developer Portal to use new internal APIs, data models, and usage patterns.",
        'Decreased time to onboard new clients from over a month to just minutes by automating the process of requesting and approving access to APIs while also instantly providing a sandbox environment for testing.',
        "Mentored two associate engineers in Java, Spring Boot, React, and Next.js and offered guidance on best practices for writing readable and maintainable code in pair-programming sessions, PR reviews, and live tech talks.",
        "Initiated and implemented a comprehensive end-to-end testing suite (Kotlin) for the product's distributed system across three separate teams. The suite ran hourly and prevented critical user-facing bugs from reaching production.",
      ],
    },
    {
      company: 'Hitch',
      companyUrl: 'https://usehitch.com',
      position: 'Software Engineer (Part-time)',
      start: 'May 2022',
      end: 'December 2022',
      body: [
        'Bootstrapped seed-stage fintech startup by building MVP for home equity line of credit online application (Next.js, MongoDB). Founders demoed product to potential partner banks, data providers, and investors.',
        "Eliminated the need for manual document uploads and verification by integrating third-party financial services to pull applicants' debts (Method, Plaid), credit reports (Xactus), and property values (ATTOM Data) in real time. This allowed for an immediate quote of estimated available equity and rates, down from the typical 24 to 48 hours.",
        "Collaborated closely with COO to provide accurate engineering plan, helping to optimize resource allocation and calculate runway.",
      ],
    },
    {
      company: 'Urban Emu',
      position: 'Software Engineer',
      start: 'August 2021',
      end: 'December 2022',
      body: [
        "Owned the agency's first interactive Next.js SPA to elevate its advertised capabilities from only static content sites to dynamic web apps. The application enabled the US Department of Agriculture to more efficiently create healthy eating plans for Americans.",
        "Automated the completion of daily client-specific timesheets by proposing and developing an internal Google Calendar add-on (TypeScript). Saved every employee up to six non-billable hours per month.",
      ],
    },
  ],
  education: [
    {
      company: 'Northeastern University',
      position: 'Bachelor of Science in Computer Science, 3.9/4.0 GPA',
      location: 'Boston, MA',
      body: [
        'Graduated three semesters early with two co-op experiences and summa cum laude honors.',
        'Built internal Azure DevOps metrics dashboard in C#, .NET, and React during co-op at AIR Worldwide.',
        'Deployed Adobe AEM and SAP Hybris applications across server clusters during co-op at Digitas.',
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
      items: ['Spring Boot', 'Node.js/Next.js', '*nix'],
    }
  ],
} as const;
