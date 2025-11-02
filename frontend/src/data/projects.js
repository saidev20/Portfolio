const projects = [
  {
    slug: 'sigma-os',
    title: 'SIGMA OS',
    description:
      'AI-powered desktop assistant built on Ubuntu to automate file organization, application control, and system workflows.',
    tech: ['Python', 'PyQt', 'LLMs', 'Unsloth', 'Ubuntu'],
    role: 'Architect & Developer',
    features:
      'Automates 20+ OS-level tasks via local LLMs, interprets user intent, and executes contextual operations through an intelligent system agent.',
  github: 'https://github.com/saidev20/SIGMA',
    overview:
      'SIGMA OS redefines desktop computing by integrating local AI models into the operating system itself — enabling autonomous task execution, workflow automation, and context-aware assistance.',
    highlights: [
      'Integrated local LLMs for offline inference and contextual understanding',
      'Improved task execution speed by 30% in simulated environments',
      'Supports multimodal command input (voice, text, contextual actions)',
      'Runner: College & Department Level Project Exhibition'
    ]
  },
  {
    slug: 'diabetic-meal-planner',
    title: 'Diabetic Meal Planner',
    description:
      'AI-based meal planner that generates personalized diet charts for diabetic patients using pathology and lifestyle data.',
    tech: ['React', 'Node.js', 'MongoDB', 'Python', 'K-Means Clustering'],
    role: 'ML Engineer, Full-Stack Developer & Team Lead',
    features:
      'Analyzes 100+ health metrics and nutritional profiles to tailor meal plans and improve adherence through intelligent clustering.',
  github: 'https://github.com/saidev20/MiniProject',
    overview:
      'Designed for nutritionists to create precise, data-driven diet recommendations. The system automates dietary analysis and patient plan generation with integrated ML pipelines.',
    highlights: [
      'Improved dietary adherence by 25% (mock feedback-based testing)',
      'Integrated K-Means clustering to optimize nutrient distributions',
      'End-to-end data ingestion to meal plan generation workflow',
      'Winner: Department Project Exhibition'
    ]
  },
  {
    slug: 'ai-timetable-generator',
    title: 'AI Timetable Generator',
    description:
      'Automated scheduling system leveraging genetic algorithms to create conflict-free academic timetables.',
    tech: ['Python', 'QtPy', 'SQLite', 'Genetic Algorithms'],
    role: 'Developer & Algorithm Designer',
    features:
      'Allocates 100+ classes efficiently with zero conflicts and reduces manual scheduling time by 70%.',
  github: 'https://github.com/saidev20/TIMETABLE_DBMS',
    overview:
      'A smart scheduling tool using evolutionary computation to optimize academic timetables. It intelligently resolves clashes and maximizes resource utilization.',
    highlights: [
      'Implemented genetic algorithm for conflict resolution',
      'Interactive GUI using QtPy for visual schedule management',
      'Reduced manual scheduling time by 70%',
      'Supports over 100 class allocations seamlessly'
    ]
  },
  {
    slug: 'startup-web-app',
    title: 'Startup Website (MERN Stack)',
    description:
      'Responsive, production-ready business web application for internal project workflow and team communication.',
    tech: ['React', 'Vite', 'Node.js', 'Express', 'MongoDB', 'Hostinger'],
    role: 'Full-Stack Engineer',
    features:
      'Real-time updates, authentication, admin dashboards, and integrated user workflows for seamless collaboration.',
  github: 'https://github.com/saidev20/AarvathMobitech',
    overview:
      'A dynamic web platform that streamlined project coordination and communication, improving stakeholder engagement and productivity.',
    highlights: [
      'Improved stakeholder engagement by 35%',
      'Secure login and admin dashboards with JWT authentication',
      'Deployed using Hostinger and MongoDB Atlas',
      'Enhanced workflow transparency across teams'
    ]
  },
  {
    slug: 'ai-routing-system',
    title: 'AI Routing System for Logistics',
    description:
      'Multimodal logistics routing platform optimizing routes using real-time geospatial and environmental data.',
    tech: ['Python', 'GeoPandas', 'Weighted Sum Model', 'Flask'],
    role: 'Data Engineer & Full-Stack Developer',
    features:
      'Integrates four transport modes — road, rail, air, and sea — to determine optimal routes using hybrid decision models.',
  github: 'https://github.com/saidev20/HTF-I04',
    overview:
      'Developed an AI-based routing engine that dynamically adapts to traffic, weather, and delay conditions, improving efficiency and decision accuracy in logistics.',
    highlights: [
      'Improved route efficiency by 35% and reduced planning time by 60%',
      'Implemented hybrid Weighted Sum Model with dynamic weights',
      'Geospatial algorithms for multimodal transport integration',
      'Scalable framework for enterprise logistics systems'
    ]
  },
  {
  slug: 'cafe-web-app',
  title: 'Cafe Web App',
  description:
    'A modern, responsive web application for an online café, featuring an intuitive menu browsing experience, efficient order management, and a seamless checkout process.',
  tech: ['React', 'Node.js', 'MongoDB', 'Express', 'CSS Modules'],
  role: 'Full-Stack Developer',
  features:
    'Dynamic menu display, secure user authentication, cart management, and real-time order tracking dashboard.',
  github: 'https://github.com/saidev20',
  overview:
    'Developed an elegant and responsive café ordering platform with full CRUD functionality, improving the customer ordering experience and streamlining backend operations.',
  highlights: [
    'Fully responsive UI optimized for mobile and desktop',
    'Real-time order tracking and interactive cart management',
    'Integrated backend for storing and updating orders efficiently'
        ]
    },
  {
    slug: 'cloth-web-store',
    title: 'Cloth Web Store',
    description:
      'E-commerce platform for clothing and accessories with admin dashboard and user-friendly interface.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    role: 'Full-Stack Developer',
    features:
      'Product listings, secure authentication, admin panel, and order management system.',
  github: 'https://github.com/saidev20/ClothStore-GEM-',
    overview:
      'Developed a complete online store to handle product inventory, authentication, and transactions through a seamless full-stack MERN architecture.',
    highlights: [
      'Responsive and intuitive UI for users and admins',
      'Implemented secure JWT authentication and role-based access',
      'Dynamic product management and order analytics dashboard'
    ]
  }
];

export default projects;
