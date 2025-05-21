
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Automated Testing Framework",
      description: "Developed a comprehensive testing framework using Selenium and Java that reduced testing time by 60% and increased test coverage by 40%.",
      tools: ["Selenium", "Java", "TestNG", "Maven"],
      achievements: [
        "Implemented Page Object Model for better maintainability",
        "Created custom reporting system with screenshots",
        "Integrated with CI/CD pipeline for automated execution"
      ],
      link: "#",
      bgColor: "bg-gradient-to-br from-blue-600/20 to-cyan-500/20"
    },
    {
      title: "API Testing Suite",
      description: "Built an extensive API testing suite using Postman and Rest Assured for a microservices architecture, ensuring data integrity and system reliability.",
      tools: ["Postman", "Rest Assured", "Newman", "Jenkins"],
      achievements: [
        "Automated 200+ API test cases",
        "Implemented data-driven testing approach",
        "Created comprehensive documentation"
      ],
      link: "#",
      bgColor: "bg-gradient-to-br from-blue-700/20 to-indigo-500/20"
    },
    {
      title: "Subsidized Fertilizer Stock Dashboard",
      description: "Built a visual dashboard for subsidized fertilizer stock at kiosks using Vue.js and integrated data from Rekan Kios to support Distribution Planning & Control System (DPCS).",
      tools: ["SQL", "Vue.js", "API", "Dashboard"],
      achievements: [
        "Integrated cross-team data via API",
        "Designed and implemented real-time stock visualization dashboard",
        "Improved transparency and efficiency in fertilizer distribution"
      ],
      link: "#",
      bgColor: "bg-gradient-to-br from-cyan-600/20 to-blue-500/20"
    },
    {
      title: "Mobile Testing Framework",
      description: "Created a cross-platform mobile testing framework for Android and iOS applications using Appium and Java.",
      tools: ["Appium", "Java", "Cucumber", "TestNG"],
      achievements: [
        "Supported parallel execution across multiple devices",
        "Integrated with cloud testing platforms",
        "Implemented BDD approach for better collaboration"
      ],
      link: "#",
      bgColor: "bg-gradient-to-br from-sky-600/20 to-blue-600/20"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
            Featured Projects
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className={`shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100 dark:border-blue-900/40 overflow-hidden ${project.bgColor} backdrop-blur-sm`}
            >
              <CardHeader>
                <CardTitle className="text-2xl text-blue-700 dark:text-blue-400">{project.title}</CardTitle>
                <CardDescription className="text-slate-600 dark:text-slate-300 mt-2">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-2">TOOLS USED:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool, i) => (
                      <Badge key={i} className="bg-blue-600 hover:bg-blue-700">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-2">KEY ACHIEVEMENTS:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-slate-600 dark:text-slate-300">
                    {project.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="border-blue-400 text-blue-600 hover:bg-blue-100 dark:border-blue-500 dark:text-blue-400 dark:hover:bg-blue-900/30" asChild>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    View Project <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
