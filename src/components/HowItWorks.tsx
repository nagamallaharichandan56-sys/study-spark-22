import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload, Wand2, Target, TrendingUp, ArrowRight } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: Upload,
    title: "Upload Your Materials",
    description: "Simply drag and drop your study documents, PDFs, or notes. Our system supports all major file formats.",
    color: "text-primary",
    bgColor: "bg-primary/10"
  },
  {
    step: "02", 
    icon: Wand2,
    title: "AI Generates Content",
    description: "Our AI analyzes your materials and automatically creates personalized quizzes, flashcards, and summaries.",
    color: "text-accent",
    bgColor: "bg-accent/10"
  },
  {
    step: "03",
    icon: Target,
    title: "Study & Practice",
    description: "Take AI-generated quizzes, review flashcards, and engage with your content through interactive learning.",
    color: "text-success",
    bgColor: "bg-success/10"
  },
  {
    step: "04",
    icon: TrendingUp,
    title: "Track Progress",
    description: "Monitor your learning progress with detailed analytics and receive personalized recommendations for improvement.",
    color: "text-primary",
    bgColor: "bg-primary/10"
  }
];

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-2 text-sm font-medium text-accent mb-4">
            <Target className="h-4 w-4" />
            Simple Process
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            How StudyAI
            <span className="bg-gradient-primary bg-clip-text text-transparent block">
              Transforms Learning
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get started in minutes with our intuitive workflow designed to maximize your learning efficiency.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="p-6 h-full bg-gradient-card border-0 shadow-medium hover:shadow-large transition-smooth group text-center">
                <div className="relative mb-6">
                  <div className={`w-16 h-16 ${step.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-smooth`}>
                    <step.icon className={`h-8 w-8 ${step.color}`} />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold">
                    {step.step}
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-smooth">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </Card>
              
              {/* Connector Arrow */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <ArrowRight className="h-6 w-6 text-muted-foreground" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="p-8 bg-gradient-primary border-0 shadow-glow max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-primary-foreground mb-4">
              Ready to Revolutionize Your Study Routine?
            </h3>
            <p className="text-primary-foreground/90 mb-6">
              Join thousands of students who have transformed their learning experience with AI-powered study tools.
            </p>
            <Button variant="secondary" size="lg" className="group">
              Start Your Free Trial
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};