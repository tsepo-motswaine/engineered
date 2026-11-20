// ============================================================
//  EDIT THIS FILE — all site content lives here.
//  Replace every value marked TODO with details from your LinkedIn.
// ============================================================
window.SITE = {
  name: "Tsepo M.",
  initials: "TM",
  eyebrow: ["Software Engineering", "Cloud", "Systems Design"], // TODO
  headline: "I build software that scales quietly.",               // TODO: your one-liner
  summary:
    "Software engineer based in South Africa, designing and shipping reliable, " +
    "well-tested systems — from APIs and data pipelines to the interfaces people use every day.", // TODO
  portrait: "", // TODO: e.g. "assets/me.jpg" (leave empty to show initials)
  email: "you@example.com",                                  // TODO
  linkedin: "https://www.linkedin.com/in/your-handle/",      // TODO
  github: "https://github.com/your-handle",                  // TODO (or "")
  cv: "",                                                    // TODO: e.g. "assets/cv.pdf"

  stats: [ // TODO: real outcomes read better than vague claims
    { value: "5+", label: "Years building production software" },
    { value: "40%", label: "Latency cut on a core service" },
    { value: "1M+", label: "Requests served daily" },
    { value: "99.9%", label: "Uptime on systems I own" },
  ],

  projects: [ // TODO
    {
      title: "Claims Processing Platform",
      org: "Company / Client",
      summary: "Re-architected a monolithic workflow into event-driven services, cutting processing time from days to hours.",
      tags: ["C#", ".NET", "Azure Service Bus", "SQL Server"],
      metrics: ["-70% processing time", "0 downtime migration"],
      link: "",
    },
    {
      title: "Customer Self-Service Portal",
      org: "Company / Client",
      summary: "Built a responsive portal letting customers manage policies online, reducing call-centre volume.",
      tags: ["React", "TypeScript", "REST", "OAuth2"],
      metrics: [],
      link: "",
    },
    {
      title: "CI/CD & Observability Overhaul",
      org: "Company / Client",
      summary: "Introduced pipelines, infrastructure-as-code and dashboards so teams could ship daily with confidence.",
      tags: ["GitHub Actions", "Terraform", "Docker", "Grafana"],
      metrics: [],
      link: "",
    },
  ],

  experience: [ // TODO: copy from LinkedIn "Experience"
    { role: "Software Engineer", org: "Sanlam", period: "20XX — Present",
      points: ["What you own / build", "A measurable outcome", "Key technologies"] },
    { role: "Previous Role", org: "Previous Company", period: "20XX — 20XX",
      points: ["What you did", "Impact you had"] },
  ],

  about: {
    heading: "Engineering is how I turn messy problems into simple tools.", // TODO
    paragraphs: [
      "TODO: A short paragraph on your background — where you studied, how you got into software, what kinds of problems you enjoy.",
      "TODO: A second paragraph on how you work — collaboration, quality, mentoring, what you're learning next.",
    ],
  },

  availability: "Open to interesting engineering roles and collaborations.", // TODO
  skills: ["C#", ".NET", "TypeScript", "React", "Node.js", "Python", "SQL", "Azure", "AWS",
           "Docker", "Kubernetes", "CI/CD", "Microservices", "System Design"], // TODO
};
