"use client";
import { useState } from "react";
import { Doughnut } from "react-chartjs-2";
import "chart.js/auto";

const chart_List_1: string[] = [
  "Liquidity: 30%",
  "Presale, IDO and public sales: 30%",
  "Staking Rewards and ecosystem development: 15%",
  "Buyback and Token Burn: 10%",
  "Team and Advisors: 6%",
  "Investors: 5%",
  "Airdrop and Mining: 4%",
];

const ChartArea = () => {
  const [activeTab, setActiveTab] = useState(0);

  // Handle tab click event
  const handleTabClick = (index: any) => {
    setActiveTab(index);
  };

  const chartData = [
    [30, 30, 15, 10, 6, 5, 4], // Funding Allocation percentages
  ];

  const data = {
    //  labels: [
    //    "Contingency",
    //    "Business Development",
    //    "Investor",
    //    "Poland",
    //    "Legal & Regulation",
    //    "Czech Republic",
    //  ],
    datasets: [
      {
        label: "Founding Allocation",
        data: chartData[activeTab],
        backgroundColor: [
          "yellow",
          "orange",
          "red",
          "green",
          "blue",
          "purple",
          "pink",
        ],
      },
    ],
  };

  return (
    <div id="chart" className="chart-area pt-30">
      <div className="container">
        <div className="chart-inner-wrap">
          <div className="section-title text-center mb-50 mt-50">
            <h2 className="title">Tokenomics</h2>
          </div>
          <div className="row align-items-center">
            <div className="chart-wrap">
              <div className="chart">
                <div id="doughnutChart">
                  {chartData[activeTab] && <Doughnut data={data} />}
                </div>
              </div>
              <div className="chart-tab">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item">
                    <button className={"nav-link"}>Token Distrubution</button>
                  </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                  <div className={`tab-pane fade show active`} id="description">
                    <div className="chart-list">
                      <ul className="list-wrap">
                        {chart_List_1.map((list, index) => (
                          <li key={index}>{list}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartArea;
