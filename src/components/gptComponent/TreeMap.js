import React, { useRef, useEffect } from "react";
import * as d3 from "d3";
import Card from "./Card";
import ReactDOMServer from "react-dom/server";

const DendrogramPT = ({ dataSet }) => {
  const svgRef = useRef();

  useEffect(() => {
    const width = 600;
    const height = 400;
    
    // Set up the d3 tree layout
    const tree = d3.tree().size([height, width - 100]);

    // Create a d3 hierarchy from the data
    const root = d3.hierarchy(dataSet);

    // Calculate the d3 tree layout
    tree(root);

    // Select the SVG container
    const svg = d3.select(svgRef.current);

    // Create links for the tree
    svg
      .selectAll(".link")
      .data(root.links())
      .enter()
      .append("path")
      .attr("class", "link")
      .attr("d", d3.linkHorizontal().x(d => d.y).y(d => d.x));

    // Create nodes for the tree and replace them with the Card component
    const nodes = svg
      .selectAll(".node")
      .data(root.descendants())
      .enter()
      .append("g")
      .attr("class", "node")
      .attr("transform", d => `translate(${d.y},${d.x})`);

    nodes.append("circle").attr("r", 5);
    nodes.append("foreignObject").attr("width", 300).attr("height", 120).html(d =>  {
        return ReactDOMServer.renderToString(<div><Card /></div>); 
      });
  }, [dataSet]);

  return (
    <svg ref={svgRef} width={window.screen.width-100} height={'100vh'}>
      <g transform={`translate(50, 20)`}></g>
    </svg>
  );
};

export default DendrogramPT;