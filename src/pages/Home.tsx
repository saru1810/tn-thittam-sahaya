import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Shield, Users, FileText, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-green-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-green-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">TN</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">TN Thittam</h1>
              <p className="text-sm text-gray-600">Tamil Nadu Government Schemes Portal</p>
            </div>
          </div>
          <Button 
            onClick={() => navigate('/auth')}
            className="bg-gradient-to-r from-orange-500 to-green-600 hover:from-orange-600 hover:to-green-700"
          >
            Get Started
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Discover Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-green-600">Eligible</span> Government Schemes
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Access Tamil Nadu government welfare schemes with ease. Get personalized recommendations, understand eligibility, and apply seamlessly in Tamil or English.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              onClick={() => navigate('/auth')}
              className="bg-gradient-to-r from-orange-500 to-green-600 hover:from-orange-600 hover:to-green-700 text-lg px-8"
            >
              Start Your Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-orange-300 text-orange-600 hover:bg-orange-50 text-lg px-8"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose TN Thittam?
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-orange-200 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-orange-600" />
                </div>
                <CardTitle className="text-lg">Personalized</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Get scheme recommendations tailored to your profile and needs
                </p>
              </CardContent>
            </Card>

            <Card className="border-green-200 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-lg">Secure</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Your personal information is protected and secure
                </p>
              </CardContent>
            </Card>

            <Card className="border-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-lg">Complete Guide</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Detailed information about documents and application process
                </p>
              </CardContent>
            </Card>

            <Card className="border-purple-200 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-lg">Bilingual</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Available in both Tamil and English for accessibility
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-orange-500 to-green-600">
        <div className="container mx-auto text-center max-w-3xl">
          <h3 className="text-3xl font-bold text-white mb-6">
            Ready to Discover Your Benefits?
          </h3>
          <p className="text-xl text-orange-100 mb-8">
            Join thousands of Tamil Nadu residents who have already discovered their eligible government schemes.
          </p>
          <Button 
            size="lg"
            onClick={() => navigate('/auth')}
            className="bg-white text-orange-600 hover:bg-orange-50 text-lg px-8"
          >
            Get Started Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-green-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">TN</span>
            </div>
            <span className="text-2xl font-bold">TN Thittam</span>
          </div>
          <p className="text-gray-400 mb-4">
            Empowering Tamil Nadu residents with easy access to government welfare schemes
          </p>
          <p className="text-sm text-gray-500">
            © 2025 TN Thittam. All rights reserved. | Government of Tamil Nadu Initiative
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;