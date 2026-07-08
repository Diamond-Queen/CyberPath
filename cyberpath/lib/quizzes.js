export const quizzes = {
  "Cybersecurity Engineer": [
    [
      { q: "Which command lists files in a directory?", choices: ["ls", "cd", "grep"], a: 0 },
      { q: "Which file contains user account info on most Linux systems?", choices: ["/etc/passwd", "/var/log/syslog", "/home/users"], a: 0 },
      { q: "What does 'chmod +x' do?", choices: ["Makes a file executable", "Deletes a file", "Changes owner"], a: 0 },
      { q: "Which command shows the current working directory?", choices: ["pwd", "whoami", "top"], a: 0 },
      { q: "What does the 'cd' command do?", choices: ["Changes directories", "Creates a file", "Displays disk space"], a: 0 },
      { q: "Which command displays the contents of a file?", choices: ["cat", "mkdir", "rm"], a: 0 },
      { q: "Which command is used to copy files?", choices: ["cp", "mv", "touch"], a: 0 },
      { q: "Which command removes a file?", choices: ["rm", "rmdir", "chmod"], a: 0 },
      { q: "What does 'grep' help you do?", choices: ["Search text patterns", "Create directories", "Edit permissions"], a: 0 },
      { q: "Which command shows running processes?", choices: ["ps", "cp", "ls"], a: 0 }
    ],
    [
      { q: "What keyword starts a function in Python?", choices: ["def", "func", "function"], a: 0 },
      { q: "Which library is common for HTTP requests in Python?", choices: ["requests", "httpclient", "urllib3"], a: 0 },
      { q: "How do you open a file for writing in Python?", choices: ["open('f.txt','w')", "read('f.txt')", "file('f.txt','r')"], a: 0 },
      { q: "Which construct handles exceptions?", choices: ["try/except", "if/else", "switch/case"], a: 0 },
      { q: "What does 'import requests' do?", choices: ["Loads the requests module", "Starts a web server", "Deletes files"], a: 0 },
      { q: "How do you create a list in Python?", choices: ["[]", "{}", "()"], a: 0 },
      { q: "What is a common way to print output?", choices: ["print()", "input()", "append()"], a: 0 },
      { q: "What does a for loop do?", choices: ["Iterates over items", "Creates a function", "Copies a file"], a: 0 },
      { q: "Which module parses JSON in Python?", choices: ["json", "os", "sys"], a: 0 },
      { q: "What is the purpose of a virtual environment?", choices: ["Isolate dependencies", "Increase CPU speed", "Encrypt files"], a: 0 }
    ],
    [
      { q: "Which service logs system events centrally?", choices: ["rsyslog/syslog", "nginx", "sshd"], a: 0 },
      { q: "Recommended SSH practice:", choices: ["Disable root login", "Enable root login", "Use shared passwords"], a: 0 },
      { q: "A firewall primarily controls:", choices: ["Network traffic", "Disk usage", "CPU scheduling"], a: 0 },
      { q: "Tool to monitor processes interactively:", choices: ["top/htop", "ls", "cron"], a: 0 },
      { q: "What does fail2ban help prevent?", choices: ["Repeated login attacks", "Disk failures", "Slow CPU"], a: 0 },
      { q: "Which file often stores SSH configuration?", choices: ["/etc/ssh/sshd_config", "/etc/passwd", "/var/log/auth.log"], a: 0 },
      { q: "What is the purpose of sudo?", choices: ["Execute commands with elevated privileges", "Monitor CPU", "Delete logs"], a: 0 },
      { q: "Which practice reduces the attack surface?", choices: ["Removing unused services", "Installing more software", "Sharing credentials"], a: 0 },
      { q: "What is a common host-based firewall tool on Linux?", choices: ["iptables", "curl", "tar"], a: 0 },
      { q: "Why are regular updates important?", choices: ["They patch known vulnerabilities", "They improve screen resolution", "They reduce disk usage"], a: 0 }
    ],
    [
      { q: "What does IDS stand for?", choices: ["Intrusion Detection System", "Internet Delivery Service", "Internal Data Store"], a: 0 },
      { q: "Device enforcing perimeter rules:", choices: ["Firewall", "Switch", "Printer"], a: 0 },
      { q: "Protocol for secure remote shell:", choices: ["SSH", "Telnet", "FTP"], a: 0 },
      { q: "Default port for HTTPS:", choices: ["443", "80", "22"], a: 0 },
      { q: "Which tool captures network packets?", choices: ["tcpdump", "vim", "grep"], a: 0 },
      { q: "What does a certificate help establish?", choices: ["Identity and encryption", "Disk partitions", "Usernames"], a: 0 },
      { q: "Which protocol secures web traffic?", choices: ["TLS", "FTP", "SMTP"], a: 0 },
      { q: "What is a common source of security telemetry?", choices: ["System logs", "Power cords", "Printer queues"], a: 0 },
      { q: "What does a SIEM primarily collect?", choices: ["Security events", "Emails", "Music files"], a: 0 },
      { q: "Which port is commonly used by SSH?", choices: ["22", "53", "110"], a: 0 }
    ],
    [
      { q: "What isolates compute resources in cloud?", choices: ["Virtual Machine", "Monitor", "Snapshot"], a: 0 },
      { q: "IAM role purpose:", choices: ["Grant permissions to services", "Backup data", "Monitor performance"], a: 0 },
      { q: "Secure cloud VM practice:", choices: ["Use SSH keys and disable passwords", "Open all ports", "Share credentials"], a: 0 },
      { q: "Security group is similar to:", choices: ["Firewall rules for instances", "Database", "Storage"], a: 0 },
      { q: "What does MFA add to authentication?", choices: ["An extra verification factor", "More storage", "Faster CPU"], a: 0 },
      { q: "Why is least privilege important?", choices: ["It limits access to only what is needed", "It speeds up login", "It removes all logs"], a: 0 },
      { q: "What should be enabled for cloud accounts?", choices: ["Multi-factor authentication", "Auto-delete", "Open ports"], a: 0 },
      { q: "Which cloud service typically stores objects?", choices: ["Object storage", "CPU pooling", "Terminal access"], a: 0 },
      { q: "What is the purpose of encryption at rest?", choices: ["Protect data while stored", "Increase bandwidth", "Reduce cost"], a: 0 },
      { q: "Why back up cloud data?", choices: ["To recover from accidental loss or attack", "To reduce processing time", "To improve networking"], a: 0 }
    ]
  ],

  "Penetration Tester": [
    [
      { q: "Which tool is commonly used for network scanning?", choices: ["nmap", "vim", "docker"], a: 0 },
      { q: "Port scanning helps with:", choices: ["Finding open services", "Editing files", "Backing up data"], a: 0 },
      { q: "What does enumeration often reveal?", choices: ["Usernames and services", "Power usage", "Screen resolution"], a: 0 },
      { q: "Which scan type is commonly used for service discovery?", choices: ["TCP connect scan", "ASCII scan", "ZIP scan"], a: 0 },
      { q: "What does banner grabbing help identify?", choices: ["Service versions", "Disk size", "Keyboard layout"], a: 0 },
      { q: "What is the purpose of host discovery?", choices: ["Find which hosts are online", "Encrypt traffic", "Create backups"], a: 0 },
      { q: "Which protocol is commonly used for ping sweeps?", choices: ["ICMP", "HTTP", "DNS"], a: 0 },
      { q: "What does a SYN scan attempt to do?", choices: ["Probe ports without completing a full handshake", "Delete files", "Install packages"], a: 0 },
      { q: "Why is OS fingerprinting useful?", choices: ["It helps identify target systems", "It removes malware", "It creates hashes"], a: 0 },
      { q: "What is the goal of recon?", choices: ["Gather information before testing", "Create policies", "Write reports"], a: 0 }
    ],
    [
      { q: "A common Linux privilege escalation vector is:", choices: ["SUID binaries", "apt-get update", "ls -la"], a: 0 },
      { q: "Which file often stores sudoers config?", choices: ["/etc/sudoers", "/etc/passwd", "/var/log/auth.log"], a: 0 },
      { q: "What does a cron job do?", choices: ["Runs scheduled commands", "Creates accounts", "Scans ports"], a: 0 },
      { q: "What is a typical privilege escalation path?", choices: ["Weak file permissions", "Strong MFA", "Updated software"], a: 0 },
      { q: "What does PATH manipulation abuse?", choices: ["Command resolution order", "Disk formatting", "Firewall rules"], a: 0 },
      { q: "Why inspect /etc/passwd?", choices: ["To understand users and accounts", "To view logs", "To update kernels"], a: 0 },
      { q: "Why review sudoers carefully?", choices: ["To find over-privileged users", "To install packages", "To query DNS"], a: 0 },
      { q: "What is the risk of world-writable files?", choices: ["They may be modified by untrusted users", "They are always encrypted", "They are always harmless"], a: 0 },
      { q: "What can a writable cron entry lead to?", choices: ["Privilege escalation", "Faster scanning", "Lower bandwidth"], a: 0 },
      { q: "Which command can help inspect file permissions?", choices: ["ls -l", "ping", "netstat"], a: 0 }
    ],
    [
      { q: "Burp Suite is primarily used for:", choices: ["Web application testing", "File backups", "Network routing"], a: 0 },
      { q: "Which attack targets input validation in web apps?", choices: ["SQL injection", "ARP spoofing", "NFS mount"], a: 0 },
      { q: "What does XSS stand for?", choices: ["Cross-Site Scripting", "XML Secure Syntax", "Xen Server Script"], a: 0 },
      { q: "What is a common goal of CSRF testing?", choices: ["Check state-changing requests are protected", "Verify DNS resolution", "Test disk speed"], a: 0 },
      { q: "Why is parameter tampering useful?", choices: ["It can expose weak server-side validation", "It repairs certificates", "It adds users"], a: 0 },
      { q: "What is an authentication bypass?", choices: ["Bypassing login controls", "Improving password strength", "Deleting logs"], a: 0 },
      { q: "Which protocol is commonly tested for web app security?", choices: ["HTTP/HTTPS", "SMTP", "SNMP"], a: 0 },
      { q: "What does session fixation involve?", choices: ["Reusing or setting a session identifier", "Encrypting cookies", "Blocking ICMP"], a: 0 },
      { q: "What is a common input validation weakness?", choices: ["Lack of filtering and escaping", "Too much logging", "No encryption"], a: 0 },
      { q: "Why examine error messages?", choices: ["They can reveal internal details", "They remove vulnerabilities", "They improve uptime"], a: 0 }
    ],
    [
      { q: "A proof-of-concept exploit demonstrates:", choices: ["A working vulnerability exploit", "A completed audit", "A policy document"], a: 0 },
      { q: "Which language is common for quick PoCs?", choices: ["Python", "COBOL", "Fortran"], a: 0 },
      { q: "What is a payload in exploit development?", choices: ["Code delivered to the target", "A documentation file", "A logging format"], a: 0 },
      { q: "Why is encoding sometimes needed?", choices: ["To bypass simple filtering", "To make code shorter", "To reduce memory"], a: 0 },
      { q: "What is a common framework for rapid exploitation?", choices: ["Metasploit", "Excel", "Photoshop"], a: 0 },
      { q: "What does a post-exploitation step often do?", choices: ["Maintain access or gather data", "Restore backups", "Format disks"], a: 0 },
      { q: "Why test in a controlled environment?", choices: ["To reduce collateral impact", "To increase noise", "To avoid documentation"], a: 0 },
      { q: "What is a common way to deliver a payload?", choices: ["A crafted request or file", "A printout", "An email signature"], a: 0 },
      { q: "Why document exploit steps?", choices: ["To reproduce and communicate findings", "To hide data", "To improve typing"], a: 0 },
      { q: "What is the purpose of a PoC?", choices: ["Demonstrate a vulnerability exists", "Replace a report", "Delete evidence"], a: 0 }
    ],
    [
      { q: "Engagement-style pentests emulate:", choices: ["Real-world attack scenarios", "Unit tests", "Static code only"], a: 0 },
      { q: "Reporting after an engagement should include:", choices: ["Findings and remediation steps", "Only praise", "Raw packet captures only"], a: 0 },
      { q: "What is a rules-of-engagement document?", choices: ["A scope and boundary agreement", "A coding standard", "A patch list"], a: 0 },
      { q: "Why define scope clearly?", choices: ["To avoid testing unintended systems", "To speed up coding", "To hide vulnerabilities"], a: 0 },
      { q: "What should be preserved as evidence?", choices: ["Relevant logs and artifacts", "Only screenshots", "Only notes"], a: 0 },
      { q: "What is the purpose of debriefing?", choices: ["Summarize results and next steps", "Delete evidence", "Close the firewall"], a: 0 },
      { q: "What makes a report actionable?", choices: ["Clear impact and remediation guidance", "Vague language", "Only screenshots"], a: 0 },
      { q: "Why track remediation status?", choices: ["To confirm fixes are completed", "To increase attack surface", "To reduce logs"], a: 0 },
      { q: "What is a common client deliverable?", choices: ["Executive summary and technical findings", "Only source code", "Only malware samples"], a: 0 },
      { q: "Why include risk ratings?", choices: ["To prioritize remediation", "To slow testing", "To hide findings"], a: 0 }
    ]
  ],

  "Security Analyst": [
    [
      { q: "Logs are important because they:", choices: ["Provide event history", "Improve UI", "Compress data"], a: 0 },
      { q: "A common log source is:", choices: ["Syslog/Windows Event Log", "Photos", "Spreadsheets"], a: 0 },
      { q: "Which field usually identifies the host that generated a log?", choices: ["Hostname", "Color", "Font size"], a: 0 },
      { q: "Why normalize logs?", choices: ["To compare events across systems", "To delete data", "To speed up screens"], a: 0 },
      { q: "What is a common log format?", choices: ["JSON", "PNG", "CSV"], a: 0 },
      { q: "What does a timestamp help with?", choices: ["Correlating events", "Changing permissions", "Displaying images"], a: 0 },
      { q: "What is an event?", choices: ["A recorded security or system occurrence", "A file path", "A user profile"], a: 0 },
      { q: "Which log source often tracks authentication events?", choices: ["Auth logs", "Music files", "Calendars"], a: 0 },
      { q: "Why store logs centrally?", choices: ["To simplify analysis and retention", "To make hardware cheaper", "To reduce users"], a: 0 },
      { q: "What is an example of a useful log field?", choices: ["Source IP", "Screen size", "Wallpaper"], a: 0 }
    ],
    [
      { q: "A SIEM helps by:", choices: ["Aggregating and correlating logs", "Editing files", "Serving web content"], a: 0 },
      { q: "An alert rule should aim to:", choices: ["Catch meaningful threats with low noise", "Trigger constantly", "Ignore critical events"], a: 0 },
      { q: "What is correlation?", choices: ["Linking related events across sources", "Wiping logs", "Resetting passwords"], a: 0 },
      { q: "Why tune alert thresholds?", choices: ["To reduce false positives", "To create more data", "To delete alerts"], a: 0 },
      { q: "What is a common SIEM use case?", choices: ["Detecting suspicious login activity", "Editing videos", "Building websites"], a: 0 },
      { q: "A dashboard helps analysts by:", choices: ["Providing summarized visibility", "Rewriting code", "Resetting devices"], a: 0 },
      { q: "What is enrichment?", choices: ["Adding context to events", "Deleting logs", "Emptying caches"], a: 0 },
      { q: "Why is alert fidelity important?", choices: ["It increases trust in detections", "It removes all alerts", "It shortens logs"], a: 0 },
      { q: "What can a good rule reduce?", choices: ["Noise", "Storage", "CPU"], a: 0 },
      { q: "What is one purpose of a playbook?", choices: ["Standardize response steps", "Change passwords automatically", "Disable network ports"], a: 0 }
    ],
    [
      { q: "Triage focuses on:", choices: ["Determining severity and scope", "Designing UIs", "Scheduling meetings"], a: 0 },
      { q: "Good incident documentation does:", choices: ["Record timeline and actions taken", "Delete evidence", "Ignore root cause"], a: 0 },
      { q: "What is the first question in triage?", choices: ["Is the issue active and impacting systems?", "Who wrote the code?", "What is the weather?"], a: 0 },
      { q: "Why classify severity?", choices: ["To prioritize response", "To reduce logging", "To change colors"], a: 0 },
      { q: "What should incident notes capture?", choices: ["Timeline, owners, and actions", "Only department names", "Only code comments"], a: 0 },
      { q: "Why is scope important?", choices: ["It defines the impact range", "It defines color themes", "It defines hardware"], a: 0 },
      { q: "What is a common initial triage step?", choices: ["Confirm the alert and gather context", "Delete all logs", "Reboot everything"], a: 0 },
      { q: "How should evidence be handled?", choices: ["Preserve it carefully and document it", "Delete it quickly", "Share it widely"], a: 0 },
      { q: "What is a common source of supporting evidence?", choices: ["Endpoint and network telemetry", "Coffee orders", "Weather alerts"], a: 0 },
      { q: "Why document every action?", choices: ["To maintain a clear chain of work", "To avoid writing reports", "To hide details"], a: 0 }
    ],
    [
      { q: "Threat intelligence provides:", choices: ["Context about adversaries and IOCs", "Faster builds", "UI themes"], a: 0 },
      { q: "Integrating TI helps prioritize:", choices: ["Alerts and investigations", "Snippets", "CSS"], a: 0 },
      { q: "What is an IOC?", choices: ["Indicator of compromise", "Internal operation checklist", "Input output control"], a: 0 },
      { q: "What is a common source of threat intel?", choices: ["Vendor reports and community feeds", "Printer manuals", "Weather stations"], a: 0 },
      { q: "Why compare IOCs to your environment?", choices: ["To detect or confirm suspicious activity", "To remove alerts", "To reduce budgets"], a: 0 },
      { q: "What is TTP?", choices: ["Tactics, techniques, and procedures", "Temporary test plan", "Technical transfer protocol"], a: 0 },
      { q: "Why is context valuable?", choices: ["It improves analyst decisions", "It deletes traffic", "It shortens logs"], a: 0 },
      { q: "What can threat intelligence help identify?", choices: ["Likely attacker behavior", "File extensions", "Screen sizes"], a: 0 },
      { q: "Why share intel with teams?", choices: ["To improve detection coverage", "To avoid reports", "To reduce CPU"], a: 0 },
      { q: "What is a common enrichment source?", choices: ["IP reputation feeds", "Coffee menus", "Gantt charts"], a: 0 }
    ],
    [
      { q: "Python scripts can help analysts by:", choices: ["Automating repetitive parsing and enrichment", "Replacing SIEM entirely", "Slowing systems"], a: 0 },
      { q: "A good automation step is:", choices: ["Extract indicators from logs", "Delete archives", "Disable alerts"], a: 0 },
      { q: "Why automate repetitive tasks?", choices: ["To save time and reduce mistakes", "To create more alarms", "To remove visibility"], a: 0 },
      { q: "What format is common for structured logs?", choices: ["JSON", "PDF", "PNG"], a: 0 },
      { q: "Which library can help parse CSV data?", choices: ["csv", "socket", "os"], a: 0 },
      { q: "Why normalize data before analysis?", choices: ["To compare values consistently", "To increase packet loss", "To delete files"], a: 0 },
      { q: "What is a common output of an analyst script?", choices: ["A report or alert", "A wallpaper", "A keyboard shortcut"], a: 0 },
      { q: "Why include error handling in automation?", choices: ["To avoid silent failures", "To reduce readability", "To make code longer"], a: 0 },
      { q: "Which system tool can help inspect processes?", choices: ["ps", "grep", "vi"], a: 0 },
      { q: "What does a helper script often improve?", choices: ["Analyst workflow consistency", "Disk size", "Power usage"], a: 0 }
    ]
  ],

  "Incident Responder": [
    [
      { q: "Incident response lifecycle includes:", choices: ["Identification, containment, eradication, recovery", "Design, build, test", "Hire, train, fire"], a: 0 },
      { q: "Containment aims to:", choices: ["Limit ongoing impact", "Create dashboards", "Install printers"], a: 0 },
      { q: "What is the first phase commonly called?", choices: ["Detection or identification", "Containment", "Reporting"], a: 0 },
      { q: "Why is rapid containment important?", choices: ["It reduces spread and impact", "It deletes evidence", "It stops all logging"], a: 0 },
      { q: "What does eradication focus on?", choices: ["Removing the threat from systems", "Creating policies", "Writing slides"], a: 0 },
      { q: "What is recovery meant to restore?", choices: ["Normal operations", "Passwords only", "Printer settings"], a: 0 },
      { q: "What should be documented during response?", choices: ["Timeline and decisions", "Only code commits", "Only passwords"], a: 0 },
      { q: "Why are playbooks useful?", choices: ["They speed up consistent response", "They erase logs", "They replace investigators"], a: 0 },
      { q: "What is an incident?", choices: ["An event that may harm systems or data", "A software version", "A user account"], a: 0 },
      { q: "Why coordinate with legal or HR?", choices: ["To manage obligations and notifications", "To change passwords", "To close tickets"], a: 0 }
    ],
    [
      { q: "Preserving forensic artifacts requires:", choices: ["Chain of custody and write-blocking where applicable", "Deleting logs", "Formatting disks"], a: 0 },
      { q: "A key artifact is:", choices: ["Memory or disk images", "Screenshots only", "Temporary files only"], a: 0 },
      { q: "Why preserve volatile data first?", choices: ["It can disappear quickly", "It is always unimportant", "It is already archived"], a: 0 },
      { q: "What is write-blocking?", choices: ["Preventing writes to a storage device", "Encrypting files", "Compressing logs"], a: 0 },
      { q: "What should be recorded for each artifact?", choices: ["Origin, time, and handling", "Color and size", "Only username"], a: 0 },
      { q: "Why is hash verification useful?", choices: ["It confirms integrity", "It changes data", "It removes evidence"], a: 0 },
      { q: "What is a common forensic source?", choices: ["Disk image", "HTML page", "Presentation slide"], a: 0 },
      { q: "Why document collection steps?", choices: ["To support defensibility", "To delete evidence", "To shorten reports"], a: 0 },
      { q: "What is chain of custody?", choices: ["The documented history of evidence handling", "A list of user accounts", "A firewall rule"], a: 0 },
      { q: "Why preserve memory?", choices: ["It may contain running processes and malware", "It improves network speed", "It stores logs permanently"], a: 0 }
    ],
    [
      { q: "SIEM and endpoint tools help identify:", choices: ["Scope and timeline of incidents", "UI bugs", "Payroll issues"], a: 0 },
      { q: "Correlation across sources improves:", choices: ["Accuracy of investigations", "Disk speed", "Color schemes"], a: 0 },
      { q: "Why compare endpoint and network data?", choices: ["To build a fuller timeline", "To change permissions", "To remove alerts"], a: 0 },
      { q: "What is common at the start of triage?", choices: ["Confirming the alert and impacted assets", "Deleting all logs", "Opening a new project"], a: 0 },
      { q: "What does scope define?", choices: ["The systems and users affected", "The software version only", "The budget"], a: 0 },
      { q: "How can threat hunting help?", choices: ["It can uncover hidden compromise", "It updates hardware", "It deletes files"], a: 0 },
      { q: "Why analyze multiple data sources?", choices: ["To avoid missing context", "To speed up the browser", "To reduce storage"], a: 0 },
      { q: "What is a common indicator of compromise?", choices: ["Suspicious file hash", "Random color", "Code style"], a: 0 },
      { q: "Why track time zones carefully?", choices: ["To accurately align events", "To reset passwords", "To increase CPU"], a: 0 },
      { q: "What is the purpose of a timeline?", choices: ["To reconstruct the sequence of events", "To create a website", "To disable encryption"], a: 0 }
    ],
    [
      { q: "Memory analysis is useful for:", choices: ["Finding in-memory artifacts and running malware", "Changing passwords", "Updating docs"], a: 0 },
      { q: "Basic malware analysis can determine:", choices: ["Intent and persistence methods", "UI layout", "Network latency"], a: 0 },
      { q: "Why study malware persistence?", choices: ["To understand how it survives reboot", "To improve fonts", "To store logs"], a: 0 },
      { q: "What can memory images reveal?", choices: ["Loaded modules and commands", "Only printer status", "Only browser history"], a: 0 },
      { q: "What is a common malware persistence method?", choices: ["Startup registry or service", "Password reset", "Disk compression"], a: 0 },
      { q: "Why analyze strings in a sample?", choices: ["To infer behavior or indicators", "To change the file type", "To increase size"], a: 0 },
      { q: "What is sandboxing used for?", choices: ["Safe detonation and observation", "Deleting artifacts", "Changing passwords"], a: 0 },
      { q: "Why is unpacking sometimes necessary?", choices: ["To inspect obfuscated malware", "To make it smaller", "To improve performance"], a: 0 },
      { q: "What should be captured during analysis?", choices: ["Behavior, indicators, and notes", "Only vendor names", "Only screenshots"], a: 0 },
      { q: "Why document malware findings?", choices: ["To support response and defense", "To hide detection", "To avoid triage"], a: 0 }
    ],
    [
      { q: "Playbooks help teams by:", choices: ["Standardizing response actions", "Replacing training", "Eliminating incidents"], a: 0 },
      { q: "Tabletop exercises test:", choices: ["Roles and decision-making under simulated incidents", "Only code", "Only hardware"], a: 0 },
      { q: "Why run tabletop exercises?", choices: ["To practice coordination and decisions", "To remove policies", "To shorten reports"], a: 0 },
      { q: "What should a playbook include?", choices: ["Roles, steps, and escalation paths", "Only fonts", "Only passwords"], a: 0 },
      { q: "Why review incidents after the fact?", choices: ["To improve readiness and process", "To hide mistakes", "To reduce evidence"], a: 0 },
      { q: "What is a common tabletop objective?", choices: ["Test communication and decision quality", "Delete sensors", "Compress memory"], a: 0 },
      { q: "Why include contacts in playbooks?", choices: ["To speed escalation", "To hide details", "To slow the team"], a: 0 },
      { q: "What should lessons learned produce?", choices: ["Actionable improvements", "More passwords", "Less data"], a: 0 },
      { q: "Why rehearse incident workflows?", choices: ["To reduce confusion under pressure", "To reduce storage", "To bypass controls"], a: 0 },
      { q: "What can improve after-action reviews?", choices: ["Clear ownership and follow-through", "Less documentation", "More guesswork"], a: 0 }
    ]
  ],

  "Security Architect": [
    [
      { q: "Threat modeling primarily helps to:", choices: ["Identify and prioritize risks", "Write code faster", "Create backups"], a: 0 },
      { q: "A common modeling technique is:", choices: ["STRIDE or DREAD", "rm -rf", "iptables"], a: 0 },
      { q: "What does a threat model usually identify?", choices: ["Assets, threats, and mitigations", "Only hardware", "Only vendors"], a: 0 },
      { q: "Which question is central to threat modeling?", choices: ["What could go wrong?", "How much memory is free?", "What color is the logo?"], a: 0 },
      { q: "Why prioritize threats?", choices: ["To focus controls on the highest risk", "To add complexity", "To remove logging"], a: 0 },
      { q: "What is a common output of a threat model?", choices: ["A prioritized list of controls", "A password reset", "A marketing plan"], a: 0 },
      { q: "What does STRIDE stand for?", choices: ["Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, Elevation of Privilege"], a: 0 },
      { q: "Why involve multiple stakeholders?", choices: ["To capture different viewpoints and risks", "To reduce documentation", "To avoid meetings"], a: 0 },
      { q: "What is a trust boundary?", choices: ["A place where trust changes", "A backup location", "A firewall port"], a: 0 },
      { q: "What is a control?", choices: ["A safeguard that reduces risk", "A software bug", "An alert rule"], a: 0 }
    ],
    [
      { q: "Threat models should map:", choices: ["Assets, threats, and controls", "Colors, fonts, and logos", "User lists only"], a: 0 },
      { q: "The output of threat modeling informs:", choices: ["Design and control decisions", "Only marketing", "Only hiring"], a: 0 },
      { q: "Why map data flows?", choices: ["To see how information moves and where it is exposed", "To increase traffic", "To spell names"], a: 0 },
      { q: "What is an asset?", choices: ["Something valuable to protect", "Only a printer", "Only a data center"], a: 0 },
      { q: "What is a control objective?", choices: ["A desired security outcome", "A coding style", "A cost center"], a: 0 },
      { q: "Why document assumptions?", choices: ["To make decisions traceable", "To remove controls", "To simplify architecture"], a: 0 },
      { q: "What is a common mitigation?", choices: ["Segmentation", "Deleting logs", "Refusing updates"], a: 0 },
      { q: "What should architecture decisions reflect?", choices: ["Risk and business context", "Only aesthetics", "Only vendor names"], a: 0 },
      { q: "Why review threat models regularly?", choices: ["Because systems change over time", "Because passwords expire", "Because reports are static"], a: 0 },
      { q: "What can a strong architecture reduce?", choices: ["Attack surface and blast radius", "CPU load", "Storage cost"], a: 0 }
    ],
    [
      { q: "A multi-tier network separates:", choices: ["Presentation, application, and data layers", "Printers and scanners", "Users and admins only"], a: 0 },
      { q: "Segmentation primarily reduces:", choices: ["Attack surface and lateral movement", "Disk usage", "Memory leaks"], a: 0 },
      { q: "Why segment networks?", choices: ["To contain compromise and limit access", "To increase traffic", "To add latencies"], a: 0 },
      { q: "What is a common segmentation boundary?", choices: ["DMZ and internal network", "CPU and memory", "Users and groups"], a: 0 },
      { q: "What does a DMZ host?", choices: ["Externally exposed services", "Only internal backups", "Only database servers"], a: 0 },
      { q: "What is a common control between tiers?", choices: ["Firewall rules", "Printer drivers", "Background images"], a: 0 },
      { q: "Why is east-west traffic important?", choices: ["It can enable lateral movement", "It increases bandwidth", "It reduces logs"], a: 0 },
      { q: "What is microsegmentation?", choices: ["Fine-grained segmentation inside a network", "A backup approach", "A firewall type"], a: 0 },
      { q: "Why place sensitive systems behind a tighter boundary?", choices: ["To reduce exposure", "To renew certificates", "To improve color schemes"], a: 0 },
      { q: "What is a common segmentation goal?", choices: ["Limit blast radius", "Increase login prompts", "Reduce storage"], a: 0 }
    ],
    [
      { q: "Cloud security controls should address:", choices: ["Identity, data protection, and monitoring", "Only cost", "Only performance"], a: 0 },
      { q: "A control example is:", choices: ["IAM roles and least privilege", "Open SSH to all", "Public credentials"], a: 0 },
      { q: "Why use IAM roles?", choices: ["To grant permissions without static credentials", "To increase cost", "To reduce logs"], a: 0 },
      { q: "What is data-at-rest protection?", choices: ["Protecting stored data", "Increasing CPU", "Reducing memory"], a: 0 },
      { q: "Why enable logging in cloud?", choices: ["To detect activity and support investigations", "To improve UI", "To reduce invoices"], a: 0 },
      { q: "What is a common cloud control plane concern?", choices: ["Identity and configuration management", "Color themes", "Printer setup"], a: 0 },
      { q: "Why protect secrets?", choices: ["To avoid unauthorized access", "To increase file size", "To remove alerts"], a: 0 },
      { q: "What does least privilege reduce?", choices: ["Potential impact of compromise", "Storage requirements", "Browser speed"], a: 0 },
      { q: "How can cloud posture be improved?", choices: ["By enforcing configuration baselines", "By deleting all logs", "By disabling MFA"], a: 0 },
      { q: "Why is monitoring important in cloud?", choices: ["To detect suspicious changes quickly", "To reduce user accounts", "To remove backups"], a: 0 }
    ],
    [
      { q: "Architecture blueprints help teams by:", choices: ["Providing repeatable, documented designs", "Replacing tests", "Ignoring scale"], a: 0 },
      { q: "Good documentation includes:", choices: ["Diagrams, decisions, and assumptions", "Only code", "Only screenshots"], a: 0 },
      { q: "Why include diagrams in architecture docs?", choices: ["To make relationships and boundaries clear", "To add visual noise", "To replace testing"], a: 0 },
      { q: "What is an architectural assumption?", choices: ["A condition taken as true for planning", "A source code file", "A firewall rule"], a: 0 },
      { q: "Why keep documentation current?", choices: ["To reflect system changes accurately", "To reduce costs", "To hide issues"], a: 0 },
      { q: "What is a common blueprint component?", choices: ["Network topology", "Keyboard layout", "Printer queue"], a: 0 },
      { q: "Why include ownership details?", choices: ["To clarify accountability", "To remove complexity", "To reduce storage"], a: 0 },
      { q: "What is a control catalog?", choices: ["A list of implemented safeguards", "A password list", "A deployment log"], a: 0 },
      { q: "Why review architecture periodically?", choices: ["To align with evolving risk and technology", "To increase vendor dependency", "To simplify sharing"], a: 0 },
      { q: "What does good architecture documentation support?", choices: ["Maintenance and governance", "Only marketing", "Only branding"], a: 0 }
    ]
  ],

  "Security Consultant": [
    [
      { q: "A gap analysis compares:", choices: ["Current controls vs desired standards", "Only code quality", "Only performance metrics"], a: 0 },
      { q: "A good assessment outputs:", choices: ["Findings and prioritized remediation", "Only praise", "Only diagrams"], a: 0 },
      { q: "Why perform a gap analysis?", choices: ["To identify missing controls", "To print reports", "To simplify code"], a: 0 },
      { q: "What is a common benchmark?", choices: ["A framework or standard", "A color palette", "A logo"], a: 0 },
      { q: "What should findings include?", choices: ["Current state, impact, and recommendation", "Only owner names", "Only screenshots"], a: 0 },
      { q: "How should remediation be prioritized?", choices: ["By risk and effort", "By file size", "By popularity"], a: 0 },
      { q: "Why validate observations?", choices: ["To improve confidence in results", "To reduce scope", "To hide issues"], a: 0 },
      { q: "What is a common deliverable?", choices: ["Assessment report", "Source code", "Monthly schedule"], a: 0 },
      { q: "Why discuss gaps with stakeholders?", choices: ["To align on expectations and ownership", "To reduce meetings", "To remove evidence"], a: 0 },
      { q: "What can a gap analysis reveal?", choices: ["Process and control maturity issues", "Only hardware failures", "Only software versions"], a: 0 }
    ],
    [
      { q: "Mapping to frameworks (e.g., NIST) helps with:", choices: ["Compliance and control alignment", "Faster builds", "Graphics design"], a: 0 },
      { q: "A framework mapping should be:", choices: ["Actionable and traceable", "Vague", "Confidential only"], a: 0 },
      { q: "Why map controls to a framework?", choices: ["To show coverage and gaps", "To shorten code", "To change brand"], a: 0 },
      { q: "What is a common framework?", choices: ["NIST CSF", "HTML", "JPEG"], a: 0 },
      { q: "How should mappings be documented?", choices: ["With references and owner details", "With only screenshots", "With no context"], a: 0 },
      { q: "Why is traceability useful?", choices: ["It supports audits and reviews", "It reduces evidence", "It removes controls"], a: 0 },
      { q: "What can a framework mapping help identify?", choices: ["Missing or weak controls", "Printer settings", "Color themes"], a: 0 },
      { q: "What is the goal of a control inventory?", choices: ["To know what safeguards exist", "To delete policies", "To reset passwords"], a: 0 },
      { q: "Why align to a framework?", choices: ["To provide a common language", "To reduce reading", "To avoid notes"], a: 0 },
      { q: "What is a common compliance concern?", choices: ["Evidence and documentation", "Browser settings", "CPU usage"], a: 0 }
    ],
    [
      { q: "Client-facing remediation reports should be:", choices: ["Clear, prioritized, and actionable", "Overly technical only", "Ambiguous"], a: 0 },
      { q: "Good reports include:", choices: ["Steps, impact, and estimated effort", "Only raw logs", "Only vendor names"], a: 0 },
      { q: "Why avoid overly technical wording?", choices: ["To make the report useful to non-technical audiences", "To make it longer", "To lower confidence"], a: 0 },
      { q: "What should an executive summary explain?", choices: ["The key risks and priorities", "Only patch lists", "Only usernames"], a: 0 },
      { q: "Why include effort estimates?", choices: ["To support planning", "To hide complexity", "To avoid ownership"], a: 0 },
      { q: "What is a common report section?", choices: ["Remediation roadmap", "Keyboard shortcuts", "System logs"], a: 0 },
      { q: "Why include impact details?", choices: ["To show business effect", "To reduce urgency", "To remove owners"], a: 0 },
      { q: "How should recommendations be phrased?", choices: ["Clearly and actionably", "Only as questions", "Only as images"], a: 0 },
      { q: "What should a report avoid?", choices: ["Unclear or vague statements", "Actionable steps", "Specific findings"], a: 0 },
      { q: "Why use tables in reports?", choices: ["To organize findings clearly", "To make the report larger", "To replace narrative"], a: 0 }
    ],
    [
      { q: "Prioritized remediation focuses on:", choices: ["High-impact, low-effort fixes first", "Random tasks", "Only cosmetic fixes"], a: 0 },
      { q: "Risk-based prioritization considers:", choices: ["Likelihood and impact", "Color schemes", "Only cost"], a: 0 },
      { q: "Why prioritize quickly?", choices: ["To reduce risk faster", "To increase noise", "To remove evidence"], a: 0 },
      { q: "What is a common low-effort, high-impact fix?", choices: ["Enabling MFA", "Deleting logs", "Changing fonts"], a: 0 },
      { q: "How should risk be evaluated?", choices: ["By impact and likelihood", "By file size", "By popularity"], a: 0 },
      { q: "What does a roadmap usually include?", choices: ["Sequence and ownership", "Only pricing", "Only screenshots"], a: 0 },
      { q: "Why balance effort and value?", choices: ["To maximize risk reduction per effort", "To reduce business value", "To ignore critical issues"], a: 0 },
      { q: "Why include deadlines?", choices: ["To encourage accountability", "To increase confusion", "To remove scope"], a: 0 },
      { q: "What is the point of phased remediation?", choices: ["To manage change safely", "To avoid reporting", "To hide findings"], a: 0 },
      { q: "What should be tracked after remediation?", choices: ["Validation and closure", "Only passwords", "Only media"], a: 0 }
    ],
    [
      { q: "Leading workshops requires:", choices: ["Clear objectives and exercises", "Only slides", "Only reading"], a: 0 },
      { q: "Consulting engagements should deliver:", choices: ["Actionable recommendations and next steps", "Only theories", "Only heatmaps"], a: 0 },
      { q: "Why use workshop activities?", choices: ["To encourage participation and surface issues", "To avoid discussion", "To reduce documentation"], a: 0 },
      { q: "What makes a workshop effective?", choices: ["Clear objectives and facilitation", "Long slides and no discussion", "Vague goals"], a: 0 },
      { q: "Why document workshop outcomes?", choices: ["To convert discussion into action", "To avoid follow-up", "To remove context"], a: 0 },
      { q: "What should client recommendations include?", choices: ["Priority, urgency, and ownership", "Only code", "Only screenshots"], a: 0 },
      { q: "Why include next steps?", choices: ["To keep momentum after the engagement", "To delay the project", "To hide issues"], a: 0 },
      { q: "What is a common consulting artifact?", choices: ["Action plan", "Wallpaper", "Printer driver"], a: 0 },
      { q: "Why align on success criteria?", choices: ["To measure whether objectives were met", "To skip follow-up", "To reduce quality"], a: 0 },
      { q: "What makes recommendations credible?", choices: ["Evidence and rationale", "Vague assumptions", "No stakeholder input"], a: 0 }
    ]
  ],

  "Security Manager": [
    [
      { q: "Security policies provide:", choices: ["Standards and expectations", "Only code", "Only reports"], a: 0 },
      { q: "Policies should be:", choices: ["Clear, maintainable, and communicated", "Hidden", "Overly long only"], a: 0 },
      { q: "Why review policies regularly?", choices: ["To keep them relevant and enforceable", "To make them longer", "To remove ownership"], a: 0 },
      { q: "What is a common policy topic?", choices: ["Password requirements", "Printer setup", "Color branding"], a: 0 },
      { q: "What should policy exceptions do?", choices: ["Document risk and approval", "Avoid review", "Hide impact"], a: 0 },
      { q: "Why communicate policies?", choices: ["To ensure employees understand expectations", "To reduce accountability", "To hide controls"], a: 0 },
      { q: "What is an acceptable policy format?", choices: ["Concise and accessible", "Only legalese", "Only code snippets"], a: 0 },
      { q: "Why involve stakeholders in policy creation?", choices: ["To build buy-in and practicality", "To reduce ownership", "To avoid reviews"], a: 0 },
      { q: "What is a common reason policies fail?", choices: ["Lack of communication or enforcement", "Too much clarity", "Too many examples"], a: 0 },
      { q: "What is a control objective in policy terms?", choices: ["A desired security outcome", "A file path", "A keyboard shortcut"], a: 0 }
    ],
    [
      { q: "A security operations team focuses on:", choices: ["Monitoring, detection, and response", "Only hiring", "Only audits"], a: 0 },
      { q: "Hiring for SOC roles often values:", choices: ["Analytical skills and tooling experience", "Only certificates", "Only seniority"], a: 0 },
      { q: "Why is onboarding important?", choices: ["To reduce ramp-up time and improve readiness", "To remove reporting", "To reduce logs"], a: 0 },
      { q: "What is a common SOC metric?", choices: ["Time to detect", "Color count", "Printer uptime"], a: 0 },
      { q: "Why cross-train analysts?", choices: ["To increase coverage and resilience", "To remove collaboration", "To reduce scope"], a: 0 },
      { q: "What should a SOC prioritize?", choices: ["Meaningful detections and response", "More meetings", "More paperwork"], a: 0 },
      { q: "Why use runbooks?", choices: ["To standardize operational response", "To hide workflows", "To increase confusion"], a: 0 },
      { q: "What is a common alert source?", choices: ["Endpoint and network telemetry", "Only marketing emails", "Only HR forms"], a: 0 },
      { q: "Why measure analyst workload?", choices: ["To balance coverage and fatigue", "To remove quality", "To skip reviews"], a: 0 },
      { q: "What is a common capability gap?", choices: ["Lack of automation or tuning", "Too much logging", "Too many alerts"], a: 0 }
    ],
    [
      { q: "Post-incident reviews aim to:", choices: ["Identify lessons and improvements", "Blame individuals", "Hide details"], a: 0 },
      { q: "A review should result in:", choices: ["Actionable changes to processes or controls", "Only meetings", "Only emails"], a: 0 },
      { q: "Why include a timeline in a review?", choices: ["To reconstruct the event clearly", "To add confusion", "To remove evidence"], a: 0 },
      { q: "What should be discussed in a review?", choices: ["What happened and what should change", "Only who was blamed", "Only budget details"], a: 0 },
      { q: "Why avoid blame-only reviews?", choices: ["To focus on process improvement", "To hide errors", "To skip actions"], a: 0 },
      { q: "What is a good output from a review?", choices: ["A set of corrective actions", "A blank report", "A new firewall rule"], a: 0 },
      { q: "Why track action items?", choices: ["To ensure improvements actually happen", "To reduce effort", "To avoid meetings"], a: 0 },
      { q: "What is an example of a remediation action?", choices: ["Tuning an alert", "Deleting a policy", "Opening a port"], a: 0 },
      { q: "Why involve multiple teams?", choices: ["To capture broader context and ownership", "To reduce accountability", "To slow response"], a: 0 },
      { q: "What is the purpose of lessons learned?", choices: ["Drive continuous improvement", "Erase incidents", "Hide findings"], a: 0 }
    ],
    [
      { q: "KPIs for executives should be:", choices: ["Meaningful and aligned to risk", "Overly technical", "Irrelevant metrics"], a: 0 },
      { q: "Good reporting balances:", choices: ["Context, trend, and recommended actions", "Only numbers", "Only visuals"], a: 0 },
      { q: "Why report trends rather than only snapshots?", choices: ["To show direction and improvement", "To complicate the message", "To avoid action"], a: 0 },
      { q: "What is a common executive KPI?", choices: ["Mean time to contain", "Screen resolution", "File count"], a: 0 },
      { q: "What should executive reporting avoid?", choices: ["Overly technical noise", "Summaries", "Context"], a: 0 },
      { q: "Why tie metrics to risk?", choices: ["To make them relevant to decision-making", "To reduce formatting", "To shorten reports"], a: 0 },
      { q: "What is a common reporting challenge?", choices: ["Selecting the right metrics", "Deleting dashboards", "Blocking alerts"], a: 0 },
      { q: "Why include recommendations?", choices: ["To turn insight into action", "To hide issues", "To reduce work"], a: 0 },
      { q: "What should a good report summarize?", choices: ["Status, risk, and next steps", "Only budgets", "Only logos"], a: 0 },
      { q: "How can reporting become more useful?", choices: ["By tailoring it to the audience", "By avoiding context", "By removing charts"], a: 0 }
    ],
    [
      { q: "Vendor management ensures:", choices: ["Third-party risks are assessed and managed", "Only contracts", "Only invoices"], a: 0 },
      { q: "Budgeting requires:", choices: ["Prioritization and alignment to strategy", "Cutting everything", "Ignoring threats"], a: 0 },
      { q: "Why assess vendor security?", choices: ["To reduce third-party risk", "To reduce hiring", "To simplify onboarding"], a: 0 },
      { q: "What is a common vendor control?", choices: ["Security review or attestation", "Color scheme", "Printer support"], a: 0 },
      { q: "Why align budget to risk?", choices: ["To invest where it matters most", "To reduce accountability", "To avoid planning"], a: 0 },
      { q: "What should procurement include?", choices: ["Security requirements", "Only speed", "Only cost"], a: 0 },
      { q: "Why monitor vendor compliance?", choices: ["To ensure commitments are met", "To reduce paperwork", "To remove controls"], a: 0 },
      { q: "What is a common outcome of good budgeting?", choices: ["Better prioritization and resilience", "Less transparency", "More confusion"], a: 0 },
      { q: "Why review spending regularly?", choices: ["To adjust to changing risk", "To hide issues", "To prevent reports"], a: 0 },
      { q: "What should management balance?", choices: ["Risk, cost, and capability", "Color, layout, and fonts", "Only invoices"], a: 0 }
    ]
  ],

  "Security Director": [
    [
      { q: "A multi-year security strategy should align to:", choices: ["Business goals", "Only IT tasks", "Only audits"], a: 0 },
      { q: "Strategy planning includes:", choices: ["Roadmaps, milestones, and resourcing", "Only policies", "Only meetings"], a: 0 },
      { q: "Why align security to business goals?", choices: ["To make security relevant and supportable", "To reduce scope", "To avoid budgets"], a: 0 },
      { q: "What is a program roadmap?", choices: ["A planned sequence of initiatives", "A password list", "A ticket queue"], a: 0 },
      { q: "Why set milestones?", choices: ["To track progress and accountability", "To confuse teams", "To remove reporting"], a: 0 },
      { q: "What should strategy consider?", choices: ["Risk, resources, and business priorities", "Only code style", "Only server count"], a: 0 },
      { q: "Why involve executives?", choices: ["To secure sponsorship and funding", "To remove oversight", "To avoid planning"], a: 0 },
      { q: "What is the benefit of a long-term view?", choices: ["It supports sustained improvement", "It hides short-term needs", "It removes governance"], a: 0 },
      { q: "What should a strategy document include?", choices: ["Goals, priorities, and measures", "Only hardware inventory", "Only headlines"], a: 0 },
      { q: "Why review strategy periodically?", choices: ["Because priorities and threats change", "Because code never changes", "Because meetings are fixed"], a: 0 }
    ],
    [
      { q: "Governance programs provide:", choices: ["Accountability and control assurance", "Only emails", "Only checklists"], a: 0 },
      { q: "Compliance efforts should be:", choices: ["Practical and risk-focused", "Box-checking only", "Unrelated to risk"], a: 0 },
      { q: "Why establish governance?", choices: ["To clarify accountability and oversight", "To create more tickets", "To reduce budgets"], a: 0 },
      { q: "What is a common governance mechanism?", choices: ["Policy and review cadence", "Printer inventory", "Design mockups"], a: 0 },
      { q: "Why connect compliance to risk?", choices: ["To make it meaningful and actionable", "To avoid controls", "To reduce documentation"], a: 0 },
      { q: "What should a compliance program include?", choices: ["Evidence, ownership, and review", "Only screenshots", "Only branding"], a: 0 },
      { q: "Why monitor control effectiveness?", choices: ["To ensure controls work as intended", "To add more complexity", "To reduce visibility"], a: 0 },
      { q: "What is a common governance challenge?", choices: ["Balancing controls with business needs", "Too much reporting", "Too little data"], a: 0 },
      { q: "Why document decisions?", choices: ["To preserve context and accountability", "To hide risk", "To avoid reviews"], a: 0 },
      { q: "What can governance improve?", choices: ["Consistency and trust", "Color schemes", "Network speed"], a: 0 }
    ],
    [
      { q: "Executive reporting should present:", choices: ["Posture, risk, and recommended decisions", "Only logs", "Only technical detail"], a: 0 },
      { q: "Boards expect metrics that are:", choices: ["High-level and tied to business impact", "Only technical metrics", "Only project plans"], a: 0 },
      { q: "Why tailor reporting for executives?", choices: ["To focus on decisions and impact", "To add technical detail", "To hide findings"], a: 0 },
      { q: "What is a common board-level concern?", choices: ["Residual risk and trend", "File formats", "Printer cost"], a: 0 },
      { q: "Why include recommendations in reports?", choices: ["To support action and allocation", "To reduce clarity", "To shorten summaries"], a: 0 },
      { q: "What should executive reporting avoid?", choices: ["Excessive technical detail", "Actionable insights", "Clear summaries"], a: 0 },
      { q: "What is a common executive metric?", choices: ["Number of critical issues remediated", "CPU clock", "Color count"], a: 0 },
      { q: "Why present trends?", choices: ["To show improvement or deterioration", "To confuse the audience", "To remove context"], a: 0 },
      { q: "What does a good report balance?", choices: ["Risk, context, and action", "Only charts", "Only metrics"], a: 0 },
      { q: "Why use concise language?", choices: ["To improve executive understanding", "To reduce quality", "To increase length"], a: 0 }
    ],
    [
      { q: "Cross-functional initiatives require:", choices: ["Clear ownership and measurable outcomes", "Only directives", "Only budgets"], a: 0 },
      { q: "Driving initiatives means:", choices: ["Removing blockers and aligning teams", "Only meetings", "Only slides"], a: 0 },
      { q: "Why align multiple teams?", choices: ["To execute effectively across functions", "To increase silos", "To reduce collaboration"], a: 0 },
      { q: "What is a common blocker?", choices: ["Unclear ownership", "Too much clarity", "Too much automation"], a: 0 },
      { q: "Why define outcomes clearly?", choices: ["To know when success is achieved", "To avoid metrics", "To hide progress"], a: 0 },
      { q: "What should leadership do when blocked?", choices: ["Remove barriers and support execution", "Ignore the issue", "Delay reporting"], a: 0 },
      { q: "What is a common cross-functional need?", choices: ["Shared planning and communication", "Separate tools only", "Separate data only"], a: 0 },
      { q: "Why review progress regularly?", choices: ["To adjust plans and address issues", "To reduce accountability", "To hide problems"], a: 0 },
      { q: "What makes an initiative measurable?", choices: ["Specific targets and reporting", "A vague goal", "Only a schedule"], a: 0 },
      { q: "What is the leader's role?", choices: ["Provide direction and remove blockers", "Write code", "Review every report"], a: 0 }
    ],
    [
      { q: "Overseeing hiring and budget involves:", choices: ["Prioritizing roles and investments", "Only hiring for seniority", "Only cutting costs"], a: 0 },
      { q: "A director balances:", choices: ["Strategy, execution, and governance", "Only overtime", "Only reports"], a: 0 },
      { q: "Why prioritize roles?", choices: ["To build the right capabilities", "To increase cost", "To reduce trust"], a: 0 },
      { q: "What is a common hiring challenge?", choices: ["Finding high-quality, relevant talent", "Removing all managers", "Deleting policies"], a: 0 },
      { q: "Why align budget to initiatives?", choices: ["To support strategy and execution", "To reduce visibility", "To avoid decisions"], a: 0 },
      { q: "What should leadership measure?", choices: ["Outcome and effectiveness", "Only code length", "Only file count"], a: 0 },
      { q: "Why maintain governance?", choices: ["To sustain control and accountability", "To add noise", "To avoid action"], a: 0 },
      { q: "What is a common leadership skill?", choices: ["Prioritization and communication", "Passive silence", "Ignoring data"], a: 0 },
      { q: "Why review investments regularly?", choices: ["To ensure they still support goals", "To remove reporting", "To hide risk"], a: 0 },
      { q: "What should senior leaders balance?", choices: ["Risk, growth, and resilience", "Only cost", "Only speed"], a: 0 }
    ]
  ]
};
