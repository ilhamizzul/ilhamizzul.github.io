
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

const CertificationsSection = () => {
  const certifications = [
    {
      title: "QA Automation Bootcamp",
      issuer: "JayJay Tech",
      date: "2022",
      description: "Comprehensive automation testing framework development with Selenium and Java",
      link: "#",
      badges: ["Selenium", "Java", "BDD", "Automation"],
    },
    {
      title: "Quality Assurance Professional",
      issuer: "Binar Academy",
      date: "2021",
      description: "Manual and automated testing methodologies, best practices, and real-world applications",
      link: "#",
      badges: ["Manual Testing", "Test Planning", "API Testing"],
    },
    {
      title: "Postman API Testing",
      issuer: "Udemy",
      date: "2022",
      description: "Advanced API testing techniques using Postman including automation and CI/CD integration",
      link: "#",
      badges: ["API", "Postman", "Newman", "API Automation"],
    },
    {
      title: "SQL Certification",
      issuer: "HackerRank",
      date: "2021",
      description: "Database querying, optimization, and testing practices",
      link: "#",
      badges: ["SQL", "Database Testing", "Query Optimization"],
    },
    {
      title: "Java Programming",
      issuer: "HackerRank",
      date: "2021",
      description: "Core Java programming concepts and advanced techniques",
      link: "#",
      badges: ["Java", "OOP", "Data Structures"],
    },
  ];

  return (
    <section id="certifications" className="py-20 bg-blue-50 dark:bg-slate-800/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
            Certifications
          </span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <Card 
              key={index} 
              className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 border-blue-100 dark:border-blue-900 overflow-hidden"
            >
              <div className="h-2 bg-gradient-to-r from-blue-600 to-cyan-400"></div>
              <CardHeader>
                <CardTitle className="text-xl text-blue-700 dark:text-blue-400">{cert.title}</CardTitle>
                <CardDescription className="flex justify-between items-center">
                  <span>{cert.issuer}</span>
                  <span className="text-sm text-slate-500 dark:text-slate-400">{cert.date}</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 dark:text-slate-300 mb-4">{cert.description}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {cert.badges.map((badge, i) => (
                    <Badge key={i} variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                      {badge}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 p-0" asChild>
                  <a href={cert.link} target="_blank" rel="noopener noreferrer">
                    View Certificate <ArrowRight className="ml-1 h-4 w-4" />
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

export default CertificationsSection;
