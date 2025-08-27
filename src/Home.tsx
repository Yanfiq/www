import React, { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, User, Briefcase, ChevronDown } from 'lucide-react';
import nnp_game_img from './assets/nnp_game.webp';
import literalog_img from './assets/literalog.png';
import turingmachine_img from './assets/turingmachine.png';

interface Project {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    githubUrl?: string;
    liveUrl?: string;
    status: 'WIP' | 'Completed' | 'Neglected';
    image?: string;
}

interface ProjectCardProps {
    project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    return (
        <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="h-48 bg-gradient-to-r from-blue-500 to-blue-700 flex items-center justify-center">
                {
                    project.image ? (
                        <img className="" src={project.image} />
                    ) : (
                        <Code2 className="w-16 h-16 text-white" />
                    )
                }
                
            </div>
            <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                        <span
                            key={index}
                            className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs font-medium"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
                <div className="flex space-x-3">
                    {project.githubUrl && (
                        <a
                            href={project.githubUrl}
                            className="flex items-center text-gray-600 hover:text-blue-700 transition-colors"
                        >
                            <Github className="w-4 h-4 mr-1" />
                            <span className="text-sm">Code</span>
                        </a>
                    )}
                    {project.liveUrl && (
                        <a
                            href={project.liveUrl}
                            className="flex items-center text-gray-600 hover:text-blue-700 transition-colors"
                        >
                            <ExternalLink className="w-4 h-4 mr-1" />
                            <span className="text-sm">Live Demo</span>
                        </a>
                    )}
                </div>
            </div>
        </div>
    )
}

const Home: React.FC = () => {
    const [activeSection, setActiveSection] = useState<string>('about');

    const projects: Project[] = [
        {
            id: 1,
            title: "'NonsenseNebulaProblem' Game",
            description: "There was a nonsensical problem in the nebula, you wanted to get away from it, but you were confronted by a bunch of bad guys, so there is a battle. THE END. ",
            technologies: ["C++", "SFML"],
            githubUrl: "https://github.com/Yanfiq/NonsenseNebulaProblem",
            image: nnp_game_img,
            status: 'Completed'
        },
        {
            id: 2,
            title: "LiteraLog",
            description: "A desktop application that is useful for recording personal book collections, recording reading progress, and recording book wishlist.",
            technologies: ["Java", "Gradle", "JavaFX", "SQL"],
            githubUrl: "https://github.com/Yanfiq/LiteraLog",
            image: literalog_img,
            status: 'Neglected'
        },
        {
            id: 3,
            title: "Turing Machine Simulator",
            description: "This is a turing machine simulator for solving the equation x=((m+n)^a)/b.",
            technologies: ["HTML", "CSS", "TypeScript"],
            githubUrl: "https://github.com/Yanfiq/LiteraLog",
            image: turingmachine_img,
            liveUrl: "https://yanfiq.github.io/TuringMachineSimulator/",
            status: 'Completed'
        },
        {
            id: 4,
            title: "StreamFusion",
            description: "StreamFusion is an android app that tries to bring together various music streaming platforms, some of the platforms being implemented are Audius, SoundCloud, Spotify, and YouTube.",
            technologies: ["Kotlin", "Jetpack Compose"],
            githubUrl: "https://github.com/Yanfiq/StreamFusion",
            status: 'WIP'
        },
        {
            id: 5,
            title: "Study Interest Prediction",
            description: "A web to predict the study interest based on the mental health condition, passion and college's activities. It uses Fuzzy Inference System (FIS) method to predict the study interest.",
            technologies: ["HTML", "CSS", "TypeScript"],
            githubUrl: "https://github.com/Yanfiq/StudyInterestPrediction",
            liveUrl: "https://yanfiq.github.io/StudyInterestPrediction/",
            status: 'Completed'
        },
        {
            id: 6,
            title: "HealLink",
            description: "HealLink is a daily journaling app equipped with AI features to analyze mental conditions based on user stories. This project aims to develop an NLP-based tool to assess mental health indicators in user-submitted stories. This approach could provide an accessible way to identify those in need of support, promoting early intervention and potentially improving mental health outcomes. This app also has various features to help stabilize mental conditions such as streaming relaxation music and even getting the location of health facilities.",
            technologies: ["TensorFlow", "Hapi.js", "Kotlin"],
            githubUrl: "https://github.com/HealLink",
            status: 'Completed'
        },
    ];

    const skills = [
        "JavaScript", "TypeScript", "React", "Node.js", "Express.js",
        "Python", "MongoDB", "Docker", "C++", "C#"
    ];

    const scrollToSection = (sectionId: string) => {
        setActiveSection(sectionId);
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
            {/* Navigation */}
            <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
                <div className="max-w-6xl mx-auto px-6 py-4">
                    <div className="flex justify-between items-center">
                        <div className="text-2xl font-bold text-blue-800">Ryan Fikri</div>
                        <div className="hidden md:flex space-x-8">
                            {['about', 'projects', 'contact'].map((section) => (
                                <button
                                    key={section}
                                    onClick={() => scrollToSection(section)}
                                    className={`capitalize transition-colors hover:text-blue-700 ${activeSection === section ? 'text-blue-700 font-medium' : 'text-gray-600'
                                        }`}
                                >
                                    {section}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="pt-24 pb-16 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center">
                        <div className="mb-8">
                            <div className="w-32 h-32 mx-auto bg-gradient-to-r from-blue-600 to-blue-800 rounded-full flex items-center justify-center mb-6 shadow-lg">
                                <Code2 className="w-16 h-16 text-white" />
                            </div>
                            <h1 className="text-5xl font-bold text-gray-800 mb-4">
                                Hi, I'm <span className="text-blue-700">Ryan Fikri</span>
                            </h1>
                            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
                                Full-Stack Developer passionate about creating elegant solutions to complex problems
                            </p>
                        </div>
                        <div className="flex justify-center space-x-4 mb-12">
                            <a
                                href="#contact"
                                className="bg-blue-700 text-white px-8 py-3 rounded-lg hover:bg-blue-800 transition-colors flex items-center"
                            >
                                <Mail className="w-5 h-5 mr-2" />
                                Get In Touch
                            </a>
                            <a
                                href="#projects"
                                className="border border-blue-700 text-blue-700 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors flex items-center"
                            >
                                <Briefcase className="w-5 h-5 mr-2" />
                                View Projects
                            </a>
                        </div>
                        <div className="animate-bounce">
                            <ChevronDown className="w-6 h-6 text-blue-600 mx-auto" />
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-16 px-6 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="flex items-center mb-6">
                                <User className="w-8 h-8 text-blue-700 mr-3" />
                                <h2 className="text-3xl font-bold text-gray-800">About Me</h2>
                            </div>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                I am a 7th semester informatics student at Sebelas Maret University. I am a motivated machine learning enthusiast currently enrolled in Bangkit Academy. I am proficient in Python and experienced with tools such as TensorFlow, Scikit-learn, NumPy, and Pandas. I am experienced in building machine learning models and collaborating in team-based projects. 
                            </p>
                            <p className="text-gray-600 mb-6 leading-relaxed">
I thrive on solving problems and creating innovative solutions. My journey includes hands-on experience through projects like my NLP capstone project, where I tackled challenges in mental health analysis. I believe technology should not only be functional but also human-centered, a principle I carry into my work. 
                            </p>
                            <p className="text-gray-600 mb-6 leading-relaxed">
Beyond academics, I am exploring exciting domains such as web development, game development, and Android app development, reflecting my love for learning and versatility. I aim to dive into less saturated tech fields, continuously improving my expertise to stand out as a professional.
                            </p>

                            <div className="mb-6">
                                <h3 className="text-xl font-semibold text-gray-800 mb-3">Skills & Technologies</h3>
                                <div className="flex flex-wrap gap-2">
                                    {skills.map((skill, index) => (
                                        <span
                                            key={index}
                                            className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                        {/* <div className="relative">
                            <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white shadow-xl">
                                <h3 className="text-2xl font-bold mb-4">Quick Facts</h3>
                                <div className="space-y-3">
                                    <div className="flex items-center">
                                        <div className="w-2 h-2 bg-blue-300 rounded-full mr-3"></div>
                                        <span></span>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="w-2 h-2 bg-blue-300 rounded-full mr-3"></div>
                                        <span>5+ years of development experience</span>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="w-2 h-2 bg-blue-300 rounded-full mr-3"></div>
                                        <span>10+ projects, either completed or neglected :v</span>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="w-2 h-2 bg-blue-300 rounded-full mr-3"></div>
                                        <span>Full-stack expertise</span>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="py-16 px-6 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <div className="flex items-center justify-center mb-4">
                            <Briefcase className="w-8 h-8 text-blue-700 mr-3" />
                            <h2 className="text-3xl font-bold text-gray-800">Featured Projects</h2>
                        </div>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Here are some of my recent projects that showcase my skills and passion for development
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project) => (
                            <ProjectCard project={project} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-16 px-6 bg-blue-800">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-white mb-6">Let's Work Together</h2>
                    <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                        I'm always interested in new opportunities and exciting projects.
                        Feel free to reach out if you'd like to collaborate!
                    </p>
                    <div className="flex justify-center space-x-6">
                        <a
                            href="mailto:ryanfikri5@gmail.com"
                            className="bg-white text-blue-800 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors flex items-center"
                        >
                            <Mail className="w-5 h-5 mr-2" />
                            Email Me
                        </a>
                        <a
                            href="https://linkedin.com/in/yanfiq"
                            className="border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-800 transition-colors flex items-center"
                        >
                            <Linkedin className="w-5 h-5 mr-2" />
                            LinkedIn
                        </a>
                        <a
                            href="https://github.com/Yanfiq"
                            className="border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-800 transition-colors flex items-center"
                        >
                            <Github className="w-5 h-5 mr-2" />
                            GitHub
                        </a>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8 px-6 bg-gray-900">
                <div className="max-w-6xl mx-auto text-center">
                    <p className="text-gray-400">
                        © 2025 Ryan Fikri. Built with React, TypeScript, and Tailwind CSS.
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Home;