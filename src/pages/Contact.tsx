import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Send,
  Clock,
  MessageSquare,
  CheckCircle
} from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for your inquiry. I'll get back to you within 24 hours.",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        company: "",
        subject: "",
        message: ""
      });
      
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-accent" />,
      title: "Email",
      detail: "sohamdhande69@gmail.com",
      description: "Best way to reach me for detailed inquiries"
    },
    {
      icon: <Phone className="h-6 w-6 text-accent" />,
      title: "Phone",
      detail: "(Refer Below Contact Form)",
      description: "Available for urgent consultations"
    },
    {
      icon: <MapPin className="h-6 w-6 text-accent" />,
      title: "Location",
      detail: "Pune, India",
      description: "Available for on-site consultations in Maharashtra"
    },
    {
      icon: <Linkedin className="h-6 w-6 text-accent" />,
      title: "LinkedIn",
      detail: "linkedin.com/in/soham-dhande",
      description: "Connect for professional networking"
    }
  ];

  const services = [
    "Cloud Security Assessment",
    "IT Audit & GRC Consulting",
    "Third-Party Risk Management",
    "Security Policy Development",
    "Compliance Consulting",
    "Security Training"
  ];

  const responseInfo = [
    {
      icon: <Clock className="h-5 w-5 text-secondary" />,
      title: "Response Time",
      detail: "Within 24 hours"
    },
    {
      icon: <MessageSquare className="h-5 w-5 text-secondary" />,
      title: "Consultation",
      detail: "Free initial discussion"
    },
    {
      icon: <CheckCircle className="h-5 w-5 text-secondary" />,
      title: "Availability",
      detail: "Ready to start immediately"
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to strengthen your organization's security posture? Let's discuss 
            your specific requirements and how I can help achieve your compliance goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-2xl text-primary flex items-center">
                  <Send className="h-6 w-6 mr-3 text-accent" />
                  Send Me a Message
                </CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and I'll get back to you as soon as possible.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@company.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="company">Company/Organization</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Your organization"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="Brief description of your inquiry"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Please describe your requirements, timeline, and any specific questions you have..."
                      rows={6}
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-accent hover:bg-accent/90"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending Message..."
                    ) : (
                      <>
                        Send Message <Send className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Contact Details */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 p-2 bg-accent/10 rounded-lg">
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-primary text-sm">{info.title}</h3>
                      <p className="text-primary font-medium text-sm">{info.detail}</p>
                      <p className="text-muted-foreground text-xs leading-relaxed">
                        {info.description}
                      </p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Response Information */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary">What to Expect</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {responseInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    {info.icon}
                    <div>
                      <p className="font-medium text-primary text-sm">{info.title}</p>
                      <p className="text-muted-foreground text-xs">{info.detail}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Services Available */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary">Services Available</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {services.map((service, index) => (
                    <li key={index} className="text-sm text-muted-foreground flex items-start">
                      <span className="text-accent mr-2 mt-1">•</span>
                      {service}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Additional CTA Section */}
        <section className="mt-20">
          <Card className="p-8 lg:p-12 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
            <CardContent className="text-center space-y-6">
              <h2 className="text-2xl lg:text-3xl font-bold text-primary">
                Prefer a Direct Conversation?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Sometimes it's easier to discuss your requirements over a call. 
                I'm available for phone consultations and video meetings.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="outline" asChild>
                  <a 
                    href="https://linkedin.com/in/soham-dhande" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="mr-2 h-5 w-5" />
                    Connect on LinkedIn
                  </a>
                </Button>
                <Button size="lg" className="bg-secondary hover:bg-secondary/90" asChild>
                  <a href="tel:+917559444529">
                    <Phone className="mr-2 h-5 w-5" />
                    Schedule a Call
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Contact;
