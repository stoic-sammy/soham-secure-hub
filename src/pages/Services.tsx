import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Shield, 
  CheckSquare, 
  Users, 
  FileCheck, 
  ArrowRight,
  Cloud,
  Database,
  Lock,
  Search,
  AlertTriangle,
  Award,
  Zap,
  Target
} from "lucide-react";

const Services = () => {
  const mainServices = [
    {
      icon: <Shield className="h-12 w-12 text-accent" />,
      title: "Cloud Security Assessments",
      description: "Comprehensive security evaluations for AWS, Azure, and GCP environments to identify vulnerabilities and ensure best practices implementation.",
      features: [
        "Multi-cloud security posture assessment",
        "Infrastructure security review",
        "Identity and access management audit",
        "Data encryption and protection analysis",
        "Network security configuration review",
        "Compliance gap analysis"
      ],
      deliverables: [
        "Detailed security assessment report",
        "Risk prioritization matrix",
        "Remediation roadmap",
        "Executive summary presentation"
      ]
    },
    {
      icon: <CheckSquare className="h-12 w-12 text-accent" />,
      title: "IT Audits & GRC",
      description: "Thorough evaluation of IT controls against industry frameworks including NIST, ISO 27001, and CIS Benchmarks to ensure compliance and security.",
      features: [
        "NIST Cybersecurity Framework assessment",
        "ISO 27001:2022 compliance audit",
        "CIS Controls implementation review",
        "SOC 2 Type II preparation and audit",
        "IT general controls (ITGC) evaluation",
        "Business continuity and disaster recovery testing"
      ],
      deliverables: [
        "Comprehensive audit report",
        "Control deficiency analysis",
        "Compliance status dashboard",
        "Improvement recommendations"
      ]
    },
    {
      icon: <Users className="h-12 w-12 text-accent" />,
      title: "Third-Party Risk Management",
      description: "Strategic vendor and partner security assessments to minimize supply chain risks and ensure third-party compliance with security standards.",
      features: [
        "Vendor security questionnaire development",
        "Third-party security assessments",
        "Supply chain risk analysis",
        "Vendor onboarding security reviews",
        "Ongoing vendor monitoring programs",
        "Contract security requirements definition"
      ],
      deliverables: [
        "Vendor risk assessment reports",
        "TPRM framework documentation",
        "Risk scoring methodology",
        "Vendor management procedures"
      ]
    },
    {
      icon: <FileCheck className="h-12 w-12 text-accent" />,
      title: "Security Policy & Compliance",
      description: "Development and implementation of comprehensive security policies and procedures to achieve and maintain compliance with industry regulations.",
      features: [
        "Information security policy development",
        "Procedure and standard creation",
        "Compliance framework mapping",
        "Policy implementation guidance",
        "Training and awareness programs",
        "Continuous compliance monitoring"
      ],
      deliverables: [
        "Complete policy documentation suite",
        "Implementation timeline",
        "Training materials",
        "Compliance monitoring plan"
      ]
    }
  ];

  const additionalServices = [
    {
      icon: <Search className="h-8 w-8 text-secondary" />,
      title: "Security Assessments",
      description: "Vulnerability assessments and penetration testing services."
    },
    {
      icon: <AlertTriangle className="h-8 w-8 text-secondary" />,
      title: "Incident Response",
      description: "Security incident response planning and execution support."
    },
    {
      icon: <Database className="h-8 w-8 text-secondary" />,
      title: "Data Privacy",
      description: "GDPR, CCPA, and other data privacy regulation compliance."
    },
    {
      icon: <Lock className="h-8 w-8 text-secondary" />,
      title: "Security Training",
      description: "Security awareness training and education programs."
    }
  ];

  const industries = [
    {
      name: "Banking & Financial Services",
      description: "Specialized expertise in BFSI sector compliance and risk management"
    },
    {
      name: "Information Technology",
      description: "Deep understanding of IT sector security challenges and solutions"
    },
    {
      name: "Healthcare",
      description: "HIPAA compliance and healthcare data security expertise"
    },
    {
      name: "Startups & Scale-ups",
      description: "Cost-effective security solutions for growing businesses"
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
            Professional Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive IT audit and cloud security services designed to strengthen 
            your organization's security posture and ensure regulatory compliance.
          </p>
        </div>

        {/* Main Services */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {mainServices.map((service, index) => (
              <Card key={index} className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4 mb-4">
                    {service.icon}
                    <CardTitle className="text-2xl text-primary">{service.title}</CardTitle>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-primary mb-3 flex items-center">
                      <Target className="h-4 w-4 mr-2" />
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start">
                          <span className="text-accent mr-2 mt-1">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="pt-4 border-t border-border">
                    <h4 className="font-semibold text-primary mb-3 flex items-center">
                      <Zap className="h-4 w-4 mr-2" />
                      Deliverables
                    </h4>
                    <ul className="space-y-2">
                      {service.deliverables.map((deliverable, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start">
                          <span className="text-accent mr-2 mt-1">•</span>
                          {deliverable}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Additional Services */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              Additional Capabilities
            </h2>
            <p className="text-lg text-muted-foreground">
              Complementary services to provide comprehensive security coverage
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 space-y-4">
                  <div className="flex justify-center">{service.icon}</div>
                  <h3 className="font-semibold text-primary">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Industry Expertise */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              Industry Expertise
            </h2>
            <p className="text-lg text-muted-foreground">
              Specialized knowledge across key industries and sectors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {industries.map((industry, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 p-3 bg-primary/10 rounded-lg">
                      <Award className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-2">{industry.name}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {industry.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Process Overview */}
        <section className="mb-20">
          <Card className="p-8 lg:p-12 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
            <CardContent className="text-center space-y-8">
              <h2 className="text-3xl lg:text-4xl font-bold text-primary">
                My Approach
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                I follow a structured, risk-based methodology that combines industry best practices 
                with practical business understanding to deliver actionable security improvements.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl font-bold text-accent">1</span>
                  </div>
                  <h3 className="font-semibold text-primary">Discovery</h3>
                  <p className="text-sm text-muted-foreground">Understanding your current state and requirements</p>
                </div>
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl font-bold text-accent">2</span>
                  </div>
                  <h3 className="font-semibold text-primary">Assessment</h3>
                  <p className="text-sm text-muted-foreground">Comprehensive evaluation against standards</p>
                </div>
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl font-bold text-accent">3</span>
                  </div>
                  <h3 className="font-semibold text-primary">Analysis</h3>
                  <p className="text-sm text-muted-foreground">Risk-based prioritization and recommendations</p>
                </div>
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl font-bold text-accent">4</span>
                  </div>
                  <h3 className="font-semibold text-primary">Delivery</h3>
                  <p className="text-sm text-muted-foreground">Actionable reports and implementation support</p>
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
                Ready to Enhance Your Security Posture?
              </h2>
              <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
                Let's discuss your specific requirements and how I can help your organization 
                achieve its security and compliance objectives.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-accent hover:bg-accent/90" asChild>
                  <Link to="/contact">
                    Schedule Consultation <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" 
                  asChild
                >
                  <Link to="/portfolio">View Portfolio</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Services;