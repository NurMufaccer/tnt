<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Getting Started with Chart JS with www.chartjs3.com</title>
    <script
      type="text/javascript"
      src="https://cdn.jsdelivr.net/npm/chart.js/dist/chart.umd.min.js"
    ></script>
    <style>
      * {
        margin: 0;
        padding: 0;
        font-family: sans-serif;
      }

      .chartCard {
        width: 100vw;
        height: calc(100vh - 40px);
        background: rgba(54, 162, 235, 0.2);
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .chartBox {
        width: 400px;
        padding: 20px;
        border-radius: 20px;
        border: solid 3px rgba(54, 162, 235, 1);
        background: white;
      }
    </style>
  </head>
  <body>
    <div class="chartCard">
      <div class="chartBox">
        <canvas id="myChart"></canvas>
      </div>
    </div>

    <script>
      const data = {
        labels: ["Project 1", "Project 2", "Project 3"],
        datasets: [
          {
            data: [45, 85, 18],
            backgroundColor: ["#000", "#888", "#D9D9D9"],
            borderColor: ["#000", "#888", "#D9D9D9"],
            borderWidth: 1,
            cutout: "90%",
            offset: 30,
          },
        ],
      };

      // Define the centerText plugin correctly
      const centerText = {
        id: "centerText",
        beforeDatasetsDraw(chart, args, options) {
          const { ctx, width, height } = chart;
          const projectsLength = chart.data.labels.length; // Correctly access number of projects
          const projectsNo = `${projectsLength}`;

          ctx.save();
          let newFontSize;
          let numbFontSize = 28;
          const innetWidht = window.innetWidht;

          if (innetWidht > 800) {
            newFontSize = 28;
          } else if (innetWidht > 600) {
            newFontSize = 20;
          } else {
            newFontSize = 15;
          }
          if (val !== newFontSize) {
            numbFontSize = newFontSize;
            updatechart();
          }

          ctx.fillStyle = "black";
          ctx.font = `bold ${numbFontSize}px Poppins`;
          ctx.textAlign = "center";
          ctx.textBaseline = "bottom";
          ctx.fillText(projectsNo, width / 2, height / 2); // Center text in the middle of the canvas

          ctx.fillStyle = "black";
          ctx.font = `18px Poppins`;
          ctx.textAlign = "center";
          ctx.textBaseline = "top";
          ctx.fillText("Projects", width / 2, height / 2); // Center text in the middle of the canvas
          ctx.restore();
        },
      };

      // config
      const config = {
        type: "doughnut",
        data,
        options: {
          maintainAspectRatio: 1,
          plugins: {
            legend: {
              display: false,
            },
            tooltip: {
              enabled: false, // Disable tooltip
            },
          },
        },
        plugins: [centerText],
      };

      // render init block
      const myChart = new Chart(document.getElementById("myChart"), config);
      function updatechart() {
        myChart.update();
      }
    </script>
  </body>
</html>
