
import { Badge } from "@/components/ui/badge";

const ExperienceSection = () => {
  const experiences = [
    {
      role: "Software Engineer",
      company: "Pupuk Indonesia",
      period: "Sep 2022 - Present",
      description: "Leading the QA automation initiatives and establishing testing frameworks for critical business applications.",
      responsibilities: [
        "Design and implement a real-time dashboard to monitor subsidized fertilizer stock across multiple regions, enhancing data transparency and enabling faster decision-making for >5 distribution managers",
        "Engineer a web-based analytical dashboard to provide insights into logistics and distribution performance, supporting cross-functional teams with actionable KPIs",
        "Deliver backend APIs and UI components for internal tools used in logistics and distribution planning, contributing to the successful rollout of cross-departmental reporting features",
        "Collaborate with stakeholders to develop custom dashboard features that aligned with business needs, improving the clarity of operational reports and accelerating review cycles"
      ],
      technologies: ["Javascript", "SQL", "ASP.NET", "Next.JS", "Git", "MVC"]
    },
    {
      role: "QA Engineer",
      company: "Pupuk Indonesia",
      period: "Dec 2023 - Mar 2025",
      description: "Responsible for designing and implementing test solutions for web and mobile applications.",
      responsibilities: [
        "Revamp the QA documentation structure and reporting format, improving test traceability and audit readiness by 60% across multiple projects",
        "Implement test automation using Katalon Studio and Postman for Android and API endpoints, increasing test coverage by 40% and reducing regression testing time by 30%",
        "Proactively explored and applied automation strategies, improving test efficiency and contributing to consistent delivery cycles across development teams"
      ],
      technologies: ["Katalon", "Postman", "Git", "API Testing"]
    },
    {
      role: "Quality Assurance Intern",
      company: "Software Solutions Inc.",
      period: "Feb 2022 - Jul 2022",
      description: "Started career in software testing as intern with focus on manual testing.",
      responsibilities: [
        "Performed detailed manual testing across various modules to validate system functionality and uncover defects, contributing to stable product releases",
        "Enhanced the structure and clarity of test report documentation, improving communication of test outcomes to development and stakeholder teams",
        "Executed end-to-end regression testing cycles to ensure system integrity after updates and deployments",
        "Assessed product quality by aligning testing processes with both client requirements and established industry standards, supporting overall project success"
      ],
      technologies: ["Manual Testing", "Mobile Testing", "End-to-end Testing"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-slate-50 to-white dark:from-slate-800 dark:to-slate-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
            Professional Experience
          </span>
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400">{exp.role}</h3>
                <Badge className="mt-2 md:mt-0 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                  {exp.period}
                </Badge>
              </div>
              <h4 className="text-lg font-semibold mb-4 text-slate-700 dark:text-slate-200">{exp.company}</h4>
              <p className="mb-4 text-slate-600 dark:text-slate-300">{exp.description}</p>
              
              <h5 className="font-semibold text-slate-800 dark:text-slate-100 mb-2">Key Responsibilities:</h5>
              <ul className="list-disc pl-5 mb-4 space-y-1 text-slate-600 dark:text-slate-300">
                {exp.responsibilities.map((responsibility, i) => (
                  <li key={i}>{responsibility}</li>
                ))}
              </ul>
              
              <div className="flex flex-wrap gap-2 mt-4">
                {exp.technologies.map((tech, i) => (
                  <Badge key={i} variant="outline" className="bg-slate-100 dark:bg-slate-700">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
