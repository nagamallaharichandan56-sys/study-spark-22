import { Button } from "@/components/ui/button";
import { ArrowRight, Upload, Brain, BarChart3, Lightbulb } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-accent/5 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-2 text-sm font-medium text-accent">
                <Brain className="h-4 w-4" />
                AI-Powered Learning
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Transform Your
                <span className="bg-gradient-primary bg-clip-text text-transparent block">
                  Study Experience
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Upload your documents, generate AI-powered quizzes, track your progress, 
                and receive personalized study recommendations. Make learning efficient and engaging.
              </p>
            </div>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 bg-card rounded-full px-4 py-2 shadow-subtle">
                <Upload className="h-4 w-4 text-primary" />
                <span className="text-sm">Document Processing</span>
              </div>
              <div className="flex items-center gap-2 bg-card rounded-full px-4 py-2 shadow-subtle">
                <Brain className="h-4 w-4 text-accent" />
                <span className="text-sm">AI Assessments</span>
              </div>
              <div className="flex items-center gap-2 bg-card rounded-full px-4 py-2 shadow-subtle">
                <BarChart3 className="h-4 w-4 text-success" />
                <span className="text-sm">Progress Analytics</span>
              </div>
              <div className="flex items-center gap-2 bg-card rounded-full px-4 py-2 shadow-subtle">
                <Lightbulb className="h-4 w-4 text-primary" />
                <span className="text-sm">Smart Recommendations</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="group">
                Start Learning Now
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-8 border-t border-border">
              <div>
                <div className="text-2xl font-bold text-primary">10K+</div>
                <div className="text-sm text-muted-foreground">Documents Processed</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-accent">50K+</div>
                <div className="text-sm text-muted-foreground">Quizzes Generated</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-success">95%</div>
                <div className="text-sm text-muted-foreground">Learning Improvement</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-large">
              <img 
                src={heroImage} 
                alt="AI-powered study platform interface showcasing document processing and analytics"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"></div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-card rounded-xl p-4 shadow-large animate-bounce">
              <Brain className="h-8 w-8 text-accent" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-card rounded-xl p-4 shadow-large animate-pulse">
              <BarChart3 className="h-8 w-8 text-success" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};