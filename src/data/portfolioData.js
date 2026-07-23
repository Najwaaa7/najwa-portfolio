// ============================================================
// PORTFOLIO CONTENT — edit everything here.
// Image values are paths relative to /public.
// Replace any image by uploading a file with the same name
// into the matching folder under public/images/.
// ============================================================

export const personal = {
  name: 'Najwa Almutairi',
  positioning: 'Operational Excellence | PMO | Change Management',
  headline: 'Turning Complex Work into Clear, Connected Experiences',
  heroText:
    'A short interactive portfolio showcasing my work across project coordination, communication, operational excellence and change management.',
  heroImage: 'images/profile/profile-photo.jpg',
  contactImage: 'images/profile/contact-photo.jpg',
  floatingLabels: ['PMO', 'Operational Excellence', 'Change Management', 'Communication'],
}

export const navigation = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Strengths', href: '#strengths' },
  { label: 'Projects', href: '#projects' },
  { label: 'Communication', href: '#communication' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'Fit', href: '#fit' },
  { label: 'Contact', href: '#contact' },
]

export const intro = {
  heading: 'Hi Muhammad,',
  paragraphs: [
    'I know your time is valuable, so I created this page instead of sending a traditional CV.',
    'I wanted to give you a closer look at how I think, communicate, coordinate projects and turn ideas into structured, practical outcomes.',
    'I hope you enjoy exploring my work.',
  ],
  signature: 'Najwa Almutairi',
}

export const whyMarketing = {
  title: 'Why Marketing?',
  // Phrases wrapped in *asterisks* are highlighted in purple with an animated underline.
  paragraphs: [
    'Throughout my career, I have always enjoyed *building systems*, communications and ways of working that help teams become more effective.',
    'What excites me about Marketing is not only the campaigns themselves. It is the work behind them: *helping creative teams* stay connected, manage priorities, collaborate effectively and *deliver ideas at scale*.',
    "I believe my background in Operational Excellence, PMO, Change Management and Executive Enablement can bring a valuable and different perspective to *Qiddiya's Marketing team*.",
  ],
}

export const strengths = [
  {
    icon: 'ClipboardList',
    title: 'PMO & Project Coordination',
    description: 'Keeping projects visible, on track and clearly reported.',
    skills: [
      'Project planning',
      'Timeline management',
      'Progress tracking',
      'Risk and issue management',
      'Executive reporting',
    ],
  },
  {
    icon: 'Megaphone',
    title: 'Strategic Communication',
    description: 'Turning information into messages people understand and act on.',
    skills: [
      'Leadership communications',
      'Internal campaigns',
      'Presentations and storytelling',
      'Stakeholder engagement',
      'Audience-focused messaging',
    ],
  },
  {
    icon: 'Settings2',
    title: 'Operational Excellence',
    description: 'Building better, simpler and more connected ways of working.',
    skills: [
      'Process improvement',
      'Governance and ways of working',
      'SharePoint and digital enablement',
      'Knowledge management',
      'Performance tracking',
    ],
  },
  {
    icon: 'Repeat',
    title: 'Change Management',
    description: 'Helping people move through change with clarity and confidence.',
    skills: [
      'Prosci Certified',
      'Change communication',
      'Stakeholder readiness',
      'Adoption and engagement',
      'Training and enablement',
    ],
  },
]

export const projects = [
  {
    id: 'knowledge-hub',
    title: 'Workplace Knowledge Hub',
    category: 'Digital Enablement | Knowledge Management',
    overview:
      'A centralized digital platform designed to connect Workplace teams, improve access to information and create a single source of truth across the department.',
    contribution: [
      'Program leadership',
      'Platform concept and structure',
      'Governance framework',
      'Content architecture',
      'Stakeholder alignment',
      'IT coordination',
      'Page ownership and contributor model',
      'User training and adoption',
    ],
    images: [
      { src: 'images/projects/knowledge-hub-01.png', label: 'Hub homepage' },
      { src: 'images/projects/knowledge-hub-02.png', label: 'Content preparation & migration guide' },
      { src: 'images/projects/knowledge-hub-03.png', label: 'Task tracker dashboard' },
    ],
  },
  {
    id: 'workplace-academy',
    title: 'Workplace Academy',
    category: 'Learning | Capability Development',
    overview:
      'A structured learning initiative created to identify capability needs, support employee development and connect training plans with the skills required across Workplace.',
    contribution: [
      'Coordinated training needs discussions with Workplace leaders',
      'Identified learning priorities across each Workplace specialism',
      'Developed a structured skills and learning catalogue',
      'Supported the creation of training guides for individual Workplace specialisms',
      'Coordinated employee nominations',
      'Managed leadership and executive approvals',
      'Coordinated with HR and Learning & Development',
      'Tracked learning requests and progress',
      'Developed training communications and guidance',
    ],
    images: [
      { src: 'images/projects/workplace-academy-01.png', label: 'Academy launch communication' },
      { src: 'images/projects/workplace-academy-02.png', label: 'Nomination guidance' },
      { src: 'images/projects/workplace-academy-03.png', label: 'Training catalogue' },
    ],
  },
  {
    id: 'organizational-transformation',
    title: 'Workplace Organizational Transformation',
    category: 'Operating Model | Change Support',
    overview:
      'Supported the development and communication of the proposed Workplace organizational structure, helping translate leadership direction into a clear and structured operating model.',
    contribution: [
      'Organizational structure coordination',
      'Role and specialism alignment',
      'Leadership input consolidation',
      'Visual structure development',
      'Change communication support',
      'Coordination across Workplace leadership',
    ],
    images: [
      { src: 'images/projects/organizational-transformation-01.png', label: 'Structure overview' },
    ],
  },
  {
    id: 'dq-office-move',
    title: 'Diplomatic Quarter Office Move',
    category: 'Change Communication | Employee Experience',
    overview:
      'Supported the successful transition to the Diplomatic Quarter office through structured change communication, employee guidance and move-readiness activities.',
    contribution: [
      'Change communication planning',
      'Employee engagement',
      'Move-readiness coordination',
      'Workplace handbook development',
      'Frequently asked questions',
      'Office etiquette and ways of working',
      'Cross-functional coordination',
      'Go-live communication',
    ],
    images: [
      { src: 'images/projects/dq-office-move-01.png', label: 'Ways of Working guide' },
      { src: 'images/projects/dq-office-move-02.png', label: 'DQ space overview' },
      { src: 'images/projects/dq-office-move-03.png', label: "Playmaker's daily flow" },
      { src: 'images/projects/dq-office-move-04.png', label: 'Move-readiness communication' },
      { src: 'images/projects/dq-office-move-05.png', label: 'On-site & online support' },
    ],
  },
]

export const communication = {
  title: 'Communication in Action',
  supporting:
    'A selection of communications and engagement materials developed to connect employees, clarify information and create consistent Workplace experiences.',
  items: [
    {
      title: 'Workplace Ramadan Iftar',
      description:
        'Developed clear and engaging employee communications to support participation and create a consistent experience around the Workplace Ramadan Iftar.',
      images: ['images/communication/ramadan-iftar-01.png'],
    },
    {
      title: 'Workplace Meeting Cadence',
      description:
        'Developed Workplace meeting guidance to improve meeting quality, clarify expectations and encourage more effective collaboration across the department.',
      images: [
        'images/communication/meeting-cadence-01.png',
        'images/communication/meeting-cadence-02.png',
      ],
    },
    {
      title: 'Workplace Values and Alignment Sessions',
      description:
        'Supported the planning and communication of Workplace alignment sessions designed to engage leaders and teams in shaping shared values, priorities and ways of working.',
      images: [
        'images/communication/alignment-session-01.png',
        'images/communication/alignment-session-02.png',
      ],
    },
    {
      title: 'Employee Engagement Communications',
      description:
        'A selection of invitations, internal announcements, leadership communications and engagement materials created to inform and connect Workplace employees.',
      images: [
        'images/communication/employee-engagement-01.png',
        'images/communication/employee-engagement-02.png',
        'images/communication/employee-engagement-03.png',
      ],
    },
  ],
}

export const timeline = {
  title: 'Projects I Have Helped Move Forward',
  items: [
    {
      title: 'Workplace Knowledge Hub',
      description:
        'Led the coordination of a department-wide knowledge platform, from concept and governance to stakeholder alignment and implementation.',
    },
    {
      title: 'Workplace Academy',
      description:
        'Coordinated the development of a structured learning approach covering capability needs, training priorities, approvals and employee development.',
    },
    {
      title: 'Workplace Review and Audit Response',
      description:
        "Worked closely with Workplace leaders and Internal Audit to coordinate the department's review response, consolidate management input and support the development of action plans.",
    },
    {
      title: 'Workplace Leadership Alignment Sessions',
      description:
        'Supported and coordinated leadership alignment sessions focused on Workplace values, priorities and ways of working.',
    },
    {
      title: 'Workforce Planning',
      description:
        'Coordinated workforce planning inputs across Workplace, supporting leadership discussions on roles, priorities and future capability needs.',
    },
    {
      title: 'Recruitment Coordination',
      description:
        'Coordinated recruitment activities across Workplace, including vacancy tracking, role activation, stakeholder follow-up and communication with HR and Talent Acquisition.',
    },
    {
      title: 'Special Projects and Executive Support',
      description:
        'Supported high-priority Workplace initiatives through structured coordination, clear communication, progress tracking and executive reporting.',
    },
  ],
}

export const education = {
  title: 'Education & Professional Certifications',
  supporting:
    'A combination of academic knowledge and professional certifications that has shaped how I communicate, manage projects, support change and solve business challenges.',
  degree: {
    title: "Bachelor's Degree in English Language and Translation",
    institution: 'Effat University',
    description:
      'My academic background strengthened my communication, writing and audience-awareness skills, and taught me how to translate complex information into clear and meaningful messages.',
    logo: 'images/education/effat-university-logo.png',
  },
  certifications: [
    {
      title: 'Prosci Change Management Certification',
      issuer: 'Prosci',
      description:
        'Equipped me with a structured approach to managing the people side of change, supporting stakeholder engagement, communication and successful adoption.',
      image: 'images/certificates/prosci-certificate.png',
    },
    {
      title: 'Project Management Professional, PMP®',
      issuer: 'Project Management Institute',
      description:
        'Strengthened my ability to plan and coordinate projects, manage timelines and risks, and maintain clear visibility across multiple stakeholders.',
      image: 'images/certificates/pmp-certificate.png',
    },
    {
      title: 'Microsoft Certified: Azure Fundamentals',
      issuer: 'Microsoft',
      description:
        'Expanded my understanding of digital platforms and how technology can support connected, efficient and scalable ways of working.',
      image: 'images/certificates/azure-fundamentals-certificate.jpg',
    },
    {
      // Update this title to match the official certificate once the real image is added.
      title: 'Microsoft Business Analyst Professional Certificate',
      issuer: 'Microsoft',
      description:
        'Strengthened my ability to identify business needs, analyze requirements and translate challenges into practical solutions.',
      image: 'images/certificates/business-analyst-certificate.jpg',
    },
    {
      title: 'McKinsey Forward Program',
      issuer: 'McKinsey & Company',
      description:
        'Developed my structured problem-solving, communication, adaptability and collaboration skills.',
      image: 'images/certificates/mckinsey-forward-certificate.jpg',
    },
    {
      // Update this title to match the official certificate once the real image is added.
      title: 'Data Analysis & Reporting using Power BI',
      issuer: 'Microsoft',
      description:
        'Improved my ability to organize data, build clear visual reports and provide better visibility for decision-making.',
      image: 'images/certificates/power-bi-certificate.jpg',
    },
  ],
}

export const toolkit = {
  title: 'Skills & Digital Toolkit',
  supporting:
    'The tools and platforms I use to communicate ideas, coordinate work, organize information and create better ways of working.',
  // AI note — keep wording exactly as approved.
  aiNote:
    'I use AI tools to support research, structure ideas, improve communication, explore solutions and accelerate early-stage concept development, while applying professional judgment and reviewing all final outputs.',
  tools: [
    { name: 'Canva', logo: 'images/tools/canva-logo.png', category: 'Visual design' },
    { name: 'Microsoft Excel', logo: 'images/tools/excel-logo.png', category: 'Tracking & analysis' },
    { name: 'Microsoft PowerPoint', logo: 'images/tools/powerpoint-logo.png', category: 'Presentations' },
    { name: 'Microsoft Power BI', logo: 'images/tools/power-bi-logo.png', category: 'Reporting & dashboards' },
    { name: 'ChatGPT', logo: 'images/tools/chatgpt-logo.png', category: 'AI assistant', ai: true },
    { name: 'Claude', logo: 'images/tools/claude-logo.png', category: 'AI assistant', ai: true },
    { name: 'Google Gemini', logo: 'images/tools/gemini-logo.png', category: 'AI assistant', ai: true },
    { name: 'Microsoft Copilot', logo: 'images/tools/copilot-logo.png', category: 'AI assistant', ai: true },
  ],
}

export const capabilities = {
  title: 'Professional Capabilities',
  items: [
    'Project Coordination',
    'Stakeholder Management',
    'Change Communication',
    'Executive Reporting',
    'Process Improvement',
    'Knowledge Management',
    'Workforce Planning',
    'Recruitment Coordination',
    'Leadership Support',
    'Internal Communication',
    'Workshop Coordination',
    'Presentation Development',
    'Governance',
    'Training Coordination',
    'Cross-Functional Collaboration',
    'Problem Solving',
    'Attention to Detail',
    'Structured Thinking',
  ],
}

export const fit = {
  title: 'How My Experience Aligns',
  supporting: "Connecting the role's needs with the experience I bring.",
  centralPhrase: 'Experience That Transfers',
  roleNeeds: {
    title: 'What the Role Needs',
    items: [
      'PMO and workflow coordination',
      'Cross-functional collaboration',
      'Clear communication',
      'Leadership support',
      'Project planning and tracking',
      'Reporting and visibility',
      'Risk and issue coordination',
      'Continuous improvement',
    ],
  },
  iBring: {
    title: 'What I Bring',
    items: [
      'PMO governance and coordination',
      'Executive and leadership reporting',
      'Stakeholder management',
      'Internal communication and engagement',
      'SharePoint and digital enablement',
      'Change management',
      'Project and action tracking',
      'Process improvement',
      'Experience working across multiple Workplace functions',
    ],
  },
}

export const personalNote = {
  title: 'A Personal Note',
  paragraphs: [
    "Qiddiya is building one of the world's most exciting destinations, and Marketing has a unique role in shaping how that story is experienced and remembered.",
    'While my current experience has been within Workplace, the part of my work I have always enjoyed most is connecting people, ideas and communication to help teams deliver meaningful outcomes.',
    'I would love the opportunity to bring that mindset to Marketing, continue developing within Qiddiya and contribute to the legacy your team is creating.',
  ],
}

export const contact = {
  heading: 'Thank You for Exploring My Work',
  text: 'I would truly appreciate the opportunity to meet with you and discuss how my experience, perspective and passion could contribute to your team.',
  linkedin: 'https://www.linkedin.com/in/najwa-n-almutairi-14133116b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
  email: 'Najwaalmotairi@gmail.com',
  phone: '+966 59 128 1878',
}

export const footer = {
  tagline: 'Designed to share the work, thinking and experiences behind the projects.',
}
