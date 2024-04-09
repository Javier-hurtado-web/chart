import React, { useState, useEffect } from "react";
import axios from "axios";
import FinancialChart from "./FinancialChart";
import Loader from "./Loader";

const FinancialDataFetcher = ({ symbol }) => {
  const [financialData, setFinancialData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      if (!symbol) return;
      setLoading(true);
      const apiKey = process.env.REACT_APP_ALPHA_VANTAGE_API_KEY || "demo";

      try {
        const incomeStatementPromise = axios.get(
          `https://www.alphavantage.co/query?function=INCOME_STATEMENT&symbol=${symbol}&apikey=${apiKey}`
        );
        const balanceSheetPromise = axios.get(
          `https://www.alphavantage.co/query?function=BALANCE_SHEET&symbol=${symbol}&apikey=${apiKey}`
        );

        const [incomeStatementRes, balanceSheetRes] = await Promise.all([
          incomeStatementPromise,
          balanceSheetPromise,
        ]);
        const consolidatedData = incomeStatementRes.data.quarterlyReports.map(
          (report) => {
            const matchingBalanceSheetReport =
              balanceSheetRes.data.quarterlyReports.find(
                (bsReport) =>
                  bsReport.fiscalDateEnding === report.fiscalDateEnding
              );
            return {
              fiscalDateEnding: report.fiscalDateEnding,
              netIncome: parseInt(report.netIncome, 10),
              totalRevenue: parseInt(report.totalRevenue, 10),
              totalShareholderEquity: matchingBalanceSheetReport
                ? parseInt(
                    matchingBalanceSheetReport.totalShareholderEquity,
                    10
                  )
                : null,
            };
          }
        );

        // Sort by fiscalDateEnding
        consolidatedData.sort(
          (a, b) => new Date(a.fiscalDateEnding) - new Date(b.fiscalDateEnding)
        );

        // Map to chart data format
        setFinancialData({
          labels: consolidatedData.map((data) => data.fiscalDateEnding),
          datasets: [
            {
              label: "Net Income",
              data: consolidatedData.map((data) => data.netIncome),
              backgroundColor: "rgba(255, 99, 132, 0.5)",
            },
            {
              label: "Total Revenue",
              data: consolidatedData.map((data) => data.totalRevenue),
              backgroundColor: "rgba(54, 162, 235, 0.5)",
            },
            {
              label: "Total Shareholder Equity",
              data: consolidatedData.map(
                (data) => data.totalShareholderEquity || 0
              ),
              backgroundColor: "rgba(75, 192, 192, 0.5)",
            },
          ],
        });
      } catch (error) {
        setError(
          "Failed to fetch data. Please check your API key and network."
        );
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [symbol]);

  if (loading)
    return (
      <div className="flex justify-center items-center">
        <Loader />
      </div>
    );
  if (error) return <div className="text-red-600">Error: {error}</div>;
  return <FinancialChart chartData={financialData} />;
};

export default FinancialDataFetcher;
