"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Card from "./Card";
import Background from "./Background";
import {
  Github,
  Linkedin,
  FileText,
  MapPin,
  Phone,
  Mail,
  Building2,
  Calendar,
  GraduationCap,
  Database,
} from "lucide-react";
import { ReactIcon, PythonIcon, NodeIcon, AWSIcon } from "./icons";

const Portfolio = () => {
  const [visibleSections, setVisibleSections] = useState({
    contacts: false,
    bio: false,
    projects: false,
    exp: false,
  });

  const contactInfo = {
    location: "Bengaluru, India",
    email: "prabhumahesh.patil@gmail.com",
    mobile: "+91 9611689994",
    github: "https://github.com/Prabhu231",
    linkedin: "https://www.linkedin.com/in/prabhupatil1/",
    resume:
      "https://drive.google.com/file/d/19P75PzPJFmYO6BBMn9vcSdWb8s_KaxPK/view",
  };

  useEffect(() => {
    const timers = [
      setTimeout(
        () => setVisibleSections((prev) => ({ ...prev, contacts: true })),
        200
      ),
      setTimeout(
        () => setVisibleSections((prev) => ({ ...prev, bio: true })),
        400
      ),
      setTimeout(
        () => setVisibleSections((prev) => ({ ...prev, projects: true })),
        600
      ),
      setTimeout(
        () => setVisibleSections((prev) => ({ ...prev, exp: true })),
        800
      ),
    ];

    return () => {
      timers.forEach((timer) => clearTimeout(timer));
    };
  }, []);

  return (
    <div className="relative min-h-screen w-full text-cyan-400 font-mono p-4 sm:p-6 flex flex-col justify-center overflow-hidden">
      <Background />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div
          className={`mb-6 sm:mb-10 transition-all duration-1000 ${
            visibleSections.contacts
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="bg-gradient-to-r from-cyan-900/80 to-blue-900/80 border-2 border-cyan-400 rounded-lg p-4 shadow-lg backdrop-blur-md relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-blue-400"></div>
            <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-r from-blue-400 to-cyan-400"></div>
            <div className="absolute -top-4 -right-4 w-16 h-16 border-r border-b border-cyan-400 rounded-br-3xl opacity-50"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 border-l border-t border-cyan-400 rounded-tl-3xl opacity-50"></div>

            <h2 className="text-lg sm:text-xl font-bold mb-4 text-white flex items-center">
              <span className="text-cyan-300 mr-2">&gt;</span>
              <span className="animate-pulse"></span> Connect with me{" "}
              <span className="animate-pulse"></span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center gap-2 hover:bg-cyan-900/50 p-2 rounded-md transition-all group"
              >
                <div className="bg-cyan-800/50 p-2 rounded-full group-hover:bg-cyan-700/70 transition-all flex-shrink-0">
                  <Mail size={18} className="text-cyan-300" />
                </div>
                <span className="group-hover:text-white transition-all text-sm sm:text-base truncate">
                  {contactInfo.email}
                </span>
              </a>

              <a
                href={`tel:${contactInfo.mobile}`}
                className="flex items-center gap-2 hover:bg-cyan-900/50 p-2 rounded-md transition-all group"
              >
                <div className="bg-cyan-800/50 p-2 rounded-full group-hover:bg-cyan-700/70 transition-all flex-shrink-0">
                  <Phone size={18} className="text-cyan-300" />
                </div>
                <span className="group-hover:text-white transition-all text-sm sm:text-base">
                  {contactInfo.mobile}
                </span>
              </a>

              <div className="flex items-center gap-2 hover:bg-cyan-900/50 p-2 rounded-md transition-all group">
                <div className="bg-cyan-800/50 p-2 rounded-full group-hover:bg-cyan-700/70 transition-all flex-shrink-0">
                  <MapPin size={18} className="text-cyan-300" />
                </div>
                <span className="group-hover:text-white transition-all text-sm sm:text-base">
                  {contactInfo.location}
                </span>
              </div>

              <a
                href={contactInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:bg-cyan-900/50 p-2 rounded-md transition-all group"
              >
                <div className="bg-cyan-800/50 p-2 rounded-full group-hover:bg-cyan-700/70 transition-all flex-shrink-0">
                  <Github size={18} className="text-cyan-300" />
                </div>
                <span className="group-hover:text-white transition-all text-sm sm:text-base">
                  GitHub
                </span>
              </a>

              <a
                href={contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:bg-cyan-900/50 p-2 rounded-md transition-all group"
              >
                <div className="bg-cyan-800/50 p-2 rounded-full group-hover:bg-cyan-700/70 transition-all flex-shrink-0">
                  <Linkedin size={18} className="text-cyan-300" />
                </div>
                <span className="group-hover:text-white transition-all text-sm sm:text-base">
                  LinkedIn
                </span>
              </a>

              <a
                href={contactInfo.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:bg-cyan-900/50 p-2 rounded-md transition-all group"
              >
                <div className="bg-cyan-800/50 p-2 rounded-full group-hover:bg-cyan-700/70 transition-all flex-shrink-0">
                  <FileText size={18} className="text-cyan-300" />
                </div>
                <span className="group-hover:text-white transition-all text-sm sm:text-base">
                  Resume
                </span>
              </a>
            </div>
          </div>
        </div>

        <div
          className={`mb-6 sm:mb-8 transition-all duration-1000 ${
            visibleSections.bio
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex flex-col md:flex-row items-start md:items-center mb-4 gap-4 sm:gap-6">
            <div className="relative group mx-auto md:mx-0">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full animate-pulse group-hover:from-blue-500 group-hover:to-cyan-500 transition-all duration-700"></div>
              <div className="relative rounded-full overflow-hidden border-2 border-cyan-400/70 h-24 w-24 sm:h-32 sm:w-32 md:h-40 md:w-40">
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

            <h1 className="text-2xl sm:text-3xl font-bold text-cyan-300 flex items-center text-center md:text-left w-full md:w-auto justify-center md:justify-start">
              <span className="inline-block w-4 h-4 bg-cyan-400 mr-2 animate-pulse"></span>
              <span className="text-white ml-2">Prabhu Patil</span>
            </h1>
          </div>

          <div className="bg-black/50 border border-cyan-500/30 p-4 rounded backdrop-blur-sm">
            <p className="mb-0 text-sm sm:text-base leading-relaxed">
              Hello, I'm Prabhu. I transform vague concepts into deployable
              systems and chaos into clear code. I work quickly, break patterns
              (not production), and obsess over getting things just right, I'm
              developing full-stack applications, optimizing backend
              performance, or hacking together tools for fun. I'm here to create
              that lasts, rather than follow trends.
            </p>
          </div>
        </div>

        <div
          className={`mb-6 sm:mb-8 transition-all duration-1000 ${
            visibleSections.exp
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-lg sm:text-xl font-bold mb-4 flex items-center">
            <span className="text-cyan-300 mr-2">&gt; </span> Education
          </h2>

          <div className="bg-gradient-to-r border border-cyan-500/50 p-4 rounded backdrop-blur-sm mb-6 relative overflow-hidden group transition-all duration-500">
            <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 opacity-70"></div>
            <div className="absolute -top-2 -right-2 w-8 h-8 border-r border-b border-cyan-400/50 rounded-br-xl"></div>

            <div className="flex items-start gap-3 sm:gap-4">
              <div className="bg-cyan-800/50 p-2 rounded-full group-hover:bg-cyan-700/70 transition-all flex-shrink-0">
                <GraduationCap size={20} className="text-cyan-300" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-base sm:text-lg font-semibold text-white mb-2 group-hover:text-cyan-100 transition-all">
                  B.E Electronics and Communications Engineering
                </h3>
                <p className="text-cyan-300 text-xs sm:text-sm mb-2 flex items-center gap-2 flex-wrap">
                  <Calendar size={14} className="flex-shrink-0" />
                  <span className="break-words">
                    Dayananda Sagar College of Engineering - Dec 2021 to June
                    2025
                  </span>
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-lg sm:text-xl font-bold mb-4 flex items-center">
            <span className="text-cyan-300 mr-2">&gt; </span> Experience
          </h2>

          <div className="bg-gradient-to-br border-2 border-cyan-400/50 rounded-lg p-4 sm:p-6 backdrop-blur-md relative overflow-hidden group hover:border-cyan-400/80 transition-all duration-500 shadow-2xl">
            {/* Animated background elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 animate-pulse"></div>
            <div className="absolute -top-4 -right-4 w-12 h-12 sm:w-16 sm:h-16 border-r-2 border-b-2 border-cyan-400/30 rounded-br-3xl group-hover:border-cyan-400/60 transition-all"></div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 sm:w-16 sm:h-16 border-l-2 border-t-2 border-cyan-400/30 rounded-tl-3xl group-hover:border-cyan-400/60 transition-all"></div>

            {/* Company header */}
            <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
              <div className="bg-cyan-800/50 p-2 sm:p-3 rounded-full group-hover:bg-cyan-700/70 group-hover:scale-110 transition-all duration-300 flex-shrink-0">
                <Building2 size={24} className="text-cyan-300" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-cyan-100 transition-all">
                  SDE Student Intern
                </h3>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-cyan-300 text-xs sm:text-sm mb-4">
                  <span className="bg-cyan-800/30 px-2 sm:px-3 py-1 rounded-full border border-cyan-500/30 text-center sm:text-left">
                    KPMG Assurance and Consulting Services
                  </span>
                  <span className="flex items-center gap-2 justify-center sm:justify-start">
                    <Calendar size={14} />
                    Nov 2024 - May 2025
                  </span>
                </div>
              </div>
            </div>

            {/* Tech stack showcase */}
            <div className="mb-4 sm:mb-6">
              <h4 className="text-base sm:text-lg font-semibold text-cyan-300 mb-3 flex items-center gap-2">
                Tech Stack & Tools
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-8 gap-2 sm:gap-3">
                {[
                  { name: "React.js", icon: <ReactIcon /> },
                  { name: "Django (Python)", icon: <PythonIcon /> },
                  { name: "Node.js", icon: <NodeIcon /> },
                  {
                    name: "MySQL",
                    icon: <Database size={16} />,
                  },
                  {
                    name: "PostgreSQL",
                    icon: <Database size={16} />,
                  },
                  {
                    name: "MongoDB",
                    icon: <Database size={16} />,
                  },
                  { name: "AWS", icon: <AWSIcon /> },
                  { name: "Git", icon: <Github size={16} /> },
                ].map((tech, index) => (
                  <div
                    key={tech.name}
                    className="bg-black/30 border border-cyan-500/20 rounded-md p-2 flex flex-col sm:flex-row items-center gap-1 sm:gap-2 hover:bg-cyan-900/30 hover:border-cyan-400/50 transition-all duration-300 group/tech text-center sm:text-left"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <span className="text-cyan-400 group-hover/tech:text-cyan-300 flex-shrink-0">
                      {tech.icon}
                    </span>
                    <span className="text-xs text-cyan-200 group-hover/tech:text-white transition-all break-words">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key achievements */}
            <div className="space-y-3 sm:space-y-4">
              <h4 className="text-base sm:text-lg font-semibold text-cyan-300 mb-3">
                Key Achievements & Responsibilities
              </h4>

              {[
                {
                  title: "Enterprise Full-Stack Development",
                  description:
                    "Designed and developed enterprise-scale applications using React.js, Django, and Node.js, handling complex business logic and user workflows across multiple client projects.",
                },
                {
                  title: "Database Architecture & Optimization",
                  description:
                    "Managed multiple projects with different database environments (MySQL, PostgreSQL, MongoDB, Redis) with optimized query performance, implementing efficient caching strategies and data modeling for high-traffic applications.",
                },
                {
                  title: "API Development & Integration",
                  description:
                    "Built robust RESTful APIs with comprehensive error handling, authentication systems, and third-party service integrations, ensuring scalable and maintainable backend architectures.",
                },
                {
                  title: "Performance Engineering",
                  description:
                    "Enhanced system performance through code profiling, backend latency reduction, and legacy code refactoring, resulting in measurable improvements in application response times and user experience.",
                },
              ].map((achievement, index) => (
                <div
                  key={index}
                  className="bg-black/20 border-l-4 border-cyan-400/50 p-3 sm:p-4 rounded-r-md hover:bg-black/30 hover:border-cyan-400/80 transition-all duration-300 group/item"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <h5 className="font-semibold text-white mb-2 group-hover/item:text-cyan-100 transition-all text-sm sm:text-base">
                    {achievement.title}
                  </h5>
                  <p className="text-cyan-200 text-xs sm:text-sm leading-relaxed group-hover/item:text-cyan-100 transition-all">
                    {achievement.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Bottom accent */}
            <div className="absolute bottom-2 right-2 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
          </div>
        </div>

        <div
          className={`mb-6 sm:mb-8 transition-all duration-1000 ${
            visibleSections.projects
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-lg sm:text-xl font-bold mb-4 flex items-center">
            <span className="text-cyan-300 mr-2">&gt; </span> Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-4 pt-0 items-stretch">
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
              tags={["Next.js", "Django", "Celery", "Redis"]}
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
  );
};

export default Portfolio;
