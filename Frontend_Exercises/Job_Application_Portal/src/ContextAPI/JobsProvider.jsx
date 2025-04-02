import { createContext } from "react";

const JobsContext = createContext();

export const JobsProvider = ({ children }) => {
    const jobs = [
        {
            id: "3A45B",
            title: "Product Manager",
            description: "Lead the product lifecycle, from ideation to launch, by collaborating with cross-functional teams to deliver innovative solutions that align with customer needs and business objectives. Drive product strategy, prioritize features, and ensure timely delivery while maintaining a customer-centric approach. Analyze market trends, gather feedback, and continuously improve the product to achieve business goals.",
            requirements: ["Strong leadership skills", "Experience in product management", "Excellent communication"],
            salary: "$120,000 - $140,000",
            location: "Seattle, WA",
            company: "Innovate Solutions",
            datePosted: "2023-10-10",
            jobType: "Full-time",
        },
        {
            id: "4C67D",
            title: "UX Designer",
            description: "Design user-friendly interfaces by understanding user behavior, conducting research, and leveraging design tools to create visually appealing and functional experiences. Collaborate with developers and stakeholders to ensure designs align with business goals. Iterate on designs based on user feedback and usability testing to deliver exceptional user experiences.",
            requirements: ["Proficiency in design tools", "Strong portfolio", "Understanding of user behavior"],
            salary: "$90,000 - $110,000",
            location: "Austin, TX",
            company: "Creative Minds",
            datePosted: "2023-10-12",
            jobType: "Full-time",
        },
        {
            id: "5E89F",
            title: "DevOps Engineer",
            description: "Optimize development workflows by managing infrastructure, automating deployments, and ensuring system reliability through effective DevOps practices. Collaborate with development and operations teams to streamline processes, monitor system performance, and troubleshoot issues. Implement best practices for CI/CD pipelines and cloud infrastructure management.",
            requirements: ["Experience with CI/CD", "Knowledge of cloud platforms", "Strong scripting skills"],
            salary: "$110,000 - $130,000",
            location: "Boston, MA",
            company: "CloudOps",
            datePosted: "2023-10-15",
            jobType: "Full-time",
        },
        {
            id: "6G12H",
            title: "Marketing Specialist",
            description: "Develop and execute marketing strategies to enhance brand visibility, drive engagement, and generate leads through various digital and traditional channels. Analyze campaign performance, identify trends, and optimize strategies to achieve marketing objectives. Collaborate with creative teams to produce compelling content and promotional materials.",
            requirements: ["Experience in digital marketing", "Strong analytical skills", "Creativity"],
            salary: "$70,000 - $90,000",
            location: "Chicago, IL",
            company: "Market Leaders",
            datePosted: "2023-10-18",
            jobType: "Full-time",
        },
        {
            id: "7I34J",
            title: "Cybersecurity Analyst",
            description: "Safeguard systems by identifying vulnerabilities, analyzing threats, and implementing security measures to protect sensitive data and ensure compliance. Monitor network activity, respond to incidents, and develop strategies to mitigate risks. Stay updated on the latest security trends and technologies to enhance organizational defenses.",
            requirements: ["Knowledge of security protocols", "Experience with threat analysis", "Problem-solving skills"],
            salary: "$100,000 - $120,000",
            location: "Washington, DC",
            company: "SecureTech",
            datePosted: "2023-10-20",
            jobType: "Full-time",
        },
        {
            id: "8K56L",
            title: "HR Manager",
            description: "Oversee recruitment, employee relations, and HR policies to create a positive workplace environment and ensure organizational compliance. Develop and implement HR strategies aligned with business goals. Manage performance reviews, training programs, and employee engagement initiatives to foster a productive workforce.",
            requirements: ["Strong interpersonal skills", "Experience in HR management", "Knowledge of labor laws"],
            salary: "$80,000 - $100,000",
            location: "Los Angeles, CA",
            company: "People First",
            datePosted: "2023-10-22",
            jobType: "Full-time",
        },
        {
            id: "9M78N",
            title: "Mobile App Developer",
            description: "Develop and maintain high-quality mobile applications for iOS and Android platforms using modern frameworks and best practices. Collaborate with cross-functional teams to define app requirements, design user interfaces, and implement features. Conduct testing and debugging to ensure optimal performance and user satisfaction.",
            requirements: ["Proficiency in mobile frameworks", "Experience with iOS/Android", "Strong coding skills"],
            salary: "$95,000 - $115,000",
            location: "Denver, CO",
            company: "AppWorks",
            datePosted: "2023-10-25",
            jobType: "Full-time",
        },
        {
            id: "10O90P",
            title: "AI Research Scientist",
            description: "Conduct advanced research in AI and machine learning to create innovative solutions and contribute to the development of cutting-edge technologies. Design and implement algorithms, analyze data, and publish findings in academic journals. Collaborate with teams to integrate AI solutions into real-world applications.",
            requirements: ["PhD in Computer Science or related field", "Strong programming skills", "Experience with ML frameworks"],
            salary: "$150,000 - $180,000",
            location: "Palo Alto, CA",
            company: "AI Innovations",
            datePosted: "2023-10-28",
            jobType: "Full-time",
        },
        {
            id: "11Q12R",
            title: "Technical Writer",
            description: "Create clear and concise technical documentation, manuals, and guides tailored to diverse audiences and complex products. Collaborate with engineers and product teams to gather information and ensure accuracy. Edit and maintain documentation to reflect updates and changes in products or services.",
            requirements: ["Excellent writing skills", "Technical background", "Attention to detail"],
            salary: "$60,000 - $80,000",
            location: "Portland, OR",
            company: "DocuTech",
            datePosted: "2023-10-30",
            jobType: "Full-time",
        },
        {
            id: "12S34T",
            title: "Cloud Architect",
            description: "Design scalable, secure, and efficient cloud solutions to meet business objectives while adhering to industry best practices. Evaluate and select cloud technologies, create architecture blueprints, and oversee implementation. Provide guidance to development teams and ensure solutions align with organizational goals.",
            requirements: ["Experience with cloud platforms", "Strong architecture skills", "Knowledge of security best practices"],
            salary: "$130,000 - $160,000",
            location: "Atlanta, GA",
            company: "Cloud Masters",
            datePosted: "2023-11-01",
            jobType: "Full-time",
        },
    ];
    
    return (
        <JobsContext.Provider value={{ jobs }}>
        {children}
        </JobsContext.Provider>
    );
}

export default JobsContext;