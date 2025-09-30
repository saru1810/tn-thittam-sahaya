import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Shield, Users, FileText, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-secondary">
      {/* Header */}
      <header className="border-b border-border/40 bg-card/80 backdrop-blur-lg sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center shadow-soft">
              <span className="text-primary-foreground font-bold text-xl">TN</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">TN Thittam</h1>
              <p className="text-sm text-muted-foreground">Tamil Nadu Government Schemes Portal</p>
            </div>
          </div>
          <Button 
            onClick={() => navigate('/auth')}
            className="bg-gradient-primary hover:opacity-90 shadow-soft"
          >
            Get Started
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto text-center max-w-5xl">
          <h2 className="text-5xl lg:text-6xl font-bold text-foreground mb-8 text-balance">
            Discover Your <span className="text-transparent bg-clip-text bg-gradient-primary">Eligible</span> Government Schemes
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto text-balance leading-relaxed">
            Access Tamil Nadu government welfare schemes with ease. Get personalized recommendations, understand eligibility, and apply seamlessly in Tamil or English.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              onClick={() => navigate('/auth')}
              className="bg-gradient-primary hover:opacity-90 text-lg px-8 py-3 shadow-lifted"
            >
              Start Your Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-border text-foreground hover:bg-accent text-lg px-8 py-3"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6 bg-card/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-foreground mb-4 text-balance">
              Why Choose TN Thittam?
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience the most advanced government schemes platform
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-border/40 hover:shadow-lifted transition-all duration-300 hover:-translate-y-1 bg-card/50 backdrop-blur-sm">
              <CardHeader className="text-center pb-4">
                <div className="w-18 h-18 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-soft">
                  <Users className="h-9 w-9 text-primary-foreground" />
                </div>
                <CardTitle className="text-lg text-foreground">Personalized</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center leading-relaxed">
                  Get scheme recommendations tailored to your profile and needs
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/40 hover:shadow-lifted transition-all duration-300 hover:-translate-y-1 bg-card/50 backdrop-blur-sm">
              <CardHeader className="text-center pb-4">
                <div className="w-18 h-18 bg-gradient-accent rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-soft">
                  <Shield className="h-9 w-9 text-primary-foreground" />
                </div>
                <CardTitle className="text-lg text-foreground">Secure</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center leading-relaxed">
                  Your personal information is protected and secure
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/40 hover:shadow-lifted transition-all duration-300 hover:-translate-y-1 bg-card/50 backdrop-blur-sm">
              <CardHeader className="text-center pb-4">
                <div className="w-18 h-18 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-soft">
                  <FileText className="h-9 w-9 text-primary-foreground" />
                </div>
                <CardTitle className="text-lg text-foreground">Complete Guide</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center leading-relaxed">
                  Detailed information about documents and application process
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/40 hover:shadow-lifted transition-all duration-300 hover:-translate-y-1 bg-card/50 backdrop-blur-sm">
              <CardHeader className="text-center pb-4">
                <div className="w-18 h-18 bg-gradient-accent rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-soft">
                  <MapPin className="h-9 w-9 text-primary-foreground" />
                </div>
                <CardTitle className="text-lg text-foreground">Bilingual</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center leading-relaxed">
                  Available in both Tamil and English for accessibility
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
        <div className="container mx-auto text-center max-w-4xl relative">
          <h3 className="text-4xl font-bold text-primary-foreground mb-8 text-balance">
            Ready to Discover Your Benefits?
          </h3>
          <p className="text-xl text-primary-foreground/90 mb-10 text-balance leading-relaxed">
            Join thousands of Tamil Nadu residents who have already discovered their eligible government schemes.
          </p>
          <Button 
            size="lg"
            onClick={() => navigate('/auth')}
            className="bg-card text-foreground hover:bg-card/90 text-lg px-8 py-3 shadow-floating"
          >
            Get Started Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/20 border-t border-border/40 py-16 px-6">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center shadow-soft">
              <span className="text-primary-foreground font-bold text-lg">TN</span>
            </div>
            <span className="text-2xl font-bold text-foreground">TN Thittam</span>
          </div>
          <p className="text-muted-foreground mb-6 text-lg max-w-2xl mx-auto">
            Empowering Tamil Nadu residents with easy access to government welfare schemes
          </p>
          <p className="text-sm text-muted-foreground/80">
            © 2025 TN Thittam. All rights reserved. | Government of Tamil Nadu Initiative
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;