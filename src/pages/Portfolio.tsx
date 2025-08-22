import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Shield, 
  Building, 
  Users, 
  ArrowRight,
  CheckCircle,
  Calendar,
  MapPin,
  Target,
  TrendingUp,
  Award
} from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Cloud Security Assessment & TPRM Implementation",
      client: "Major IT Services Company",
      sector: "IT Sector",
      duration: "1.5+ years",
      location: "Mumbai, India",
      description: "Conducted comprehensive third-party risk management (TPRM) audits for a leading IT services organization, evaluating cloud security posture across AWS and Azure environments.",
      challenge: "The client needed to strengthen their vendor risk management program and ensure compliance with international security standards while managing over 200 third-party vendors.",
      solution: [
        "Developed comprehensive TPRM framework aligned with ISO 27001 and NIST standards",
        "Conducted security assessments of 50+ critical vendors",
        "Implemented automated vendor risk monitoring dashboard",
        "Created standardized vendor security questionnaires and evaluation criteria",
        "Established ongoing vendor security review processes"
      ],
      outcomes: [
        "40% reduction in vendor-related security risks",
        "Achieved ISO 27001 compliance for vendor management",
        "Streamlined vendor onboarding process by 60%",
        "Enhanced visibility into third-party security posture"
      ],
      technologies: ["AWS Security Hub", "Azure Security Center", "ISO 27001"],
      type: "TPRM & Cloud Security"
    },
    {
      id: 2,
      title: "Digital Transformation Security Program",
      client: "Regional Banking Institution",
      sector: "BFSI Sector",
      duration: "1.5+ years",
      location: "Pune, India",
      description: "Led project management and security consulting for a major digital transformation initiative, ensuring security controls were embedded throughout the modernization process.",
      challenge: "The bank required comprehensive security oversight during their digital transformation while maintaining regulatory compliance and minimizing business disruption.",
      solution: [
        "Designed security architecture for new digital banking platform",
        "Implemented DevSecOps practices and security testing protocols",
        "Conducted security risk assessments for all new applications",
        "Developed incident response procedures for digital channels",
        "Managed cross-functional teams across security, IT, and business units"
      ],
      outcomes: [
        "Successfully launched secure digital banking platform",
        "Achieved 99.9% uptime during transformation period",
        "Zero security incidents during implementation",
        "Reduced time-to-market for new features by 50%"
      ],
      technologies: ["Azure DevOps", "SIEM Tools", "Project Management"],
      type: "Project Management & Security"
    },
    {
      id: 3,
      title: "Comprehensive Third-Party Risk Assessment",
      client: "Financial Services Conglomerate",
      sector: "BFSI Sector",
      duration: "1.5+ years",
      location: "Delhi, India",
      description: "Executed large-scale third-party risk management assessment covering fintech partnerships, cloud service providers, and critical business vendors for a multi-billion dollar financial institution.",
      challenge: "The client needed to assess and mitigate risks across a complex ecosystem of 300+ vendors while ensuring compliance with RBI guidelines and international standards.",
      solution: [
        "Conducted risk-based vendor categorization and prioritization",
        "Performed on-site security assessments of high-risk vendors",
        "Developed vendor risk scoring methodology",
        "Created comprehensive vendor management policies and procedures",
        "Implemented continuous monitoring framework for critical vendors"
      ],
      outcomes: [
        "Identified and mitigated 25 critical vendor risks",
        "Achieved 100% compliance with RBI outsourcing guidelines",
        "Established ongoing vendor monitoring for 300+ vendors",
        "Reduced vendor-related audit findings by 80%"
      ],
      technologies: ["GRC Platforms", "Risk Assessment Tools", "Compliance Management", "Policy Generation", "Policy Implementation"],
      type: "Third-Party Risk Management"
    }
  ];

  const achievements = [
    {
      metric: "20+",
      label: "Security Assessments Completed",
      icon: <Shield className="h-6 w-6 text-accent" />
    },
    {
      metric: "30+",
      label: "Vendors Evaluated",
      icon: <Users className="h-6 w-6 text-accent" />
    },
    {
      metric: "100%",
      label: "Client Satisfaction Rate",
      icon: <Award className="h-6 w-6 text-accent" />
    },
    {
      metric: "2+",
      label: "Years of Experience",
      icon: <TrendingUp className="h-6 w-6 text-accent" />
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
            Portfolio & Projects
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Showcasing successful IT audit and cloud security engagements across 
            Banking, Financial Services, and IT sectors.
          </p>
        </div>

        {/* Key Achievements */}
        <section className="mb-20">
          <Card className="p-8 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
            <CardContent>
              <h2 className="text-2xl lg:text-3xl font-bold text-primary text-center mb-8">
                Key Achievements
              </h2>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                {achievements.map((achievement, index) => (
                  <div key={index} className="text-center space-y-3">
                    <div className="flex justify-center">{achievement.icon}</div>
                    <div className="text-3xl font-bold text-primary">{achievement.metric}</div>
                    <div className="text-sm text-muted-foreground">{achievement.label}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Featured Projects */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground">
              Detailed case studies of successful engagements and their business impact
            </p>
          </div>

          <div className="space-y-12">
            {projects.map((project) => (
              <Card key={project.id} className="hover:shadow-xl transition-all duration-300">
                <CardHeader className="border-b border-border">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline" className="text-accent border-accent">
                          {project.type}
                        </Badge>
                        <Badge variant="secondary">
                          {project.sector}
                        </Badge>
                      </div>
                      <CardTitle className="text-2xl text-primary">{project.title}</CardTitle>
                      <p className="text-muted-foreground">{project.client}</p>
                    </div>
                    <div className="flex flex-col space-y-2 text-sm text-muted-foreground lg:text-right">
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4" />
                        <span>{project.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4" />
                        <span>{project.location}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="p-6 space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-semibold text-primary flex items-center">
                        <Target className="h-4 w-4 mr-2" />
                        Challenge
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {project.challenge}
                      </p>
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-semibold text-primary flex items-center">
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Key Outcomes
                      </h4>
                      <ul className="space-y-2">
                        {project.outcomes.map((outcome, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-start">
                            <span className="text-accent mr-2 mt-1">•</span>
                            {outcome}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold text-primary">Solution Approach</h4>
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-2">
                      {project.solution.map((item, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start">
                          <span className="text-accent mr-2 mt-1">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <h4 className="font-semibold text-primary mb-3">Technologies & Frameworks</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Methodologies & Standards */}
        <section className="mb-20">
          <Card className="p-8 bg-gradient-to-br from-secondary/5 to-accent/5 border-secondary/20">
            <CardContent className="text-center space-y-8">
              <h2 className="text-3xl lg:text-4xl font-bold text-primary">
                Frameworks & Standards
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                All projects are executed using industry-recognized frameworks and best practices
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="space-y-2">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                    <Building className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-primary">ISO 27001</h3>
                  <p className="text-sm text-muted-foreground">Information Security Management</p>
                </div>
                <div className="space-y-2">
                  <div className="w-16 h-16 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto">
                    <Shield className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="font-semibold text-primary">Multi-Cloud Architecture</h3>
                  <p className="text-sm text-muted-foreground">IDAM and Network Framework</p>
                </div>
                <div className="space-y-2">
                  <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mx-auto">
                    <CheckCircle className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="font-semibold text-primary">CIS Controls</h3>
                  <p className="text-sm text-muted-foreground">Critical Security Controls</p>
                </div>
                <div className="space-y-2">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                    <Award className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-primary">Cloud Security</h3>
                  <p className="text-sm text-muted-foreground">Cloud Security Control</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* CTA */}
        <section className="text-center">
          <Card className="p-8 lg:p-12 bg-gradient-hero text-primary-foreground">
            <CardContent className="space-y-6">
              <h2 className="text-2xl lg:text-3xl font-bold">
                Ready to Start Your Next Project?
              </h2>
              <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
                Let's discuss how I can help your organization achieve similar results 
                with comprehensive IT audit and cloud security services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-accent hover:bg-accent/90" asChild>
                  <Link to="/contact">
                    Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
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

export default Portfolio;
