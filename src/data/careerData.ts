export interface Role {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Domain {
  id: string;
  name: string;
  fullName: string;
  description: string;
  icon: string;
  color: string;
  roles: Role[];
}

export const domains: Domain[] = [
  {
    id: "aiml",
    name: "AIML",
    fullName: "Artificial Intelligence & Machine Learning",
    description: "Build intelligent systems that learn and adapt",
    icon: "🤖",
    color: "from-orbit-violet to-orbit-cyan",
    roles: [
      { id: "ml-engineer", title: "Machine Learning Engineer", description: "Design and implement ML models", icon: "🧠" },
      { id: "data-scientist", title: "Data Scientist", description: "Extract insights from complex data", icon: "📊" },
      { id: "ai-researcher", title: "AI Researcher", description: "Push the boundaries of AI capabilities", icon: "🔬" },
      { id: "nlp-engineer", title: "NLP Engineer", description: "Build systems that understand language", icon: "💬" },
      { id: "cv-engineer", title: "Computer Vision Engineer", description: "Teach machines to see and interpret", icon: "👁️" },
      { id: "ai-product-manager", title: "AI Product Manager", description: "Lead AI product development", icon: "📋" },
      { id: "mlops-engineer", title: "MLOps Engineer", description: "Deploy and maintain ML systems at scale", icon: "⚙️" },
      { id: "prompt-engineer", title: "Prompt Engineer", description: "Design effective AI prompts", icon: "✍️" },
    ],
  },
  {
    id: "cse",
    name: "CSE",
    fullName: "Computer Science & Engineering",
    description: "Master the core of computing and software",
    icon: "💻",
    color: "from-orbit-violet to-orbit-pink",
    roles: [
      { id: "software-engineer", title: "Software Engineer", description: "Build scalable software solutions", icon: "⚙️" },
      { id: "full-stack", title: "Full Stack Developer", description: "End-to-end web development", icon: "🌐" },
      { id: "backend", title: "Backend Developer", description: "Server-side architecture expert", icon: "🗄️" },
      { id: "devops", title: "DevOps Engineer", description: "Bridge development and operations", icon: "🔄" },
      { id: "system-architect", title: "System Architect", description: "Design complex system architectures", icon: "🏗️" },
      { id: "security-engineer", title: "Security Engineer", description: "Protect systems from threats", icon: "🔐" },
      { id: "qa-engineer", title: "QA Engineer", description: "Ensure software quality and reliability", icon: "✅" },
      { id: "mobile-developer", title: "Mobile App Developer", description: "Build iOS and Android applications", icon: "📱" },
    ],
  },
  {
    id: "it",
    name: "IT",
    fullName: "Information Technology",
    description: "Manage and optimize IT infrastructure",
    icon: "🖥️",
    color: "from-orbit-cyan to-orbit-green",
    roles: [
      { id: "it-consultant", title: "IT Consultant", description: "Advise on technology solutions", icon: "💼" },
      { id: "network-admin", title: "Network Administrator", description: "Manage network infrastructure", icon: "🌐" },
      { id: "cloud-engineer", title: "Cloud Engineer", description: "Build cloud-native solutions", icon: "☁️" },
      { id: "database-admin", title: "Database Administrator", description: "Manage and optimize databases", icon: "🗃️" },
      { id: "it-manager", title: "IT Manager", description: "Lead IT teams and projects", icon: "👔" },
      { id: "support-engineer", title: "Technical Support Engineer", description: "Solve technical challenges", icon: "🛠️" },
      { id: "sre", title: "Site Reliability Engineer", description: "Ensure system reliability at scale", icon: "📈" },
      { id: "solutions-architect", title: "Solutions Architect", description: "Design enterprise IT solutions", icon: "🏛️" },
    ],
  },
  {
    id: "csd",
    name: "CSD",
    fullName: "Computer Science & Design",
    description: "Blend technology with creative design",
    icon: "🎨",
    color: "from-orbit-amber to-orbit-pink",
    roles: [
      { id: "ui-ux", title: "UI/UX Designer", description: "Create intuitive user experiences", icon: "✨" },
      { id: "frontend", title: "Frontend Developer", description: "Build beautiful web interfaces", icon: "🖼️" },
      { id: "product-designer", title: "Product Designer", description: "Shape digital products", icon: "📱" },
      { id: "motion-designer", title: "Motion Designer", description: "Bring interfaces to life", icon: "🎬" },
      { id: "design-engineer", title: "Design Engineer", description: "Bridge design and engineering", icon: "🔧" },
      { id: "creative-tech", title: "Creative Technologist", description: "Innovate at design-tech intersection", icon: "💡" },
      { id: "3d-artist", title: "3D Artist/Designer", description: "Create 3D models and animations", icon: "🎮" },
      { id: "game-designer", title: "Game Designer", description: "Design engaging game experiences", icon: "🕹️" },
    ],
  },
  {
    id: "csbs",
    name: "CSBS",
    fullName: "Computer Science & Business Systems",
    description: "Apply tech to solve business challenges",
    icon: "📈",
    color: "from-orbit-amber to-orbit-cyan",
    roles: [
      { id: "business-analyst", title: "Business Analyst", description: "Bridge business and technology", icon: "📊" },
      { id: "product-manager", title: "Product Manager", description: "Drive product strategy", icon: "🎯" },
      { id: "tech-consultant", title: "Technology Consultant", description: "Solve business tech problems", icon: "💡" },
      { id: "erp-specialist", title: "ERP Specialist", description: "Implement enterprise solutions", icon: "🏢" },
      { id: "data-analyst", title: "Data Analyst", description: "Turn data into business insights", icon: "📉" },
      { id: "scrum-master", title: "Scrum Master", description: "Lead agile development teams", icon: "🏃" },
      { id: "bi-developer", title: "BI Developer", description: "Build business intelligence solutions", icon: "📊" },
      { id: "salesforce-dev", title: "Salesforce Developer", description: "Customize CRM solutions", icon: "☁️" },
    ],
  },
  {
    id: "ece",
    name: "ECE",
    fullName: "Electronics & Communication Engineering",
    description: "Design electronic systems and communications",
    icon: "📡",
    color: "from-orbit-cyan to-orbit-violet",
    roles: [
      { id: "embedded", title: "Embedded Systems Engineer", description: "Program hardware systems", icon: "🔌" },
      { id: "vlsi", title: "VLSI Design Engineer", description: "Design integrated circuits", icon: "🔲" },
      { id: "iot-engineer", title: "IoT Engineer", description: "Connect the physical world", icon: "🌐" },
      { id: "telecom", title: "Telecom Engineer", description: "Build communication networks", icon: "📶" },
      { id: "hardware", title: "Hardware Engineer", description: "Design electronic hardware", icon: "🖨️" },
      { id: "signal-processing", title: "Signal Processing Engineer", description: "Process and analyze signals", icon: "📈" },
      { id: "rf-engineer", title: "RF Engineer", description: "Design radio frequency systems", icon: "📻" },
      { id: "robotics-engineer", title: "Robotics Engineer", description: "Build autonomous robots", icon: "🤖" },
    ],
  },
  {
    id: "cyber",
    name: "Cyber Security",
    fullName: "Cyber Security & Ethical Hacking",
    description: "Protect systems and data from cyber threats",
    icon: "🛡️",
    color: "from-orbit-green to-orbit-cyan",
    roles: [
      { id: "security-analyst", title: "Security Analyst", description: "Monitor and analyze security threats", icon: "🔍" },
      { id: "penetration-tester", title: "Penetration Tester", description: "Find vulnerabilities in systems", icon: "🎯" },
      { id: "soc-analyst", title: "SOC Analyst", description: "Monitor security operations center", icon: "👁️" },
      { id: "incident-responder", title: "Incident Responder", description: "Handle security breaches", icon: "🚨" },
      { id: "security-architect", title: "Security Architect", description: "Design secure systems", icon: "🏗️" },
      { id: "forensic-analyst", title: "Digital Forensic Analyst", description: "Investigate cyber crimes", icon: "🔬" },
      { id: "compliance-officer", title: "Compliance Officer", description: "Ensure regulatory compliance", icon: "📋" },
      { id: "threat-hunter", title: "Threat Hunter", description: "Proactively find hidden threats", icon: "🎣" },
    ],
  },
  {
    id: "ds",
    name: "Data Science",
    fullName: "Data Science & Analytics",
    description: "Extract insights and value from data",
    icon: "📊",
    color: "from-orbit-pink to-orbit-violet",
    roles: [
      { id: "data-engineer", title: "Data Engineer", description: "Build data pipelines and infrastructure", icon: "🔧" },
      { id: "analytics-engineer", title: "Analytics Engineer", description: "Transform data for analysis", icon: "📐" },
      { id: "bi-analyst", title: "BI Analyst", description: "Create dashboards and reports", icon: "📈" },
      { id: "quantitative-analyst", title: "Quantitative Analyst", description: "Apply math to finance", icon: "🧮" },
      { id: "research-scientist", title: "Research Scientist", description: "Conduct data research", icon: "🔬" },
      { id: "statistician", title: "Statistician", description: "Apply statistical methods", icon: "📉" },
      { id: "market-analyst", title: "Market Research Analyst", description: "Analyze market trends", icon: "🎯" },
      { id: "data-architect", title: "Data Architect", description: "Design data systems", icon: "🏛️" },
    ],
  },
  {
    id: "mech",
    name: "Mechanical",
    fullName: "Mechanical Engineering",
    description: "Design and build mechanical systems",
    icon: "⚙️",
    color: "from-orbit-amber to-orbit-green",
    roles: [
      { id: "mechanical-design", title: "Mechanical Design Engineer", description: "Design mechanical components", icon: "📐" },
      { id: "cad-engineer", title: "CAD/CAM Engineer", description: "Create 3D models and drawings", icon: "🖥️" },
      { id: "manufacturing-engineer", title: "Manufacturing Engineer", description: "Optimize production processes", icon: "🏭" },
      { id: "automotive-engineer", title: "Automotive Engineer", description: "Design vehicle systems", icon: "🚗" },
      { id: "hvac-engineer", title: "HVAC Engineer", description: "Design climate control systems", icon: "❄️" },
      { id: "quality-engineer", title: "Quality Engineer", description: "Ensure product quality", icon: "✅" },
      { id: "project-engineer", title: "Project Engineer", description: "Manage engineering projects", icon: "📋" },
      { id: "maintenance-engineer", title: "Maintenance Engineer", description: "Maintain industrial equipment", icon: "🔧" },
    ],
  },
  {
    id: "civil",
    name: "Civil",
    fullName: "Civil Engineering",
    description: "Build infrastructure and structures",
    icon: "🏗️",
    color: "from-orbit-cyan to-orbit-amber",
    roles: [
      { id: "structural-engineer", title: "Structural Engineer", description: "Design building structures", icon: "🏢" },
      { id: "construction-manager", title: "Construction Manager", description: "Oversee construction projects", icon: "👷" },
      { id: "transportation-engineer", title: "Transportation Engineer", description: "Design roads and transit", icon: "🛣️" },
      { id: "environmental-engineer", title: "Environmental Engineer", description: "Solve environmental challenges", icon: "🌿" },
      { id: "geotechnical-engineer", title: "Geotechnical Engineer", description: "Analyze soil and foundations", icon: "⛏️" },
      { id: "urban-planner", title: "Urban Planner", description: "Plan city development", icon: "🏙️" },
      { id: "surveyor", title: "Land Surveyor", description: "Measure and map land", icon: "🗺️" },
      { id: "estimator", title: "Cost Estimator", description: "Estimate project costs", icon: "💰" },
    ],
  },
  {
    id: "biotech",
    name: "Biotech",
    fullName: "Biotechnology & Bioinformatics",
    description: "Apply technology to biological systems",
    icon: "🧬",
    color: "from-orbit-green to-orbit-pink",
    roles: [
      { id: "bioinformatics", title: "Bioinformatics Scientist", description: "Analyze biological data", icon: "💻" },
      { id: "bioprocess-engineer", title: "Bioprocess Engineer", description: "Develop biological processes", icon: "🔬" },
      { id: "clinical-research", title: "Clinical Research Associate", description: "Conduct clinical trials", icon: "🏥" },
      { id: "pharma-scientist", title: "Pharmaceutical Scientist", description: "Develop new drugs", icon: "💊" },
      { id: "genetic-engineer", title: "Genetic Engineer", description: "Modify genetic material", icon: "🧬" },
      { id: "quality-control", title: "QC Analyst", description: "Test product quality", icon: "✅" },
      { id: "regulatory-affairs", title: "Regulatory Affairs Specialist", description: "Ensure compliance", icon: "📋" },
      { id: "research-associate", title: "Research Associate", description: "Support lab research", icon: "🔬" },
    ],
  },
  {
    id: "eee",
    name: "EEE",
    fullName: "Electrical & Electronics Engineering",
    description: "Design electrical systems and power solutions",
    icon: "⚡",
    color: "from-orbit-amber to-orbit-violet",
    roles: [
      { id: "power-engineer", title: "Power Systems Engineer", description: "Design power grids", icon: "🔌" },
      { id: "control-engineer", title: "Control Systems Engineer", description: "Design automation systems", icon: "🎛️" },
      { id: "electrical-design", title: "Electrical Design Engineer", description: "Design electrical systems", icon: "📐" },
      { id: "renewable-engineer", title: "Renewable Energy Engineer", description: "Develop clean energy", icon: "🌞" },
      { id: "instrumentation", title: "Instrumentation Engineer", description: "Design measurement systems", icon: "📊" },
      { id: "plc-programmer", title: "PLC Programmer", description: "Program industrial controllers", icon: "🖥️" },
      { id: "ev-engineer", title: "EV Engineer", description: "Design electric vehicles", icon: "🚗" },
      { id: "testing-engineer", title: "Testing Engineer", description: "Test electrical equipment", icon: "🔧" },
    ],
  },
  {
    id: "blockchain",
    name: "Blockchain",
    fullName: "Blockchain & Web3",
    description: "Build decentralized applications",
    icon: "🔗",
    color: "from-orbit-violet to-orbit-amber",
    roles: [
      { id: "blockchain-dev", title: "Blockchain Developer", description: "Build blockchain applications", icon: "⛓️" },
      { id: "smart-contract", title: "Smart Contract Developer", description: "Write secure smart contracts", icon: "📝" },
      { id: "defi-developer", title: "DeFi Developer", description: "Build decentralized finance apps", icon: "💰" },
      { id: "nft-developer", title: "NFT Developer", description: "Create NFT platforms", icon: "🎨" },
      { id: "web3-frontend", title: "Web3 Frontend Developer", description: "Build dApp interfaces", icon: "🌐" },
      { id: "solidity-dev", title: "Solidity Developer", description: "Ethereum smart contracts", icon: "💎" },
      { id: "crypto-analyst", title: "Crypto Analyst", description: "Analyze cryptocurrency markets", icon: "📊" },
      { id: "blockchain-architect", title: "Blockchain Architect", description: "Design blockchain systems", icon: "🏗️" },
    ],
  },
  {
    id: "gaming",
    name: "Gaming",
    fullName: "Game Development & Design",
    description: "Create interactive entertainment experiences",
    icon: "🎮",
    color: "from-orbit-pink to-orbit-cyan",
    roles: [
      { id: "game-developer", title: "Game Developer", description: "Code game mechanics", icon: "💻" },
      { id: "unity-developer", title: "Unity Developer", description: "Build games in Unity", icon: "🎯" },
      { id: "unreal-developer", title: "Unreal Developer", description: "Create AAA games", icon: "🎬" },
      { id: "game-artist", title: "Game Artist", description: "Create game visuals", icon: "🎨" },
      { id: "level-designer", title: "Level Designer", description: "Design game levels", icon: "🗺️" },
      { id: "game-qa", title: "Game QA Tester", description: "Test and debug games", icon: "🐛" },
      { id: "vr-developer", title: "VR/AR Developer", description: "Build immersive experiences", icon: "🥽" },
      { id: "game-producer", title: "Game Producer", description: "Manage game development", icon: "📋" },
    ],
  },
  {
    id: "cloud",
    name: "Cloud",
    fullName: "Cloud Computing & DevOps",
    description: "Build and manage cloud infrastructure",
    icon: "☁️",
    color: "from-orbit-cyan to-orbit-pink",
    roles: [
      { id: "aws-architect", title: "AWS Solutions Architect", description: "Design AWS infrastructure", icon: "🏗️" },
      { id: "azure-engineer", title: "Azure Cloud Engineer", description: "Build on Microsoft Azure", icon: "☁️" },
      { id: "gcp-engineer", title: "GCP Engineer", description: "Google Cloud solutions", icon: "🌐" },
      { id: "kubernetes-engineer", title: "Kubernetes Engineer", description: "Manage container orchestration", icon: "🐳" },
      { id: "platform-engineer", title: "Platform Engineer", description: "Build internal platforms", icon: "🔧" },
      { id: "terraform-engineer", title: "Terraform Engineer", description: "Infrastructure as code", icon: "📝" },
      { id: "cloud-security", title: "Cloud Security Engineer", description: "Secure cloud systems", icon: "🔐" },
      { id: "finops", title: "FinOps Engineer", description: "Optimize cloud costs", icon: "💰" },
    ],
  },
];

export interface RoadmapData {
  roleExplanation: {
    title: string;
    description: string;
    responsibilities: string[];
    dayInLife: string;
    salaryRange: string;
  };
  skills: {
    name: string;
    importance: string;
    freeCourses: { name: string; platform: string; url: string }[];
  }[];
  projects: {
    title: string;
    description: string;
    skills: string[];
    difficulty: "Beginner" | "Intermediate" | "Advanced";
  }[];
  internships: {
    platform: string;
    description: string;
    url: string;
    tips: string;
  }[];
  linkedInGuide: {
    profileTips: string[];
    networkingStrategies: string[];
    contentIdeas: string[];
    dosAndDonts: { dos: string[]; donts: string[] };
  };
  jobPlatforms: {
    platform: string;
    description: string;
    url: string;
    tips: string;
    bestFor: string;
  }[];
  resumeGuide: {
    sections: string[];
    tips: string[];
    keywords: string[];
    photoTips: string;
  };
  realTimeImplementation: {
    scenario: string;
    implementation: string;
    impact: string;
  }[];
  businessIdeas: {
    idea: string;
    description: string;
    marketPotential: string;
    skills: string[];
  }[];
  notes: {
    title: string;
    content: string;
    resources: string[];
  }[];
}

// Year-specific roadmap data for high-package jobs
const getYear1Roadmap = (): RoadmapData => ({
  roleExplanation: {
    title: "1st Year Foundation Path",
    description: "Your first year is about building rock-solid fundamentals. Focus on programming basics, DSA foundation, and understanding what different roles entail. Don't rush into specialization—explore broadly.",
    responsibilities: [
      "Master one programming language deeply (C++ or Python)",
      "Start Data Structures & Algorithms practice on LeetCode/HackerRank",
      "Build basic programming logic and problem-solving skills",
      "Explore different tech domains to find your interest",
      "Join coding clubs and participate in beginner contests",
    ],
    dayInLife: "Start with 2-3 hours of programming practice daily. Solve 2-3 easy problems on LeetCode. Watch tutorials, take notes, and implement what you learn. Join your college's tech club and attend workshops.",
    salaryRange: "Target Package: ₹6-12 LPA | Top Companies: ₹15-25 LPA | FAANG: ₹30-50 LPA",
  },
  skills: [
    {
      name: "Programming Fundamentals (C++/Python)",
      importance: "Core programming is MUST. Companies like Google, Amazon test basic coding skills. Master loops, functions, OOP concepts. 90% of interview questions need strong fundamentals.",
      freeCourses: [
        { name: "CS50x - Harvard's Introduction to CS", platform: "edX", url: "https://www.edx.org/course/cs50s-introduction-to-computer-science" },
        { name: "Complete C++ Course", platform: "YouTube - CodeWithHarry", url: "https://www.youtube.com/playlist?list=PLu0W_9lII9agpFUAlPFe_VNSlXW5uE0YL" },
        { name: "Python for Beginners", platform: "freeCodeCamp", url: "https://www.freecodecamp.org/learn/scientific-computing-with-python/" },
      ],
    },
    {
      name: "Data Structures & Algorithms (Basics)",
      importance: "DSA is the gateway to product companies. Start with Arrays, Strings, LinkedList, Stacks, Queues. Amazon asks 2-3 DSA questions in every interview round.",
      freeCourses: [
        { name: "Strivers A2Z DSA Sheet", platform: "TakeUForward", url: "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2" },
        { name: "DSA using C++", platform: "YouTube - Apna College", url: "https://www.youtube.com/playlist?list=PLfqMhTWNBTe0b2nM6JHVCnAkhQRGiZMSJ" },
        { name: "NeetCode 150", platform: "NeetCode", url: "https://neetcode.io/practice" },
      ],
    },
    {
      name: "Git & GitHub",
      importance: "Version control is industry standard. Every tech company uses Git. Your GitHub profile becomes your portfolio. Recruiters check your contributions.",
      freeCourses: [
        { name: "Git & GitHub Crash Course", platform: "YouTube - Traversy Media", url: "https://www.youtube.com/watch?v=SWYqp7iY_Tc" },
        { name: "Introduction to Git and GitHub", platform: "Coursera - Google", url: "https://www.coursera.org/learn/introduction-git-github" },
      ],
    },
    {
      name: "Computer Science Fundamentals",
      importance: "OS, DBMS, Computer Networks are asked in every tech interview. TCS, Infosys to Google—everyone tests CS fundamentals.",
      freeCourses: [
        { name: "Operating Systems", platform: "YouTube - Gate Smashers", url: "https://www.youtube.com/playlist?list=PLxCzCOWd7aiGz9donHRrE9I3Mwn6XdP8p" },
        { name: "Database Management System", platform: "YouTube - Gate Smashers", url: "https://www.youtube.com/playlist?list=PLxCzCOWd7aiFAN6I8CuViBuCdJgiOkT2Y" },
      ],
    },
  ],
  projects: [
    {
      title: "Personal Portfolio Website",
      description: "Build your first portfolio using HTML, CSS, JavaScript. Host on GitHub Pages. This becomes your online identity for recruiters.",
      skills: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
      difficulty: "Beginner",
    },
    {
      title: "Calculator/To-Do App",
      description: "Create a functional calculator or to-do list app. Learn DOM manipulation and basic programming logic.",
      skills: ["JavaScript", "DOM", "CSS", "Logic Building"],
      difficulty: "Beginner",
    },
    {
      title: "Number Guessing Game",
      description: "Build a console-based game in C++/Python. Practice loops, conditionals, and random number generation.",
      skills: ["C++/Python", "Logic", "Control Flow"],
      difficulty: "Beginner",
    },
    {
      title: "Student Management System",
      description: "Create a basic CRUD application to manage student records. Learn file handling and data structures.",
      skills: ["OOP", "File Handling", "Data Structures"],
      difficulty: "Beginner",
    },
    {
      title: "Basic Quiz Application",
      description: "Build a quiz app with multiple categories. Practice arrays, functions, and user input handling.",
      skills: ["Arrays", "Functions", "User Input", "Logic"],
      difficulty: "Beginner",
    },
  ],
  internships: [
    {
      platform: "Internshala",
      description: "Best platform for 1st year students. Many companies hire freshers for web dev and content roles.",
      url: "https://internshala.com",
      tips: "Apply for 'Work from Home' internships. Filter by 'Freshers' and start with stipend ₹5000+. Apply to 15-20 per week.",
    },
    {
      platform: "LinkedIn",
      description: "Start building your profile early. Many startups post internships here.",
      url: "https://linkedin.com/jobs",
      tips: "Complete your profile 100%. Add your college, skills, and projects. Follow companies you admire.",
    },
    {
      platform: "College Tech Clubs",
      description: "Join technical clubs, coding cells, and participate in workshops and hackathons.",
      url: "#",
      tips: "Become an active member. Organize events. This builds leadership skills companies value.",
    },
    {
      platform: "SWOC/GirlScript Summer of Code",
      description: "Open source programs for beginners. Get certificates and experience.",
      url: "https://gssoc.girlscript.tech/",
      tips: "Start contributing to beginner-friendly repos. This experience counts more than you think.",
    },
  ],
  linkedInGuide: {
    profileTips: [
      "Create your LinkedIn profile NOW - Don't wait till final year!",
      "Use a professional photo (formal dress, plain background)",
      "Headline: 'B.Tech 1st Year | Aspiring Software Developer | Learning DSA & Web Dev'",
      "Add your college, current learning, and goals in summary",
      "List skills: C++, Python, HTML, CSS, JavaScript, Git",
      "Add any certifications you complete (Coursera, NPTEL)",
    ],
    networkingStrategies: [
      "Connect with 10-15 seniors from your college in tech companies",
      "Follow company pages: Google, Microsoft, Amazon, Flipkart",
      "Follow tech leaders: Raj Shamani, Tanay Pratap, Striver",
      "Join groups: 'Placement Preparation', 'DSA Learners'",
      "Engage with posts - comment thoughtfully, not just 'Nice!'",
    ],
    contentIdeas: [
      "Share your learning journey: 'Day 1 of 100 Days of Code'",
      "Post about completing your first project",
      "Share useful resources you discovered",
      "Celebrate small wins: 'Solved my first 50 LeetCode problems!'",
    ],
    dosAndDonts: {
      dos: [
        "Post consistently - at least 2 times per week",
        "Engage with others' content genuinely",
        "Help juniors when you can",
        "Update profile with every new skill/project",
      ],
      donts: [
        "Don't connect without a personalized message",
        "Avoid controversial topics",
        "Don't lie about skills - be honest",
        "Don't spam connection requests",
      ],
    },
  },
  jobPlatforms: [
    {
      platform: "LeetCode",
      description: "Primary platform for DSA practice. Most interview questions come from here.",
      url: "https://leetcode.com",
      tips: "Start with Easy problems. Do 2-3 daily. Track your progress. Join weekly contests.",
      bestFor: "DSA practice and interview preparation",
    },
    {
      platform: "HackerRank",
      description: "Great for beginners. Many companies use it for initial screening rounds.",
      url: "https://hackerrank.com",
      tips: "Complete skill badges. Participate in hiring challenges. Build your profile.",
      bestFor: "Beginner-friendly practice and certifications",
    },
    {
      platform: "GeeksforGeeks",
      description: "Best resource for CS theory and DSA explanations.",
      url: "https://geeksforgeeks.org",
      tips: "Read articles alongside practice. Use their 'Must Do' problem lists.",
      bestFor: "Learning concepts and theory",
    },
    {
      platform: "CodeChef",
      description: "Competitive programming platform with regular contests.",
      url: "https://codechef.com",
      tips: "Participate in Long Challenge contests. Great for building rating.",
      bestFor: "Competitive programming and contests",
    },
    {
      platform: "Codeforces",
      description: "Advanced competitive programming. Regular contests worldwide.",
      url: "https://codeforces.com",
      tips: "Start after 2-3 months of LeetCode practice. Focus on Div 3/4 contests initially.",
      bestFor: "Building competitive programming skills",
    },
  ],
  resumeGuide: {
    sections: [
      "Contact Info: Email, LinkedIn, GitHub, Phone",
      "Education: B.Tech CSE/IT, College Name, CGPA (if > 7)",
      "Skills: Languages, Tools, Technologies",
      "Projects: 2-3 projects with descriptions",
      "Certifications: Online courses completed",
      "Achievements: Coding contests, hackathons",
      "Extracurricular: Clubs, volunteering",
    ],
    tips: [
      "Keep it 1 page - you're a fresher, not a CEO",
      "Use action verbs: Built, Developed, Implemented, Designed",
      "Quantify wherever possible: 'Solved 100+ DSA problems'",
      "Use a clean template - Harvard, Jake's Resume work great",
      "No spelling errors - proofread 3 times",
      "Save as PDF with proper naming: 'YourName_Resume.pdf'",
    ],
    keywords: ["C++", "Python", "DSA", "Data Structures", "Algorithms", "Git", "GitHub", "HTML", "CSS", "JavaScript", "Problem Solving"],
    photoTips: "For 1st year: Focus on building skills first. When adding photo - use professional headshot, formal attire, plain light background, smile naturally. NO selfies or casual photos.",
  },
  realTimeImplementation: [
    {
      scenario: "E-commerce Website Cart System",
      implementation: "The cart functionality you see on Amazon uses arrays and hash maps. When you add items, it's stored in a data structure. Your DSA practice directly applies here.",
      impact: "Understanding data structures helps you build features used by millions of users daily.",
    },
    {
      scenario: "Social Media Feed Sorting",
      implementation: "Instagram/Twitter feeds use sorting algorithms to show relevant posts. Your understanding of sorting (Quick Sort, Merge Sort) is directly applicable.",
      impact: "Algorithmic thinking helps optimize systems serving billions of users.",
    },
    {
      scenario: "Password Strength Checker",
      implementation: "String manipulation skills help build security features. Checking for special characters, length, patterns - all use string algorithms.",
      impact: "Every login system needs validation. Your string skills make you capable of building secure systems.",
    },
  ],
  businessIdeas: [
    {
      idea: "College Notes Sharing Platform",
      description: "Build a simple website where students can upload and download notes. Monetize through ads or premium features.",
      marketPotential: "Every college has 5000+ students needing notes. Scale to multiple colleges.",
      skills: ["HTML/CSS", "Basic Backend", "File Handling"],
    },
    {
      idea: "Campus Event Management App",
      description: "Help college clubs manage registrations, attendance, and announcements. Solve a real problem in your campus.",
      marketPotential: "Start with your college, expand to nearby colleges. Many fest organizers need this.",
      skills: ["Web Development", "Database Basics", "UI Design"],
    },
    {
      idea: "Coding Practice Tracker",
      description: "Build a dashboard that tracks LeetCode, CodeChef progress in one place. Many students want consolidated tracking.",
      marketPotential: "3 Lakh+ students prepare for placements. Even 1% adoption = huge user base.",
      skills: ["APIs", "Frontend", "Data Visualization"],
    },
  ],
  notes: [
    {
      title: "1st Year Success Mantra",
      content: "Focus on: 1) Master one programming language completely 2) Solve 200+ DSA problems by year end 3) Build 3-4 projects 4) Maintain CGPA > 7.5 5) Start LinkedIn early 6) Join coding communities",
      resources: ["https://takeuforward.org", "https://leetcode.com/problemset/all/"],
    },
    {
      title: "Common Mistakes to Avoid",
      content: "1) Don't start with advanced topics - build basics first 2) Don't copy-paste code - understand it 3) Don't ignore college subjects 4) Don't compare with others 5) Consistency beats intensity",
      resources: ["https://www.geeksforgeeks.org/must-do-coding-questions-for-companies-like-amazon-microsoft-adobe/"],
    },
    {
      title: "Recommended YouTube Channels",
      content: "Striver (TakeUForward) for DSA, Apna College for basics, CodeWithHarry for Hindi content, Traversy Media for web dev, freeCodeCamp for long courses.",
      resources: ["https://www.youtube.com/@takeUforward", "https://www.youtube.com/@ApnaCollegeOfficial"],
    },
  ],
});

const getYear2Roadmap = (): RoadmapData => ({
  roleExplanation: {
    title: "2nd Year Skill Building Path",
    description: "This is your GOLDEN year for skill development. You have time without placement pressure. Master DSA, build impressive projects, get 1-2 internships. Companies start considering 2nd year students for pre-placement offers.",
    responsibilities: [
      "Complete intermediate-advanced DSA (Trees, Graphs, DP)",
      "Choose and master one domain (Web Dev/App Dev/ML/Cloud)",
      "Build 5-6 portfolio-worthy projects",
      "Get at least 1 internship (summer is crucial)",
      "Participate in hackathons and win prizes",
      "Start competitive programming seriously",
    ],
    dayInLife: "Morning: 2 hours DSA practice (Medium problems). Afternoon: College classes + assignments. Evening: 2-3 hours project work or learning new tech. Night: Competitive programming contest or revision. Weekend: Hackathons or long projects.",
    salaryRange: "Target Package: ₹8-15 LPA | Top Companies: ₹20-35 LPA | FAANG: ₹40-60 LPA",
  },
  skills: [
    {
      name: "Advanced DSA (Trees, Graphs, DP)",
      importance: "This is what separates average from top coders. Google, Amazon, Microsoft all ask Graph and DP questions. Master these to crack any interview.",
      freeCourses: [
        { name: "Strivers A2Z DSA Course", platform: "TakeUForward", url: "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2" },
        { name: "Dynamic Programming Playlist", platform: "YouTube - Aditya Verma", url: "https://www.youtube.com/playlist?list=PL_z_8CaSLPWekqhdCPmFohncHwz8TY2Go" },
        { name: "Graph Series", platform: "YouTube - TakeUForward", url: "https://www.youtube.com/playlist?list=PLgUwDviBIf0oE3gA41TKO2H5bHpPd7fzn" },
      ],
    },
    {
      name: "Full Stack Web Development",
      importance: "80% of software jobs involve web technologies. MERN/MEAN stack developers are in huge demand. Average salary: ₹10-25 LPA.",
      freeCourses: [
        { name: "Full Stack Open", platform: "University of Helsinki", url: "https://fullstackopen.com/" },
        { name: "The Odin Project", platform: "TheOdinProject", url: "https://www.theodinproject.com/" },
        { name: "MERN Stack Tutorial", platform: "YouTube - JavaScript Mastery", url: "https://www.youtube.com/c/JavaScriptMastery" },
      ],
    },
    {
      name: "System Design Basics",
      importance: "Senior roles and high-paying jobs require system design knowledge. Start early to have an edge. Companies like Uber, Netflix ask system design questions.",
      freeCourses: [
        { name: "System Design Primer", platform: "GitHub", url: "https://github.com/donnemartin/system-design-primer" },
        { name: "Gaurav Sen System Design", platform: "YouTube", url: "https://www.youtube.com/playlist?list=PLMCXHnjXnTnvo6alSjVkgxV-VH6EPyvoX" },
        { name: "System Design for Beginners", platform: "YouTube - Sudocode", url: "https://www.youtube.com/c/Sudocode" },
      ],
    },
    {
      name: "Cloud Computing (AWS/Azure/GCP)",
      importance: "Cloud is the present and future. Every company is migrating to cloud. AWS certifications add ₹2-5 LPA to your package.",
      freeCourses: [
        { name: "AWS Cloud Practitioner", platform: "AWS", url: "https://aws.amazon.com/training/learn-about/cloud-practitioner/" },
        { name: "Google Cloud Digital Leader", platform: "Google Cloud", url: "https://cloud.google.com/training/cloud-digital-leader" },
        { name: "Azure Fundamentals", platform: "Microsoft", url: "https://learn.microsoft.com/en-us/training/paths/az-900-describe-cloud-concepts/" },
      ],
    },
    {
      name: "Database & SQL",
      importance: "Every application needs a database. SQL is asked in 95% of tech interviews. MongoDB knowledge is bonus for MERN stack roles.",
      freeCourses: [
        { name: "SQL Complete Course", platform: "YouTube - freeCodeCamp", url: "https://www.youtube.com/watch?v=HXV3zeQKqGY" },
        { name: "MongoDB University", platform: "MongoDB", url: "https://university.mongodb.com/" },
        { name: "PostgreSQL Tutorial", platform: "YouTube - Socratica", url: "https://www.youtube.com/playlist?list=PLi01XoE8jYojRqM4qGBF1U90Ee1Ecb5tt" },
      ],
    },
  ],
  projects: [
    {
      title: "Full Stack E-commerce Platform",
      description: "Build Amazon-like website with user auth, product catalog, cart, payments. Use MERN stack. Deploy on AWS/Vercel.",
      skills: ["React", "Node.js", "MongoDB", "Express", "JWT Auth", "Stripe/Razorpay"],
      difficulty: "Intermediate",
    },
    {
      title: "Real-time Chat Application",
      description: "Build WhatsApp-like chat with real-time messaging using Socket.io. Add features like typing indicators, read receipts.",
      skills: ["Socket.io", "Node.js", "React", "MongoDB", "WebSockets"],
      difficulty: "Intermediate",
    },
    {
      title: "Job Board/LinkedIn Clone",
      description: "Create a job posting and application platform. Include user profiles, job search, application tracking.",
      skills: ["Full Stack", "REST APIs", "Database Design", "Search Implementation"],
      difficulty: "Intermediate",
    },
    {
      title: "AI-Powered Content Generator",
      description: "Build a tool that uses OpenAI API to generate content, summaries, or code. Great for showcasing API integration skills.",
      skills: ["API Integration", "React", "Prompt Engineering", "UI/UX"],
      difficulty: "Intermediate",
    },
    {
      title: "Cloud-Native Microservices Project",
      description: "Build a distributed system with multiple microservices. Deploy on Kubernetes/Docker. Shows senior-level thinking.",
      skills: ["Docker", "Kubernetes", "Microservices", "API Gateway", "Cloud"],
      difficulty: "Advanced",
    },
  ],
  internships: [
    {
      platform: "Internshala",
      description: "Apply for Web Development, Software Development internships. Many pay ₹10-25k/month.",
      url: "https://internshala.com",
      tips: "Apply to 30+ internships per week. Customize cover letter for each. Follow up after 1 week.",
    },
    {
      platform: "LinkedIn",
      description: "Direct applications to companies. Reach out to recruiters and hiring managers.",
      url: "https://linkedin.com/jobs",
      tips: "Use 'Easy Apply'. Message HRs directly with your portfolio. Post about your projects regularly.",
    },
    {
      platform: "AngelList (Wellfound)",
      description: "Startup internships with high learning. Many offer pre-placement offers.",
      url: "https://wellfound.com",
      tips: "Startups give more responsibility. Look for funded startups (Series A+). Great for fast learning.",
    },
    {
      platform: "Google Summer of Code (GSoC)",
      description: "Work on open source with stipend $1500-6600. Huge brand value on resume.",
      url: "https://summerofcode.withgoogle.com",
      tips: "Start contributing to target organizations 3-4 months before. Build relationships with maintainers.",
    },
    {
      platform: "MLH Fellowship",
      description: "Remote internship program. Work on open source or with partner companies.",
      url: "https://fellowship.mlh.io",
      tips: "Apply 2-3 months before batch starts. Highlight your projects and community involvement.",
    },
  ],
  linkedInGuide: {
    profileTips: [
      "Update headline: 'Full Stack Developer | 400+ DSA Problems | Open for Internships'",
      "Add Featured section: Pin your best projects with demo links",
      "Update About: Tell your story, skills, and what you're looking for",
      "Add all certifications with verification links",
      "Get recommendations from internship supervisors",
      "Join LinkedIn Premium (free trial) for InMails",
    ],
    networkingStrategies: [
      "Connect with HR and recruiters at target companies",
      "Message seniors who got placed at dream companies - ask for referrals",
      "Engage with company posts - comment insightfully",
      "Share your project demos and learning journey",
      "Attend virtual networking events and webinars",
      "Build relationships before asking for favors",
    ],
    contentIdeas: [
      "Post about completing 500 LeetCode problems",
      "Share project demos with video walkthroughs",
      "Write about your internship learnings",
      "Share interview experiences (without company names)",
      "Create educational content about tech you learned",
      "Document your hackathon experiences",
    ],
    dosAndDonts: {
      dos: [
        "Be consistent - post 3-4 times per week",
        "Engage authentically with others' content",
        "Share failures and learnings, not just successes",
        "Thank people publicly who helped you",
      ],
      donts: [
        "Don't beg for referrals without building relationships first",
        "Avoid being too casual or too formal",
        "Don't share confidential company information",
        "Don't engage in negative discussions",
      ],
    },
  },
  jobPlatforms: [
    {
      platform: "Unstop (formerly D2C)",
      description: "Hackathons, competitions, and internships specifically for students.",
      url: "https://unstop.com",
      tips: "Participate in company-sponsored challenges. Many convert to interviews directly.",
      bestFor: "Hackathons and direct company connections",
    },
    {
      platform: "Cuvette",
      description: "Guaranteed interviews after completing their programs or challenges.",
      url: "https://cuvette.tech",
      tips: "Complete their full stack bootcamp for guaranteed interviews with 150+ companies.",
      bestFor: "Guaranteed interview opportunities",
    },
    {
      platform: "Hired",
      description: "Tech companies come to you. Create profile and get interview requests.",
      url: "https://hired.com",
      tips: "Complete profile thoroughly. Add salary expectations. Keep availability updated.",
      bestFor: "Being discovered by recruiters",
    },
    {
      platform: "Naukri Campus",
      description: "Naukri's platform specifically for freshers and internships.",
      url: "https://www.naukri.com/campus/",
      tips: "Create separate profile from main Naukri. Focus on skills and projects.",
      bestFor: "Fresher-specific opportunities in India",
    },
  ],
  resumeGuide: {
    sections: [
      "Contact: Professional email, LinkedIn, GitHub, Portfolio link",
      "Summary: 2 lines about your expertise and what you bring (optional)",
      "Education: B.Tech, College, CGPA (if > 7.5)",
      "Skills: Languages | Frameworks | Databases | Tools",
      "Experience: Internships with bullet points and metrics",
      "Projects: 3-4 impressive projects with tech stack and impact",
      "Certifications: AWS, Google, Coursera (if relevant)",
      "Achievements: Contest rankings, hackathon wins, scholarships",
    ],
    tips: [
      "ATS-friendly format: No tables, images, headers/footers",
      "Quantify everything: '40% faster load time', 'Served 500+ users'",
      "Use STAR method: Situation, Task, Action, Result",
      "Tailor resume for each company - match keywords from JD",
      "GitHub should have green contribution graph",
      "Portfolio link should work and look professional",
    ],
    keywords: ["MERN Stack", "React.js", "Node.js", "MongoDB", "REST APIs", "Git", "Docker", "AWS", "SQL", "Data Structures", "Algorithms", "System Design", "Agile"],
    photoTips: "Professional headshot mandatory. Wear formal shirt/kurta. Plain light/white background. Good lighting on face. Slight smile. Recent photo (within 6 months).",
  },
  realTimeImplementation: [
    {
      scenario: "Netflix Video Streaming Architecture",
      implementation: "CDNs for content delivery (you learned AWS CloudFront), microservices for different features, load balancing for handling millions of users. Your system design knowledge helps understand this.",
      impact: "Companies pay ₹30-50 LPA for engineers who can design scalable systems like Netflix.",
    },
    {
      scenario: "Zomato Real-time Order Tracking",
      implementation: "WebSockets for real-time updates (like your chat app), GPS integration, efficient database queries for nearby restaurants. Maps API integration.",
      impact: "Real-time systems are highly valued. Every food/delivery startup needs this expertise.",
    },
    {
      scenario: "PhonePe Payment Processing",
      implementation: "Transaction handling with ACID properties, encryption for security, failover systems. Your database and backend knowledge directly applies.",
      impact: "FinTech pays 20-30% higher than regular tech. Your backend skills are goldmine here.",
    },
  ],
  businessIdeas: [
    {
      idea: "SaaS Analytics Dashboard",
      description: "Build a dashboard that helps small businesses track their metrics. Monthly subscription model. Many small businesses need this but can't afford expensive tools.",
      marketPotential: "SaaS market is $200B+. Even small share = significant revenue. MRR model provides stability.",
      skills: ["Full Stack", "Data Visualization", "API Integration", "Payment Integration"],
    },
    {
      idea: "Developer Portfolio Builder",
      description: "One-click portfolio generator from GitHub data. Developers pay ₹299/year for premium themes and features.",
      marketPotential: "10 Lakh+ developers in India alone need portfolios. Low competition in Indian market.",
      skills: ["GitHub API", "Full Stack", "Template Design", "Payment Gateway"],
    },
    {
      idea: "Freelance Project Marketplace",
      description: "Connect students with startups for small projects. Take 10-15% commission. Solve the trust problem.",
      marketPotential: "Indian freelance market growing 30% YoY. Students need opportunities, startups need affordable talent.",
      skills: ["Full Stack", "Payment Processing", "User Verification", "Chat System"],
    },
  ],
  notes: [
    {
      title: "2nd Year Priority List",
      content: "1) 500+ DSA problems (250 Medium, 50 Hard) 2) 1 Full Stack project deployed 3) 1 quality internship 4) 2-3 hackathon participations 5) CGPA > 7 6) Cloud certification 7) Strong GitHub profile",
      resources: ["https://neetcode.io/roadmap", "https://roadmap.sh/full-stack"],
    },
    {
      title: "Internship Conversion Tips",
      content: "1) Be proactive - don't wait for tasks 2) Ask questions but show you tried first 3) Document your work 4) Build relationships with team 5) Exceed expectations 6) Ask for feedback regularly 7) Express interest in PPO",
      resources: ["https://www.levels.fyi/internships/"],
    },
    {
      title: "Building in Public",
      content: "Share your journey on Twitter/LinkedIn. Document learning, failures, wins. Build audience. This creates opportunities - recruiters notice, communities form, collaborations happen.",
      resources: ["https://twitter.com", "https://linkedin.com"],
    },
  ],
});

const getYear3Roadmap = (): RoadmapData => ({
  roleExplanation: {
    title: "3rd Year Placement Preparation Path",
    description: "THE MOST CRITICAL YEAR. Campus placements start. Companies like Amazon, Microsoft, Google visit colleges. Your preparation now determines your package. Focus on interview prep, system design, and converting opportunities.",
    responsibilities: [
      "Complete 600-800 DSA problems (focus on company-specific patterns)",
      "Master System Design for senior roles (₹25+ LPA positions)",
      "Prepare for aptitude tests (most companies have this round)",
      "Practice mock interviews (at least 20-30 before placements)",
      "Apply for off-campus drives simultaneously",
      "Target dream company preparation (know their interview patterns)",
    ],
    dayInLife: "Morning: Mock interview or contest. Afternoon: 3-4 hours focused DSA (hard problems, company-tagged). Evening: System design study + CS fundamentals revision. Night: Aptitude practice + resume refinement. Weekend: Full mock drives.",
    salaryRange: "Target Package: ₹12-25 LPA | Product Companies: ₹25-45 LPA | FAANG/Top Startups: ₹45-80 LPA",
  },
  skills: [
    {
      name: "Company-Specific DSA Patterns",
      importance: "Amazon loves BFS/DFS, Google asks DP, Microsoft tests Trees/Graphs. Knowing patterns = targeted prep = better results. 70% of questions repeat patterns.",
      freeCourses: [
        { name: "NeetCode 150 (Blind 75 Extended)", platform: "NeetCode", url: "https://neetcode.io/roadmap" },
        { name: "Company-tagged Problems", platform: "LeetCode Premium", url: "https://leetcode.com/problemset/all/" },
        { name: "Striver's SDE Sheet", platform: "TakeUForward", url: "https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/" },
      ],
    },
    {
      name: "System Design (HLD + LLD)",
      importance: "₹25+ LPA roles ALWAYS have system design rounds. Design Twitter, Uber, Netflix - these questions decide senior offers. No shortcuts here.",
      freeCourses: [
        { name: "System Design Interview Course", platform: "YouTube - Gaurav Sen", url: "https://www.youtube.com/playlist?list=PLMCXHnjXnTnvo6alSjVkgxV-VH6EPyvoX" },
        { name: "Low Level Design", platform: "YouTube - Concept && Coding", url: "https://www.youtube.com/playlist?list=PL6W8uoQQ2c61X_9e6Net0WdYZidm7zooW" },
        { name: "System Design Primer", platform: "GitHub", url: "https://github.com/donnemartin/system-design-primer" },
      ],
    },
    {
      name: "OS, DBMS, CN (Core CS)",
      importance: "Every single company asks these. Process vs Thread, Normalization, TCP vs UDP - know these cold. TCS to Google, everyone tests CS fundamentals.",
      freeCourses: [
        { name: "Operating Systems One Shot", platform: "YouTube - Love Babbar", url: "https://www.youtube.com/watch?v=bkSWJJZNgf8" },
        { name: "DBMS Complete Course", platform: "YouTube - Gate Smashers", url: "https://www.youtube.com/playlist?list=PLxCzCOWd7aiFAN6I8CuViBuCdJgiOkT2Y" },
        { name: "Computer Networks", platform: "YouTube - Gate Smashers", url: "https://www.youtube.com/playlist?list=PLxCzCOWd7aiGFBD2-2joCpWOLUrDLvVV_" },
      ],
    },
    {
      name: "Behavioral Interview Skills",
      importance: "FAANG companies reject great coders for poor behavioral answers. 'Tell me about yourself', 'Why this company', conflict resolution - prepare 10-15 stories.",
      freeCourses: [
        { name: "Amazon Leadership Principles", platform: "Amazon Jobs", url: "https://www.amazon.jobs/en/principles" },
        { name: "STAR Method Guide", platform: "Indeed", url: "https://www.indeed.com/career-advice/interviewing/how-to-use-the-star-interview-response-technique" },
        { name: "Behavioral Interview Prep", platform: "YouTube - Dan Croitor", url: "https://www.youtube.com/channel/UCw0uQHve23oMWgQcTTpgQsQ" },
      ],
    },
    {
      name: "Aptitude & Verbal Ability",
      importance: "First round elimination for most mass recruiters. TCS, Infosys, Wipro, Cognizant - all have aptitude rounds. Clear this to reach technical rounds.",
      freeCourses: [
        { name: "Aptitude Made Easy", platform: "IndiaBix", url: "https://www.indiabix.com/" },
        { name: "PrepInsta Aptitude", platform: "PrepInsta", url: "https://prepinsta.com/placement-papers/" },
        { name: "CareerRide Aptitude", platform: "CareerRide", url: "https://www.careerride.com/Aptitude-questions-and-answers.aspx" },
      ],
    },
  ],
  projects: [
    {
      title: "Scalable Microservices E-commerce",
      description: "Build production-grade e-commerce with microservices architecture. Include user service, product service, order service, payment gateway. Deploy on AWS/GCP.",
      skills: ["Microservices", "Docker", "Kubernetes", "AWS/GCP", "Message Queues", "API Gateway"],
      difficulty: "Advanced",
    },
    {
      title: "Real-time Collaboration Tool",
      description: "Build Google Docs-like real-time collaboration. Multiple users editing simultaneously. Shows deep understanding of distributed systems.",
      skills: ["WebSockets", "CRDTs/OT", "Real-time Sync", "Node.js", "React"],
      difficulty: "Advanced",
    },
    {
      title: "Video Streaming Platform",
      description: "Build mini YouTube with video upload, transcoding, adaptive streaming. Great for system design discussions.",
      skills: ["Video Processing", "CDN", "HLS Streaming", "Cloud Storage", "Microservices"],
      difficulty: "Advanced",
    },
    {
      title: "High-Frequency Trading Simulator",
      description: "Build a system that processes stock data in real-time and executes trades. Shows understanding of latency-critical systems.",
      skills: ["Low Latency", "Concurrency", "Data Structures", "Algorithms", "WebSockets"],
      difficulty: "Advanced",
    },
    {
      title: "Distributed File System",
      description: "Mini GFS/HDFS implementation. Shows understanding of distributed systems fundamentals crucial for senior roles.",
      skills: ["Distributed Systems", "Consensus Algorithms", "Fault Tolerance", "Networking"],
      difficulty: "Advanced",
    },
  ],
  internships: [
    {
      platform: "Company Internship Programs",
      description: "Amazon Wow, Microsoft Engage, Google STEP, Flipkart Runway, Walmart Global Tech.",
      url: "https://careers.amazon.jobs/en/job-categories/software-development",
      tips: "Apply in August-September for summer internships. Many convert to PPO with ₹30-50 LPA packages.",
    },
    {
      platform: "Off-Campus Applications",
      description: "Don't rely only on campus. Apply directly on company career pages.",
      url: "https://careers.google.com/",
      tips: "Referrals increase chances 10x. Ask LinkedIn connections for referrals. Apply to 50+ companies.",
    },
    {
      platform: "Startup Internships",
      description: "High-growth startups like Razorpay, Zerodha, Cred, Groww offer great packages.",
      url: "https://wellfound.com",
      tips: "Startups move fast. Interview process is 1-2 weeks vs 2-3 months for big companies.",
    },
    {
      platform: "Research Internships",
      description: "Microsoft Research, Google Research, Adobe Research for research-focused roles.",
      url: "https://www.microsoft.com/en-us/research/careers/",
      tips: "Need strong academics (8+ CGPA) and research interest. Great for MS/PhD aspirations.",
    },
  ],
  linkedInGuide: {
    profileTips: [
      "Headline: 'SDE Intern @Company | 700+ DSA | Full Stack | Open for SDE Roles'",
      "Add 'Open to Work' frame (or keep private to recruiters)",
      "Featured: Pin resume, portfolio, top projects with demos",
      "Get 3-5 recommendations from managers, mentors",
      "Skills: Get 99+ endorsements on top skills",
      "Activity: Show consistent engagement (green dot always visible)",
    ],
    networkingStrategies: [
      "Connect with every recruiter from target companies",
      "Message employees for referrals (after building relationship)",
      "Engage with company hiring posts immediately",
      "Join placement-focused groups and WhatsApp communities",
      "Help others - it builds goodwill and visibility",
      "Follow and engage with company engineering blogs",
    ],
    contentIdeas: [
      "Post about interview experiences (anonymized)",
      "Share placement preparation tips that worked",
      "Celebrate offer letters (this attracts more offers)",
      "Write about your internship learning and impact",
      "Create content about DSA tips and tricks",
      "Share system design learnings",
    ],
    dosAndDonts: {
      dos: [
        "Post about accepting offers - companies want successful hires",
        "Tag companies and people appropriately",
        "Keep profile updated with every new achievement",
        "Respond to every message within 24 hours",
      ],
      donts: [
        "Don't share interview questions (breaks NDA)",
        "Don't badmouth companies you interviewed with",
        "Don't lie about offers or packages",
        "Don't spam people with referral requests",
      ],
    },
  },
  jobPlatforms: [
    {
      platform: "Company Career Pages",
      description: "Direct applications have highest conversion. Bookmark and check daily.",
      url: "https://careers.google.com",
      tips: "Apply within first 3 days of posting. Use exact keywords from JD. Follow up after 2 weeks.",
      bestFor: "Direct applications to dream companies",
    },
    {
      platform: "Referral Networks",
      description: "70% of jobs filled through referrals. Build your referral network now.",
      url: "https://linkedin.com",
      tips: "Ask seniors, alumni, LinkedIn connections. Offer to help them too. Be specific about which role.",
      bestFor: "Highest conversion rate applications",
    },
    {
      platform: "Campus Placements",
      description: "Your college's placement cell. Don't underestimate - many top companies visit.",
      url: "#",
      tips: "Attend ALL pre-placement talks. Build relationship with placement coordinator. Prepare company-specific.",
      bestFor: "Guaranteed interviews without external applications",
    },
    {
      platform: "Job Boards",
      description: "Naukri, Indeed, LinkedIn Jobs, Glassdoor for off-campus opportunities.",
      url: "https://naukri.com",
      tips: "Set up job alerts. Apply to 10-15 jobs daily. Track applications in spreadsheet.",
      bestFor: "Volume applications for backup options",
    },
  ],
  resumeGuide: {
    sections: [
      "Contact: Professional email, phone, LinkedIn (custom URL), GitHub, Portfolio",
      "Education: B.Tech, Branch, College, CGPA, Relevant Coursework (optional)",
      "Experience: Internships with impact metrics (STAR format)",
      "Projects: 3-4 best projects with problem-solution-result format",
      "Skills: Categorized - Languages | Frameworks | Tools | Databases",
      "Achievements: Ranks, awards, certifications (only impressive ones)",
    ],
    tips: [
      "One page only - no exceptions for freshers",
      "ATS score > 80% (test on jobscan.co)",
      "Every bullet starts with action verb",
      "Quantify: Numbers make impact believable",
      "Order: Most relevant/impressive first",
      "Customize for each company - match their JD keywords",
      "Remove college address, date of birth, father's name",
    ],
    keywords: ["Microservices", "System Design", "AWS/GCP/Azure", "Docker", "Kubernetes", "React", "Node.js", "Python", "Java", "SQL", "NoSQL", "REST APIs", "GraphQL", "CI/CD", "Agile/Scrum"],
    photoTips: "Mandatory for Indian companies. Studio photo with: White/light blue background, formal attire (blazer/shirt), confident smile, eye-level shot. Size: Passport size. Same photo on LinkedIn.",
  },
  realTimeImplementation: [
    {
      scenario: "Amazon Order Processing System",
      implementation: "Event-driven architecture with message queues. Order service, inventory service, payment service communicating asynchronously. Your microservices project demonstrates this understanding.",
      impact: "Amazon processes 400 orders/second. Engineers who design such systems command ₹50+ LPA packages.",
    },
    {
      scenario: "Google Search Autocomplete",
      implementation: "Trie data structure for prefix matching, distributed caching for speed, real-time updates. Your DSA knowledge of Tries directly applies.",
      impact: "Google handles 8.5 billion searches/day. The autocomplete alone uses multiple DSA concepts you've learned.",
    },
    {
      scenario: "Uber Real-time Matching",
      implementation: "Geospatial indexing, graph algorithms for matching, real-time WebSocket updates. Your graph knowledge and real-time project experience matters.",
      impact: "Uber matches 24 million rides daily. System design knowledge for this gets you ₹40+ LPA offers.",
    },
  ],
  businessIdeas: [
    {
      idea: "Interview Prep Platform",
      description: "AI-powered mock interview platform with real-time feedback. Students pay ₹999-2999 for unlimited mocks. Partner with placement cells.",
      marketPotential: "5 Lakh+ students preparing for placements yearly. Premium pricing possible for high-stakes prep.",
      skills: ["AI/ML", "Full Stack", "Real-time Communication", "Payment Integration"],
    },
    {
      idea: "Referral Network App",
      description: "Platform connecting job seekers with employees who can refer. Employees earn rewards for successful referrals. Solve a real placement pain point.",
      marketPotential: "Recruiters spend $4000+ per hire. Even small commission on successful referrals = significant revenue.",
      skills: ["Full Stack", "Matching Algorithms", "Trust/Verification Systems", "Payment Gateway"],
    },
    {
      idea: "DSA Learning Platform with Gamification",
      description: "Make DSA prep fun with streaks, battles, leaderboards. Freemium model with premium features.",
      marketPotential: "DSA prep market is huge. Students spend ₹20-50k on coaching. Digital platform can undercut pricing.",
      skills: ["Full Stack", "Gamification", "Code Execution Engine", "Leaderboard System"],
    },
  ],
  notes: [
    {
      title: "3rd Year Battle Plan",
      content: "Aug-Sept: Complete DSA revision, apply for internships. Oct-Nov: Mock interviews, company research. Dec-Feb: On-campus season, give everything. Mar-May: Off-campus, backup plans. Never stop till you have the offer you want.",
      resources: ["https://leetcode.com/discuss/career/", "https://www.teamblind.com/"],
    },
    {
      title: "Interview Day Strategy",
      content: "1) Sleep 7+ hours night before 2) Eat light breakfast 3) Reach 30 mins early 4) Carry printed resume copies 5) Be confident but humble 6) Ask clarifying questions 7) Think aloud while coding 8) Test your solution before submitting",
      resources: ["https://interviewing.io/", "https://pramp.com/"],
    },
    {
      title: "Handling Rejections",
      content: "You'll face rejections. Everyone does. Amazon rejects 99% applicants. Learn from each: What went wrong? Practice that topic. Apply again. Many people get into Google on 3rd-4th attempt. Persistence wins.",
      resources: ["https://www.levels.fyi/", "https://www.glassdoor.com/Interview/"],
    },
  ],
});

const getYear4Roadmap = (): RoadmapData => ({
  roleExplanation: {
    title: "4th Year Final Push Path",
    description: "Last chance for campus placements and best time for off-campus applications. If placed, focus on excelling. If not, aggressive off-campus strategy. Also consider higher studies, startups, or freelancing based on your situation.",
    responsibilities: [
      "Convert remaining placement opportunities (if pending)",
      "Aggressive off-campus applications (100+ companies)",
      "Consider higher studies: GRE/GATE preparation",
      "Complete final year project with industry relevance",
      "Build passive income through freelancing/content",
      "Prepare for full-time role transition",
    ],
    dayInLife: "If placed: Focus on learning tech stack of joining company, work on final year project, freelance/build side projects. If not placed: Full-time job hunt mode - 6-8 hours daily on applications, DSA, interviews. Weekend: Mock interviews, portfolio building.",
    salaryRange: "Target Package: ₹15-30 LPA | Dream Companies: ₹30-60 LPA | Top Offers: ₹60-100+ LPA",
  },
  skills: [
    {
      name: "Advanced System Design",
      importance: "Senior roles (₹35+ LPA) always have 2 system design rounds. Design distributed systems, handle scale, discuss trade-offs confidently.",
      freeCourses: [
        { name: "Designing Data-Intensive Applications", platform: "Book + YouTube", url: "https://www.youtube.com/watch?v=PdtlXdse7pw" },
        { name: "ByteByteGo System Design", platform: "YouTube", url: "https://www.youtube.com/c/ByteByteGo" },
        { name: "Alex Xu's System Design", platform: "YouTube", url: "https://www.youtube.com/results?search_query=alex+xu+system+design" },
      ],
    },
    {
      name: "Company Tech Stack Preparation",
      importance: "If joining Amazon, master AWS. If Google, learn GCP. Prepare for Day 1 productivity. Companies love proactive joiners.",
      freeCourses: [
        { name: "AWS Solutions Architect", platform: "AWS Training", url: "https://aws.amazon.com/training/learn-about/architect/" },
        { name: "Google Cloud Professional", platform: "Coursera", url: "https://www.coursera.org/professional-certificates/gcp-cloud-architect" },
        { name: "Azure Administrator", platform: "Microsoft Learn", url: "https://learn.microsoft.com/en-us/certifications/azure-administrator/" },
      ],
    },
    {
      name: "Leadership & Soft Skills",
      importance: "Moving from college to corporate requires mindset shift. Communication, time management, stakeholder handling - these determine career growth.",
      freeCourses: [
        { name: "High Performance Habits", platform: "Book Summary YouTube", url: "https://www.youtube.com/results?search_query=high+performance+habits" },
        { name: "Effective Communication", platform: "Coursera", url: "https://www.coursera.org/learn/wharton-communication-skills" },
        { name: "Time Management for Tech", platform: "YouTube", url: "https://www.youtube.com/results?search_query=time+management+software+engineers" },
      ],
    },
    {
      name: "Financial Literacy",
      importance: "First job = first salary. Learn investing, tax planning, salary negotiation. Making right financial decisions early compounds over career.",
      freeCourses: [
        { name: "Personal Finance Basics", platform: "Zerodha Varsity", url: "https://zerodha.com/varsity/" },
        { name: "Tax Planning for Salaried", platform: "YouTube - CA Rachana Ranade", url: "https://www.youtube.com/c/CArachanaPhadke" },
        { name: "Salary Negotiation", platform: "YouTube - Josh Fluke", url: "https://www.youtube.com/watch?v=u9BoG1n1948" },
      ],
    },
    {
      name: "Emerging Technologies",
      importance: "AI/ML, Blockchain, Web3, Cloud-Native - knowing emerging tech makes you valuable for future roles and internal transfers.",
      freeCourses: [
        { name: "AI for Everyone", platform: "Coursera", url: "https://www.coursera.org/learn/ai-for-everyone" },
        { name: "Blockchain Basics", platform: "Coursera", url: "https://www.coursera.org/learn/blockchain-basics" },
        { name: "Generative AI Learning Path", platform: "Google Cloud", url: "https://www.cloudskillsboost.google/paths/118" },
      ],
    },
  ],
  projects: [
    {
      title: "Production-Grade Final Year Project",
      description: "Make your FYP actually useful. Solve a real problem. Deploy it. Get users. This shows initiative beyond typical students.",
      skills: ["Full Stack", "Cloud Deployment", "User Research", "Product Thinking"],
      difficulty: "Advanced",
    },
    {
      title: "Open Source Contribution",
      description: "Contribute to projects used by millions. 1-2 merged PRs to popular repos (React, Next.js, VS Code) on resume is gold.",
      skills: ["Open Source", "Code Reading", "Collaboration", "Git Advanced"],
      difficulty: "Intermediate",
    },
    {
      title: "AI/ML Integration Project",
      description: "Add AI to any project - ChatGPT integration, image generation, recommendation system. AI skills are premium now.",
      skills: ["API Integration", "Prompt Engineering", "AI/ML Basics", "Product Design"],
      difficulty: "Intermediate",
    },
    {
      title: "Mobile App Publication",
      description: "Publish an app on Play Store/App Store. Having a live app with real users differentiates you massively.",
      skills: ["React Native/Flutter", "App Store Optimization", "User Analytics", "Mobile UI/UX"],
      difficulty: "Advanced",
    },
    {
      title: "Technical Blog/YouTube Channel",
      description: "Start creating content. Write blogs or make videos. This builds authority and attracts opportunities you never imagined.",
      skills: ["Writing", "Video Production", "Teaching", "Personal Branding"],
      difficulty: "Beginner",
    },
  ],
  internships: [
    {
      platform: "Pre-Placement Offers (PPO)",
      description: "If you interned anywhere, push hard for PPO. 60-70% of interns get converted.",
      url: "#",
      tips: "Exceed expectations in last weeks. Build relationships. Express interest to manager. Ask for feedback and act on it.",
    },
    {
      platform: "Off-Campus Drives",
      description: "Don't stop at campus placements. Apply directly to 100+ companies.",
      url: "https://linkedin.com/jobs",
      tips: "Use referrals aggressively. Apply to startups too - many pay ₹15-30 LPA with faster growth.",
    },
    {
      platform: "Freelancing",
      description: "Build income while job hunting. Upwork, Toptal, Freelancer have good tech projects.",
      url: "https://www.toptal.com",
      tips: "Start on Upwork with low rates to build reviews. Move to Toptal for premium clients ($50-100/hour).",
    },
    {
      platform: "Contract Roles",
      description: "6-month contracts often convert to full-time. Lower barrier to entry than direct hiring.",
      url: "https://cutshort.io",
      tips: "Contract roles at good companies still look great on resume. Focus on conversion.",
    },
  ],
  linkedInGuide: {
    profileTips: [
      "Update headline: 'SDE @Company (Joining July) | Ex-Intern @Company | Open to Connect'",
      "Add your upcoming role if placed",
      "Feature your best work: FYP demo, top projects, certifications",
      "Recommendations: Get from internship manager, professors",
      "Creator mode: If building content, enable this",
      "Update location to city of joining company",
    ],
    networkingStrategies: [
      "Connect with everyone at your joining company",
      "Build relationships with team members before Day 1",
      "Network with batch mates joining same company",
      "Maintain relationships with college network - they become referrals later",
      "Follow company leaders and engage with their content",
      "Join relevant Slack/Discord communities",
    ],
    contentIdeas: [
      "Share your placement journey and learnings",
      "Create content helping juniors with preparation",
      "Document your transition from student to professional",
      "Share book summaries, course reviews",
      "Write about your final year project",
      "Post about skills you're learning for new role",
    ],
    dosAndDonts: {
      dos: [
        "Celebrate your offers publicly (tastefully)",
        "Help juniors with guidance and referrals",
        "Share authentic experiences",
        "Build long-term professional relationships",
      ],
      donts: [
        "Don't compare packages publicly",
        "Don't reveal confidential company information",
        "Don't stop networking after getting placed",
        "Don't burn bridges - tech industry is small",
      ],
    },
  },
  jobPlatforms: [
    {
      platform: "Referral-Based Applications",
      description: "Ask friends, seniors, LinkedIn connections at target companies for referrals.",
      url: "https://linkedin.com",
      tips: "Be specific: Share JD, your resume, why you're a fit. Make referrer's job easy.",
      bestFor: "Highest success rate for off-campus applications",
    },
    {
      platform: "Company Career Pages",
      description: "Apply directly. Many companies prefer direct applications over job boards.",
      url: "https://careers.google.com",
      tips: "Follow companies on LinkedIn for job alerts. Apply within first 48 hours of posting.",
      bestFor: "Direct access to hiring pipelines",
    },
    {
      platform: "Startup Job Boards",
      description: "Wellfound, Inc42, YourStory for funded startup opportunities.",
      url: "https://wellfound.com",
      tips: "Series A-C startups offer best balance of stability and growth. ESOP can be valuable.",
      bestFor: "High-growth opportunities with equity upside",
    },
    {
      platform: "Remote Job Platforms",
      description: "Remote.co, We Work Remotely, Turing for international remote opportunities.",
      url: "https://turing.com",
      tips: "International remote jobs pay in USD ($50-100k+). Need strong communication skills.",
      bestFor: "Premium compensation working for global companies",
    },
  ],
  resumeGuide: {
    sections: [
      "Contact: Email, Phone, LinkedIn, GitHub, Portfolio (custom domain preferred)",
      "Summary: 2-3 lines highlighting unique value proposition",
      "Experience: Internships + freelance/contract with metrics",
      "Projects: 3 flagship projects with tech depth and impact",
      "Education: B.Tech with relevant coursework, achievements",
      "Skills: Categorized and honest - only what you can defend in interview",
      "Certifications/Achievements: Only impressive, relevant ones",
    ],
    tips: [
      "Maintain multiple versions for different role types",
      "Update every month with new skills, projects",
      "Use jobscan.co to check ATS compatibility",
      "Have 3-5 people review before sending",
      "PDF format always - name: FirstName_LastName_Resume.pdf",
      "Track every application in spreadsheet",
      "Follow up after 1-2 weeks if no response",
    ],
    keywords: ["System Design", "Distributed Systems", "Microservices", "AWS/GCP/Azure", "Kubernetes", "Docker", "CI/CD", "Full Stack", "TypeScript", "Python", "Java", "Go", "SQL", "NoSQL", "GraphQL", "REST", "Agile", "Scrum"],
    photoTips: "Professional studio photo. Business formal attire. Solid background (white/grey). Confident, approachable expression. Same photo across all platforms for brand consistency. Update photo every 2 years.",
  },
  realTimeImplementation: [
    {
      scenario: "Your Day 1 at Work",
      implementation: "You'll onboard to massive codebases (millions of lines). Your skills in reading code, understanding systems, using Git properly - all directly applicable.",
      impact: "Engineers who ramp up quickly in first 90 days get better projects, faster promotions, bigger raises.",
    },
    {
      scenario: "First Feature Development",
      implementation: "You'll design, implement, test, deploy features used by millions. Your project experience directly transfers. System design knowledge helps understand existing architecture.",
      impact: "Shipping impactful features early builds reputation. Better reputation = better opportunities.",
    },
    {
      scenario: "On-Call and Production Issues",
      implementation: "You'll debug production issues affecting real users. Your DSA debugging skills, system understanding help here. Quick resolution under pressure is valued.",
      impact: "Engineers who handle production well become go-to people. This accelerates career growth.",
    },
  ],
  businessIdeas: [
    {
      idea: "Career Guidance Platform",
      description: "You've navigated placements. Package that knowledge into a product. Mentorship, resources, mock interviews for juniors.",
      marketPotential: "Coaching market is ₹50k+ Cr. Digital-first platform with authentic content can capture share.",
      skills: ["Product Building", "Content Creation", "Community Building", "Marketing"],
    },
    {
      idea: "Tech Education YouTube/Course",
      description: "Create courses on skills you've mastered. Sell on your own platform or partner with existing ones.",
      marketPotential: "YouTube CPM for tech is ₹200-500. Courses sell for ₹999-9999. Passive income potential huge.",
      skills: ["Teaching", "Video Production", "Marketing", "Community"],
    },
    {
      idea: "Developer Tools SaaS",
      description: "You know developer pain points. Build a tool that solves one well. CLI tools, IDE extensions, productivity apps.",
      marketPotential: "Developer tools market is $15B+. Even small tools can generate $10k-100k MRR.",
      skills: ["Product Thinking", "Full Stack", "Developer Experience", "Marketing"],
    },
  ],
  notes: [
    {
      title: "If Placed - Action Items",
      content: "1) Learn joining company's tech stack 2) Complete any remaining certifications 3) Build side projects/income 4) Network with future colleagues 5) Finish FYP with excellence 6) Rest and recharge before corporate life",
      resources: ["https://www.levels.fyi/", "https://www.glassdoor.com/Reviews/"],
    },
    {
      title: "If Not Placed - Emergency Plan",
      content: "1) Don't panic - thousands get placed off-campus 2) 100+ applications this month 3) Daily DSA practice 4) Weekly mock interviews 5) Consider service-based companies as backup 6) Explore higher studies (MS/MBA)",
      resources: ["https://offcampusjobs.in/", "https://freshersjobs.in/"],
    },
    {
      title: "First 90 Days at Work",
      content: "1) Listen more, talk less initially 2) Ask questions - it's expected from freshers 3) Take notes in every meeting 4) Deliver small tasks excellently before big ones 5) Build relationships with team 6) Find a mentor within company",
      resources: ["https://hbr.org/topic/careers", "https://firstround.com/review/"],
    },
  ],
});

export const getRoadmapData = (roleId: string, year: number): RoadmapData => {
  // Return year-specific comprehensive roadmap
  switch (year) {
    case 1:
      return getYear1Roadmap();
    case 2:
      return getYear2Roadmap();
    case 3:
      return getYear3Roadmap();
    case 4:
      return getYear4Roadmap();
    default:
      return getYear3Roadmap();
  }
};
