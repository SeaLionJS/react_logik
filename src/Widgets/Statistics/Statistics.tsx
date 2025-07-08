import { PieChart } from "@mui/x-charts/PieChart";
import { SparkLineChart } from "@mui/x-charts/SparkLineChart";

const CircleStatistics = () => {
  const lessons = [
    {
      id: 1,
      title: "Тут буде відображатися тема першого уроку",
    },
  ];

  return (
    <div className="flex items-center justify-between">
      <PieChart
        series={[
          {
            data: [
              { id: 0, value: 10, label: "Баланс" },
              { id: 1, value: 15, label: "Депозит" },
              { id: 2, value: 20, label: "Інвестовано" },
              { id: 3, value: 5, label: "Пожертвовано" },
            ],
          },
        ]}
        width={200}
        height={200}
      />

      <SparkLineChart
        plotType="bar"
        data={[
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
          21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37,
          38, 39, 40,
        ]}
        height={300}
        showTooltip
        xAxis={{
          scaleType: "band",
          data: [
            new Date(2016, 0, 1),
            new Date(2017, 0, 1),
            new Date(2018, 0, 1),
            new Date(2019, 0, 1),
            new Date(2020, 0, 1),
            new Date(2021, 0, 1),
            new Date(2022, 0, 1),
            new Date(2023, 0, 1),
          ],
          valueFormatter: (value) => value.getFullYear(),
        }}
      />
    </div>
  );
};

export default CircleStatistics;
