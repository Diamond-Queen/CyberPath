export const goals = [
   { id: 1, name: "Cybersecurity Engineer" },
   { id: 2, name: "Penetration Tester" },
   { id: 3, name: "Security Analyst" },
   { id: 4, name: "Incident Responder" },
   { id: 5, name: "Security Architect" },
   { id: 6, name: "Security Consultant" },
   { id: 7, name: "Security Manager" },
   { id: 8, name: "Security Director" }
];

export const roadmapData = {
  "Cybersecurity Engineer": {
    skills: [
      "Linux Administration",
      "Python Automation",
      "Network Security",
      "System Hardening",
      "Cloud Security"
    ],
    milestones: [
      "Learn Linux basics and shell administration",
      "Use Python to automate security tasks (parsing logs, scanning)",
      "Harden a Linux server and deploy monitoring",
      "Implement basic network defenses (firewalls, IDS)",
      "Deploy and secure a cloud VM/service"
    ],
    phases: [
      {
        name: "Foundation",
        description: "Build core Linux and scripting skills that support every cybersecurity role.",
        items: [
          {
            title: "Learn Linux basics",
            time: "2-3 weeks",
            difficulty: "Beginner",
            why: "Linux is the foundation of most modern systems and is essential for understanding how to secure them.",
            activities: [
              { type: "quiz", 
                title: "Linux Basics Quiz"
               },
               { type: "exercise", 
                 title: "Linux Command-Line Exercises"
               },
               { type: "lab",
                title: "Linux Lab"
               }
            ],
            requires: []

          },
          {
            title: "Learn Python scripting",
            time: "2-3 weeks",
            difficulty: "Beginner",
            why: "Python is a powerful language for automating security tasks and working with security tools.",
            activities: [
              { type: "quiz", 
                title: "Python Basics Quiz"
               },
               { type: "exercise", 
                 title: "Python Scripting Exercises"
               },
               { type: "lab",
                title: "Python Lab"
               }
            ],
            requires: ["Learn Linux basics"]
          }
        ]
      },
      {
        name: "Security Fundamentals",
        description: "Learn the core security principles for networks and cloud systems.",
        items: [
          {
            title: "Network Security",
            time: "2-3 weeks",
            difficulty: "Intermediate",
            why: "Network security is essential for defending communication channels and preventing attacks.",
            activities: [
              { type: "quiz", 
                title: "Network Security Quiz"
               },
               { type: "exercise", 
                 title: "Network Security Exercises"
               },
               { type: "lab",
                title: "Network Security Lab"
               }
            ],
            requires: ["Learn Python scripting"],
          },
          {
            title: "Cloud Security",
            time: "4-5 weeks",
            difficulty: "Intermediate",
            why: "Cloud platforms are widely used, and understanding their security is critical for modern deployments.",
            activities: [
              { type: "quiz", 
                title: "Cloud Security Quiz"
               },
               { type: "exercise", 
                 title: "Cloud Security Exercises"
               },
               { type: "lab",
                title: "Cloud Security Lab"
               }
            ],
            requires: ["Network Security"],
          }
        ]
      },
      {
        name: "Advanced Topics",
        description: "Apply hardening, monitoring, and automation to real-world systems.",
        items: [
          {
            title: "System Hardening",
            time: "4-5 weeks",
            difficulty: "Advanced",
            why: "Hardening reduces attack surface and improves the resilience of systems against threats.",
            activities: [
              { type: "quiz", 
                title: "System Hardening Quiz"
               },
               { type: "exercise", 
                 title: "System Hardening Exercises"
               },
               { type: "lab",
                title: "System Hardening Lab"
               }
            ],
            requires: ["Cloud Security"],
          },
          {
            title: "Security Automation",
            time: "6-8 weeks",
            difficulty: "Advanced",
            why: "Automation helps scale security operations and reduce manual effort for repetitive tasks.",
            activities: [
              { type: "quiz", 
                title: "Security Automation Quiz"
               },
               { type: "exercise", 
                 title: "Security Automation Exercises"
               },
               { type: "lab",
                title: "Security Automation Lab"
               }
            ],  
            requires: ["System Hardening"],
          }
        ]
      }
    ]
  },
  "Penetration Tester": {
    skills: ["Network Protocols", "Exploit Development (Python)", "Web App Testing", "Linux", "Tooling (Burp, Metasploit)"],
    milestones: [
      "Learn common network protocols and enumeration techniques",
      "Practice Linux command-line and privilege escalation",
      "Perform web application tests using Burp Suite",
      "Write simple exploit/proof-of-concept scripts in Python",
      "Run full engagement-style pentests in lab environments"
    ],
    phases: [
      {
        name: "Offensive Foundations",
        description: "Learn the tools and techniques used to probe systems and identify vulnerabilities.",
        items: [
          {
            title: "Study network protocols and scanning",
            time: "2-3 weeks",
            difficulty: "Intermediate",
            why: "Understanding protocols and enumeration is the first step in finding attack paths.",
            activities: [
              { type: "quiz", 
                title: "Network Protocols Quiz"
               },
               { type: "exercise", 
                 title: "Network Protocols Exercises"
               },
               { type: "lab",
                title: "Network Protocols Lab"
               }
            ],
            requires: ["Security Automation"],
          },
          {
            title: "Practice Linux command-line skills",
            time: "2-3 weeks",
            difficulty: "Intermediate",
            why: "Strong Linux skills are needed for exploiting systems and running pentest tools.",
            activities: [
              { type: "quiz", 
                title: "Linux Command-Line Quiz"
               },
               { type: "exercise", 
                 title: "Linux Command-Line Exercises"
               },
               { type: "lab",
                title: "Linux Command-Line Lab"
               }
            ],
            requires: ["Study network protocols and scanning"],
          }
        ]
      },
      {
        name: "Application Testing",
        description: "Focus on web and application vulnerabilities using common pentest tools.",
        items: [
          {
            title: "Perform web app testing with Burp Suite",
            time: "3-4 weeks",
            difficulty: "Advanced",
            why: "Web apps are a major attack surface and Burp Suite is the industry standard testing tool.",
            activities: [
              { type: "quiz", 
                title: "Web App Testing Quiz"
               },
               { type: "exercise", 
                 title: "Web App Testing Exercises"
               },
               { type: "lab",
                title: "Web App Testing Lab"
               }
            ],
            requires: ["Practice Linux command-line skills"],
          },
          {
            title: "Develop simple exploit scripts",
            time: "3-4 weeks",
            difficulty: "Advanced",
            why: "Writing proof-of-concept code helps validate findings and improves technical understanding.",
            activities: [
              { type: "quiz", 
                title: "Exploit Development Quiz"
               },
               { type: "exercise", 
                 title: "Exploit Development Exercises"
               },
               { type: "lab",
                title: "Exploit Development Lab"
               }
            ],
            requires: ["Perform web app testing with Burp Suite"],
          }
        ]
      },
      {
        name: "Engagement Practice",
        description: "Run full simulated engagements to tie skills together and build report-ready results.",
        items: [
          {
            title: "Execute end-to-end lab pentests",
            time: "4-6 weeks",
            difficulty: "Advanced",
            why: "Realistic practice builds confidence and demonstrates the ability to complete engagements.",
            activities: [
              { type: "quiz", 
                title: "Engagement Practice Quiz"
               },
               { type: "exercise", 
                 title: "Engagement Practice Exercises"
               },
               { type: "lab",
                title: "Engagement Practice Lab"
               }
            ],
            requires: ["Develop simple exploit scripts"],
          }
        ]
      }
    ]
  },
  "Security Analyst": {
    skills: ["SIEM / Log Analysis", "Incident Triage", "Linux", "Threat Intelligence", "Scripting (Python)"],
    milestones: [
      "Understand logging sources and log collection",
      "Use a SIEM to create searches and alerts",
      "Triage alerts and document incidents",
      "Integrate threat intelligence into investigations",
      "Automate repetitive analysis with Python scripts"
    ],
    phases: [
      {
        name: "Monitoring Basics",
        description: "Learn log sources and how to collect and interpret security events.",
        items: [
          {
            title: "Understand logging sources and collection",
            time: "2-3 weeks",
            difficulty: "Beginner",
            why: "Logs are the foundation for detecting and investigating security incidents.",
            activities: [
              { type: "quiz", 
                title: "Logging Quiz"
               },
               { type: "exercise", 
                 title: "Logging Exercises"
               },
               { type: "lab",
                title: "Logging Lab"
               }
            ],
            requires: ["Execute end-to-end lab pentests"],
          },
          {
            title: "Learn SIEM basics",
            time: "3-4 weeks",
            difficulty: "Intermediate",
            why: "SIEM platforms aggregate data and surface meaningful alerts for analysts.",
            activities: [
              { type: "quiz", 
                title: "SIEM Quiz"
               },
               { type: "exercise", 
                 title: "SIEM Exercises"
               },
               { type: "lab",
                title: "SIEM Lab"
               }
            ],
            requires: ["Understand logging sources and collection"],
          }
        ]
      },
      {
        name: "Investigation Skills",
        description: "Practice triaging alerts, documenting findings, and using threat intelligence.",
        items: [
          {
            title: "Triage alerts and document incidents",
            time: "3-4 weeks",
            difficulty: "Intermediate",
            why: "Effective triage separates real threats from noise and improves response quality.", 
            activities: [
              { type: "quiz", 
                title: "Triage Quiz"
               },
               { type: "exercise", 
                 title: "Triage Exercises"
               },
               { type: "lab",
                title: "Triage Lab"
               }
            ],
            requires: ["Learn SIEM basics"],
          },
          {
            title: "Use threat intelligence in investigations",
            time: "3-4 weeks",
            difficulty: "Intermediate",
            why: "Threat intelligence provides context that helps prioritize and validate findings.",
            activities: [
              { type: "quiz", 
                title: "Threat Intelligence Quiz"
               },
               { type: "exercise", 
                 title: "Threat Intelligence Exercises"
               },
               { type: "lab",
                title: "Threat Intelligence Lab"
               }
            ],
            requires: ["Triage alerts and document incidents"],
          }
        ]
      },
      {
        name: "Automation and Scaling",
        description: "Use scripting to automate analysis and streamline analyst workflows.",
        items: [
          {
            title: "Automate repetitive analysis with Python",
            time: "4-6 weeks",
            difficulty: "Advanced",
            why: "Automation frees analysts to focus on higher-value investigation tasks.",
            activities: [
              { type: "quiz", 
                title: "Automation Quiz"
               },
               { type: "exercise", 
                 title: "Automation Exercises"
               },
               { type: "lab",
                title: "Automation Lab"
               }
            ],
            requires: ["Use threat intelligence in investigations"],
          }
        ]
      }
    ]
  },
  "Incident Responder": {
    skills: ["Digital Forensics", "Incident Handling", "SIEM", "Malware Analysis Basics", "Scripting (Python)"],
    milestones: [
      "Learn the incident response lifecycle",
      "Collect and preserve forensic artifacts",
      "Use SIEM and endpoint tools to investigate incidents",
      "Perform basic memory and malware analysis",
      "Develop and run IR playbooks and tabletop exercises"
    ],
    phases: [
      {
        name: "Response Fundamentals",
        description: "Learn the incident response process, tools, and quick containment practices.",
        items: [
          {
            title: "Learn the incident response lifecycle",
            time: "2-3 weeks",
            difficulty: "Intermediate",
            why: "Understanding the response lifecycle helps manage incidents in a repeatable way.",
            activities: [
              { type: "quiz", 
                title: "Incident Response Quiz"
               },
               { type: "exercise", 
                 title: "Incident Response Exercises"
               },
               { type: "lab",
                title: "Incident Response Lab"
               }
            ],
            requires: ["Automate repetitive analysis with Python"],
          },
          {
            title: "Collect and preserve forensic artifacts",
            time: "3-4 weeks",
            difficulty: "Advanced",
            why: "Proper evidence handling is essential for analysis and potential legal follow-up.",
            activities: [
              { type: "quiz", 
                title: "Forensic Artifacts Quiz"
               },
               { type: "exercise", 
                 title: "Forensic Artifacts Exercises"
               },
               { type: "lab",
                title: "Forensic Artifacts Lab"
               }
            ],
            requires: ["Learn the incident response lifecycle"],
          }
        ]
      },
      {
        name: "Investigation Techniques",
        description: "Use SIEM and endpoint data to identify root cause and attack paths.",
        items: [
          {
            title: "Use SIEM and endpoint tools",
            time: "3-4 weeks",
            difficulty: "Advanced",
            why: "Endpoint and SIEM data reveal the scope and sequence of an incident.",
            activities: [
              { type: "quiz", 
                title: "SIEM and Endpoint Tools Quiz"
               },
               { type: "exercise", 
                 title: "SIEM and Endpoint Tools Exercises"
               },
               { type: "lab",
                title: "SIEM and Endpoint Tools Lab"
               }
            ],
            requires: ["Collect and preserve forensic artifacts"],
          },
          {
            title: "Perform memory and malware analysis",
            time: "4-6 weeks",
            difficulty: "Advanced",
            why: "Basic malware analysis helps determine the nature of an attack and recovery path.",
            activities: [
              { type: "quiz", 
                title: "Malware Analysis Quiz"
               },
               { type: "exercise", 
                 title: "Malware Analysis Exercises"
               },
               { type: "lab",
                title: "Malware Analysis Lab"
               }
            ],
            requires: ["Use SIEM and endpoint tools"],
          }
        ]
      },
      {
        name: "Playbooks and Exercises",
        description: "Build response plans and run exercises to improve readiness.",
        items: [
          {
            title: "Develop IR playbooks and tabletop exercises",
            time: "3-4 weeks",
            difficulty: "Intermediate",
            why: "Playbooks and exercises ensure the team is prepared to follow response procedures effectively.",
            activities: [
              { type: "quiz", 
                title: "Playbook and Exercise Quiz"
               },
               { type: "exercise", 
                 title: "Playbook and Exercise Exercises"
               },
               { type: "lab",
                title: "Playbook and Exercise Lab"
               }
            ],
            requires: ["Perform memory and malware analysis"],
          }
        ]
      }
    ]
  },
  "Security Architect": {
    skills: ["Threat Modeling", "Secure Design Principles", "Cloud Architecture", "Network Design", "Risk Management"],
    milestones: [
      "Study secure design and architecture patterns",
      "Create threat models for sample applications",
      "Design a secure multi-tier network architecture",
      "Define security controls for cloud deployments",
      "Document architecture blueprints and patterns"
    ],
    phases: [
      {
        name: "Secure Design",
        description: "Build foundational knowledge in threat modeling and secure architecture principles.",
        items: [
          {
            title: "Study secure design patterns",
            time: "3-4 weeks",
            difficulty: "Advanced",
            why: "Secure design patterns help build systems that are resilient to common attack vectors.",
            activities: [
              { type: "quiz", title: "Secure Design Patterns Quiz" },
              { type: "exercise", title: "Secure Design Exercises" },
              { type: "lab", title: "Secure Design Lab" }
            ],
            requires: ["Develop IR playbooks and tabletop exercises"],
          },
          {
            title: "Create threat models",
            time: "3-4 weeks",
            difficulty: "Advanced",
            why: "Threat modeling identifies risks early and informs effective architectural decisions.",
            activities: [
              { type: "quiz", title: "Threat Modeling Quiz" },
              { type: "exercise", title: "Threat Modeling Exercises" },
              { type: "lab", title: "Threat Modeling Lab" }
            ],
            requires: ["Study secure design patterns"],
          }
        ]
      },
      {
        name: "Architecture Practice",
        description: "Design secure network and cloud systems that align to organizational requirements.",
        items: [
          {
            title: "Design secure multi-tier network architectures",
            time: "3-4 weeks",
            difficulty: "Advanced",
            why: "A secure network architecture limits exposure and enforces separation of duties.",
            activities: [
              { type: "quiz", title: "Network Architecture Quiz" },
              { type: "exercise", title: "Network Architecture Exercises" },
              { type: "lab", title: "Network Architecture Lab" }
            ],
            requires: ["Create threat models"],
          },
          {
            title: "Define cloud security controls",
            time: "4-5 weeks",
            difficulty: "Advanced",
            why: "Cloud deployments need tailored controls for identity, data protection, and monitoring.",
            activities: [
              { type: "quiz", title: "Cloud Security Controls Quiz" },
              { type: "exercise", title: "Cloud Security Controls Exercises" },
              { type: "lab", title: "Cloud Security Controls Lab" }
            ],
            requires: ["Design secure multi-tier network architectures"],
          }
        ]
      },
      {
        name: "Governance and Documentation",
        description: "Translate architecture decisions into clear guidance and reusable patterns.",
        items: [
          {
            title: "Document architecture blueprints",
            time: "2-3 weeks",
            difficulty: "Intermediate",
            why: "Documentation helps engineering teams implement security consistently across projects.",
            activities: [
              { type: "quiz", title: "Architecture Documentation Quiz" },
              { type: "exercise", title: "Architecture Documentation Exercises" },
              { type: "lab", title: "Architecture Documentation Lab" }
            ],
            requires: ["Define cloud security controls"],
          }
        ]
      }
    ]
  },
  "Security Consultant": {
    skills: ["Risk Assessment", "Compliance Frameworks", "Communication", "Security Testing", "Report Writing"],
    milestones: [
      "Perform a security assessment and gap analysis",
      "Map findings to common compliance frameworks (e.g., NIST, ISO)",
      "Write clear, client-facing remediation reports",
      "Advise on prioritized remediation plans",
      "Lead small consulting engagements or workshops"
    ],
    phases: [
      {
        name: "Assessment",
        description: "Learn how to evaluate security posture and identify gaps across people, process, and technology.",
        items: [
          {
            title: "Perform security assessments",
            time: "3-4 weeks",
            difficulty: "Intermediate",
            why: "Assessments reveal how well controls are working and where improvements are needed.",
            activities: [
              { type: "quiz", title: "Security Assessment Quiz" },
              { type: "exercise", title: "Security Assessment Exercises" },
              { type: "lab", title: "Security Assessment Lab" }
            ],
            requires: ["Document architecture blueprints"],
          },
          {
            title: "Map findings to compliance frameworks",
            time: "2-3 weeks",
            difficulty: "Intermediate",
            why: "Framework mapping ensures recommendations align to regulatory and industry requirements.",
            activities: [
              { type: "quiz", title: "Compliance Mapping Quiz" },
              { type: "exercise", title: "Compliance Mapping Exercises" },
              { type: "lab", title: "Compliance Mapping Lab" }
            ],
            requires: ["Perform security assessments"],
          }
        ]
      },
      {
        name: "Advisory",
        description: "Develop remediation plans and communicate recommendations clearly to stakeholders.",
        items: [
          {
            title: "Write remediation reports",
            time: "2-3 weeks",
            difficulty: "Intermediate",
            why: "Clear reports help clients understand the risk and the steps needed to reduce it.",
            activities: [
              { type: "quiz", title: "Remediation Reporting Quiz" },
              { type: "exercise", title: "Remediation Reporting Exercises" },
              { type: "lab", title: "Remediation Reporting Lab" }
            ],
            requires: ["Map findings to compliance frameworks"],
          },
          {
            title: "Advise on prioritized remediation plans",
            time: "3-4 weeks",
            difficulty: "Intermediate",
            why: "Prioritization helps organizations address the most impactful risks first.",
            activities: [
              { type: "quiz", title: "Prioritization Quiz" },
              { type: "exercise", title: "Prioritization Exercises" },
              { type: "lab", title: "Prioritization Lab" }
            ],
            requires: ["Write remediation reports"],
          },  
          {
            title: "Create and maintain incident response playbooks",
            time: "3-4 weeks",
            difficulty: "Intermediate",
            why: "Playbooks and exercises ensure the team is prepared to follow response procedures effectively.",
            activities: [
              { type: "quiz", title: "Playbook and Exercise Quiz" },
              { type: "exercise", title: "Playbook and Exercise Exercises" },
              { type: "lab", title: "Playbook and Exercise Lab" }
            ],
            requires: ["Advise on prioritized remediation plans"],
          }
        ]
      },
      {
        name: "Client Engagement",
        description: "Build trust and influence through effective workshops and security consulting practice.",
        items: [
          {
            title: "Lead consulting engagements or workshops",
            time: "3-4 weeks",
            difficulty: "Intermediate",
            why: "Strong client engagement skills make consulting recommendations actionable and sustainable.",
            requires: ["Create and maintain incident response playbooks"],
          }
        ]
      }
    ]
  },
  "Security Manager": {
    skills: ["Leadership", "Security Operations", "Policy Development", "Risk Management", "Vendor Management"],
    milestones: [
      "Develop and publish security policies and standards",
      "Build and manage a security operations team",
      "Run incident response and post-incident reviews",
      "Define KPIs and reporting for executives",
      "Manage vendors and security program budget"
    ],
    phases: [
      {
        name: "Operations Management",
        description: "Build and run a security operations function with repeatable processes.",
        items: [
          {
            title: "Develop policies and standards",
            time: "3-4 weeks",
            difficulty: "Intermediate",
            why: "Policies create a shared understanding of security expectations across the organization.",
            activities: [
              { type: "quiz", title: "Policy Development Quiz" },
              { type: "exercise", title: "Policy Development Exercises" },
              { type: "lab", title: "Policy Development Lab" }
            ],
            requires: ["Lead consulting engagements or workshops"],
          },
          {
            title: "Build a security operations team",
            time: "4-5 weeks",
            difficulty: "Advanced",
            why: "A strong team is required to maintain security monitoring, response, and control operations.",
            activities: [
              { type: "quiz", title: "Team Building Quiz" },
              { type: "exercise", title: "Team Building Exercises" },
              { type: "lab", title: "Team Building Lab" }
            ],
            requires: ["Develop policies and standards"],
          }
        ]
      },
      {
        name: "Incident and Risk",
        description: "Ensure the organization can respond to incidents and manage security risk effectively.",
        items: [
          {
            title: "Run incident response reviews",
            time: "3-4 weeks",
            difficulty: "Intermediate",
            why: "Post-incident reviews turn events into lessons and improve future readiness.",
            activities: [
              { type: "quiz", title: "Incident Review Quiz" },
              { type: "exercise", title: "Incident Review Exercises" },
              { type: "lab", title: "Incident Review Lab" }
            ],
            requires: ["Build a security operations team"],
          },
          {
            title: "Define KPIs and executive reporting",
            time: "2-3 weeks",
            difficulty: "Intermediate",
            why: "Meaningful metrics keep leadership informed and aligned on security goals.",
            activities: [
              { type: "quiz", title: "KPI and Reporting Quiz" },
              { type: "exercise", title: "KPI and Reporting Exercises" },
              { type: "lab", title: "KPI and Reporting Lab" }
            ],
            requires: ["Run incident response reviews"],
          }
        ]
      },
      {
        name: "Program and Vendor Management",
        description: "Manage security investments and vendor relationships to support program goals.",
        items: [
          {
            title: "Manage vendors and budget",
            time: "3-4 weeks",
            difficulty: "Intermediate",
            why: "Vendor and budget management ensures security investments are effective and sustainable.",
            activities: [
              { type: "quiz", title: "Vendor Management Quiz" },
              { type: "exercise", title: "Vendor Management Exercises" },
              { type: "lab", title: "Vendor Management Lab" }
            ],
            requires: ["Define KPIs and executive reporting"],
          }
        ]
      }
    ]
  },
  "Security Director": {
    skills: ["Strategic Planning", "Governance", "Risk & Compliance", "Executive Communication", "Program Management"],
    milestones: [
      "Define a multi-year security strategy aligned to business goals",
      "Establish governance and compliance programs",
      "Report security posture to executives/board",
      "Drive cross-functional security initiatives",
      "Oversee hiring, budgeting, and vendor strategy"
    ],
    phases: [
      {
        name: "Strategy",
        description: "Translate business goals into a long-term security strategy.",
        items: [
          {
            title: "Define multi-year security strategy",
            time: "4-5 weeks",
            difficulty: "Advanced",
            why: "A strategic plan ensures security investments align with business priorities.",
            activities: [
              { type: "quiz", title: "Security Strategy Quiz" },
              { type: "exercise", title: "Security Strategy Exercises" },
              { type: "lab", title: "Security Strategy Lab" }
            ],
            requires: ["Manage vendors and budget"],
          }
        ]
      },
      {
        name: "Governance",
        description: "Create governance structures and ensure compliance across the organization.",
        items: [
          {
            title: "Establish governance and compliance programs",
            time: "4-5 weeks",
            difficulty: "Advanced",
            why: "Governance provides accountability and consistent enforcement of security controls.",
            activities: [
              { type: "quiz", title: "Governance and Compliance Quiz" },
              { type: "exercise", title: "Governance and Compliance Exercises" },
              { type: "lab", title: "Governance and Compliance Lab" }
            ],
            requires: ["Define multi-year security strategy"],
          }
        ]
      },
      {
        name: "Executive Leadership",
        description: "Manage the security program through communication, hiring, and cross-team collaboration.",
        items: [
          {
            title: "Report security posture to executives",
            time: "3-4 weeks",
            difficulty: "Advanced",
            why: "Executive communication builds trust and secures support for security initiatives.",
            activities: [
              { type: "quiz", title: "Executive Reporting Quiz" },
              { type: "exercise", title: "Executive Reporting Exercises" },
              { type: "lab", title: "Executive Reporting Lab" }
            ],
            requires: ["Establish governance and compliance programs"],
          },
          {
            title: "Oversee hiring, budgeting, and vendor strategy",
            time: "4-6 weeks",
            difficulty: "Advanced",
            why: "Strong program leadership ensures the security organization can deliver business value.",
            activities: [
              { type: "quiz", title: "Leadership Strategy Quiz" },
              { type: "exercise", title: "Leadership Strategy Exercises" },
              { type: "lab", title: "Leadership Strategy Lab" }
            ],
            requires: ["Report security posture to executives"],
          }
        ]
      }
    ]
  }
};



