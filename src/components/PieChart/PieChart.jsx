import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const ChartOne = () => {
  const chartContainer = useRef(null);
  const data = [
    { name: 'Deposit', value: 100 },
    { name: 'Total Profit', value: 80 },
    { name: 'Others', value: 50 },
    { name: 'Investment', value: 60 }
  ];

  useEffect(() => {
    const width = 928;
    const height = Math.min(width, 500);
    const color = d3.scaleOrdinal()
      .domain(data.map(d => d.name))
      .range(d3.quantize(t => d3.interpolateSpectral(t * 0.8 + 0.1), data.length).reverse());
    const pie = d3.pie()
      .sort(null)
      .value(d => d.value)
      .padAngle(0.1); // Set the pad angle to create a gap between slices
    const arc = d3.arc()
      .innerRadius(10)
      .outerRadius(Math.min(width, height) / 2 - 1);
    const labelRadius = arc.outerRadius()() * 0.6;
    const arcLabel = d3.arc()
      .innerRadius(labelRadius)
      .outerRadius(labelRadius);
    const arcs = pie(data);
    // % value
    const total = data.reduce((acc, d) => acc + d.value, 0);

    const svg = d3.select(chartContainer.current)
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", [-width / 2, -height / 2, width, height])
      .attr("style", "max-width: 100%; height: auto; font: 1.5rem sans-sarif;");

    svg.append("g")
      .attr("stroke", "white")
      .selectAll()
      .data(arcs)
      .join("path")
      .attr("fill", d => color(d.data.name))
      .attr("d", arc)
      .append("title")
      .text(d => `${d.data.name}: ${d.data.value.toLocaleString("en-US")}`);

    svg.append("g")
      .attr("text-anchor", "middle")
      .selectAll()
      .data(arcs)
      .join("text")
      .attr("transform", d => `translate(${arcLabel.centroid(d)})`)
      .style("fill", "white") // Set text color to white
      .call(text => text.append("tspan")
        .attr("y", "-0.8em")
        .attr("font-weight", "bold")
        .text(d => d.data.name))
      .call(text => text.filter(d => (d.endAngle - d.startAngle) > 0.25).append("tspan")
        .attr("x", 0)
        .attr("y", "0.7em")
        .attr("fill-opacity", 10)
        .text(d => `${((d.data.value / total) * 100).toFixed(2)}%`));

    // .text(d => d.data.value.toLocaleString("en-US")));

  }, []); // No dependency array as data is defined within the component

  return (
    <div className="mx-auto sm:w-11/12 md:w-10/12 lg:w-3/4 2xl">
      <h2 className="text-xl font-semibold mb-4">Expense Statistics</h2>
      <svg ref={chartContainer} />
    </div>
  );
};

export default ChartOne;
