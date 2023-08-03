import React, { useCallback, useEffect, useRef } from "react";
import * as d3 from "d3";
import ReactDOMServer from "react-dom/server";
import Card from "./Card";

const Dendrogram = ({ dataSet }) => {
  const svgRef = useRef(null);
  const cardRef = useRef(null);
  const svgGenerated = useRef(false);
  const zoomRef = useRef(null);
  const rootRef = useRef(null); // Almacena la referencia de 'root' en un useRef
  const gRef = useRef(null); // Almacena la referencia de 'g' en un useRef

  const margin = useRef({ top: 10, right: 120, bottom: 10, left: 100 });
  const width =
    window.innerWidth * 0.8 - margin.current.left - margin.current.right;
  const height =
    window.innerHeight * 0.8 - margin.current.top - margin.current.bottom;

  let handleNodeClick, updateDendrogram;

  handleNodeClick = useCallback(
    (event, nodeData, root) => {
      // Alterna los hijos del nodo al hacer clic
      if (nodeData.children) {
        nodeData._children = nodeData.children;
        nodeData.children = null;
      } else {
        nodeData.children = nodeData._children;
        nodeData._children = null;
      }

      // Actualiza el dendrograma
      updateDendrogram(root);
    },
    [updateDendrogram]
  );

  updateDendrogram = useCallback(
    (root) => {
      const tree = d3.tree().size([height, width]);
      tree(root);

      
      const linkPathGenerator = d3
    .linkHorizontal()
    .x((d) => { 
      console.log(d);
      return d.y}) // Cambiar d.y a d.target.y
    .y((d) => d.x); 

      if (!gRef.current) {
        gRef.current = d3.select(svgRef.current).select("g");
      }

      const links = gRef.current
        .selectAll(".link")
        .data(root.links(), (d) => d.target.data.id);

      links
        .join("path")
        .attr("class", "link")
        .attr("fill", "none")
        .attr("stroke", "#ccc")
        .attr("stroke-width", "1px")
        .attr("stroke-linejoin", "round")
        .attr("d", linkPathGenerator)
       

      const nodes = gRef.current
        .selectAll(".node")
        .data(root.descendants(), (d) => d.data.id);

      const nodesEnter = nodes
        .enter()
        .append("g")
        .attr("class", "node")
        .attr("transform", (d) => `translate(${d.y},${d.x})`)
        .on("click", (event, d) => handleNodeClick(event, d, root));

      // Render the Card component inside each node
       nodesEnter
    .append("foreignObject")
    .attr("width", (d) => {

      if (d.y <= 0) {
        return 300
      } else {
        return d.y;
      }
    })
    .attr("height", (d) => d.x)
    .html((d) => {
      return ReactDOMServer.renderToString(<Card />); // Asigna la referencia al Card
    });

      nodes.exit().remove();
    },
    [handleNodeClick, height, width]
  );

  const getNodeColor = (node) => {
    return node.children || node._children ? "red" : "#69b3a2";
  };

  useEffect(() => {

    

    if (!svgGenerated.current) {
      svgGenerated.current = true;

      const svg = d3
        .select(svgRef.current)
        .attr("width", width + margin.current.left + margin.current.right)
        .attr("height", height + margin.current.top + margin.current.bottom);

      gRef.current = svg.append("g"); // Guarda la referencia de 'g' en el useRef

      const root = d3.hierarchy(dataSet);
      rootRef.current = root; // Almacena la referencia de 'root'
      updateDendrogram(root);

      // Zoom
      const zoom = d3
        .zoom()
        .extent([
          [0, 0],
          [width, height],
        ])
        .scaleExtent([1, 8])
        .on("zoom", (event) => {
          gRef.current.attr("transform", event.transform);
        });

      zoomRef.current = zoom;

      svg.call(zoom);
    }
  }, [dataSet, height, width, margin, updateDendrogram]);

  return <svg ref={svgRef} />;
};

export default Dendrogram;
