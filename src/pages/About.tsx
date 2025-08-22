import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  GraduationCap, 
  Briefcase, 
  Award, 
  Shield, 
  CheckSquare, 
  Cloud,
  ArrowRight,
  Calendar
} from "lucide-react";

const About = () => {
  const workExperience = [
    {
      title: "Consultant (Freelancing)",
      company: "Independent",
      period: "2025",
      description: "Providing specialized IT audit and cloud security consulting services to various organizations.",
      current: true,
    },
    {
      title: "Consultant",
      company: "Deloitte",
      period: "Jul 2023 – Feb 2025",
      description: "Leading IT audit engagements, conducting cloud security assessments, and managing third-party risk assessments for clients in BFSI and IT sectors.",
      current: false,
    },
    {
      title: "DevOps Intern",
      company: "Expert Cloud Consulting",
      period: "Feb 2023 – Apr 2023",
      description: "Gained hands-on experience with cloud infrastructure, automation, and DevOps practices across multiple cloud platforms.",
      current: false,
    },
    {
      title: "Cyber Security Analyst",
      company: "Coditing",
      period: "Jun 2022 – Jul 2022",
      description: "Analyzed security threats, implemented security measures, and contributed to vulnerability assessments.",
      current: false,
    },
  ];

  const skills = [
    "Risk Assessments",
    "IT Audit",
    "Cloud Security",
    "ISO Audits",
    "Data Security",
    "TPRM",
    "Azure Security Centre",
    "AWS Security Tools",
    "GCP Security",
    "NIST Framework",
    "CIS Benchmarks",
    "Compliance Management",
  ];

  const certifications = [
    {
      name: "ISO 27001:2022 Lead Auditor",
      issuer: "International",
      icon: <Shield className="h-5 w-5" />,
    },
    {
      name: "eLearnSecurity Junior Penetration Tester",
      issuer: "eLearnSecurity",
      icon: <Shield className="h-5 w-5" />,
    },
    {
      name: "Google Project Management",
      issuer: "Google",
      icon: <CheckSquare className="h-5 w-5" />,
    },
    {
      name: "CEH v11",
      issuer: "EC-Council",
      icon: <Shield className="h-5 w-5" />,
    },
    {
      name: "AWS Certified Cloud Practitioner",
      issuer: "AWS",
      icon: <Cloud className="h-5 w-5" />,
    },
    {
      name: "Palo Alto Networks Prisma Cloud Professional",
      issuer: "Palo Alto Networks",
      icon: <Shield className="h-5 w-5" />,
    },
    {
      name: "AWS Certified Solutions Architect - Associate",
      issuer: "AWS",
      icon: <Cloud className="h-5 w-5" />,
    },
    {
      name: "Microsoft Azure Fundamentals (AZ-900)",
      issuer: "Microsoft",
      icon: <Cloud className="h-5 w-5" />,
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
            About Me
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            IT Auditor & Cloud Security Specialist with a passion for helping organizations 
            strengthen their security posture and achieve compliance excellence.
          </p>
        </div>

        {/* Professional Bio */}
        <section className="mb-20">
          <Card className="p-8 lg:p-12 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
            <CardContent className="space-y-6">
              <h2 className="text-2xl lg:text-3xl font-bold text-primary mb-6">
                Professional Background
              </h2>
              <div className="text-lg text-muted-foreground leading-relaxed space-y-4">
                <p>
                  As an experienced IT Auditor and Cloud Security Specialist, I bring over two years 
                  of specialized expertise in IT risk management, Governance, Risk, and Compliance (GRC), 
                  and multi-cloud security across AWS, Azure, and GCP platforms.
                </p>
                <p>
                  My approach combines deep technical knowledge with practical business understanding, 
                  ensuring that security measures not only protect organizations but also enable business growth. 
                  I am certified as an ISO 27001:2022 Lead Auditor and hold multiple cloud security certifications, 
                  positioning me uniquely to bridge the gap between compliance requirements and technical implementation.
                </p>
                <p>
                  Currently serving as a Consultant at Deloitte, I have successfully led numerous IT audit 
                  engagements, conducted comprehensive cloud security assessments, and implemented robust 
                  third-party risk management frameworks for clients across the Banking, Financial Services, 
                  and Insurance (BFSI) and IT sectors.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Work Experience */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              Work Experience
            </h2>
            <p className="text-lg text-muted-foreground">
              Professional journey across consulting, cybersecurity, and cloud technologies
            </p>
          </div>

          <div className="space-y-6">
            {workExperience.map((job, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div className="flex items-center space-x-3 mb-2 lg:mb-0">
                      <Briefcase className="h-6 w-6 text-accent" />
                      <div>
                        <h3 className="text-xl font-semibold text-primary">{job.title}</h3>
                        <p className="text-secondary font-medium">{job.company}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="text-muted-foreground text-sm">{job.period}</span>
                      {job.current && (
                        <Badge variant="default" className="bg-accent">
                          Current
                        </Badge>
                      )}
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{job.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              Education
            </h2>
          </div>

          <Card className="hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3 mb-4">
                <GraduationCap className="h-6 w-6 text-accent" />
                <div>
                  <h3 className="text-xl font-semibold text-primary">
                    B.Tech in Computer Science and Engineering
                  </h3>
                  <p className="text-secondary font-medium">
                    Specialization in Network and Security
                  </p>
                  <p className="text-muted-foreground">
                    MIT Art, Design and Technology (2019–2023)
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Comprehensive foundation in computer science with specialized focus on network security, 
                cybersecurity fundamentals, and secure system design principles.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Skills & Expertise */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              Skills & Expertise
            </h2>
            <p className="text-lg text-muted-foreground">
              Core competencies in IT audit, cloud security, and compliance management
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <Card key={index} className="hover:shadow-md transition-all duration-200 hover:-translate-y-1">
                <CardContent className="p-4 text-center">
                  <span className="text-sm font-medium text-primary">{skill}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              Certifications
            </h2>
            <p className="text-lg text-muted-foreground">
              Industry-recognized credentials demonstrating expertise and commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 p-2 bg-accent/10 rounded-lg">
                      {cert.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-primary mb-1 text-sm leading-tight">
                        {cert.name}
                      </h3>
                      <p className="text-muted-foreground text-xs">{cert.issuer}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <Card className="p-8 lg:p-12 bg-gradient-hero text-primary-foreground">
            <CardContent className="space-y-6">
              <h2 className="text-2xl lg:text-3xl font-bold">
                Ready to Work Together?
              </h2>
              <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
                Let's discuss how my expertise in IT audits and cloud security 
                can help your organization achieve its compliance and security goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-accent hover:bg-accent/90" asChild>
                  <Link to="/contact">
                    Get In Touch <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" 
                  asChild
                >
                  <Link to="/services">View Services</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default About;
