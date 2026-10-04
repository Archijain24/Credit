import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Loader2 } from "lucide-react";

export default function Assessment() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    applicantName: "",
    income: "",
    creditScore: "",
    employmentYears: "",
    loanAmount: "",
    debtToIncomeRatio: "",
    existingLoans: "",
    paymentHistory: "85",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/assess", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          applicantName: formData.applicantName,
          income: parseFloat(formData.income),
          creditScore: parseInt(formData.creditScore),
          employmentYears: parseInt(formData.employmentYears),
          loanAmount: parseFloat(formData.loanAmount),
          debtToIncomeRatio: parseFloat(formData.debtToIncomeRatio),
          existingLoans: parseInt(formData.existingLoans),
          paymentHistory: parseInt(formData.paymentHistory),
        }),
      });

      if (!response.ok) {
        throw new Error("Assessment failed");
      }

      const result = await response.json();
      // Navigate to results page with data
      navigate("/results", {
        state: { assessment: result, applicant: formData.applicantName },
      });
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to assess credit risk. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const isFormValid = Object.values(formData).every((value) => value !== "");

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </button>
          <span className="text-sm font-semibold text-foreground">
            Credit Risk Assessment
          </span>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12 space-y-3">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground">
            Credit Risk Assessment Form
          </h1>
          <p className="text-lg text-muted-foreground">
            Enter applicant details for comprehensive credit risk evaluation
            using our ML model.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Personal Information */}
          <div className="bg-card border border-border rounded-xl p-8 space-y-6">
            <h2 className="text-xl font-semibold text-foreground">
              Personal Information
            </h2>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Applicant Name *
              </label>
              <input
                type="text"
                name="applicantName"
                value={formData.applicantName}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
          </div>

          {/* Financial Information */}
          <div className="bg-card border border-border rounded-xl p-8 space-y-6">
            <h2 className="text-xl font-semibold text-foreground">
              Financial Information
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Annual Income ($) *
                </label>
                <input
                  type="number"
                  name="income"
                  value={formData.income}
                  onChange={handleChange}
                  placeholder="75000"
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Credit Score (300-850) *
                </label>
                <input
                  type="number"
                  name="creditScore"
                  value={formData.creditScore}
                  onChange={handleChange}
                  placeholder="720"
                  min="300"
                  max="850"
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Debt-to-Income Ratio *
                </label>
                <input
                  type="number"
                  name="debtToIncomeRatio"
                  value={formData.debtToIncomeRatio}
                  onChange={handleChange}
                  placeholder="0.35"
                  step="0.01"
                  min="0"
                  max="1"
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Loan Amount ($) *
                </label>
                <input
                  type="number"
                  name="loanAmount"
                  value={formData.loanAmount}
                  onChange={handleChange}
                  placeholder="250000"
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
            </div>
          </div>

          {/* Employment & History */}
          <div className="bg-card border border-border rounded-xl p-8 space-y-6">
            <h2 className="text-xl font-semibold text-foreground">
              Employment & History
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Years Employed *
                </label>
                <input
                  type="number"
                  name="employmentYears"
                  value={formData.employmentYears}
                  onChange={handleChange}
                  placeholder="5"
                  min="0"
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Existing Loans Count *
                </label>
                <input
                  type="number"
                  name="existingLoans"
                  value={formData.existingLoans}
                  onChange={handleChange}
                  placeholder="2"
                  min="0"
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-foreground mb-2">
                  Payment History Score (0-100) *
                </label>
                <div className="flex gap-4 items-center">
                  <input
                    type="range"
                    name="paymentHistory"
                    value={formData.paymentHistory}
                    onChange={handleChange}
                    min="0"
                    max="100"
                    className="flex-1 h-2 bg-border rounded-lg appearance-none cursor-pointer accent-primary"
                  />
                  <span className="text-2xl font-bold text-primary w-12 text-right">
                    {formData.paymentHistory}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex gap-4">
            <button
              type="submit"
              disabled={!isFormValid || loading}
              className="flex-1 px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold flex items-center justify-center gap-2 hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Assessing...
                </>
              ) : (
                "Run Assessment"
              )}
            </button>
            <button
              type="button"
              onClick={() => navigate("/")}
              className="px-8 py-3 rounded-lg border border-border bg-card text-foreground font-semibold hover:bg-muted transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
