import { RequestHandler } from "express";

export interface AssessmentRequest {
  applicantName: string;
  income: number;
  creditScore: number;
  employmentYears: number;
  loanAmount: number;
  debtToIncomeRatio: number;
  existingLoans: number;
  paymentHistory: number;
}

export interface SHAPValue {
  feature: string;
  value: number;
  impact: "positive" | "negative";
}

export interface AssessmentResponse {
  riskScore: number;
  riskLevel: "Low" | "Medium" | "High";
  probabilityDefault: number;
  recommendedAction: string;
  shapValues: SHAPValue[];
  explanation: string;
}

export const handleAssess: RequestHandler = (req, res) => {
  try {
    const {
      applicantName,
      income,
      creditScore,
      employmentYears,
      loanAmount,
      debtToIncomeRatio,
      existingLoans,
      paymentHistory,
    } = req.body as AssessmentRequest;

    // Input validation
    if (
      !applicantName ||
      !income ||
      !creditScore ||
      employmentYears === undefined ||
      !loanAmount ||
      debtToIncomeRatio === undefined ||
      existingLoans === undefined ||
      paymentHistory === undefined
    ) {
      res.status(400).json({ error: "Missing required fields" });
      return;
    }

    // ML Model Simulation using gradient boosting-inspired logic
    const baseRisk = 0.5;

    // Credit score impact (normalized 300-850 range)
    const scoreNormalized = (creditScore - 300) / 550;
    const scoreImpact = (1 - scoreNormalized) * 0.35;

    // Income impact (higher income = lower risk)
    const incomeImpact = Math.min(income / 100000, 1) * -0.2;

    // Employment stability (years employed)
    const employmentImpact = Math.min(employmentYears / 20, 1) * -0.15;

    // Debt to income ratio (lower is better)
    const dtiImpact = Math.min(debtToIncomeRatio / 0.5, 1) * 0.2;

    // Loan amount relative to income
    const loanToIncomeRatio = loanAmount / income;
    const loanImpact = Math.min(loanToIncomeRatio / 0.5, 1) * 0.15;

    // Payment history (0-100 score)
    const paymentImpact = ((100 - paymentHistory) / 100) * 0.1;

    // Existing loans impact
    const existingLoansImpact = Math.min(existingLoans / 5, 1) * 0.05;

    // Combine all impacts (simulating gradient boosting ensemble)
    const riskScore = Math.max(
      0,
      Math.min(
        1,
        baseRisk +
          scoreImpact +
          incomeImpact +
          employmentImpact +
          dtiImpact +
          loanImpact +
          paymentImpact +
          existingLoansImpact,
      ),
    );

    // Determine risk level
    let riskLevel: "Low" | "Medium" | "High";
    if (riskScore < 0.35) riskLevel = "Low";
    else if (riskScore < 0.65) riskLevel = "Medium";
    else riskLevel = "High";

    // Generate SHAP values (feature importance)
    const shapValues: SHAPValue[] = [
      {
        feature: "Credit Score",
        value: Math.abs(scoreImpact),
        impact: scoreImpact < 0 ? "positive" : "negative",
      },
      {
        feature: "Annual Income",
        value: Math.abs(incomeImpact),
        impact: incomeImpact < 0 ? "positive" : "negative",
      },
      {
        feature: "Employment Years",
        value: Math.abs(employmentImpact),
        impact: employmentImpact < 0 ? "positive" : "negative",
      },
      {
        feature: "Debt-to-Income Ratio",
        value: Math.abs(dtiImpact),
        impact: dtiImpact > 0 ? "negative" : "positive",
      },
      {
        feature: "Loan-to-Income Ratio",
        value: Math.abs(loanImpact),
        impact: loanImpact > 0 ? "negative" : "positive",
      },
      {
        feature: "Payment History",
        value: Math.abs(paymentImpact),
        impact: paymentImpact > 0 ? "negative" : "positive",
      },
    ].sort((a, b) => b.value - a.value);

    // Generate recommendation
    let recommendedAction: string;
    if (riskLevel === "Low") {
      recommendedAction = "Recommended for approval";
    } else if (riskLevel === "Medium") {
      recommendedAction = "Requires additional review";
    } else {
      recommendedAction = "Recommend for denial or significantly higher rates";
    }

    // Generate explanation
    const topFactors = shapValues.slice(0, 3);
    const positiveFactors = topFactors.filter((f) => f.impact === "positive");
    const negativeFactors = topFactors.filter((f) => f.impact === "negative");

    let explanation = `Based on the gradient boosting model analysis, ${applicantName}'s credit profile shows `;

    if (positiveFactors.length > 0) {
      explanation += `positive indicators including ${positiveFactors
        .map((f) => f.feature.toLowerCase())
        .join(" and ")}. `;
    }

    if (negativeFactors.length > 0) {
      explanation += `However, concerns include ${negativeFactors
        .map((f) => f.feature.toLowerCase())
        .join(" and ")}. `;
    }

    explanation += `Overall, the model predicts a ${riskLevel.toLowerCase()} credit risk with a ${(riskScore * 100).toFixed(1)}% probability of default.`;

    const response: AssessmentResponse = {
      riskScore,
      riskLevel,
      probabilityDefault: riskScore,
      recommendedAction,
      shapValues,
      explanation,
    };

    res.json(response);
  } catch (error) {
    console.error("Assessment error:", error);
    res.status(500).json({ error: "Failed to assess credit risk" });
  }
};
