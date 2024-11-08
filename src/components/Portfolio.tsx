'use client'
import React, { useState, useEffect } from 'react'
import {
	Mail,
	ExternalLink,
	Home,
	Briefcase,
	Code2,
	FolderGit2,
	ContactIcon,
	Github,
	Linkedin
} from 'lucide-react'
import ConditionalPanel from './ConditionalPanel'
import portfolioConfig from '../utils/config'

// Icon mapping
const iconMap = {
	Home,
	Briefcase,
	Code2,
	FolderGit2,
	ContactIcon,
	Mail,
	Github,
	Linkedin
}

const Portfolio = () => {
	const [activeSection, setActiveSection] = useState('home')
	const [isMobile, setIsMobile] = useState(false)

	useEffect(() => {
		const checkMobile = () => {
			setIsMobile(window.innerWidth < 1024)
		}

		// Initial mobile check
		checkMobile()
		window.addEventListener('resize', checkMobile)

		// Set initial active section based on URL hash
		const hash = window.location.hash.slice(1) || 'home'
		setActiveSection(hash)

		// Listen for hash changes
		const handleHashChange = () => {
			const newHash = window.location.hash.slice(1) || 'home'
			setActiveSection(newHash)
			const element = document.getElementById(newHash)
			if (element) {
				element.scrollIntoView({ behavior: 'smooth' })
			}
		}

		window.addEventListener('hashchange', handleHashChange)

		return () => {
			window.removeEventListener('resize', checkMobile)
			window.removeEventListener('hashchange', handleHashChange)
		}
	}, [])

	const handleNavClick = (id: string) => {
		window.location.hash = id
	}

	// Process nav items to include actual icon components
	const navItems = portfolioConfig.navigation.items.map((item) => ({
		...item,
		icon: iconMap[item.icon as keyof typeof iconMap]
	}))

	// Process social links to include actual icon components
	const socialLinks = portfolioConfig.socialLinks.map((link) => ({
		...link,
		icon: iconMap[link.icon as keyof typeof iconMap]
	}))

	// Helper function to format achievement text with highlights
	const formatAchievement = (achievement: { text: string; highlights?: string[] }) => {
		if (!achievement.highlights) return achievement.text

		let formattedText = achievement.text
		achievement.highlights.forEach((highlight, index) => {
			formattedText = formattedText.replace(
				`{${index}}`,
				`<span class="text-emerald-300">${highlight}</span>`
			)
		})
		return formattedText
	}

	return (
		<div className='bg-emerald-950 min-h-svh text-emerald-50 relative overflow-hidden'>
			{/* Desktop Navigation */}
			<nav className='hidden lg:block fixed top-0 right-0 w-16 h-full bg-emerald-900 z-40'>
				<div className='h-full flex flex-col justify-center items-center'>
					{navItems.map((item) => (
						<button
							key={item.id}
							onClick={() => handleNavClick(item.id)}
							className={`transform -rotate-90 my-16 px-4 py-2 whitespace-nowrap 
                hover:text-emerald-300 transition-colors
                ${activeSection === item.id ? 'text-emerald-300 font-bold' : 'text-emerald-50'}`}>
							{item.label}
						</button>
					))}
				</div>
			</nav>

			{/* Mobile Footer Navigation */}
			<nav className='lg:hidden fixed bottom-0 left-0 right-0 bg-emerald-900 z-40'>
				<div className='flex justify-around items-center h-16'>
					{navItems.map((item) => {
						const IconComponent = item.icon
						return (
							<button
								key={item.id}
								onClick={() => handleNavClick(item.id)}
								className={`flex flex-col items-center justify-center px-4 py-2 ${
									activeSection === item.id ? 'text-emerald-300' : 'text-emerald-50'
								}`}>
								<IconComponent size={20} />
								<span className='text-xs mt-1'>{item.label}</span>
							</button>
						)
					})}
				</div>
			</nav>

			{/* Main Content */}
			<main className='w-full lg:pr-16 max-h-[calc(100vh-64px)] lg:max-h-[100vh] overflow-y-auto pb-16 lg:pb-0'>
				{/* Home Section */}
				<section
					id='home'
					className={`h-[calc(100vh-140px)] lg:h-[100vh] overflow-y-hidden flex items-center justify-center p-4 sm:p-8 ${
						activeSection === 'home' ? 'block' : 'hidden'
					}`}>
					<div className='max-w-4xl'>
						<h1 className='text-3xl sm:text-4xl md:text-6xl font-bold mb-4'>
							{portfolioConfig.personal.name}
						</h1>
						<h2 className='text-xl sm:text-2xl md:text-3xl text-emerald-300 mb-4'>
							{portfolioConfig.personal.title}
						</h2>
						<div className='flex flex-wrap gap-2 text-sm text-emerald-200 mb-6'>
							<span>{portfolioConfig.personal.location}</span>
						</div>
						<div className='flex gap-4 mb-8 items-center'>
							{socialLinks.map((link) => (
								<a
									key={link.label}
									href={link.href}
									className='hover:text-emerald-300'
									target='_blank'
									rel='noopener noreferrer'>
									<link.icon size={24} />
								</a>
							))}
							<a
								href={portfolioConfig.contact.leetcode}
								className='w-12 h-12'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 36 36'
									id='leetcode'>
									<path
										fill='#EFEFEF'
										d='M8.377 4.167c6.917 0 11.667-3.583 15-3.583S33.71 2.5 33.71 17.833s-9.417 17.583-13.083 17.583C3.46 35.417-3.873 4.167 8.377 4.167z'></path>
									<path
										fill='#A4AFC1'
										d='m10.242 8.988 1.415-1.415.707.707-1.415 1.415zM6.176 13.054 7.59 11.64l.707.707-1.415 1.415zM6.177 8.103l.706-.708L8.298 8.81l-.707.708zM23.732 11.513c-.827 0-1.5-.673-1.5-1.5s.673-1.5 1.5-1.5 1.5.673 1.5 1.5-.672 1.5-1.5 1.5zm0-2c-.275 0-.5.225-.5.5s.225.5.5.5.5-.225.5-.5-.224-.5-.5-.5z'></path>
									<path
										fill='#2FDF84'
										d='M27.25 20.007c0-.689-.515-1.25-1.15-1.25h-9.187c-.636 0-1.15.561-1.15 1.25s.514 1.25 1.15 1.25H26.1c.635 0 1.15-.561 1.15-1.25z'></path>
									<path
										fill='#F3F3F1'
										d='m9.107 23.8 3.949 4.089c.891.918 2.123 1.361 3.483 1.361 1.36 0 2.592-.48 3.484-1.401l2.37-2.472c.467-.482.451-1.28-.035-1.781-.486-.502-1.259-.519-1.725-.037l-2.45 2.444c-.423.438-1.009.621-1.656.621s-1.233-.183-1.657-.621l-3.935-4.091c-.424-.438-.638-1.078-.638-1.747 0-.668.214-1.272.638-1.71l3.923-4.106c.624-.565 1.239-.681 1.669-.681.647 0 .922.151 1.656.697l2.45 1.943c.467.483 1.24.466 1.726-.036.486-.503.502-1.3.035-1.782l-2.37-1.971c-1.036-.888-1.602-1.141-2.19-1.247l-.031-.007 2.241-2.347c.469-.482.452-1.281-.034-1.782-.486-.502-1.26-.518-1.728-.036l-9.174 9.47c-.891.921-1.357 2.191-1.357 3.595-.001 1.406.465 2.716 1.356 3.635z'></path>
									<path
										fill='#00B871'
										d='M18.013 20.007c0-.689.514-1.25 1.15-1.25h-2.25c-.636 0-1.15.561-1.15 1.25s.514 1.25 1.15 1.25h2.25c-.635 0-1.15-.561-1.15-1.25z'></path>
									<path
										fill='#D5DBE1'
										d='m18.182 14.365 2.45 1.943c.467.483 1.24.466 1.726-.036.072-.074.112-.165.164-.25l-2.089-1.657c-.734-.546-1.009-.697-1.656-.697-.31 0-.717.066-1.153.312.16.1.335.22.558.385z'></path>
									<path
										fill='#D5DBE1'
										d='M15.306 27.889 11.357 23.8C10.466 22.881 10 21.571 10 20.167s.466-2.675 1.357-3.595l8.849-9.134c-.057-.105-.11-.211-.197-.301-.486-.502-1.26-.517-1.728-.036l-9.174 9.47c-.891.921-1.357 2.191-1.357 3.595s.466 2.714 1.357 3.633l3.949 4.089c.891.918 2.123 1.361 3.483 1.361.384 0 .753-.048 1.111-.124-.901-.183-1.711-.584-2.344-1.236z'></path>
									<path
										fill='#D5DBE1'
										d='m20.432 26.003 2.118-2.113c-.056-.102-.108-.207-.193-.295-.486-.502-1.259-.519-1.725-.036l-2.45 2.444c-.155.16-.338.276-.531.371.335.165.715.249 1.125.249.647.001 1.232-.182 1.656-.62z'></path>
									<path d='M26.1 22.007h-9.187c-1.047 0-1.899-.897-1.899-2s.853-2 1.899-2H26.1c1.048 0 1.9.897 1.9 2s-.853 2-1.9 2zm-9.187-2.5c-.217 0-.399.229-.399.5s.183.5.399.5H26.1c.217 0 .4-.229.4-.5s-.184-.5-.4-.5h-9.187z'></path>
									<path d='M16.538 30c-1.621 0-3.011-.55-4.021-1.589l-3.949-4.09C7.557 23.278 7 21.803 7 20.167c0-1.61.557-3.072 1.568-4.117l9.174-9.47c.362-.374.85-.58 1.371-.58h.001c.54 0 1.049.218 1.434.614.766.792.78 2.061.032 2.828l-1.443 1.511c.412.227.849.547 1.374.997l2.361 1.963a2.06 2.06 0 0 1 .024 2.882 1.989 1.989 0 0 1-1.435.615h-.002a1.882 1.882 0 0 1-1.367-.581l-2.377-1.876c-.668-.497-.783-.534-1.19-.534-.422 0-.803.159-1.164.486l-3.886 4.069c-.282.291-.43.702-.43 1.191 0 .498.155.945.427 1.226l3.937 4.091c.251.26.627.392 1.116.392.49 0 .866-.132 1.116-.392l2.461-2.454a1.882 1.882 0 0 1 1.357-.57h.002c.539 0 1.049.219 1.434.616.765.79.78 2.058.034 2.825l-2.365 2.469C19.542 29.422 18.113 30 16.538 30z'></path>
								</svg>
							</a>
						</div>
						<p className='text-emerald-200 text-sm sm:text-base'>{portfolioConfig.personal.bio}</p>
					</div>
				</section>

				{/* Experience Section */}
				<section
					id='experience'
					className={`h-[calc(100vh-140px)] lg:h-[100vh] p-4 sm:p-8 ${
						activeSection === 'experience' ? 'block' : 'hidden'
					}`}>
					<h2 className='text-2xl sm:text-3xl font-bold mb-6 sm:mb-8'>Experience</h2>
					<div className='space-y-6 sm:space-y-8'>
						{portfolioConfig.experience.map((exp, index) => (
							<div
								key={index}
								className='bg-emerald-900/50 p-4 sm:p-6 rounded-lg'>
								<div className='flex flex-col sm:flex-row justify-between items-start mb-4'>
									<div>
										<h3 className='text-lg sm:text-xl font-bold'>{exp.title}</h3>
										<p className='text-emerald-300'>
											{exp.company} [{exp.companyType}]
										</p>
									</div>
									<p className='text-emerald-400 text-sm sm:text-base mt-2 sm:mt-0'>{exp.period}</p>
								</div>
								<ul className='list-disc list-inside space-y-2 text-emerald-100 text-sm sm:text-base'>
									{exp.achievements.map((achievement, achIndex) => (
										<li
											key={achIndex}
											dangerouslySetInnerHTML={{ __html: formatAchievement(achievement) }}
										/>
									))}
								</ul>
							</div>
						))}
					</div>
				</section>

				{/* Skills Section */}
				<section
					id='skills'
					className={`h-[calc(100vh-140px)] lg:h-[100vh] p-4 sm:p-8 ${activeSection === 'skills' ? 'block' : 'hidden'}`}>
					<h2 className='text-2xl sm:text-3xl font-bold mb-6 sm:mb-8'>Technical Skills</h2>
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6'>
						{portfolioConfig.skills.map((skillCategory, index) => (
							<div
								key={index}
								className='bg-emerald-900/50 p-4 sm:p-6 rounded-lg'>
								<h3 className='text-lg sm:text-xl font-bold mb-4'>{skillCategory.category}</h3>
								<div className='flex flex-wrap gap-2'>
									{skillCategory.items.map((skill) => (
										<span
											key={skill}
											className='bg-emerald-800 px-3 py-1 rounded-full text-xs sm:text-sm'>
											{skill}
										</span>
									))}
								</div>
							</div>
						))}
					</div>
				</section>

				{/* Projects Section */}
				<section
					id='projects'
					className={`h-[calc(100vh-140px)] lg:h-[100vh] p-4 sm:p-8 ${
						activeSection === 'projects' ? 'block' : 'hidden'
					}`}>
					<h2 className='text-2xl sm:text-3xl font-bold mb-6 sm:mb-8'>Projects</h2>
					<div className='space-y-6'>
						{portfolioConfig.projects.map((project, index) => (
							<div
								key={index}
								className='bg-emerald-900/50 p-4 sm:p-6 rounded-lg'>
								<div className='flex justify-between items-start mb-4'>
									<h3 className='text-lg sm:text-xl font-bold'>{project.title}</h3>
									<a
										href={project.link}
										className='hover:text-emerald-300'>
										<ExternalLink size={20} />
									</a>
								</div>
								<p className='text-emerald-300 mb-4 text-sm sm:text-base'>{project.technologies}</p>
								{project.description && (
									<p className='text-emerald-100 text-sm sm:text-base mb-4'>
										{project.description}
										{project.readMoreLink && (
											<a
												href={project.readMoreLink}
												className='text-emerald-300 hover:text-emerald-100 ml-2'>
												Read More
											</a>
										)}
									</p>
								)}
								{project.bulletPoints && (
									<ul className='list-disc list-inside space-y-2 text-emerald-100 text-sm sm:text-base'>
										{project.bulletPoints.map((point, pointIndex) => (
											<li key={pointIndex}>{point}</li>
										))}
									</ul>
								)}
							</div>
						))}
					</div>
				</section>

			</main>
		</div>
	)
}

export default Portfolio
