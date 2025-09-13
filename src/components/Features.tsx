import { Card } from "@/components/ui/card";
import { Upload, Brain, BarChart3, Lightbulb, FileText, Zap, Target, Clock } from "lucide-react";

const features = [
  {
    icon: Upload,
    title: "Smart Document Processing",
    description: "Upload PDFs, Word docs, and text files. Our AI extracts key concepts and creates structured content for optimal learning.",
    color: "text-primary",
    bgColor: "bg-primary/10"
  },
  {
    icon: Brain,
    title: "AI-Generated Assessments", 
    description: "Automatically generate quizzes, flashcards, and practice questions tailored to your study material's content and difficulty.",
    color: "text-accent",
    bgColor: "bg-accent/10"
  },
  {
    icon: BarChart3,
    title: "Progress Analytics",
    description: "Track your learning journey with detailed insights into performance, time spent, and mastery levels across subjects.",
    color: "text-success", 
    bgColor: "bg-success/10"
  },
  {
    icon: Lightbulb,
    title: "Personalized Recommendations",
    description: "Get AI-powered suggestions for study schedules, weak areas to focus on, and additional resources to enhance learning.",
    color: "text-primary",
    bgColor: "bg-primary/10"
  },
  {
    icon: FileText,
    title: "Content Summarization",
    description: "Automatically generate concise summaries and key takeaways from lengthy documents to save study time.",
    color: "text-accent",
    bgColor: "bg-accent/10"
  },
  {
    icon: Zap,
    title: "Rapid Quiz Generation",
    description: "Create comprehensive assessments in seconds, not hours. Focus on learning instead of test preparation.",
    color: "text-success",
    bgColor: "bg-success/10"
  },
  {
    icon: Target,
    title: "Adaptive Learning",
    description: "AI adjusts question difficulty and content focus based on your performance to optimize learning efficiency.",
    color: "text-primary", 
    bgColor: "bg-primary/10"
  },
  {
    icon: Clock,
    title: "Study Session Planning",
    description: "Smart scheduling recommendations that align with your goals, availability, and optimal learning times.",
    color: "text-accent",
    bgColor: "bg-accent/10"
  }
];

export const Features = () => {
  return (
    <section id="features" className="py-20 bg-gradient-to-b from-background to-secondary/10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 text-sm font-medium text-primary mb-4">
            <Zap className="h-4 w-4" />
            Powerful Features
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Everything You Need to
            <span className="bg-gradient-primary bg-clip-text text-transparent block">
              Accelerate Learning
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive platform combines AI technology with proven learning methodologies 
            to create the most effective study experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="p-6 h-full bg-gradient-card border-0 shadow-medium hover:shadow-large transition-smooth hover:-translate-y-1 group"
            >
              <div className={`w-12 h-12 ${feature.bgColor} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth`}>
                <feature.icon className={`h-6 w-6 ${feature.color}`} />
              </div>
              <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-smooth">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};