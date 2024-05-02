import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const BalanceHistoryChart = () => {
  const chartContainer = useRef(null);
  const data = [
    { month: 'Jan', balance: 100 },
    { month: 'Feb', balance: 800 },
    { month: 'Mar', balance: 300 },
    { month: 'Apr', balance: 4000 },
    { month: 'May', balance: 2400 },
    { month: 'Jun', balance: 1500 },
    { month: 'Jul', balance: 1200 },
    { month: 'Aug', balance: 1400 },
    { month: 'Sep', balance: 6600 },
    { month: 'Oct', balance: 800 },
    { month: 'Nov', balance: 800 },
    { month: 'Dec', balance: 800 }
  ];

  useEffect(() => {
    const margin = { top: 20, right: 30, bottom: 30, left: 40 };
    const width = 350 - margin.left - margin.right;
    const height = 200 - margin.top - margin.bottom;

    const svg = d3.select(chartContainer.current)
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    const defs = svg.append("defs");

    const gradient = defs.append("linearGradient")
      .attr("id", "gradient")
      .attr("x1", "0%")
      .attr("y1", "100%")
      .attr("x2", "0%")
      .attr("y2", "0%");

    gradient.append("stop")
      .attr("offset", "0%")
      .attr("stop-color", "steelblue")
      .attr("stop-opacity", 0.2);

    gradient.append("stop")
      .attr("offset", "100%")
      .attr("stop-color", "transparent");

    const x = d3.scaleBand()
      .domain(data.map(d => d.month))
      .range([0, width])
      .padding(0);

    const y = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.balance)])
      .nice()
      .range([height,0]);

    const line = d3.line()
      .x(d => x(d.month) + x.bandwidth() / 2)
      .y(d => y(d.balance))
      .curve(d3.curveBundle); // Use curveCardinal for a curved line

    svg.append("path")
      .datum(data)
      .attr("fill", "url(#gradient)")
      .attr("stroke", "steelblue")
      .attr("stroke-width", 5)
      .attr("d", line);

    svg.append("g")
      .attr("transform", `translate(0,${height})`)
      .call(d3.axisBottom(x));

    svg.append("g")
      .call(d3.axisLeft(y));

  }, []);

  return (
    <div className="mx-auto sm:w-11/12 md:w-10/12 lg:w-3/4">
      <h2 className="text-xl font-semibold mb-4 w-96 text-start mx-auto">Balance History</h2>
      <div className="bg-white rounded-lg shadow-md w-96 mx-auto p-3">
        <svg ref={chartContainer} className='w-full'></svg>
      </div>
    </div>
  );
};

export default BalanceHistoryChart;
