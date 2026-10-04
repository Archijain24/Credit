import { useLocation, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  CheckCircle2,
  AlertCircle,
  XCircle,
  TrendingUp,
} from "lucide-react";

interface SHAPValue {
  feature: string;
  value: number;
  impact: "positive" | "negative";
}

interface AssessmentData {
  riskScore: number;
  riskLevel: "Low" | "Medium" | "High";
  probabilityDefault: number;
  recommendedAction: string;
  shapValues: SHAPValue[];
  explanation: string;
}

interface LocationState {
  assessment: AssessmentData;
  applicant: string;
}

export default function Results() {
  const navigate = useNavigate();
  const location = useLocation();
  const { assessment, applicant } = (location.state as LocationState) || {
    assessment: null,
    applicant: "Unknown",
  };

  if (!assessment) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">
            No Assessment Data
          </h1>
          <button
            onClick={() => navigate("/assessment")}
            className="px-6 py-2 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90"
          >
            Go to Assessment
          </button>
        </div>
      </div>
    );
  }

  const getRiskIcon = () => {
    if (assessment.riskLevel === "Low") {
      return <CheckCircle2 className="w-16 h-16 text-green-500" />;
    } else if (assessment.riskLevel === "Medium") {
      return <AlertCircle className="w-16 h-16 text-yellow-500" />;
    } else {
      return <XCircle className="w-16 h-16 text-red-500" />;
    }
  };

  const getRiskColor = () => {
    if (assessment.riskLevel === "Low") return "text-green-600 bg-green-50";
    if (assessment.riskLevel === "Medium")
      return "text-yellow-600 bg-yellow-50";
    return "text-red-600 bg-red-50";
  };

  const getActionColor = () => {
    if (assessment.riskLevel === "Low")
      return "border-green-200 bg-green-50 text-green-900";
    if (assessment.riskLevel === "Medium")
      return "border-yellow-200 bg-yellow-50 text-yellow-900";
    return "border-red-200 bg-red-50 text-red-900";
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </button>
          <span className="text-sm font-semibold text-foreground">
            Assessment Results
          </span>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12 space-y-3">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground">
            Assessment Results for {applicant}
          </h1>
          <p className="text-lg text-muted-foreground">
            Comprehensive credit risk evaluation using gradient boosting ML
            model with SHAP value explanations
          </p>
        </div>

        {/* Main Result Card */}
        <div className="bg-card border border-border rounded-2xl p-8 sm:p-12 mb-8 shadow-lg">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-12">
            <div className="flex flex-col items-center">
              {getRiskIcon()}
              <h2 className={`text-4xl font-bold mt-4 ${getRiskColor()}`}>
                {assessment.riskLevel}
              </h2>
              <p className="text-muted-foreground mt-2">Risk Level</p>
            </div>

            <div className="flex-1 space-y-6">
              {/* Risk Score Visualization */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-foreground">
                    Default Probability
                  </h3>
                  <span className="text-2xl font-bold text-primary">
                    {(assessment.probabilityDefault * 100).toFixed(1)}%
                  </span>
                </div>
                <div className="w-full h-3 bg-border rounded-full overflow-hidden">
                  <div
                    className={`h-full transition-all duration-1000 ${
                      assessment.riskLevel === "Low"
                        ? "bg-green-500"
                        : assessment.riskLevel === "Medium"
                          ? "bg-yellow-500"
                          : "bg-red-500"
                    }`}
                    style={{ width: `${assessment.probabilityDefault * 100}%` }}
                  />
                </div>
              </div>

              {/* Recommendation */}
              <div className={`p-4 rounded-lg border-2 ${getActionColor()}`}>
                <p className="font-semibold">{assessment.recommendedAction}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Explanation */}
        <div className="bg-card border border-border rounded-xl p-8 mb-8">
          <h2 className="text-xl font-semibold text-foreground mb-4">
            Model Explanation
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            {assessment.explanation}
          </p>
        </div>

        {/* SHAP Values Visualization */}
        <div className="bg-card border border-border rounded-xl p-8">
          <div className="flex items-center gap-2 mb-8">
            <TrendingUp className="w-6 h-6 text-primary" />
            <h2 className="text-xl font-semibold text-foreground">
              Feature Importance (SHAP Values)
            </h2>
          </div>

          <div className="space-y-6">
            {assessment.shapValues.map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-foreground">
                    {item.feature}
                  </span>
                  <span
                    className={`text-sm font-semibold ${
                      item.impact === "positive"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {item.impact === "positive"
                      ? "↓ Reduces Risk"
                      : "↑ Increases Risk"}
                  </span>
                </div>

                {/* Bar visualization */}
                <div className="flex items-center gap-4">
                  <div className="flex-1 h-2 bg-border rounded-full overflow-hidden">
                    <div
                      className={`h-full ${
                        item.impact === "positive"
                          ? "bg-green-500"
                          : "bg-red-500"
                      }`}
                      style={{
                        width: `${Math.min((item.value * 100) / 0.35, 100)}%`,
                      }}
                    />
                  </div>
                  <span className="text-sm text-muted-foreground w-16 text-right">
                    {(item.value * 100).toFixed(1)}%
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 bg-background rounded-lg border border-border">
            <p className="text-sm text-muted-foreground">
              <strong>SHAP Values:</strong> These represent each feature's
              contribution to the final risk prediction. Positive impact
              features reduce default risk, while negative impact features
              increase it. The model uses gradient boosting to combine these
              insights for accurate credit risk assessment.
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-12">
          <button
            onClick={() => navigate("/assessment")}
            className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
          >
            New Assessment
          </button>
          <button
            onClick={() => navigate("/")}
            className="px-8 py-3 rounded-lg border border-border bg-card text-foreground font-semibold hover:bg-muted transition-colors"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}
