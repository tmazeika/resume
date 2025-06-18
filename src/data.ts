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
        'Architected and led development of a new, scalable distributed system (AWS, Java) within six months for Amazon\'s "Buy for Me" feature, integrating with existing core shopping infrastructure. Introduced the company\'s first agentic AI shopping experience.',
        "Secured critical support from a resource-constrained infrastructure team by identifying and building relationships with key stakeholders, bypassing standard intake queues to accelerate platform onboarding by an estimated two months for a time-sensitive, strategic initiative.",
        "Established and enforced best practices for testing, monitoring, and incident response, achieving perfect system uptime post-launch.",
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
        "Orchestrated the quarter-long migration of Payments Developer Portal's core functionality to use new internal APIs (Java, Spring Boot), improving system maintainability and reducing dependency on legacy services.",
        "Decreased time to onboard new clients to J.P. Morgan Payments products from over a month to just minutes by automating the process of requesting and approving access to Payments APIs while also instantly providing a sandbox environment for testing.",
        "Upskilled two associate engineers in Java, Spring Boot, and React through pair-programming, code reviews, and tech talks, improving team-wide code quality.",
      ],
    },
    {
      company: "Hitch",
      companyUrl: "https://usehitch.com",
      position: "Software Engineer (Part-time)",
      start: "May 2022",
      end: "December 2022",
      body: [
        "Built and launched the MVP for a home equity line of credit application (Next.js, React, MongoDB), enabling founders to secure strategic partnership meetings with banks, data providers, and investors.",
        "Eliminated the need for manual document uploads and verification by integrating third-party financial services to pull applicants' debts (Method, Plaid), credit reports (Xactus), and property values (ATTOM Data) in real time. Allowed for an immediate quote of estimated available equity and rates, down from the typical 48 hours.",
        "Crafted the technical roadmap and engineering plan that equipped the COO to accurately forecast runway and build seed-round investor confidence.",
      ],
    },
    {
      company: "Urban Emu",
      position: "Software Engineer",
      start: "August 2021",
      end: "December 2022",
      body: [
        "Owned development of the agency's first dynamic web application (Next.js, React, PostgreSQL), progressing the business's capabilities beyond static websites.",
        "Automated completion of daily client-specific timesheets by proposing and developing an internal Google Calendar add-on (TypeScript). Saved every employee up to six non-billable hours of administration work per month.",
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
        "Co-op at AIR Worldwide: Implemented an Azure DevOps metrics dashboard (C#, .NET, React) to visualize team productivity, providing teams with actionable data to improve efficiency.",
        "Co-op at Digitas: Deployed Adobe AEM and SAP Hybris applications across production servers for major retail clients.",
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
