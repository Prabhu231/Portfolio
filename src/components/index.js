'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Card from './Card'
import Background from './Background'
import { Github, Linkedin, FileText, MapPin, Phone, Mail } from 'lucide-react'

const Portfolio = () => {
    const [visibleSections, setVisibleSections] = useState({
        contacts: false,
        bio: false,
        projects: false,
        exp: false
    })

    const contactInfo = {
        location: "Bengaluru, India",
        email: "prabhumahesh.patil@gmail.com",
        mobile: "+91 9611689994",
        github: "https://github.com/Prabhu231",
        linkedin: "https://www.linkedin.com/in/prabhupatil1/",
        resume: "https://drive.google.com/file/d/19P75PzPJFmYO6BBMn9vcSdWb8s_KaxPK/view"
    }

    useEffect(() => {
        const timers = [
            setTimeout(() => setVisibleSections(prev => ({ ...prev, contacts: true })), 200),
            setTimeout(() => setVisibleSections(prev => ({ ...prev, bio: true })), 400),
            setTimeout(() => setVisibleSections(prev => ({ ...prev, projects: true })), 600),
            setTimeout(() => setVisibleSections(prev => ({ ...prev, exp: true })), 800),
        ]


        return () => {
            timers.forEach(timer => clearTimeout(timer))
        }
    }, [])

    return (
        <div className="relative min-h-screen w-full text-cyan-400 font-mono p-6 flex flex-col justify-center overflow-hidden">
            <Background />

            <div className="relative z-10">

                <div className={`mb-10 transition-all duration-1000 ${visibleSections.contacts ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="bg-gradient-to-r from-cyan-900/80 to-blue-900/80 border-2 border-cyan-400 rounded-lg p-4 shadow-lg backdrop-blur-md relative overflow-hidden">
                   
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-blue-400"></div>
                        <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-r from-blue-400 to-cyan-400"></div>
                        <div className="absolute -top-4 -right-4 w-16 h-16 border-r border-b border-cyan-400 rounded-br-3xl opacity-50"></div>
                        <div className="absolute -bottom-4 -left-4 w-16 h-16 border-l border-t border-cyan-400 rounded-tl-3xl opacity-50"></div>
                        
                        <h2 className="text-xl font-bold mb-4 text-white flex items-center">
                            <span className="text-cyan-300 mr-2">&gt;</span> 
                            <span className="animate-pulse"></span> Connect with me <span className="animate-pulse"></span>
                        </h2>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-2 hover:bg-cyan-900/50 p-2 rounded-md transition-all group">
                                <div className="bg-cyan-800/50 p-2 rounded-full group-hover:bg-cyan-700/70 transition-all">
                                    <Mail size={18} className="text-cyan-300" />
                                </div>
                                <span className="group-hover:text-white transition-all">{contactInfo.email}</span>
                            </a>
                            
                            <a href={`tel:${contactInfo.mobile}`} className="flex items-center gap-2 hover:bg-cyan-900/50 p-2 rounded-md transition-all group">
                                <div className="bg-cyan-800/50 p-2 rounded-full group-hover:bg-cyan-700/70 transition-all">
                                    <Phone size={18} className="text-cyan-300" />
                                </div>
                                <span className="group-hover:text-white transition-all">{contactInfo.mobile}</span>
                            </a>
                            
                            <div className="flex items-center gap-2 hover:bg-cyan-900/50 p-2 rounded-md transition-all group">
                                <div className="bg-cyan-800/50 p-2 rounded-full group-hover:bg-cyan-700/70 transition-all">
                                    <MapPin size={18} className="text-cyan-300" />
                                </div>
                                <span className="group-hover:text-white transition-all">{contactInfo.location}</span>
                            </div>
                            
                            <a href={contactInfo.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:bg-cyan-900/50 p-2 rounded-md transition-all group">
                                <div className="bg-cyan-800/50 p-2 rounded-full group-hover:bg-cyan-700/70 transition-all">
                                    <Github size={18} className="text-cyan-300" />
                                </div>
                                <span className="group-hover:text-white transition-all">GitHub</span>
                            </a>
                            
                            <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:bg-cyan-900/50 p-2 rounded-md transition-all group">
                                <div className="bg-cyan-800/50 p-2 rounded-full group-hover:bg-cyan-700/70 transition-all">
                                    <Linkedin size={18} className="text-cyan-300" />
                                </div>
                                <span className="group-hover:text-white transition-all">LinkedIn</span>
                            </a>
                            
                            <a href={contactInfo.resume} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:bg-cyan-900/50 p-2 rounded-md transition-all group">
                                <div className="bg-cyan-800/50 p-2 rounded-full group-hover:bg-cyan-700/70 transition-all">
                                    <FileText size={18} className="text-cyan-300" />
                                </div>
                                <span className="group-hover:text-white transition-all">Resume</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className={`mb-8 transition-all duration-1000 ${visibleSections.bio ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="flex flex-col md:flex-row items-start md:items-center mb-4 gap-6">
                        <div className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full animate-pulse group-hover:from-blue-500 group-hover:to-cyan-500 transition-all duration-700"></div>
                            <div className="relative rounded-full overflow-hidden border-2 border-cyan-400/70 h-32 w-32 md:h-40 md:w-40">
                                <Image
                                    src="/profile_pic.jpeg"
                                    alt="Profile Picture"
                                    width={160}
                                    height={160}
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/40 to-transparent"></div>
                                <div className="absolute bottom-0 left-0 w-full h-1 bg-cyan-400/30"></div>
                            </div>
                            <div className="absolute -bottom-1 -right-1 w-4 h-4 border-r-2 border-b-2 border-cyan-400"></div>
                            <div className="absolute -top-1 -left-1 w-4 h-4 border-l-2 border-t-2 border-cyan-400"></div>
                        </div>

                        <h1 className="text-3xl font-bold text-cyan-300 flex items-center">
                            <span className="inline-block w-4 h-4 bg-cyan-400 mr-2 animate-pulse"></span>
                            <span className="text-white ml-2">Prabhu Patil</span>
                        </h1>
                    </div>

                    <div className="bg-black/50 border border-cyan-500/30 p-4 rounded backdrop-blur-sm box-content md:box-border">
                        <p className="mb-0">
                            Hey! I'm Prabhu, a passionate developer who lives and breathes code. Whether it's building full-stack applications, solving complex problems, or experimenting with new technologies—I'm always excited to create and learn. I'm currently pursuing my Bachelor's in Electronics and Communications, set to graduate in June 2025. I love turning ideas into reality with clean, efficient, and creative code.
                            If it involves tech, I'm all in.
                        </p>
                    </div>
                </div>
                
                <div className={`mb-8 transition-all duration-1000 ${visibleSections.exp ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h2 className="text-xl font-bold mb-4 flex items-center">
                        <span className="text-cyan-300 mr-2">&gt; </span> Education
                    </h2>
                    
                    <div className="bg-black/50 border border-cyan-500/30 p-4 rounded backdrop-blur-sm animate-pop-up mb-4">
                        <h3 className="text-lg font-semibold text-white mb-2">
                            B.E Electronics and Communications Engineering
                        </h3>
                        <p className="text-cyan-300 text-sm mb-2">Dayananda Sagar College of Engineering - Dec 2021 to June 2025</p>
                    </div>
                    

                    <h2 className="text-xl font-bold mb-4 flex items-center">
                        <span className="text-cyan-300 mr-2">&gt; </span> Experience
                    </h2>
                    <div className="bg-black/50 border border-cyan-500/30 p-4 rounded backdrop-blur-sm animate-pop-up">
                        <h3 className="text-lg font-semibold text-white mb-2">
                            KPMG Assurance and Consulting Services
                        </h3>
                        <p className="text-cyan-300 text-sm mb-2">Intern - Nov 2024 to May 2025 </p>
                        My internship at KPMG was a fulfilling and educational experience. I was involved in the development of full-stack applications with React.js, Django, and Node.js, contributing to enterprise-level solutions. I also worked with various databases, including MySQL, PostgreSQL, MongoDB, and Redis (an in-memory database), which expanded my knowledge significantly. Additionally, I optimized backend code to decrease latency and manage complex tables with large entries.
                    </div>
                </div>


                <div className={`mb-8 transition-all duration-1000 ${visibleSections.projects ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h2 className="text-xl font-bold mb-4 flex items-center">
                        <span className="text-cyan-300 mr-2">&gt; </span> Projects
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 pt-0 items-stretch">

                        <Card
                            title="Hintcode"
                            description="Hintcode is a full-stack web platform designed to help users solve algorithmic problems and test their C++ code against custom or preloaded test cases. It combines real-time code execution, automated evaluation, and AI-powered hints to enhance the coding practice experience."
                            tags={["MongoDB", "Express.js", "React.js", "Node.js"]}
                            githubUrl="https://github.com/Prabhu231/Hintcode"
                            deployedUrl="https://hintcode.in"

                        />
                        <Card 
                        title="Autoscheduler"
                        description="Autoscheduler is a powerful tool designed to help you schedule and send bulk emails with file attachments to up to 50 BCC recipients in a single operation. Whether you're managing marketing campaigns, sending reports, or sharing updates, Autoscheduler simplifies the process of automating email deliveries."
                        tags={["Next.js", "Django","Celery", "Redis"]}
                        githubUrl="https://github.com/Prabhu231/Autoscheduler-Frontend"
                        deployedUrl="https://autoscheduler.in"
                        />
                        <Card
                            title="Blind for Students"
                            description="Blind for Students is a web platform tailored for college students, inspired by the anonymous social network 'Blind' It provides a safe space for students to share thoughts, confessions, and discussions anonymously within their college community."
                            tags={["Next.js", "PostgreSQL", "Prisma"]}
                            githubUrl="https://github.com/Prabhu231/Blind-for-Students"

                        />
                        <Card
                            title="Prompt Sharing Application"
                            description="Prompt Sharing App is a collaborative platform where users can create, share, and explore AI prompts for tasks like image generation, writing, coding, and more—boosting productivity and creativity with tools like ChatGPT, Midjourney, and DALL·E."
                            tags={["Next.js", "MongoDB"]}
                            githubUrl="https://github.com/Prabhu231/Prompt-Sharing-Application"

                        />
                        <Card
                            title="Dog Breed Classification"
                            description="Dog Breed Classification is a machine learning project that uses image recognition to identify the breed of a dog from a photo. It involves training a convolutional neural network (CNN) on a dataset of labeled dog images. The model learns to recognize patterns in fur, size, shape, and facial features to accurately classify among 120 different breeds."
                            tags={["Google Colab", "Tensorflow", "Scikit-Learn"]}
                            githubUrl="https://github.com/Prabhu231/Dog-Breed-Identification"

                        />
                        <Card
                            title="Portfolio"
                            description="This very portfolio you are currently looking at, is a representation of my passion for technology and coding, brought to life with a futuristic design that reflects my vision for the future of development. The project showcases my journey as a developer, through my education, internships, projects, and my problem solving abilities."
                            tags={["Next.js"]}
                            githubUrl="https://github.com/Prabhu231/Portfolio"

                        />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Portfolio
