
import { Badge } from "@/components/ui/badge";

const ExperienceSection = () => {
  const experiences = [
    {
      role: "Senior QA Automation Engineer",
      company: "Pupuk Indonesia",
      period: "Jan 2022 - Present",
      description: "Leading the QA automation initiatives and establishing testing frameworks for critical business applications.",
      responsibilities: [
        "Designed and implemented comprehensive test automation frameworks using Selenium and Java",
        "Developed automation dashboards for real-time monitoring of test execution and defect trends",
        "Mentored junior QA engineers and established best practices for the team",
        "Integrated automated testing into CI/CD pipelines for continuous quality assurance",
        "Reduced manual testing effort by 65% through strategic test automation"
      ],
      technologies: ["Selenium", "Java", "TestNG", "Jenkins", "Git", "Jira", "Postman", "REST Assured"]
    },
    {
      role: "QA Automation Engineer",
      company: "Tech Innovations",
      period: "Mar 2020 - Dec 2021",
      description: "Responsible for designing and implementing test automation solutions for web and mobile applications.",
      responsibilities: [
        "Created and maintained automated test scripts using Selenium WebDriver and Java",
        "Performed API testing using Postman and integrated with Newman for CI/CD",
        "Collaborated with development teams to ensure quality throughout the SDLC",
        "Implemented BDD framework using Cucumber for better stakeholder communication",
        "Improved test coverage by 40% through strategic automation"
      ],
      technologies: ["Selenium", "Java", "Cucumber", "BDD", "Postman", "Git", "Maven"]
    },
    {
      role: "Junior QA Engineer",
      company: "Software Solutions Inc.",
      period: "Jun 2019 - Feb 2020",
      description: "Started career in software testing with focus on manual testing and basic automation tasks.",
      responsibilities: [
        "Executed manual test cases and documented defects",
        "Assisted in test plan creation and test case development",
        "Learned and implemented basic automation scripts",
        "Participated in daily scrum meetings and sprint planning",
        "Conducted smoke and regression testing"
      ],
      technologies: ["Manual Testing", "JIRA", "SQL", "Basic Selenium"]
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

        <div className="relative">
          {/* Timeline center line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-600 to-cyan-400"></div>
          
          {experiences.map((exp, index) => (
            <div key={index} className={`mb-12 md:mb-24 relative flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
              {/* Timeline dot */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-blue-600 border-4 border-blue-200 dark:border-slate-800 z-10"></div>
              
              {/* Content */}
              <div className="md:w-1/2 p-6">
                <div className={`bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
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
                  
                  <h5 className="font-semibold text-slate-800 dark:text-slate-100 mb-2">Technologies:</h5>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <Badge key={i} variant="outline" className="bg-slate-100 dark:bg-slate-700">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Empty div for layout */}
              <div className="md:w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
