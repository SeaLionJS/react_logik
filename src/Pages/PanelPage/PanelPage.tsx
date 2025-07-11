import { PieChart } from "@mui/x-charts/PieChart";
import { BarChart } from "@mui/x-charts/BarChart";

import { TrendingUp, TrendingDown } from "lucide-react";
import React, { useState, useMemo } from "react";

// Компонент кругової статистики (Змінено ширину і padding)
const CircleStatistics = () => {
  const pieData = [
    { id: 0, value: 23, label: "Поточний баланс", color: "#8b5cf6" },
    { id: 1, value: 30, label: "На депозиті", color: "#a78bfa" },
    { id: 2, value: 10, label: "Подаровано іншим", color: "#c4b5fd" },
    { id: 3, value: 40, label: "Підтримка ЗСУ", color: "#ddd6fe" },
  ];

  return (
    // Змінено ширину для адаптивності: w-full на малих, половина на sm/md/lg.
    // Залишаємо p-6 для внутрішніх відступів.
    <div className="bg-[#212325] rounded-4xl p-6 w-full sm:w-1/2 md:w-[48%] lg:w-[48%] flex-grow">
      <h3 className="text-xl font-semibold mb-4">Розподіл коштів</h3>{" "}
      {/* mb-4 вже є */}
      <div className="flex items-center justify-between">
        <PieChart
          series={[
            {
              data: pieData,
              innerRadius: 25,
              outerRadius: 70,
              paddingAngle: 0,
              cornerRadius: 0,
              highlightScope: { fade: "global", highlight: "item" },
            },
          ]}
          width={180}
          height={180}
          slotProps={{
            legend: { hidden: true },
            itemMark: {
              display: "none",
            },
          }}
        />
        <div className="flex flex-col gap-3">
          {pieData.map((item) => (
            <div key={item.id} className="flex items-center gap-3">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: item.color }}
              />
              <div className="flex flex-col">
                <span className="text-sm font-medium">{item.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// ---
// Компонент графіка Доходи/Витрати за 2 місяці (Змінено висоту, padding та margin)
const IncomeExpenseChart = () => {
  const chartData = [
    { month: "Червень", income: 32, expense: 12 },
    { month: "Липень", income: 25, expense: 7 },
  ];

  // Функції calculateChanges, getTrendIcon, getChangeText залишаються,
  // але їх результат не виводиться в текстовому резюме.
  const calculateChanges = (data) => {
    if (data.length < 2) return null;
    const currentMonth = data[data.length - 1];
    const previousMonth = data[data.length - 2];
    const incomeChange = currentMonth.income - previousMonth.income;
    const expenseChange = currentMonth.expense - previousMonth.expense;
    const incomePercentChange =
      previousMonth.income !== 0
        ? (incomeChange / previousMonth.income) * 100
        : 0;
    const expensePercentChange =
      previousMonth.expense !== 0
        ? (expenseChange / previousMonth.expense) * 100
        : 0;
    return {
      currentMonthName: currentMonth.month,
      previousMonthName: previousMonth.month,
      incomeChange,
      expenseChange,
      incomePercentChange,
      expensePercentChange,
    };
  };

  const changes = calculateChanges(chartData);

  const getTrendIcon = (change) => {
    if (change > 0) return <TrendingUp className="text-green-500 w-5 h-5" />;
    if (change < 0) return <TrendingDown className="text-red-500 w-5 h-5" />;
    return null;
  };

  const getChangeText = (value, percent) => {
    const absValue = Math.abs(value).toFixed(0);
    const absPercent = Math.abs(percent).toFixed(1);
    if (value > 0) return `зріс на ${absValue} грн. (+${absPercent}%)`;
    if (value < 0) return `впав на ${absValue} грн. (-${absPercent}%)`;
    return `залишився без змін.`;
  };

  return (
    // Змінено p-8 на p-6 для відповідності CircleStatistics.
    // Ширина залишається адаптивною.
    <div className="bg-[#212325] rounded-4xl p-6 w-full sm:w-1/2 md:w-[48%] lg:w-[48%] flex-grow">
      <h3 className="text-xl font-semibold mb-4">Доходи і витрати</h3>{" "}
      {/* Змінено mb-6 на mb-4 */}
      <div className="flex justify-center">
        <BarChart
          dataset={chartData}
          xAxis={[
            {
              scaleType: "band",
              dataKey: "month",
              categoryGapRatio: 0.4,
              barGapRatio: 0.1,
              tickLabelStyle: {
                fontSize: 12,
                fill: "#9ca3af",
              },
            },
          ]}
          yAxis={[
            {
              tickLabelStyle: {
                fontSize: 12,
                fill: "#9ca3af",
              },
            },
          ]}
          series={[
            {
              dataKey: "income",
              label: "Доходи",
              color: "#8b5cf6",
            },
            {
              dataKey: "expense",
              label: "Витрати",
              color: "#a78bfa",
            },
          ]}
          width={400}
          height={180}
          slotProps={{
            legend: {
              direction: "row",
              position: { vertical: "top", horizontal: "middle" },
              padding: 0,
              labelStyle: {
                fontSize: 14,
                fill: "#ffffff",
                fontWeight: "500",
              },
            },
          }}
          margin={{ left: 60, right: 60, top: 60, bottom: 60 }}
        />
      </div>
    </div>
  );
};

// ---
// Головний компонент (без змін)
const MainPage = () => {
  const balance = 230;
  const prevBalance = 225;
  const isLoading = false;

  const balanceChange = balance - prevBalance;

  if (isLoading) {
    return (
      <div className="flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Завантаження...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen text-white">
      <div>
        {/* Заголовок з балансом */}
        <div className="mb-8">
          <h1 className="text-4xl mb-4">Баланс</h1>
          <div className="flex items-center gap-4">
            <img src="/lgk.svg" alt="" width={40} />
            <p className="text-5xl font-semibold">{balance}</p>
          </div>
        </div>

        {/* Основний контент в одному рядку */}
        <div className="flex flex-wrap lg:flex-nowrap gap-6 mb-8 justify-center">
          {/* Кругова статистика */}
          <CircleStatistics />
          {/* Графік доходів і витрат */}
          <IncomeExpenseChart />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
