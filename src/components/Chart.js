import React, { Component } from 'react';
import * as d3 from 'd3';
import { select } from 'd3-selection'
import { scaleLinear } from 'd3-scale';
import { max } from 'd3-array';
// import { transition } from 'd3-transition';

class Chart extends Component {
  componentDidMount() {
    this.drawChart();
  }

  componentDidUpdate = (prevProps) => {
    if (prevProps !== this.props) {
      this.drawChart();
    }
  }

  drawChart() {

    var t = d3.transition()
    .duration(500)
    .ease(d3.easeLinear);


     const node = this.node
     const dataMax = max(this.props.data)
     const yScale = scaleLinear()
        .domain([0, dataMax])
        .range([0, this.props.size[1]])
  select(node)
     .selectAll('rect')
     .data(this.props.data)
     .enter()
     .append('rect')
     .transition(t) // First fade to green.
       .style("fill", "green")
       .transition(t)
         .style('fill', '#fe9922')

  select(node)
     .selectAll('rect')
     .data(this.props.data)
     .exit()
     .remove()

  select(node)
     .selectAll('rect')
     .data(this.props.data)
     // .style("fill", "red")
     .style('fill', '#fe9922')
     .attr('x', (d,i) => i * 25)
     .attr('y', d => this.props.size[1] - yScale(d))
     .attr('width', 25)
     .attr('height', d => yScale(d))
  }

  // rects.transition().delay(function(d, i) {
  //   return i * 300;
  // }).duration(3300)
  // .attr("height", function(d) {
  //   return height - y(d.value);
  // })
  // .style("fill", function(d) {
  //   return color(d.name);
  // });

  // d3.selectAll(".apple")
  // .transition() // First fade to green.
  //   .style("fill", "green")
  // .transition() // Then red.
  //   .style("fill", "red")
  // .transition() // Wait one second. Then brown, and remove.
  //   .delay(1000)
  //   .style("fill", "brown")
  //   .remove();

  render(){
    console.log('chart this.props: ', this.props)
    return <svg ref={node => this.node = node}
      width={500} height={500}>
      </svg>
  }
}

export default Chart;
