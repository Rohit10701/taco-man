const portfolioConfig = {
	personal: {
		name: 'Rohit Kumar',
		title: 'Software Engineer',
		location: 'Patna, India',
		email: 'rohitkumar10701@gmail.com',
		bio: 'Experienced Software Engineer specializing in frontend development with expertise in React, Next.js, and modern web technologies.'
	},

	navigation: {
		items: [
			{ id: 'home', label: 'Home', icon: 'Home' },
			{ id: 'experience', label: 'Experience', icon: 'Briefcase' },
			{ id: 'skills', label: 'Skills', icon: 'Code2' },
			{ id: 'projects', label: 'Projects', icon: 'FolderGit2' },
			// { id: 'contact', label: 'Contact', icon: 'ContactIcon' }
		]
	},

	socialLinks: [
		{ icon: 'Mail', href: 'mailto:rohitkumar10701@gmail.com', label: 'Email' },
		{ icon: 'Linkedin', href: 'https://www.linkedin.com/in/rohit-kumar-249110212/', label: 'LinkedIn' },
		{ icon: 'Github', href: 'https://github.com/rohit10701', label: 'GitHub' }
	],

    
        experience: [
          {
            "title": "Software Engineer",
            "company": "Techinfinito",
            "companyType": "FT",
            "period": "May 2024 – Present", 
            "achievements": [
              {
                "text": "Fixed {0} bugs and added {1} features to grocery e-commerce platform",
                "highlights": ["20+", "5+"]
              },
              {
                "text": "Boosted website performance: Lighthouse score from {0} to {1}, reduced loading time from {2} to {3}",
                "highlights": ["4", "80", "12s", "2.5s"]
              },
              {
                "text": "Optimized performance via code splitting, caching, and virtualization"
              },
              {
                "text": "Built efficient admin dashboard with sub-3s load times"
              }
            ]
          },
          {
            "title": "Frontend Developer",
            "company": "Amrutam",
            "companyType": "FT", 
            "period": "Nov 2023 – May 2024",
            "achievements": [
              {
                "text": "Built healthcare consultation platform serving {0} users with video-call support",
                "highlights": ["7,000+"]
              },
              {
                "text": "Developed multi-role admin dashboard supporting {0} user types",
                "highlights": ["5"]
              },
              {
                "text": "Created healthcare questionnaire system using Remix, featuring customizable quiz creation and management"
              }
            ]
          }
        ],
       
	skills: [
		{
			category: 'Languages',
			items: ['Python', 'JavaScript', 'TypeScript']
		},
		{
			category: 'Frontend',
			items: [
				'React.js',
				'Next.js',
				'Remix',
				'React Native',
				'HTML',
				'CSS',
				'Tailwind'
			]
		},
        {
			category: 'Backend',
			items: [
				'Node.js',
				'ExpressJS',
				'MongoDB',
				'SQL',
				'Redis'
			]
		},
		{
			category: 'Tools',
			items: ['Git', 'AWS', 'Firebase', 'Postman']
		}
	],

	projects: [
		{
			title: 'Nimbus API Sandbox ( In dev )',
			link: 'https://github.com/Rohit10701/nimbus',
			technologies: 'API Development and Testing Platform',
			bulletPoints: [
				'Schema-based API generation with CRUD operations',
				'Advanced authentication support (SSO, JWT, cookies)',
				'Workspace management with import/export capabilities',
				'Complete API testing suite with headers, auth, params, and body support',
				'Features include mock APIs, versioning, latency simulation, and security headers'
			]
		},
		{
			title: 'tac-form',
			link: 'https://www.npmjs.com/package/tac-form',
			technologies: 'React.js Library for Dynamic Forms',
			description:
				'A powerful, JSON Schema-based library for creating dynamic forms in React applications with features including:',
			bulletPoints: [
				'Dynamic form generation based on JSON configuration',
				'Support for multiple field types and conditional rendering',
				'Form-level and field-level validation',
				'Integration with external UI libraries and dark mode support'
			]
		},
		{
			title: 'Quick Chat',
			link: 'https://github.com/Rohit10701/quick-chat/tree/config',
			technologies: 'React.js, TypeScript, Node.js, Kafka, Redis, Docker',
			bulletPoints: [
				'Implemented a microservices architecture with 3 distinct services, ensuring high scalability and maintainability.',
				'Achieved real-time messaging using Socket.io, intended to support thousands of concurrent users with low-latency communication.',
				'Utilized Apache Kafka to handle potentially 1 million messages per day, ensuring reliable message delivery and processing.',
				'Designed the system to handle a high number of active connections simultaneously, targeting 99% uptime.'
			]
		},
		{
			title: 'Collab',
			link: 'https://admirable-macaron-282c5d.netlify.app/',
			technologies: 'React.js, Next.js, Bootstrap, Firebase, socket.io',
			bulletPoints: [
				'Collab offers a real-time anonymous mode (sub-100ms) for coding without an account.',
				'Built with React.js and Next.js for fast performance, achieving page load times under 2 seconds.',
				'Uses Firebase for real-time data synchronization, processing over 20,000 updates per day.'
			]
		},
		{
			title: 'Breadit',
			link: 'https://github.com/Rohit10701/breadit',
			technologies: 'React.js, Next.js, TypeScript, Tailwind, AWS (RDS), Redis, Prisma, Shadcn-ui',
			bulletPoints: [
				'Developed a community platform with seamless infinite scrolling, enabling uninterrupted content browsing.',
				'Provides advanced user authentication, ensuring secure and personalized experiences for active users.',
				'Features high-speed caching to enhance performance and load times, reducing page load times from 2sec to 1.5sec.'
			]
		},
		{
			title: 'BrushLess-Paint',
			link: 'https://github.com/Rohit10701/BrushLess-Paint',
			technologies: 'Python-based Eye-Tracking Drawing Application',
			description:
				'An innovative application that enables drawing using eye movements, bridging human-computer interaction through computer vision.',
			readMoreLink: 'https://medium.com/@Rk10701/application-that-can-draw-with-eyes-84956179cdea'
		}
	],

	contact: {
		location: 'Patna, India',
		email: 'rohitkumar10701@gmail.com',
		leetcode: 'https://leetcode.com/u/taco-man/'
	}
}


export default portfolioConfig
