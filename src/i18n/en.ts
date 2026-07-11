export const en = {
  meta: {
    title: "Software Engineer",
    name: "Henry Chung",
    description: "Henry Chung | Software Engineer",
    ogLocale: "en_CA",
  },
  nav: {
    home: "Home",
    "about-me": "About",
    skills: "Skills",
    projects: "Projects",
    blog: "Blog",
  },
  main: {
    role: "Software Engineer",
    tagline: "Specializing in full-stack development",
    location: "Burnaby, Canada",
    openTo: "open to freelance or full-time work",
    resume: "Resume",
  },
  about: {
    title: "About Me",
    summary: "Summary",
    paragraphs: [
      "Software Engineer specializing in TypeScript, Next.js, and PostgreSQL.",
      "Experienced in designing role-based access control systems and multi-entity relational data models, building analytics dashboards, and developing backend systems with Drizzle ORM and optimized API design for analytics and workflow applications.",
      "Also have hands-on experience in game development using Unreal Engine and Unity with C#.",
    ],
    workExperience: "Work Experience",
    experiences: [
      {
        title: "Software Developer (Volunteer)",
        period: "Feb 2026 - Present",
        company: "Evernorth Foundation",
        projects: [
          {
            name: "Non-profit Website Redesign",
            responsibilities: [
              "Lead frontend team of 4 developers, owned overall frontend architecture and code quality",
              "Ensure responsive design and cross-device compatibility",
              "Coordinate with UX lead and backend team to ensure seamless integration",
            ],
          },
        ],
      },
    ],
    certifications: "Certifications",
    certDates: [
      { issueDate: "May 2026", expiryDate: "Expires May 2029" },
      { issueDate: "April 2026", expiryDate: "Expires April 2029" },
      { issueDate: "July 2025", expiryDate: "Expires July 2028" },
      { issueDate: "June 2025", expiryDate: "Expires June 2028" },
    ],
  },
  skills: {
    title: "Skills",
    categories: {
      languages: "Languages",
      frontend: "Frontend",
      backend: "Backend & Database",
      devops: "Cloud & DevOps",
      other: "Other Tools",
    },
  },
  projects: {
    title: "Projects",
    tabs: { web: "Web", game: "Game" },
    team: "Team",
    solo: "Solo",
    resource: "Resource",
    access: {
      download: "Download",
      playNow: "Play Now",
      website: "View Live",
      "": "",
    },
    web: {
      crm: {
        title: "CRM Web Application",
        subTitle: "Internal CRM Web Application with member management",
        desc: [
          "Developed a drag-and-drop Kanban pipeline, FullCalendar-based scheduling, and inline-editable data table",
          "Built a CRM analytics dashboard including KPIs, pipeline values, deal metrics, and revenue trends",
          "Implemented optimistic updates with Tanstack Query to provide instant feedback",
        ],
      },
      coverLetterFiller: {
        title: "Cover Letter Filler",
        subTitle: "Word template editor with dynamic placeholder replacement",
        desc: [
          "Developed square bracket-based keyword extraction and automated paragraph detection",
          "Enabled editing of paragraph content",
          "Implemented PDF export using Gotenberg (Docker-based conversion)",
        ],
      },
      auction: {
        title: "Auction Website(Role: Backend)",
        subTitle: "Competitive bidding platform built for Full-Stack Development course team project",
        desc: [
          "Developed backend with NoSQL for full CRUD operations",
          "Handled bid logic to update ownership to the latest bidder",
          "Implemented admin-only accounts for management",
        ],
      },
    },
    game: {
      poker: {
        title: "Texas Hold'em Poker Prototype (Role: Lead Engineer)",
        subTitle: "Poker game prototype with AI opponents for Software Engineering course team project",
        desc: [
          "Managed 4-person team using Agile, established coding standards and Git workflow to reduce merge conflicts",
          "Built core game systems for turn validation, betting, and deck management",
          "Designed interactive UI with animations and audio for enhanced engagement",
        ],
      },
      speechBubble: {
        title: "Speech Bubble Game (Role: Programmer)",
        subTitle: "Themed Bubble at the Vancouver Global Game Jam, featuring ability acquisition through interacting with speech bubbles",
        desc: [
          "Implemented character movement and collision handling",
          "Implemented actions that vary based on the acquired ability",
        ],
      },
      vrShooter: {
        title: "VR Shooter Game",
        subTitle: "VR shooter playable on Meta Quest Link",
        desc: [
          "Created intense shooting action with responsive controls using Niagara",
          "Implemented dynamic hand animations",
          "Implemented recall functionality for grabbable objects",
        ],
      },
      infiniteScroll: {
        title: "Infinite Scroll Game",
        subTitle: "Screen-spinning twists and obstacle dodging, featuring challenging obstacles with increasing difficulty",
        desc: [
          "Organized obstacles and score objects into distinct classes for proper collision handling",
          "Implemented context-based animation system",
          "Added dynamic screen-spinning and rotation mechanics",
        ],
      },
      mouseAccuracy: {
        title: "Mouse Accuracy Training",
        subTitle: "Focused on precision shooting and reaction time, a real-time interactive game built with SDL2",
        desc: [
          "Built state-based gameplay with multiple modes, scoring, and dynamic visuals",
          "Integrated audio and text rendering",
        ],
      },
      liarGame: {
        title: "Liar Game",
        subTitle: "Liar game application developed by JavaScript",
        desc: [
          "Designed a state-based game flow including setup, role reveal, and timed discussions",
          "Built a mobile-friendly role reveal flow ensuring fair gameplay",
        ],
      },
    },
  },
  blog: {
    title: "Blog",
    recentPosts: "Recent Posts",
    dateLocale: "en-US",
  },
};

export type Translations = typeof en;
