
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

const SkillsSection = () => {
  const qaTools = [
    { name: "Selenium", level: "Expert", description: "Automation testing framework for web applications" },
    { name: "Postman", level: "Expert", description: "API testing and development tool" },
    { name: "Katalon", level: "Advanced", description: "Integrated test automation platform" },
    { name: "Rest Assured", level: "Advanced", description: "Java library for REST API testing" },
    { name: "JMeter", level: "Intermediate", description: "Performance and load testing tool" },
    { name: "Cucumber", level: "Advanced", description: "BDD automation framework" },
    { name: "TestNG", level: "Advanced", description: "Testing framework for Java" },
    { name: "JUnit", level: "Advanced", description: "Unit testing framework for Java" },
    { name: "Jenkins", level: "Intermediate", description: "CI/CD automation server" },
  ];

  const programmingSkills = [
    { name: "Java", level: "Advanced", description: "Primary language for automation frameworks" },
    { name: "JavaScript", level: "Advanced", description: "Web development and testing" },
    { name: "SQL", level: "Advanced", description: "Database querying and testing" },
    { name: "HTML/CSS", level: "Intermediate", description: "Web development fundamentals" },
    { name: "Python", level: "Intermediate", description: "Scripting and automation" },
    { name: "Git", level: "Advanced", description: "Version control system" },
  ];

  const methodologies = [
    { name: "BDD", level: "Expert", description: "Behavior-Driven Development" },
    { name: "POM", level: "Expert", description: "Page Object Model design pattern" },
    { name: "Agile/Scrum", level: "Expert", description: "Iterative development methodology" },
    { name: "CI/CD", level: "Advanced", description: "Continuous Integration and Deployment" },
    { name: "Test Planning", level: "Expert", description: "Test strategy development" },
    { name: "Defect Management", level: "Expert", description: "Bug tracking and resolution" },
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Expert":
        return "bg-blue-600 dark:bg-blue-700";
      case "Advanced":
        return "bg-cyan-600 dark:bg-cyan-700";
      case "Intermediate":
        return "bg-sky-500 dark:bg-sky-600";
      default:
        return "bg-slate-500";
    }
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-white to-slate-100 dark:from-slate-800 dark:to-slate-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
            Skills & Tools
          </span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card className="bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl transition-all duration-300 border-blue-100 dark:border-blue-900">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-6 text-blue-600 dark:text-blue-400 text-center">QA Tools</h3>
              <div className="flex flex-wrap gap-2">
                {qaTools.map((tool) => (
                  <HoverCard key={tool.name}>
                    <HoverCardTrigger asChild>
                      <div>
                        <Badge className={`${getLevelColor(tool.level)} hover:scale-105 transition-transform cursor-help py-1.5`}>
                          {tool.name}
                        </Badge>
                      </div>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80">
                      <div className="flex justify-between">
                        <h4 className="text-sm font-semibold">{tool.name}</h4>
                        <Badge variant="outline" className="ml-2">{tool.level}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">{tool.description}</p>
                    </HoverCardContent>
                  </HoverCard>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl transition-all duration-300 border-blue-100 dark:border-blue-900">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-6 text-blue-600 dark:text-blue-400 text-center">Programming Languages</h3>
              <div className="flex flex-wrap gap-2">
                {programmingSkills.map((skill) => (
                  <HoverCard key={skill.name}>
                    <HoverCardTrigger asChild>
                      <div>
                        <Badge className={`${getLevelColor(skill.level)} hover:scale-105 transition-transform cursor-help py-1.5`}>
                          {skill.name}
                        </Badge>
                      </div>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80">
                      <div className="flex justify-between">
                        <h4 className="text-sm font-semibold">{skill.name}</h4>
                        <Badge variant="outline" className="ml-2">{skill.level}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">{skill.description}</p>
                    </HoverCardContent>
                  </HoverCard>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl transition-all duration-300 border-blue-100 dark:border-blue-900">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-6 text-blue-600 dark:text-blue-400 text-center">Methodologies</h3>
              <div className="flex flex-wrap gap-2">
                {methodologies.map((method) => (
                  <HoverCard key={method.name}>
                    <HoverCardTrigger asChild>
                      <div>
                        <Badge className={`${getLevelColor(method.level)} hover:scale-105 transition-transform cursor-help py-1.5`}>
                          {method.name}
                        </Badge>
                      </div>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80">
                      <div className="flex justify-between">
                        <h4 className="text-sm font-semibold">{method.name}</h4>
                        <Badge variant="outline" className="ml-2">{method.level}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">{method.description}</p>
                    </HoverCardContent>
                  </HoverCard>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
