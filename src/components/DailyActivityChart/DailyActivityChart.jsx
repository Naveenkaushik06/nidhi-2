import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const WeeklyActivityChart = () => {
  const chartContainer = useRef(null);

  useEffect(() => {
    // Sample data for weekly debit and credit activities
    const debitData = [50, 80, 60, 90]; // Sample debit data for 5 weeks
    const creditData = [40, 70, 55, 85]; // Sample credit data for 5 weeks

    const margin = { top: 20, right: 30, bottom: 30, left: 40 };
    const width = 600 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    const svg = d3.select(chartContainer.current)
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    const x0 = d3.scaleBand()
      .domain([...Array(debitData.length).keys()].map(i => `Week ${i + 1}`))
      .rangeRound([0, width])
      .paddingInner(0.1);

    const x1 = d3.scaleBand()
      .domain(['Debit', 'Credit'])
      .rangeRound([0, x0.bandwidth()])
      .padding(0.2); // Adjust padding between debit and credit bars

    const y = d3.scaleLinear()
      .domain([0, d3.max([...debitData, ...creditData])])
      .nice()
      .range([height, 0]);

    // Define color scales for debit and credit
    const debitColorScale = d3.scaleOrdinal()
      .domain([...Array(debitData.length).keys()])
      .range(d3.schemeCategory10); // Set a color scheme for debit lines

    const creditColorScale = d3.scaleOrdinal()
      .domain([...Array(creditData.length).keys()])
      .range(d3.schemeSet2); // Set a color scheme for credit lines

    svg.append("g")
      .selectAll("g")
      .data([debitData, creditData])
      .join("g")
      .attr("transform", (d, i) => `translate(${x1.bandwidth() * i},0)`)
      .selectAll("rect")
      .data(d => d)
      .join("rect")
      .attr("x", (d, i, j) => x0(`Week ${i + 1}`) + x1.bandwidth() / 1) // Adjust x position for padding
      .attr("y", d => y(d))
      .attr("width", x1.bandwidth() * 0.5) // Adjusted width to create gap between bars
      .attr("height", d => height - y(d))
      .attr("fill", (d, i, j) => j === 0 ? debitColorScale(i) : creditColorScale(i)); // Assign color based on index

    svg.append("g")
      .attr("transform", `translate(0,${height})`)
      .call(d3.axisBottom(x0));

    svg.append("g")
      .call(d3.axisLeft(y));

    const legend = svg.append("g")
      .attr("transform", `translate(${width + 10}, 10)`)
      .selectAll("g")
      .data(['Debit', 'Credit'])
      .join("g")
      .attr("transform", (d, i) => `translate(0,${i * 20})`);

    legend.append("rect")
      .attr("x", 0)
      .attr("width", 15)
      .attr("height", 15)
      .attr("fill", (_, i) => i === 0 ? debitColorScale(0) : creditColorScale(0)); // Assign color based on index

    legend.append("text")
      .attr("x", 20)
      .attr("y", 9)
      .attr("dy", "0.35em")
      .text(d => d);

  }, []);

  return (
    <div className="mx-auto sm:w-11/12 md:w-10/12 lg:w-3/4 2xl">
      <h2 className="text-xl font-semibold mb-4">Weekly Debit and Credit Activity</h2>
      <div className="bg-white rounded-lg shadow-md">
        <svg ref={chartContainer} className=' w-full '></svg>
      </div>
    </div>
  );
};

export default WeeklyActivityChart;
