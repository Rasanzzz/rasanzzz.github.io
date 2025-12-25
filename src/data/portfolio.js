import {
    Code, Cpu, Globe, Terminal, Cloud, Database,
    Layout, Shield, GitBranch, Search, Zap, Server,
    Monitor, Layers, BarChart, Users, Workflow
} from 'lucide-react';

export const portfolioData = {
    personalInfo: {
        name: "Rasan Singh",
        title: "AI & Automation Test Engineer",
        emailEncoded: "UmFzYW5zYWluaUBnbWFpbC5jb20=", // Base64 encoded
        phoneEncoded: "MDIwIDQxNTcgOTE2Nw==", // Base64 encoded
        address: "Northcote, Auckland",
        linkedin: "https://www.linkedin.com/in/rasanpreet-singh/",
        github: "https://github.com/rasanzzz",
        bio: "I don't just find bugs; I engineer their extinction. With a background in full-stack development, I build automation frameworks that developers actually respect. Specializing in Playwright and Agentic AI, I turn Quality Assurance from a bottleneck into a delivery accelerator.",
        resumeUrlEncoded: "L2N2X3NlY3VyZV8yMDI1X3FzOS5wZGY=" // Base64 of /cv_secure_2025_qs9.pdf
    },
    skills: [
        // High Priority / Core Stack
        { name: "Playwright", icon: Terminal, category: "Automation" },
        { name: "CI/CD (GitHub Actions)", icon: GitBranch, category: "DevOps" },
        { name: "AWS Cloud", icon: Cloud, category: "Cloud" },
        { name: "JavaScript/TypeScript", icon: Code, category: "Languages" },

        // Full List
        { name: "Selenium", icon: Search, category: "Automation" },
        { name: "Cypress", icon: Terminal, category: "Automation" },
        { name: "Appium", icon: Monitor, category: "Automation" },
        { name: "Postman", icon: Globe, category: "Testing" },
        { name: "JMeter", icon: BarChart, category: "Testing" },
        { name: "Python", icon: Code, category: "Languages" },
        { name: "C#", icon: Code, category: "Languages" },
        { name: "SQL", icon: Database, category: "Languages" },
        { name: "Azure", icon: Cloud, category: "Cloud" },
        { name: "Datadog", icon: BarChart, category: "DevOps" },

        // AI Integration
        { name: "AI Agentic Workflows", icon: Zap, category: "AI" },
        { name: "LLM Integration", icon: Zap, category: "AI" },
        { name: "n8n Automation", icon: Zap, category: "AI" },

        // Professional / Methods
        { name: "Agile & Scrum", icon: Workflow, category: "Professional" },
        { name: "Jira / Confluence", icon: Layers, category: "Professional" },
        { name: "Git Version Control", icon: GitBranch, category: "Professional" },
        { name: "Problem Solving", icon: Users, category: "Professional" },
        { name: "Mentoring", icon: Users, category: "Professional" },
    ],
    education: [
        {
            degree: "Digital Technology Product Solution (Level 6)",
            school: "Mission Ready HQ",
            year: "2023",
            description: "Intensive career accelerator focused on full-stack development, agile practices, and rapid product delivery."
        },
        {
            degree: "Diploma In Business",
            school: "Tasman International Academies",
            year: "2017",
            description: "Foundation in business management, operations, and strategic planning."
        }
    ],
    certifications: [
        {
            name: "AWS Certified Cloud Practitioner",
            issuer: "Amazon Web Services",
            date: "2023"
        },
        {
            name: "ISTQB Certified Tester - Foundation Level",
            issuer: "ISTQB",
            date: "2023"
        }
    ],
    experience: [
        {
            role: "Test Engineer",
            company: "Inugo Systems",
            period: "Sept 2024 - June 2025",
            description: "Pioneered a ground-up automation framework using Playwright, integrating Agentic AI to autonomously generate edge-case scenarios. Validated complex IoT hardware-software handshakes, ensuring 99.9% payment gateway reliability for high-volume parking infrastructure.",
            technologies: ["Playwright", "IoT", "AWS", "API Testing", "CI/CD"]
        },
        {
            role: "Web Developer",
            company: "Auckland Council",
            period: "Jan 2024 - May 2024",
            description: "Leveraged full-stack expertise to build responsive web apps, giving me deep insight into code testability. Spearheaded the integration of automated CI/CD pipelines (GitHub Actions), directly reducing release cycle latency by 40% and cutting manual regression costs.",
            technologies: ["JavaScript", "Node.js", "React", "Tailwind CSS", "AWS", "GitHub Actions"]
        },
        {
            role: "Test Analyst",
            company: "MVP Studio",
            period: "Nov 2022 - Aug 2023",
            description: "Ensured quality assurance for a high-traffic education platform. Developed scalable Selenium test suites in C# and streamlined bug tracking workflows. Mentored junior QA members in best practices and automation strategies.",
            technologies: ["C#", "Selenium", "Postman", "Agile/Scrum"]
        }
    ],
    projects: [
        {
            title: "Smart Parking Infrastructure",
            description: "An end-to-end IoT automation suite that simulates and validates real-world parking scenarios, from gate triggers to payment processing.",
            tech: ["Playwright", "IoT", "AWS", "API Testing", "CI/CD"],
            link: "https://www.inugo.com/"
        },
        {
            title: "Council-led Community Service Portal",
            description: "A high-performance, accessible web dashboard allowing citizens to track requests and services in real-time.",
            tech: ["React", "Node.js", "Tailwind CSS", "AWS", "GitHub Actions"],
            link: "https://buzzly.nz/"
        },
        {
            title: "EdTech Learning System",
            description: "Automated testing framework ensuring seamless course delivery and student assessments across multiple devices.",
            tech: ["C#", "Selenium", "NUnit"],
            link: "https://www.skillshare.com/"
        }
    ]
};
