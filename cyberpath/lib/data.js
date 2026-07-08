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
    milestoneContent: [
      {
        title: "Learn Linux basics and shell administration",
        summary: "Build a strong foundation in the shell, permissions, processes, and essential system administration tasks.",
        intro: "Welcome to the world of Linux! Think of the Linux command line as a superpower. Instead of clicking through menus, you can control your system with a few keystrokes.",
        sections: [
          {
            heading: "The core architecture",
            body: "Linux is built in layers: hardware, the kernel, the shell, and the terminal. The kernel talks to the hardware, while the shell interprets your commands and sends them to the kernel."
          },
          {
            heading: "Navigating the file system",
            body: "Linux uses one unified directory tree rooted at /. Use pwd to see your current location, ls to list files, and cd to move between directories."
          },
          {
            heading: "File and directory management",
            body: "Use mkdir to create folders, touch to create files, cp to copy, mv to move or rename, and rm to delete. Be careful with rm because it is permanent."
          },
          {
            heading: "Permissions and administration",
            body: "Linux permissions are organized into owner, group, and others. Use chmod to change permissions and sudo to perform administrative actions safely."
          }
        ],
        commands: ["pwd", "ls -la", "cd /var/log", "mkdir backup_scripts", "chmod +x script.sh", "sudo apt update"],
        objectives: ["Navigate directories and manage files from the command line", "Understand users, groups, and permissions", "Inspect processes and logs confidently"],
        practice: ["Create a local user and test permission boundaries", "Review system logs and identify suspicious activity"],
        resources: ["Linux Journey", "OverTheWire Bandit", "The Linux Command Line"]
      },
      {
        title: "Use Python to automate security tasks (parsing logs, scanning)",
        summary: "Use Python to automate repetitive security checks and turn raw data into useful insight.",
        intro: "Automation turns repetitive security work into repeatable, reliable procedures. Python is one of the best tools for scanning, parsing, and reporting on evidence from systems and logs.",
        sections: [
          {
            heading: "Reading and parsing logs",
            body: "Use Python to open files, split data into fields, and turn raw logs into structured insight you can search and summarize."
          },
          {
            heading: "Automating checks",
            body: "Write small scripts that inspect files, compare expected values, and flag anomalies before they become incidents."
          },
          {
            heading: "Reporting results",
            body: "A good automation workflow doesn’t only find issues; it outputs concise reports that teammates can act on immediately."
          }
        ],
        commands: ["python3 script.py", "grep -n 'error' sample.log", "python3 -m json.tool report.json"],
        objectives: ["Read files and parse structured logs", "Automate basic scanning tasks", "Create simple reports from collected data"],
        practice: ["Write a script that parses a sample log file", "Automate a weekly scan of a test system"],
        resources: ["Automate the Boring Stuff with Python", "Python for Security"]
      },
      {
        title: "Harden a Linux server and deploy monitoring",
        summary: "Reduce the attack surface of a system and monitor it for suspicious behavior.",
        intro: "Hardening is the process of removing unnecessary risk and making systems more resistant to misuse. Monitoring helps you spot suspicious behavior early and respond quickly.",
        sections: [
          {
            heading: "Reduce the attack surface",
            body: "Disable unused services, tighten permissions, and remove default credentials so fewer opportunities remain for attackers."
          },
          {
            heading: "Enable observability",
            body: "Collect logs, review failed logins, and monitor for unusual system activity that may signal compromise."
          },
          {
            heading: "Document your changes",
            body: "A secure system is easier to maintain when each hardening change is recorded and reviewed over time."
          }
        ],
        commands: ["sudo systemctl disable service", "sudo ufw enable", "sudo tail -f /var/log/auth.log"],
        objectives: ["Apply common hardening steps", "Enable logging and monitoring", "Document changes for future review"],
        practice: ["Disable unnecessary services and tighten permissions", "Set up a simple monitoring alert for failed logins"],
        resources: ["CIS Benchmarks", "Sysmon / auditd guides"]
      },
      {
        title: "Implement basic network defenses (firewalls, IDS)",
        summary: "Understand how access control and monitoring protect traffic flowing through a network.",
        intro: "Network defenses help stop unwanted traffic before it reaches your systems. Firewalls and intrusion detection systems work together to create a first line of defense.",
        sections: [
          {
            heading: "Control traffic with firewall rules",
            body: "Create allow and deny rules that restrict access based on protocol, port, and direction of traffic."
          },
          {
            heading: "Observe suspicious activity",
            body: "An IDS helps you notice patterns that might indicate scanning, exploitation, or unauthorized access attempts."
          },
          {
            heading: "Separate controls from monitoring",
            body: "Blocking and detection are related but distinct; good security design uses both in meaningful ways."
          }
        ],
        commands: ["sudo ufw allow ssh", "sudo iptables -L", "sudo tcpdump -i any"],
        objectives: ["Apply firewall rules", "Recognize common IDS concepts", "Differentiate monitoring from blocking controls"],
        practice: ["Create a basic firewall policy for a lab network", "Review IDS alerts and classify them"],
        resources: ["Network+ Security guides", "Snort documentation"]
      },
      {
        title: "Deploy and secure a cloud VM/service",
        summary: "Move from local administration to secure cloud deployment and access control.",
        intro: "Cloud systems extend your security responsibilities beyond a single host. You need to secure identities, networking, and logging from the start.",
        sections: [
          {
            heading: "Provision securely",
            body: "Create cloud resources with least-privilege access, strong authentication, and minimal public exposure."
          },
          {
            heading: "Protect network paths",
            body: "Use security groups, private networking, and monitored access paths to reduce the chance of unauthorized entry."
          },
          {
            heading: "Enable visibility",
            body: "Cloud logging and alerts ensure you can detect changes, access attempts, or configuration drift quickly."
          }
        ],
        commands: ["ssh -i key.pem user@host", "az vm create", "aws ec2 describe-instances"],
        objectives: ["Provision a cloud VM securely", "Apply identity and networking protections", "Document security configuration changes"],
        practice: ["Create a VM, lock down SSH access, and review access logs", "Enable basic cloud monitoring and alerts"],
        resources: ["AWS Well-Architected", "Azure Security Baseline"]
      }
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
    milestoneContent: [
      {
        title: "Learn common network protocols and enumeration techniques",
        summary: "Understand how attackers map a target by probing services, ports, and protocol behavior.",
        intro: "Enumeration is the act of learning what a target exposes before you try to exploit anything. Good recon turns guesswork into evidence.",
        sections: [
          {
            heading: "Map services and ports",
            body: "Identify which services are listening, what ports are open, and how those services respond to probes."
          },
          {
            heading: "Understand protocol behavior",
            body: "A protocol tells you how systems exchange data; recognizing the expected behavior helps you spot anomalies."
          },
          {
            heading: "Document findings",
            body: "Each discovery should be recorded clearly so you can turn it into a repeatable test or report."
          }
        ],
        commands: ["nmap -sV target", "nc -vz target 80", "tcpdump -i any"],
        objectives: ["Recognize common protocols and their uses", "Perform basic enumeration", "Document findings clearly"],
        practice: ["Scan a lab host and identify open services", "Compare protocol behavior across different targets"],
        resources: ["Nmap documentation", "Wireshark tutorials"]
      },
      {
        title: "Practice Linux command-line and privilege escalation",
        summary: "Build confidence with system navigation, permissions, and privilege escalation paths.",
        intro: "Linux is often the fastest path to deeper access. The command line helps you inspect permissions, scheduled tasks, and configuration drift that can enable privilege escalation.",
        sections: [
          {
            heading: "Work quickly from the shell",
            body: "Use core commands to move between directories, inspect files, and learn how the system is organized."
          },
          {
            heading: "Find privilege paths",
            body: "Look for sudo access, weak file permissions, and misconfigured services that can turn a normal user into a privileged one."
          },
          {
            heading: "Validate safely",
            body: "Every escalation path should be tested carefully and documented so you can explain the finding clearly."
          }
        ],
        commands: ["sudo -l", "find / -perm -4000 2>/dev/null", "cat /etc/sudoers"],
        objectives: ["Use core Linux commands quickly", "Find misconfigurations that allow escalation", "Validate findings safely"],
        practice: ["Exercise sudo, file permissions, and scheduled tasks", "Practice controlled privilege escalation in a lab"],
        resources: ["Linux Privilege Escalation Guide", "GTFOBins"]
      },
      {
        title: "Perform web application tests using Burp Suite",
        summary: "Learn how to inspect requests, manipulate parameters, and identify common web issues.",
        intro: "Burp Suite is a browser and proxy workflow that lets you see and modify traffic between the client and the server. That makes it ideal for web application testing.",
        sections: [
          {
            heading: "Proxy and inspect traffic",
            body: "Intercept requests and responses so you can understand how the application behaves under normal and abnormal conditions."
          },
          {
            heading: "Manipulate parameters",
            body: "Test input handling, authentication flows, and application logic by changing values and observing the response."
          },
          {
            heading: "Record results",
            body: "Each test should produce findings you can explain to the team in a concise and reproducible way."
          }
        ],
        commands: ["burp", "curl -I http://target", "proxychains curl http://target"],
        objectives: ["Configure Burp Suite for testing", "Intercept and modify requests", "Identify common injection and auth flaws"],
        practice: ["Walk through a vulnerable web app and test authentication flows", "Record findings in a test report"],
        resources: ["PortSwigger Web Security Academy", "Burp Suite docs"]
      },
      {
        title: "Write simple exploit/proof-of-concept scripts in Python",
        summary: "Translate findings into reproducible proof-of-concept scripts and validate them responsibly.",
        intro: "Proof-of-concept work turns observations into something repeatable. A small Python script can make a finding easier to verify and easier to explain.",
        sections: [
          {
            heading: "Build a simple validator",
            body: "Use Python to confirm a hypothesis by sending requests, parsing responses, or exercising the vulnerable path."
          },
          {
            heading: "Keep the script readable",
            body: "Clear scripts make testing easier for others and preserve your work for future review."
          },
          {
            heading: "Document the workflow",
            body: "A proof-of-concept should include setup steps, expected results, and safe handling instructions."
          }
        ],
        commands: ["python3 poc.py", "python3 -m pip install requests", "python3 -m http.server"],
        objectives: ["Write small Python scripts for validation", "Understand payload structure", "Document proof-of-concept steps"],
        practice: ["Build a script that demonstrates a simple parameter tampering flow", "Compare manual and automated reproduction"],
        resources: ["Python for Pentesters", "Exploit Development notes"]
      },
      {
        title: "Run full engagement-style pentests in lab environments",
        summary: "Combine reconnaissance, exploitation, and reporting into a realistic testing exercise.",
        intro: "A complete pentest is more than a single exploit. It is a structured engagement that includes planning, execution, and reporting.",
        sections: [
          {
            heading: "Plan the engagement",
            body: "Define scope, goals, rules of engagement, and the deliverables expected at the end of the engagement."
          },
          {
            heading: "Execute methodically",
            body: "Work through reconnaissance, exploitation, and validation in phases so you don’t miss critical findings."
          },
          {
            heading: "Report clearly",
            body: "A strong report explains what was found, why it matters, and how it can be remediated."
          }
        ],
        commands: ["nmap -T4 target", "burp", "python3 report.py"],
        objectives: ["Plan a mini-engagement", "Execute testing in phases", "Write a concise report with evidence"],
        practice: ["Run a lab pentest from recon to report", "Practice presenting findings to a mock client"],
        resources: ["Pentest reporting templates", "TryHackMe labs"]
      }
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
    milestoneContent: [
      {
        title: "Understand logging sources and log collection",
        summary: "Learn where security data originates and how it is collected into a reliable monitoring pipeline.",
        intro: "Security data exists in many places, and analysts need to understand where it comes from before they can trust it. Good logging makes investigations possible.",
        sections: [
          {
            heading: "Identify log sources",
            body: "Learn which systems generate security events, from servers and endpoints to applications and network devices."
          },
          {
            heading: "Understand collection flow",
            body: "See how logs are forwarded, normalized, and stored so they can be searched later."
          },
          {
            heading: "Spot gaps",
            body: "A missing or incomplete log source can make a real incident look invisible."
          }
        ],
        commands: ["tail -f /var/log/syslog", "journalctl -xe", "grep -i fail /var/log/auth.log"],
        objectives: ["Identify common log sources", "Understand collection architecture", "Recognize when logs are incomplete"],
        practice: ["Review logs from multiple sources", "Compare raw logs with normalized event data"],
        resources: ["Windows Event logs", "Syslog and logging guides"]
      },
      {
        title: "Use a SIEM to create searches and alerts",
        summary: "Move from raw logs to actionable detections through searching, correlation, and alerting.",
        intro: "A SIEM turns scattered events into searchable evidence. It helps you connect activity across systems and turn that activity into detections.",
        sections: [
          {
            heading: "Search intelligently",
            body: "Build searches that isolate suspicious patterns without overwhelming your workspace with noise."
          },
          {
            heading: "Create alerts",
            body: "Alerts can surface repeated failures, unusual access, or behavior that should not happen in normal operations."
          },
          {
            heading: "Tune noise",
            body: "Successful detection requires balancing coverage with alert quality and false positives."
          }
        ],
        commands: ["search 'failed login'", "where event.action == 'login'", "alert on repeated failed logins"],
        objectives: ["Build basic searches", "Create alerts for suspicious patterns", "Tune overly noisy detections"],
        practice: ["Create a simple detection for repeated failed logins", "Evaluate alert quality and false positives"],
        resources: ["Elastic SIEM basics", "Microsoft Sentinel labs"]
      },
      {
        title: "Triage alerts and document incidents",
        summary: "Practice deciding whether an alert is real, important, and worth escalating.",
        intro: "Triage is the discipline of deciding what deserves attention now, what can wait, and what needs a deeper investigation.",
        sections: [
          {
            heading: "Prioritize the signal",
            body: "Assess severity, scope, and impact before escalating an alert to the response team."
          },
          {
            heading: "Collect evidence",
            body: "Identify the data that explains what happened and how the incident is progressing."
          },
          {
            heading: "Write clear notes",
            body: "Good incident notes help responders, managers, and future analysts understand the case quickly."
          }
        ],
        commands: ["review alert timeline", "collect host evidence", "document incident summary"],
        objectives: ["Prioritize alerts", "Collect supporting evidence", "Write concise incident notes"],
        practice: ["Walk through a sample alert queue", "Draft an incident summary from collected evidence"],
        resources: ["Incident triage playbooks", "SOC analyst templates"]
      },
      {
        title: "Integrate threat intelligence into investigations",
        summary: "Use threat context to understand whether an event is part of a known campaign or tactic.",
        intro: "Threat intelligence adds context to raw evidence, helping analysts see whether a signal belongs to a known pattern or campaign.",
        sections: [
          {
            heading: "Interpret indicators",
            body: "Hash values, IP addresses, domains, and TTPs each tell you something about the threat."
          },
          {
            heading: "Link evidence",
            body: "Compare observed events with known indicators and map them to the relevant threat context."
          },
          {
            heading: "Refine the investigation",
            body: "Threat intelligence may raise or lower your confidence in a path, and it should influence next steps."
          }
        ],
        commands: ["check IOC against logs", "map MITRE ATT&CK technique", "update investigation context"],
        objectives: ["Interpret threat feeds", "Map indicators to observed evidence", "Support investigation decisions with context"],
        practice: ["Investigate an IOC and link it to a sample event", "Document how TI changes the investigation"],
        resources: ["MITRE ATT&CK", "Threat intelligence fundamentals"]
      },
      {
        title: "Automate repetitive analysis with Python scripts",
        summary: "Reduce manual analyst effort by extracting and summarizing data in repeatable workflows.",
        intro: "Automation helps analysts spend less time on repeated tasks and more time on judgment, investigation, and response.",
        sections: [
          {
            heading: "Pull information from data sources",
            body: "Use Python to gather, normalize, and summarize data from logs, APIs, or exports."
          },
          {
            heading: "Generate repeatable reports",
            body: "Create summaries that reduce manual effort while keeping the output understandable for the team."
          },
          {
            heading: "Scale your process",
            body: "Small automations can be chained into larger workflows that accelerate the daily operations of a SOC."
          }
        ],
        commands: ["python3 analyst_script.py", "python3 -m json.tool summary.json", "grep -i 'alert' daily.log"],
        objectives: ["Pull data from logs or APIs", "Generate simple reports", "Automate repetitive checks"],
        practice: ["Write a script to summarize daily alerts", "Create a lightweight report generator"],
        resources: ["Python for SOC work", "Analyst automation patterns"]
      }
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
    milestoneContent: [
      {
        title: "Learn the incident response lifecycle",
        summary: "Understand the coordinated steps used to detect, contain, eradicate, and recover from incidents.",
        intro: "Incident response is a structured process that helps teams act calmly and consistently when something goes wrong. A good lifecycle prevents confusion under pressure.",
        sections: [
          {
            heading: "Recognize the phases",
            body: "Response work usually includes preparation, detection, containment, eradication, recovery, and lessons learned."
          },
          {
            heading: "Coordinate across teams",
            body: "Security, IT, legal, and leadership often need to work in sync during a larger incident."
          },
          {
            heading: "Use a plan",
            body: "A clear runbook reduces the chance of missing an important step or making a preventable mistake."
          }
        ],
        commands: ["review incident runbook", "assign incident roles", "track containment actions"],
        objectives: ["Recognize each phase of response", "Prepare a basic runbook", "Coordinate handoffs between teams"],
        practice: ["Map a sample incident to each lifecycle phase", "Compare reactive versus proactive response"],
        resources: ["NIST incident handling guide", "IR lifecycle templates"]
      },
      {
        title: "Collect and preserve forensic artifacts",
        summary: "Learn which evidence should be captured first and how to preserve it for later analysis.",
        intro: "Forensics starts with preserving the right evidence before it disappears. Good handling keeps your investigation defensible and accurate.",
        sections: [
          {
            heading: "Capture volatile evidence first",
            body: "Memory, running processes, and recent network connections can change quickly and should be captured early."
          },
          {
            heading: "Preserve carefully",
            body: "Use trusted methods to maintain integrity and avoid unintentionally modifying evidence."
          },
          {
            heading: "Document chain of custody",
            body: "Every handoff should be recorded so the evidence remains understandable and auditable."
          }
        ],
        commands: ["hashdeep -r evidence", "md5sum file", "copy evidence to secure storage"],
        objectives: ["Identify volatile and non-volatile evidence", "Preserve data safely", "Log chain-of-custody basics"],
        practice: ["Capture evidence from a simulated endpoint", "Document the preservation steps clearly"],
        resources: ["Digital forensics basics", "Evidence handling checklists"]
      },
      {
        title: "Use SIEM and endpoint tools to investigate incidents",
        summary: "Correlate telemetry across tools to determine scope, source, and containment actions.",
        intro: "An incident investigation is usually a story told across many tools. Correlating endpoint and SIEM data helps you understand the full path of compromise.",
        sections: [
          {
            heading: "Build a timeline",
            body: "Connect events from identity, endpoint, and network sources to reconstruct the sequence of activity."
          },
          {
            heading: "Find lateral movement",
            body: "Look for suspicious access and persistence that indicate the attacker moved beyond the initial foothold."
          },
          {
            heading: "Choose containment",
            body: "A good investigation gives you evidence that supports the right containment decision quickly."
          }
        ],
        commands: ["review endpoint timeline", "query SIEM for suspicious activity", "map affected hosts"],
        objectives: ["Build a timeline of events", "Use SIEM and endpoint data together", "Identify suspicious persistence or lateral movement"],
        practice: ["Trace an alert from initial detection to containment", "Review endpoint telemetry for a simulated intrusion"],
        resources: ["SIEM investigation labs", "EDR fundamentals"]
      },
      {
        title: "Perform basic memory and malware analysis",
        summary: "Get introduced to malware behavior and the basics of static and dynamic analysis.",
        intro: "Malware analysis helps you understand what an attacker did and what defenses should change next. It begins with careful observation and safe handling.",
        sections: [
          {
            heading: "Observe behavior",
            body: "Watch how the sample interacts with the system, the file system, and the network."
          },
          {
            heading: "Compare static and dynamic clues",
            body: "Static analysis looks at the sample without execution, while dynamic analysis observes it in a contained environment."
          },
          {
            heading: "Write a short summary",
            body: "An analyst should be able to explain what the sample does, how it persists, and what indicators matter."
          }
        ],
        commands: ["strings sample.exe", "virustotal sample", "run sample in sandbox"],
        objectives: ["Recognize common malware indicators", "Use basic analysis tools", "Document findings carefully"],
        practice: ["Analyze a safe sample and summarize observed behavior", "Compare static and dynamic observations"],
        resources: ["Malware analysis primers", "ANY.RUN / sandbox labs"]
      },
      {
        title: "Develop and run IR playbooks and tabletop exercises",
        summary: "Turn knowledge into tested procedures that improve coordination under pressure.",
        intro: "Playbooks and tabletop exercises turn response knowledge into rehearsed action. They reveal weak spots before a real incident exposes them.",
        sections: [
          {
            heading: "Draft practical playbooks",
            body: "Write clear steps for common scenarios so responders do not have to improvise under pressure."
          },
          {
            heading: "Run tabletop exercises",
            body: "Walk through incidents with the team to test communication, decision-making, and escalation paths."
          },
          {
            heading: "Improve and iterate",
            body: "Capture lessons learned after each exercise and update the playbook with what the team discovered."
          }
        ],
        commands: ["review playbook steps", "facilitate tabletop exercise", "update action items"],
        objectives: ["Draft a playbook for a common scenario", "Run a tabletop exercise", "Capture action items for improvement"],
        practice: ["Lead a mock tabletop exercise", "Update the playbook after debriefing"],
        resources: ["Tabletop exercise templates", "Playbook examples"]
      }
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
    milestoneContent: [
      {
        title: "Study secure design and architecture patterns",
        summary: "Learn how resilient systems are built using layered controls and defense-in-depth.",
        objectives: ["Recognize secure design patterns", "Understand separation of concerns", "Map controls to risk"],
        practice: ["Review an application architecture and identify gaps", "Compare insecure and secure design choices"],
        resources: ["OWASP ASVS", "Secure architecture references"]
      },
      {
        title: "Create threat models for sample applications",
        summary: "Use structured thinking to identify threats before implementation begins.",
        objectives: ["Define assets and trust boundaries", "Identify abuse cases", "Prioritize mitigations"],
        practice: ["Threat model a simple web app", "Document mitigations for each finding"],
        resources: ["Microsoft Threat Modeling Tool", "STRIDE framework"]
      },
      {
        title: "Design a secure multi-tier network architecture",
        summary: "Translate security requirements into a practical network design with segmentation and controls.",
        objectives: ["Plan network zones and access paths", "Place controls where they matter", "Consider identity and monitoring needs"],
        practice: ["Design a three-tier application network", "Explain why each segment exists"],
        resources: ["Network security design guides", "Zero trust design patterns"]
      },
      {
        title: "Define security controls for cloud deployments",
        summary: "Apply identity, networking, logging, and data protection controls to cloud systems.",
        objectives: ["Select controls for cloud services", "Align controls with platform capabilities", "Understand shared responsibility"],
        practice: ["Map controls for an example cloud workload", "Review cloud logging and identity settings"],
        resources: ["Cloud security architecture references", "CIS cloud benchmarks"]
      },
      {
        title: "Document architecture blueprints and patterns",
        summary: "Produce clear documentation that helps engineering teams build and maintain secure systems.",
        objectives: ["Write architecture guidance", "Capture decision rationale", "Maintain a reusable pattern library"],
        practice: ["Create an architecture blueprint for a sample solution", "Review the document with a technical team"],
        resources: ["Architecture decision records", "Security blueprint templates"]
      }
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
    milestoneContent: [
      {
        title: "Perform a security assessment and gap analysis",
        summary: "Learn how to evaluate a client environment and discover gaps in people, process, and technology.",
        intro: "A security assessment begins with understanding how the environment works today and where the controls are weakest. The goal is to turn observations into useful recommendations.",
        sections: [
          {
            heading: "Interview stakeholders",
            body: "Talk with the people who operate the environment so you can understand the real controls, workflows, and pain points."
          },
          {
            heading: "Review evidence",
            body: "Inspect policies, architecture, logs, and system configurations to identify the current security posture."
          },
          {
            heading: "Summarize gaps",
            body: "Present the findings clearly so the client sees what is missing and how the gaps affect the business."
          }
        ],
        commands: ["review control evidence", "interview stakeholders", "rank assessment findings"],
        objectives: ["Interview stakeholders", "Review controls and evidence", "Summarize gaps clearly"],
        practice: ["Assess a sample environment and rank findings", "Compare current posture to a target state"],
        resources: ["Assessment templates", "Risk assessment frameworks"]
      },
      {
        title: "Map findings to common compliance frameworks (e.g., NIST, ISO)",
        summary: "Translate technical findings into a language that fits governance and assurance programs.",
        intro: "Compliance frameworks create a shared vocabulary for security control maturity. Mapping findings into that framework helps clients align technical work with governance requirements.",
        sections: [
          {
            heading: "Map control gaps",
            body: "Connect your evidence to the appropriate control areas in a framework such as NIST CSF or ISO 27001."
          },
          {
            heading: "Explain the impact",
            body: "Translate technical findings into understandable control gaps that support audit readiness and planning."
          },
          {
            heading: "Support decision-making",
            body: "Framework mapping helps leadership compare the current state to a target posture."
          }
        ],
        commands: ["map findings to NIST CSF", "review ISO control areas", "create control-gap summary"],
        objectives: ["Map findings to common frameworks", "Explain control gaps simply", "Support audit readiness"],
        practice: ["Map sample findings to NIST CSF or ISO 27001", "Create a control-gap summary"],
        resources: ["NIST CSF", "ISO 27001 overview"]
      },
      {
        title: "Write clear, client-facing remediation reports",
        summary: "Learn how to communicate risk and remediation steps in a way that clients can act on.",
        intro: "A great remediation report turns technical detail into clear action. Clients need to understand what matters, why it matters, and what should happen next.",
        sections: [
          {
            heading: "Explain risk clearly",
            body: "Use plain language to describe the business impact of each finding without losing technical accuracy."
          },
          {
            heading: "Recommend practical steps",
            body: "Each recommendation should be specific enough for a client to act on immediately."
          },
          {
            heading: "Tailor the audience",
            body: "Executive readers need a different emphasis from engineers or auditors."
          }
        ],
        commands: ["draft remediation memo", "turn findings into action items", "tailor report for executives"],
        objectives: ["Explain technical risk clearly", "Write concise recommendations", "Tailor wording for executive audiences"],
        practice: ["Draft a remediation memo for a mock client", "Turn findings into action items"],
        resources: ["Report writing examples", "Security communications guides"]
      },
      {
        title: "Advise on prioritized remediation plans",
        summary: "Help stakeholders focus on the changes that deliver the greatest risk reduction first.",
        intro: "Prioritization helps a client decide where to spend effort first. The most impactful changes are usually the ones that reduce the greatest risk with the least delay.",
        sections: [
          {
            heading: "Rank by risk and impact",
            body: "Evaluate which findings affect the most critical systems or expose the greatest exposure."
          },
          {
            heading: "Balance effort and value",
            body: "Good remediation plans consider both the business cost of effort and the benefit of risk reduction."
          },
          {
            heading: "Explain tradeoffs",
            body: "Clients often need a clear rationale for why one recommendation comes before another."
          }
        ],
        commands: ["build remediation roadmap", "defend remediation sequence", "prioritize actions by impact"],
        objectives: ["Prioritize remediation efforts", "Balance effort and impact", "Explain tradeoffs"],
        practice: ["Create a remediation roadmap from a sample assessment", "Defend the sequence of actions"],
        resources: ["Prioritization matrices", "Risk-based remediation guides"]
      },
      {
        title: "Lead small consulting engagements or workshops",
        summary: "Practice running a project from discovery to recommendations with clear communication and facilitation.",
        intro: "Consulting engagements work best when the facilitator keeps the discussion focused, collaborative, and outcome-driven. The team should leave with clear next steps.",
        sections: [
          {
            heading: "Facilitate stakeholder sessions",
            body: "Guide discussions so the group can align around the problems, risks, and decisions that matter."
          },
          {
            heading: "Maintain momentum",
            body: "A strong consultant keeps the conversation moving and ensures the session produces something useful."
          },
          {
            heading: "Document outcomes",
            body: "Record the agreed actions, owners, and next steps so the engagement remains actionable after the workshop."
          }
        ],
        commands: ["run stakeholder workshop", "present recommendations", "capture next steps"],
        objectives: ["Facilitate stakeholder sessions", "Keep engagements moving", "Document outcomes and next steps"],
        practice: ["Run a short workshop for a sample client", "Present findings and recommendations"],
        resources: ["Consulting workshop templates", "Facilitation tips"]
      }
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
    milestoneContent: [
      {
        title: "Develop and publish security policies and standards",
        summary: "Learn how to turn security expectations into clear and enforceable guidance for the organization.",
        intro: "Security policies are the bridge between business intent and day-to-day execution. They set expectations that people can follow and auditors can review.",
        sections: [
          {
            heading: "Translate policy into practice",
            body: "Good policies describe outcomes and responsibilities clearly so they can be enforced without ambiguity."
          },
          {
            heading: "Align with business needs",
            body: "Standards should reflect the real risks and constraints of the business rather than generic templates alone."
          },
          {
            heading: "Create review and approval paths",
            body: "Policies are more useful when ownership, review cadence, and change control are defined from the start."
          }
        ],
        commands: ["draft policy outline", "review standard against control", "approve policy update"],
        objectives: ["Draft practical policies", "Align standards to business needs", "Define review and approval processes"],
        practice: ["Write a policy for password management", "Review a standard against a real control"],
        resources: ["Policy template examples", "Security governance references"]
      },
      {
        title: "Build and manage a security operations team",
        summary: "Understand how to structure teams, define responsibilities, and build a dependable operating rhythm.",
        intro: "A strong security operations team depends on clear responsibilities, good handoffs, and shared visibility into the work that matters most.",
        sections: [
          {
            heading: "Define roles and coverage",
            body: "Every function needs a clear owner, a backup, and a simple way to escalate work when it becomes urgent."
          },
          {
            heading: "Set service expectations",
            body: "Use service levels and escalation paths to keep analysts, responders, and leadership aligned."
          },
          {
            heading: "Grow the team sustainably",
            body: "Improvement should come from better processes, knowledge transfer, and role clarity rather than ad hoc effort alone."
          }
        ],
        commands: ["define team roles", "set SLA expectations", "map analyst handoffs"],
        objectives: ["Define team roles", "Set expectations and SLAs", "Grow capability over time"],
        practice: ["Design a simple SOC team structure", "Map handoffs between analysts and responders"],
        resources: ["SOC operating models", "Team management guides"]
      },
      {
        title: "Run incident response and post-incident reviews",
        summary: "Create a repeatable process for handling incidents and learning from them afterward.",
        intro: "What you do after the incident matters as much as what you do during it. Reviews turn a stressful event into better future performance.",
        sections: [
          {
            heading: "Review the event",
            body: "Capture what happened, what worked, and what created delay or confusion so the team can improve."
          },
          {
            heading: "Document lessons learned",
            body: "Turn observations into actions that can improve detection, response, and prevention."
          },
          {
            heading: "Improve readiness",
            body: "A good review changes policies, playbooks, tooling, and training in practical ways."
          }
        ],
        commands: ["prepare incident review", "facilitate retrospective", "document lessons learned"],
        objectives: ["Run reviews after major events", "Capture lessons learned", "Improve future readiness"],
        practice: ["Prepare a post-incident review template", "Facilitate a mock retrospective"],
        resources: ["Retrospective templates", "Incident review examples"]
      },
      {
        title: "Define KPIs and reporting for executives",
        summary: "Translate operational security work into metrics that executives can understand and trust.",
        intro: "Executives need enough context to make decisions without being buried in technical detail. The right metrics make security measurable and understandable.",
        sections: [
          {
            heading: "Choose meaningful KPIs",
            body: "Metrics should reflect outcomes, risk posture, and the health of your controls rather than activity alone."
          },
          {
            heading: "Create concise reports",
            body: "Executive reporting should emphasize trends, risk, and the actions needed to improve the program."
          },
          {
            heading: "Tie metrics to goals",
            body: "Each metric should connect back to a program objective so leadership can see what is improving and what still needs work."
          }
        ],
        commands: ["build KPI dashboard", "review executive summary", "align metrics to goals"],
        objectives: ["Select meaningful metrics", "Create concise executive reporting", "Tie metrics to program goals"],
        practice: ["Build a one-page security dashboard", "Review which metrics matter most"],
        resources: ["KPI design examples", "Executive reporting templates"]
      },
      {
        title: "Manage vendors and security program budget",
        summary: "Learn how to make security investments that are sustainable, measurable, and aligned to the business.",
        intro: "Vendor and budget decisions shape the quality and resilience of the program over time. Good governance helps leaders make tradeoffs consciously.",
        sections: [
          {
            heading: "Assess suppliers carefully",
            body: "Review vendors for capability, security posture, and the ability to meet your operational needs."
          },
          {
            heading: "Balance cost and resilience",
            body: "The right investment is not always the cheapest one; it is the one that supports the most important risks."
          },
          {
            heading: "Maintain oversight",
            body: "Budget and vendor relationships should be tracked so the program remains accountable and predictable."
          }
        ],
        commands: ["compare vendor options", "draft budget justification", "review contract risk"],
        objectives: ["Assess vendors and contracts", "Balance resilience with cost", "Maintain oversight of spend"],
        practice: ["Compare two vendor options for a sample control", "Draft a basic budget justification"],
        resources: ["Vendor risk management guides", "Budget planning templates"]
      }
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
    milestoneContent: [
      {
        title: "Define a multi-year security strategy aligned to business goals",
        summary: "Learn how to connect security priorities to organizational objectives and future investment needs.",
        intro: "Security strategy is about making deliberate decisions for the future rather than reacting to the latest incident. The best strategies connect technical work to business goals.",
        sections: [
          {
            heading: "Translate goals into priorities",
            body: "Map business objectives to the security outcomes that matter most for the organization."
          },
          {
            heading: "Plan beyond the next quarter",
            body: "Think in terms of multi-year initiatives so the program can mature steadily instead of constantly chasing urgent needs."
          },
          {
            heading: "Align stakeholders",
            body: "A strategy is only useful when the team, leadership, and partners understand the roadmap and their role in it."
          }
        ],
        commands: ["draft 3-year roadmap", "align roadmap to goals", "review strategic priorities"],
        objectives: ["Translate business goals into security priorities", "Plan initiatives over multiple years", "Align stakeholders around a roadmap"],
        practice: ["Draft a sample 3-year security roadmap", "Map initiatives to business outcomes"],
        resources: ["Strategy planning templates", "Security roadmap examples"]
      },
      {
        title: "Establish governance and compliance programs",
        summary: "Create the structure needed to enforce standards, manage risk, and maintain accountability.",
        intro: "Governance provides the structure that keeps security work consistent, measurable, and accountable. Compliance needs are easier to meet when the process is clearly defined.",
        sections: [
          {
            heading: "Set governance roles",
            body: "Define who approves policy changes, manages risk, and escalates exceptions."
          },
          {
            heading: "Define enforcement paths",
            body: "Make sure responsibilities and escalation routes are understood across the organization."
          },
          {
            heading: "Align to compliance needs",
            body: "Use governance structures that support audit expectations and reporting requirements."
          }
        ],
        commands: ["define governance roles", "map escalation paths", "review compliance controls"],
        objectives: ["Set governance roles", "Define escalation paths", "Align controls to compliance needs"],
        practice: ["Design a governance model for a sample organization", "Map controls to reporting expectations"],
        resources: ["Governance and compliance references", "Board reporting examples"]
      },
      {
        title: "Report security posture to executives/board",
        summary: "Learn how to communicate risk clearly and keep leadership informed without overwhelming them.",
        intro: "Executive reporting is about clarity and confidence. Leaders need enough information to understand risk, support investments, and ask the right questions.",
        sections: [
          {
            heading: "Summarize the program health",
            body: "Describe the current state of controls, incidents, and project progress in a way that is easy to absorb."
          },
          {
            heading: "Translate risk into business terms",
            body: "Explain what a finding means for operations, compliance, and customer trust."
          },
          {
            heading: "Prepare for board questions",
            body: "A strong update helps leadership understand the risks that matter most and the actions underway."
          }
        ],
        commands: ["create board summary", "translate risk for leadership", "prepare Q&A notes"],
        objectives: ["Summarize program health clearly", "Explain risk in business terms", "Prepare for board-level questions"],
        practice: ["Create a board-ready security update", "Practice explaining technical risk simply"],
        resources: ["Executive communication templates", "Board reporting examples"]
      },
      {
        title: "Drive cross-functional security initiatives",
        summary: "Build the influence needed to bring security into broader product, IT, and business initiatives.",
        intro: "Security leadership is rarely a solo effort. The best initiatives succeed when security is embedded in how other teams design, ship, and operate their work.",
        sections: [
          {
            heading: "Partner with non-security teams",
            body: "Work closely with engineering, IT, legal, and operations so the controls fit the business context."
          },
          {
            heading: "Create shared accountability",
            body: "Make security a shared responsibility instead of an isolated function."
          },
          {
            heading: "Resolve tradeoffs",
            body: "Security leaders need to balance protection, usability, speed, and cost across teams."
          }
        ],
        commands: ["align stakeholders", "drive shared ownership", "resolve cross-team tradeoffs"],
        objectives: ["Partner with non-security teams", "Drive shared accountability", "Resolve cross-team tradeoffs"],
        practice: ["Plan a cross-functional initiative", "Identify stakeholders and decision points"],
        resources: ["Stakeholder communication guides", "Program leadership notes"]
      },
      {
        title: "Oversee hiring, budgeting, and vendor strategy",
        summary: "Learn how leaders scale the security organization through people, money, and partner management.",
        intro: "A mature security program depends on people, funding, and the right external partnerships. Leadership decisions in these areas shape the team’s future capabilities.",
        sections: [
          {
            heading: "Support talent planning",
            body: "Hiring decisions should align with the current and future needs of the security organization."
          },
          {
            heading: "Make budget choices with context",
            body: "Budget planning should reflect risk, maturity, and the tradeoffs between resilience and cost."
          },
          {
            heading: "Manage strategic vendors",
            body: "External partners can extend the team’s capacity, but they need oversight and clear expectations."
          }
        ],
        commands: ["draft staffing plan", "justify budget request", "review vendor options"],
        objectives: ["Support hiring and talent planning", "Make budget choices with context", "Manage critical vendor relationships"],
        practice: ["Draft a staffing and budget plan for a sample team", "Compare vendor options for a key service"],
        resources: ["Organizational planning templates", "Vendor management references"]
      }
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



