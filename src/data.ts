export default {
  name: "TJ Mazeika",
  location: "Seattle, WA",
  email: "mazeika.tj@gmail.com",
  githubUsername: "tmazeika",
  linkedInUsername: "tmazeika",
  experience: [
    {
      company: "Amazon",
      position: "Software Development Engineer",
      product: [
        "Buy for Me",
        "https://www.aboutamazon.com/news/retail/amazon-shopping-app-buy-for-me-brands",
      ],
      start: "March 2024",
      end: "Present",
      body: [
        'Architected and led end-to-end development of a new, scalable distributed system (AWS, Java) for Amazon\'s "Buy for Me" checkout experience, leveraging existing core shopping infrastructure that powers Amazon.com, delivering within six months.',
        "Instituted best practices in unit and integration testing, monitoring, alerting, and incident response, which ensured system reliability and team efficiency during the critical launch phase and beyond.",
        "Accelerated team productivity by sharing knowledge of Amazon's internal tools and platforms with new team members, enabling faster onboarding and the ability to effectively delegate project tasks, contributing directly to on-time project delivery.",
      ],
    },
    {
      company: "JPMorganChase",
      position: "Software Engineer",
      product: [
        "Payments Developer Portal",
        "https://developer.payments.jpmorgan.com",
      ],
      start: "December 2022",
      end: "March 2024",
      body: [
        "Led research, planning, and development of highly-visible quarter-long project (Java, Spring Boot) to migrate core functionality of Payments Developer Portal to use new internal APIs, data models, and usage patterns.",
        "Decreased time to onboard new clients to J.P.Morgan Payments products from over a month to just minutes by automating the process of requesting and approving access to Payments APIs while also instantly providing a sandbox environment for testing.",
        "Mentored two associate engineers in Java, Spring Boot, Next.js, and React and offered guidance on best practices for writing readable and maintainable code in pair-programming sessions, PR reviews, and live tech talks.",
        "Initiated and implemented a comprehensive end-to-end testing suite (Kotlin) for the product's distributed system across three separate teams. The suite ran hourly and prevented critical user-facing bugs from reaching production.",
      ],
    },
    {
      company: "Hitch",
      companyUrl: "https://usehitch.com",
      position: "Software Engineer (Part-time)",
      start: "May 2022",
      end: "December 2022",
      body: [
        "Bootstrapped seed-stage fintech startup by building MVP for home equity line of credit online application (Next.js, React, MongoDB, Vercel). Founders demoed product to potential partner banks, data providers, and investors.",
        "Eliminated the need for manual document uploads and verification by integrating third-party financial services to pull applicants' debts (Method, Plaid), credit reports (Xactus), and property values (ATTOM Data) in real time. This allowed for an immediate quote of estimated available equity and rates, down from the typical 24 to 48 hours.",
        "Collaborated closely with COO to provide accurate engineering plan, helping to optimize resource allocation and calculate runway.",
      ],
    },
    {
      company: "Urban Emu",
      position: "Software Engineer",
      start: "August 2021",
      end: "December 2022",
      body: [
        "Owned the agency's first interactive Next.js SPA (React, PostgreSQL) to elevate its advertised capabilities from only static content sites to dynamic web apps. The application enabled the US Department of Agriculture to more efficiently create healthy eating plans for Americans.",
        "Automated the completion of daily client-specific timesheets by proposing and developing an internal Google Calendar add-on (TypeScript). Saved every employee up to six non-billable hours per month.",
      ],
    },
  ],
  education: [
    {
      company: "Northeastern University",
      position: "Bachelor of Science in Computer Science, 3.9/4.0 GPA",
      location: "Boston, MA",
      body: [
        "Graduated three semesters early with two co-op experiences and summa cum laude honors.",
        "Built internal Azure DevOps metrics dashboard in C#, .NET, and React during co-op at AIR Worldwide.",
        "Deployed Adobe AEM and SAP Hybris applications across server clusters during co-op at Digitas.",
      ],
    },
  ],
  skills: [
    {
      category: "Languages",
      items: ["Java", "Kotlin", "TypeScript", "Go"],
    },
    {
      category: "Tools",
      items: ["AWS", "Spring Boot", "Node.js", "React", "MongoDB", "PostgreSQL", "*nix"],
    },
  ],
} as const;
