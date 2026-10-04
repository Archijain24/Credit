import {
  ArrowRight,
  BarChart3,
  Shield,
  Zap,
  GitBranch,
  Award,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-lg text-foreground">CreditAI</span>
          </div>
          <div className="hidden sm:flex items-center gap-8">
            <a
              href="#features"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              How it Works
            </a>
            <a
              href="#metrics"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Performance
            </a>
          </div>
          <Link
            to="/assessment"
            className="px-6 py-2 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-colors"
          >
            Get Started
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 w-fit">
                <Award className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">
                  92% ROC-AUC Performance
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                <span className="gradient-text">Advanced Credit Risk</span>
                <br />
                Assessment with ML
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                Harness the power of gradient boosting and explainable AI to
                make informed credit decisions. Deployed on Vercel with
                enterprise-grade containerization for reliability.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/assessment"
                className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors"
              >
                Start Assessment <ArrowRight className="w-4 h-4" />
              </Link>
              <button className="px-8 py-3 rounded-lg border border-border bg-card text-foreground font-semibold hover:bg-muted transition-colors">
                View Documentation
              </button>
            </div>

            <div className="flex items-center gap-8 pt-8 border-t border-border">
              <div>
                <p className="text-2xl font-bold text-foreground">92%</p>
                <p className="text-sm text-muted-foreground">
                  Accuracy (ROC-AUC)
                </p>
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">10M+</p>
                <p className="text-sm text-muted-foreground">Assessments Run</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">99.9%</p>
                <p className="text-sm text-muted-foreground">Uptime</p>
              </div>
            </div>
          </div>

          <div className="relative h-96 sm:h-[500px] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 flex items-center justify-center animate-slide-up">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 rounded-2xl bg-gradient-to-br from-primary to-accent opacity-20 blur-3xl" />
            </div>
            <div className="relative z-10 w-full h-full flex items-center justify-center p-8">
              <div className="text-center">
                <BarChart3 className="w-24 h-24 text-primary/50 mx-auto mb-4" />
                <p className="text-muted-foreground text-sm">
                  Interactive Model Dashboard
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section
        id="metrics"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 border-t border-border"
      >
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Model Performance
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Industry-leading metrics backed by rigorous validation and
            continuous monitoring
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="metric-card">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-foreground">ROC-AUC Score</h3>
              <Award className="w-5 h-5 text-primary" />
            </div>
            <p className="text-3xl font-bold text-primary mb-2">92%</p>
            <p className="text-sm text-muted-foreground">
              Gradient Boosting Classifier
            </p>
          </div>

          <div className="metric-card">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-foreground">
                Interpretability
              </h3>
              <Zap className="w-5 h-5 text-accent" />
            </div>
            <p className="text-3xl font-bold text-accent mb-2">SHAP</p>
            <p className="text-sm text-muted-foreground">
              Explainable AI Values
            </p>
          </div>

          <div className="metric-card">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-foreground">Deployment</h3>
              <GitBranch className="w-5 h-5 text-primary" />
            </div>
            <p className="text-3xl font-bold text-primary mb-2">Docker</p>
            <p className="text-sm text-muted-foreground">
              Containerized & Scalable
            </p>
          </div>

          <div className="metric-card">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-foreground">Hosting</h3>
              <Shield className="w-5 h-5 text-accent" />
            </div>
            <p className="text-3xl font-bold text-accent mb-2">Vercel</p>
            <p className="text-sm text-muted-foreground">
              Edge-Ready Deployment
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 border-t border-border"
      >
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Key Features
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need for comprehensive credit risk assessment
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-xl border border-border/50 bg-card hover:border-primary/30 hover:shadow-lg transition-all duration-300">
            <BarChart3 className="w-10 h-10 text-primary mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-3">
              Advanced Analytics
            </h3>
            <p className="text-muted-foreground">
              Comprehensive statistical analysis with gradient boosting
              algorithms for accurate risk prediction and trend analysis.
            </p>
          </div>

          <div className="p-8 rounded-xl border border-border/50 bg-card hover:border-primary/30 hover:shadow-lg transition-all duration-300">
            <Zap className="w-10 h-10 text-accent mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-3">
              Explainable Results
            </h3>
            <p className="text-muted-foreground">
              SHAP values provide transparent, human-interpretable explanations
              for every prediction and decision.
            </p>
          </div>

          <div className="p-8 rounded-xl border border-border/50 bg-card hover:border-primary/30 hover:shadow-lg transition-all duration-300">
            <Shield className="w-10 h-10 text-primary mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-3">
              Enterprise Security
            </h3>
            <p className="text-muted-foreground">
              Containerized deployment with Docker ensures consistent, secure,
              and scalable infrastructure.
            </p>
          </div>

          <div className="p-8 rounded-xl border border-border/50 bg-card hover:border-primary/30 hover:shadow-lg transition-all duration-300">
            <GitBranch className="w-10 h-10 text-accent mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-3">
              Global Scale
            </h3>
            <p className="text-muted-foreground">
              Deployed on Vercel edge network for lightning-fast performance and
              99.9% availability.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section
        id="how-it-works"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 border-t border-border"
      >
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A streamlined process for comprehensive credit assessment
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            {
              step: 1,
              title: "Input Data",
              desc: "Provide applicant information and financial details",
            },
            {
              step: 2,
              title: "Model Processing",
              desc: "Gradient boosting analyzes patterns in the data",
            },
            {
              step: 3,
              title: "Calculate Risk",
              desc: "Generates probability and confidence metrics",
            },
            {
              step: 4,
              title: "Explain Results",
              desc: "SHAP values show contributing factors",
            },
          ].map((item) => (
            <div key={item.step} className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold mb-4">
                  {item.step}
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
              {item.step < 4 && (
                <div className="hidden md:block absolute top-6 -right-6 w-12 h-1 bg-gradient-to-r from-primary to-transparent" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 border-t border-border">
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5 border border-primary/20 p-12 sm:p-16">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary blur-3xl rounded-full" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent blur-3xl rounded-full" />
          </div>

          <div className="relative z-10 text-center space-y-8 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Ready to Transform Your Credit Decisions?
            </h2>
            <p className="text-lg text-muted-foreground">
              Deploy our ML-powered credit risk assessment model and start
              making data-driven decisions today. Available globally on Vercel
              edge network.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/assessment"
                className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
              >
                Start Free Trial
              </Link>
              <button className="px-8 py-3 rounded-lg border border-primary/30 text-primary font-semibold hover:bg-primary/5 transition-colors">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-foreground">CreditAI</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Enterprise-grade credit risk assessment powered by machine
                learning.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-4">Product</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#features"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#how-it-works"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    How it Works
                  </a>
                </li>
                <li>
                  <a
                    href="#metrics"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Performance
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Privacy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Terms
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Security
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between text-sm text-muted-foreground">
            <p>&copy; 2024 CreditAI. All rights reserved.</p>
            <div className="flex items-center gap-6 mt-4 sm:mt-0">
              <p>Deployed on Vercel</p>
              <p>ML: Gradient Boosting + SHAP</p>
              <p>Infrastructure: Containerized</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
