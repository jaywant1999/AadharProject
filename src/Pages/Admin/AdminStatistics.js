import React, { useEffect } from "react";
import Chart from "chart.js/auto";
import "../../css/AdminStatistics.css";
import AdminSideBar from "./AdminSideBar";
// import Axios from 'axios'

const AdminStatistics = () => {
  useEffect(() => {

    // fetchElectionData();

    const dataPie = {
      labels: ["Voted", "Not Voted"],
      datasets: [
        {
          data: [60, 40], // Example data, replace with actual voting percentage
          backgroundColor: ["#FF6384", "#36A2EB"],
          hoverBorderColor: ["#eee", "#eee"],
        },
      ],
    };

    const dataBar1 = {
      labels: ["Total Population", "Registered Aadhar Users"],
      datasets: [
        {
          label: "Count",
          data: [10000, 8000], // Example data, replace with actual numbers
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
          ],
          borderColor: ["rgba(255,99,132,1)", "rgba(54, 162, 235, 1)"],
          borderWidth: 1,
        },
      ],
    };

    const dataBar2 = {
      labels: [
        "Total Candidates",
        "Approved Candidates",
        "Rejected Candidates",
      ],
      datasets: [
        {
          label: "Count",
          data: [20, 15, 5], // Example data, replace with actual numbers
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(255, 159, 64, 0.2)",
          ],
          borderColor: [
            "rgba(255,99,132,1)",
            "rgba(75, 192, 192, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 1,
        },
      ],
    };

    const pieCtx = document.getElementById("piechart");
    const barCtx1 = document.getElementById("barchart1");
    const barCtx2 = document.getElementById("barchart2");

    let pieChart, barChart1, barChart2;

    if (pieCtx && pieCtx.chart) {
      pieCtx.chart.destroy();
    }
    if (barCtx1 && barCtx1.chart) {
      barCtx1.chart.destroy();
    }
    if (barCtx2 && barCtx2.chart) {
      barCtx2.chart.destroy();
    }

    pieChart = new Chart(pieCtx, {
      type: "pie",
      data: dataPie,
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    });

    barChart1 = new Chart(barCtx1, {
      type: "bar",
      data: dataBar1,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    barChart2 = new Chart(barCtx2, {
      type: "bar",
      data: dataBar2,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    // Cleanup function
    return () => {
      if (pieChart) pieChart.destroy();
      if (barChart1) barChart1.destroy();
      if (barChart2) barChart2.destroy();
    };
  }, []);

  // const fetchElectionData = async () =>{

    

  // }

  return (
    <>
      <AdminSideBar />
      <div className="statisticscontainer">
        <div className="chart-container">
          <canvas id="piechart"></canvas>
        </div>
        <div className="chart-container">
          <canvas id="barchart1"></canvas>
        </div>
        <div className="chart-container">
          <canvas id="barchart2"></canvas>
        </div>
      </div>
    </>
  );
};

export default AdminStatistics;
