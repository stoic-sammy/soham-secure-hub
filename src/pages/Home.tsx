import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Shield, CheckSquare, Users, FileCheck, ArrowRight, Award, Globe } from "lucide-react";
import sohamHeadshot from "@/assets/Soham_Dhande.JPG";

const Home = () => {
  const services = [
    {
      icon: <Shield className="h-8 w-8 text-accent" />,
      title: "Cloud Security Assessments",
      description: "In-depth security assessments for AWS, Azure, and GCP environments with comprehensive reporting.",
    },
    {
      icon: <CheckSquare className="h-8 w-8 text-accent" />,
      title: "IT Audits & GRC",
      description: "Evaluating IT controls against frameworks like NIST, ISO 27001, and CIS Benchmarks.",
    },
    {
      icon: <Users className="h-8 w-8 text-accent" />,
      title: "Third-Party Risk Management",
      description: "Conducting comprehensive security reviews and risk assessments of vendors and partners.",
    },
    {
      icon: <FileCheck className="h-8 w-8 text-accent" />,
      title: "Security Policy & Compliance",
      description: "Drafting and implementing security policies for compliance with industry standards.",
    },
  ];

  const stats = [
    { number: "2+", label: "Years Experience" },
    { number: "8+", label: "Certifications" },
    { number: "3+", label: "Cloud Platforms" },
    { number: "100%", label: "Client Satisfaction" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-primary/5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-primary leading-tight">
                  Expert IT Audits and{" "}
                  <span className="text-accent">Cloud Security</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  ISO 27001 Lead Auditor with 2+ years of experience in IT risk management, 
                  GRC, and multi-cloud security across AWS, Azure, and GCP platforms.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-accent hover:bg-accent/90" asChild>
                  <Link to="/portfolio">
                    View My Work <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/contact">Get In Touch</Link>
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl lg:text-3xl font-bold text-primary">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative mx-auto w-80 h-80 lg:w-96 lg:h-96">
                <div className="absolute inset-0 bg-gradient-accent rounded-full blur-3xl opacity-20"></div>
                <img
                  src={sohamHeadshot}
                  alt="Soham Dhande - IT Auditor & Cloud Security Specialist"
                  className="relative z-10 w-full h-full object-cover rounded-full shadow-hero border-4 border-card"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              Core Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive IT audit and cloud security services to protect your business 
              and ensure compliance with industry standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="flex justify-center">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-primary group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" asChild>
              <Link to="/services">
                View All Services <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Professional Highlights */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-primary">
                Trusted by Organizations Across Industries
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With expertise spanning IT audits, cloud security, and GRC consulting, 
                I help organizations strengthen their security posture and achieve compliance 
                with industry standards like ISO 27001, NIST, and CIS Benchmarks.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Award className="h-6 w-6 text-accent" />
                  <span className="text-foreground">ISO 27001:2022 Lead Auditor Certified</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="h-6 w-6 text-accent" />
                  <span className="text-foreground">Multi-Cloud Security Expert (AWS, Azure, GCP)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="h-6 w-6 text-accent" />
                  <span className="text-foreground">Specialized in BFSI & IT Sector Risk Management</span>
                </div>
              </div>

              <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                <Link to="/about">
                  Learn More About Me <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            <div className="relative">
              <Card className="p-8 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
                <CardContent className="space-y-6">
                  <h3 className="text-xl font-semibold text-primary">Current Role</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-foreground">Consultant at Deloitte</h4>
                      <p className="text-sm text-muted-foreground">Jul 2023 – Feb 2025</p>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Leading IT audit engagements, conducting cloud security assessments, 
                      and managing third-party risk assessments for clients in BFSI and IT sectors.
                    </p>
                  </div>
                  
                  <div className="pt-4 border-t border-border">
                    <h4 className="font-medium text-foreground mb-2">Key Achievements</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Successfully completed 20+ IT audit engagements</li>
                      <li>• Implemented TPRM frameworks for major clients</li>
                      <li>• Led cloud security assessments across all major platforms</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Strengthen Your Security Posture?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Let's discuss how I can help your organization achieve compliance 
            and enhance your cloud security strategy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
              <Link to="/contact">
                Schedule a Consultation <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <Link to="/portfolio">View Portfolio</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
