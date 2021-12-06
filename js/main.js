particlesJS('particles-js',
{
  "fullScreen": {
    "enable": true,
    "zIndex": 1
  },
  "detectRetina": true,
  "fpsLimit": 60,
  "interactivity": {
    "detectsOn": "canvas",
    "events": {
      "onClick": {
        "enable": true,
        "mode": "push"
      },
      "onDiv": {
        "elementId": "repulse-div",
        "enable": false,
        "mode": "repulse"
      },
      "onHover": {
        "enable": true,
        "mode": "repulse",
        "parallax": {
          "enable": false,
          "force": 2,
          "smooth": 10
        }
      },
      "resize": true
    },
    "modes": {
      "bubble": {
        "distance": 400,
        "duration": 2,
        "opacity": 0.8,
        "size": 40,
        "speed": 3
      },
      "connect": {
        "distance": 80,
        "lineLinked": {
          "opacity": 0.5
        },
        "radius": 60
      },
      "grab": {
        "distance": 400,
        "lineLinked": {
          "opacity": 1
        }
      },
      "push": {
        "quantity": 4
      },
      "remove": {
        "quantity": 2
      },
      "repulse": {
        "distance": 50,
        "duration": 0.4
      }
    }
  },
  "particles": {
    "color": {
      "value": ["#2e8fff", "#185dad", "#4e6eed", "#748ded", "#4649eb", "#34658a", "#365e7d", "#639bc7", "#8ac4f2", "#1999ff", "#3fb6d4", "#6dd3ed", "#1b9ebf"]
    },
    "lineLinked": {
      "blink": false,
      "color": "random",
      "consent": false,
      "distance": 120,
      "enable": true,
      "opacity": 0.4,
      "w": 1
    },
    "move": {
      "attract": {
        "enable": false,
        "rotate": {
          "x": 600,
          "y": 1200
        }
      },
      "bounce": false,
      "direction": "none",
      "enable": true,
      "outMode": "out",
      "random": false,
      "speed": 3,
      "straight": false
    },
    "number": {
      "density": {
        "enable": true,
        "area": 800
      },
      "limit": 800,
      "value": 400
    },
    "opacity": {
      "animation": {
        "enable": false,
        "minimumValue": 0.1,
        "speed": 1,
        "sync": false
      },
      "random": false,
      "value": 0.8
    },
    "shape": {
      "type": "circle"
    },
    "size": {
      "animation": {
        "enable": false,
        "minimumValue": 0.1,
        "speed": 40,
        "sync": false
      },
      "random": true,
      "value": 4
    }
  },
  "polygon": {
    "draw": {
      "enable": false,
      "lineColor": "#ffffff",
      "linew": 0.5
    },
    "move": {
      "radius": 5
    },
    "scale": 1,
    "type": "none",
    "url": ""
  },
  "background": {
    "color": "#000000",
    "image": "",
    "position": "50% 50%",
    "repeat": "no-repeat",
    "size": "cover"
  }
}
);

function section(n){

    var n = parseInt(n);
    var array = [];
    for (let i = 1; i <= 10; i++){
        if (i == n){
            document.getElementById('slide' + n).style.color = 'grey';
        }
        else {
            document.getElementById('slide' + i).style.color = 'white';
        }
    }

    let content = [];

    content.push({
        "title": "Evaluating Different Prioritization Schemes in Kidney Matching: <br/> Who, When, and How?",
        "subtitle": "Luca D'Amico-Wong, Jennifer Liang, <br/> Phyllis Zhang",
        "left": "",
        "right": ""
      })
    content.push({
        "title": "Introduction",
        "subtitle": "",
        "left": "Matching algorithms play an important role in the setting of kidney-paired donation, in which participants are patient-donor pairs who look to participate in chains and cycles to donate and receive kidneys. In the course, we've discussed the maximum cardinality matching approach, which provides a Pareto dominant matching. While in theory, this would maximize the possible number of transplants at a given time of the model (under the assumption that matches will result in transplants), there arise a number of complications with this design in practice. In particular, this simple model does not consider the dynamic nature of the system; patients and donors are continuously joining and leaving the system. It also fails to take into consideration the probability that matches may fail to result in transplants; with close to 93\% of all proposed algorithmic matches failing, this is an extremely real and extremely important concern.",
        "right": "right"
    })
    content.push({
        "title": "Evaluating Different Prioritization Schemes in Kidney Matching: <br/> Who, When, and How?",
        "subtitle": "Luca D'Amico-Wong, Jennifer Liang, <br/> Phyllis Zhang",
        "left": "",
        "right": ""
    })
    content.push({
        "title": "Evaluating Different Prioritization Schemes in Kidney Matching: <br/> Who, When, and How?",
        "subtitle": "Luca D'Amico-Wong, Jennifer Liang, <br/> Phyllis Zhang",
        "left": "4",
        "right": "Right Content"
    })
    content.push({
        "title": "Evaluating Different Prioritization Schemes in Kidney Matching: <br/> Who, When, and How?",
        "subtitle": "Luca D'Amico-Wong, Jennifer Liang, <br/> Phyllis Zhang",
        "left": "5",
        "right": "<select class='form-control' id='select-form'><option value='1'>Metric 1</option><option value='2'>Metric 2</option><option value='3'>Metric 3</option></select><br/>"
    })
    content.push({
        "title": "Evaluating Different Prioritization Schemes in Kidney Matching: <br/> Who, When, and How?",
        "subtitle": "Luca D'Amico-Wong, Jennifer Liang, <br/> Phyllis Zhang",
        "left": "6",
        "right": "Right Content"
    })
    content.push({
        "title": "Evaluating Different Prioritization Schemes in Kidney Matching: <br/> Who, When, and How?",
        "subtitle": "Luca D'Amico-Wong, Jennifer Liang, <br/> Phyllis Zhang",
        "left": "7",
        "right": "Right Content"
    })
    content.push({
        "title": "Evaluating Different Prioritization Schemes in Kidney Matching: <br/> Who, When, and How?",
        "subtitle": "Luca D'Amico-Wong, Jennifer Liang, <br/> Phyllis Zhang",
        "left": "8",
        "right": "Right Content"
    })
    content.push({
        "title": "Evaluating Different Prioritization Schemes in Kidney Matching: <br/> Who, When, and How?",
        "subtitle": "Luca D'Amico-Wong, Jennifer Liang, <br/> Phyllis Zhang",
        "left": "9",
        "right": "Right Content"
    })
    content.push({
        "title": "Evaluating Different Prioritization Schemes in Kidney Matching: <br/> Who, When, and How?",
        "subtitle": "Luca D'Amico-Wong, Jennifer Liang, <br/> Phyllis Zhang",
        "left": "",
        "right": "<div class='row'><div class='col-6'><img src='./img/luca.png' style='w: 70%; float: right'></div><div class='col-6'><img src='./img/jennifer.jpg' style='w: 70%';></div></div><br/><div class='row'><div class='col-12'><img src='./img/phyllis.jpg' style='w: 35%'></div></div>"
    })


    document.getElementById('title').innerHTML = content[n-1]["title"];
    document.getElementById('subtitle').innerHTML = content[n-1]["subtitle"];
    document.getElementById('left').innerHTML = content[n-1]["left"];
    document.getElementById('right').innerHTML = content[n-1]["right"];
}

function node(n){

  var h = document.getElementById('right').clientHeight;
  var w = document.getElementById('right').clientWidth;

  var linkDistance=200;

  var colors = d3.scale.category10();

  var dataset = {nodes:[], edges:[]}

  var name = "name";
  var source = "source";
  var target = "target";

  if (n == 1){
    dataset["nodes"] = [{name: "B | A"}, {name: "O | B"}, {name: "A | B"}, {name: "B | O"}, {name: "Altruist: A"}]
    dataset["edges"] = [
      {source: 2, target: 0},
      {source: 1, target: 0},
      {source: 1, target: 3}, 
      {source: 0, target: 2}, 
      {source: 3, target: 2},  
      {source: 3, target: 0}, 
      {source: 3, target: 1}, 
      {source: 2, target: 3}, 
      {source: 4, target: 2}, 
    ]

    highlights = [];
    highlights.push({
      "vertices": [4, 2, 0],
      "edges": [8, [0, 3]],
    });
    highlights.push({
      "vertices": [4, 2, 3, 1, 0],
      "edges": [8, 7, 6, 1]
    });
    highlights.push({
      "vertices": [3, 0, 2, 3],
      "edges": [5, 3, 7]
    });

    highlights_data = {
      "add_round": 1,
      "remove_round": 2,
      "vertices_add": [3],
      "vertices_remove": [4],
      "edges_add": [2, 4, 5, 6, 7],
      "edges_remove": [8]
    }
  }

  var svg = d3.select("#right").append("svg").attr({"width":w,"height":h});

  svg.append("rect")
    .attr("width", "100%")
    .attr("height", "100%")
    .attr("fill", "white");

  var text = svg.append("text")
    .attr("y", h * 0.075)
    .attr("x", w * 0.05)
    .text("Patient | Donor");

  var force = d3.layout.force()
      .nodes(dataset.nodes)
      .links(dataset.edges)
      .size([w,h])
      .linkDistance([linkDistance])
      .charge([-500])
      .theta(0.1)
      .gravity(0.05)
      .start();

  var edges = svg.selectAll("line")
    .data(dataset.edges)
    .enter()
    .append("line")
    .attr("id",function(d,i) {return 'edge'+i})
    .attr('marker-end','url(#arrowhead)')
    .style("stroke","#ccc")
    .style("pointer-events", "none");

  var nodes = svg.selectAll("circle")
    .data(dataset.nodes)
    .enter()
    .append("circle")
    .attr("id",function(d,i) {return 'vertex'+i})
    .attr({"r":15})
    .style("fill",function(d,i){return "grey";})
    .call(force.drag)


  var nodelabels = svg.selectAll(".nodelabel") 
      .data(dataset.nodes)
      .enter()
      .append("text")
      .attr({"x":function(d){return d.x;},
            "y":function(d){return d.y;},
            "id": function(d, i){return "nodelabel" + i},
            "class":"nodelabel",
            "stroke":"black"})
      .text(function(d){return d.name;});

  
  svg.append('defs').append('marker')
      .attr({'id':'arrowhead',
              'viewBox':'-0 -5 10 10',
              'refX':25,
              'refY':0,
              //'markerUnits':'strokeWidth',
              'orient':'auto',
              'markerWidth':10,
              'markerHeight':10,
              'xoverflow':'visible'})
      .append('svg:path')
          .attr('d', 'M 0,-5 L 10 ,0 L 0,5')
          .attr('fill', 'rgba(0, 0, 0, 0.8)')
          .attr('stroke','black');

  force.on("tick", function(){

      edges.attr({"x1": function(d){return d.source.x;},
                  "y1": function(d){return d.source.y;},
                  "x2": function(d){return d.target.x;},
                  "y2": function(d){return d.target.y;}
      });

      nodes.attr({"cx":function(d){return d.x;},
                  "cy":function(d){return d.y;}
      });

      nodelabels.attr("x", function(d) { return d.x; }) 
                .attr("y", function(d) { return d.y; });

  });

  let counter = 0;
  var highlight_vertices = [];
  var highlight_edges = [];

  for (let j = 0; j < highlights_data["vertices_add"].length; j++){
    d3.select("#vertex" + highlights_data["vertices_add"][j])
    .transition().duration(1000)
    .style("fill-opacity", 0)

    d3.select("#nodelabel" + highlights_data["vertices_add"][j])
    .transition().duration(1000)
    .attr('opacity', 0)

  }
  for (let j = 0; j < highlights_data["edges_add"].length; j++){
    d3.select("#edge" + highlights_data["edges_add"][j])
    .transition().duration(1000)
    .style("stroke-opacity", 0)
    .attr('marker-end', null)
  }

  for (let iter = 0; iter < 3; iter++){

    if (iter != 0){
      for (let j = 0; j < highlights_data["vertices_add"].length; j++){
        d3.select("#vertex" + highlights_data["vertices_add"][j])
        .transition().duration(1000)
        .style("fill-opacity", 0)
        .delay(counter * 1000 + 3000);
    
        d3.select("#nodelabel" + highlights_data["vertices_add"][j])
        .transition().duration(1000)
        .attr('opacity', 0)
        .delay(counter * 1000 + 3000);
    
      }
      for (let j = 0; j < highlights_data["edges_add"].length; j++){
        d3.select("#edge" + highlights_data["edges_add"][j])
        .transition().duration(1000)
        .style("stroke-opacity", 0)
        .attr('marker-end', null)
        .delay(counter * 1000 + 3000);
      }
    }
    
    for (let i = 0; i < highlights.length; i++){

      // adding vertices in 
      if (i == highlights_data["add_round"]){
        
        text
        .transition().duration(1000)
        .text("Adding Patient | Donor Pairs")
        .delay(counter * 1000);

        for (let j = 0; j < highlights_data["vertices_add"].length; j++){
          
          d3.select("#vertex" + highlights_data["vertices_add"][j])
          .transition().duration(1000)
          .style("fill-opacity", 1)
          .delay(counter * 1000 + 3000);

          d3.select("#nodelabel" + highlights_data["vertices_add"][j])
          .transition().duration(1000)
          .attr('opacity', 1)
          .delay(counter * 1000 + 3000);
        }
        for (let j = 0; j < highlights_data["edges_add"].length; j++){
          d3.select("#edge" + highlights_data["edges_add"][j])
          .transition().duration(1000)
          .style("stroke-opacity", 1)
          .attr('marker-end','url(#arrowhead)')
          .delay(counter * 1000 + 3000);
        }

        counter++;
      }


      // removing vertices
      else if (i == highlights_data["remove_round"]){

        text
        .transition().duration(1000)
        .text("Removing Patient | Donor Pair")
        .delay(counter * 1000 + 1000);

        for (let j = 0; j < highlights_data["vertices_remove"].length; j++){
          d3.select("#vertex" + highlights_data["vertices_remove"][j])
          .transition().duration(1000)
          .style("fill-opacity", "0")
          .delay(counter * 1000 + 3000);

          d3.select("#nodelabel" + highlights_data["vertices_remove"][j])
          .transition().duration(1000)
          .attr('opacity', 0)
          .delay(counter * 1000 + 3000);

        }
        for (let j = 0; j < highlights_data["edges_remove"].length; j++){
          d3.select("#edge" + highlights_data["edges_remove"][j])
          .transition().duration(1000)
          .style("stroke-opacity", 0)
          .attr('marker-end', null)
          .delay(counter * 1000 + 3000);
        }

        counter++;
      }
      else {
        text
        .transition().duration(1000)
        .text("Patient | Donor")
        .delay(counter * 1000 + 3000);
      }

      highlight_vertices = highlights[i]["vertices"];
      highlight_edges = highlights[i]["edges"];

      for (let j = 0; j < highlight_vertices.length - 1; j++){
        d3.select("#vertex" + highlight_vertices[j])
        .transition().duration(1000)
        .style("fill", colors.range()[j])
        .delay(counter * 1000 + 3000);

        counter++;

        if (Array.isArray(highlight_edges[j])){
          d3.select("#edge" + highlight_edges[j][1])
          .transition().duration(1000)
          .style("stroke","red")
          .delay(counter * 1000 + 3000);  
          d3.select("#edge" + highlight_edges[j][0])
          .transition().duration(1000)
          .style("stroke","red")
          .style("stroke-width", 1.5)
          .delay(counter * 1000 + 3000);  
        }

        else {
          d3.select("#edge" + highlight_edges[j])
          .transition().duration(1000)
          .style("stroke","red")
          .style("stroke-width", 1.5)
          .delay(counter * 1000 + 3000);  
        }
        counter++;

      }

      d3.select("#vertex" + highlight_vertices[highlight_vertices.length - 1])
      .transition().duration(1000)
      .style("fill", colors.range()[highlight_vertices.length - 1])
      .delay(counter * 1000 + 3000);  

      counter += 2;

      // restore to normal colors
      nodes
      .transition().duration(1000)
      .style("fill", "grey")
      .style("fill-opacity", 1)
      .delay(counter * 1000 + 3000);  

      nodelabels
      .transition().duration(1000)
      .attr('opacity', 1)
      .delay(counter * 1000 + 3000);

      edges
      .transition().duration(1000)
      .style("stroke","#ccc")
      .style("stroke-width", 1)
      .style("stroke-opacity", 1)
      .attr('marker-end','url(#arrowhead)')
      .delay(counter * 1000 + 3000);  

      counter += 2;

    }
  }
  text
        .transition().duration(1000)
        .text("Patient | Donor")
        .delay(counter * 1000 + 1000);
  nodes
    .transition().duration(2000)
    .style("fill",function(d,i){return colors.range()[i];})
    .style("opacity", 1)
    .delay(counter * 1000 + 3000);  
}
function line(path)
{
  d3.csv(path, function(d) { 
    drawLine(d);
  });

}

function drawLine(d){
  var data = [];

  var selected = "1";

  for (let i = 0; i < d.length; i++){
    if (d[i]["metric"] == selected){
      data.push(d[i])
    }
  }
  var h = document.getElementById('right').clientHeight  * 0.87;
  var w = document.getElementById('right').clientWidth;

  var margin = {
    top: 20,
    right: 65,
    bottom: 30,
    left: 50
  },
  width = w - margin.left - margin.right,
  height = h - margin.top - margin.bottom;

  var x = d3.scale.linear()
    .range([0, width]);

  var y = d3.scale.linear()
    .range([height, 35]);

  var color = d3.scale.category10();

  var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");

  var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left");

  var line_var = d3.svg.line()
    .interpolate("basis")
    .x(function(d) {
      return x(d.x);
    })
    .y(function(d) {
      return y(d.n);
    });


  var svg = d3.select("#right").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
    .style("font-size", "12px");

  svg
    .append("rect")
    .attr("width", w)
    .attr("height", h)
    .attr("fill", "white")
    .attr("transform", "translate(" + (-1 * margin.left) + "," + (-1 * margin.top) + ")");

  color.domain(d3.keys(data[0]).filter(function(key) {
    return key !== "x" && key !== "metric";
  }));

  var alg = color.domain().map(function(name) {
    return {
      name: name,
      values: data.map(function(d) {
        return {
          x: d.x,
          n: +d[name]
        };
      })
    };
  });

  var total_alg = color.domain().map(function(name) {
    return {
      name: name,
      values: d.map(function(d) {
        return {
          x: d.x,
          n: +d[name]
        };
      })
    };
  });

  x.domain(d3.extent(d, function(d) {
    return d.x;
  }));

  y.domain([
    d3.min(total_alg, function(c) {
      return d3.min(c.values, function(v) {
        return v.n;
      });
    }),
    d3.max(total_alg, function(c) {
      return d3.max(c.values, function(v) {
        return v.n;
      });
    })
  ]);

  var legend = svg.selectAll('g')
    .data(alg)
    .enter()
    .append('g')
    .attr('class', 'legend');

  legend.append('rect')
    .attr('x', width - 20)
    .attr('y', function(d, i) {
      return i * 20;
    })
    .attr('width', 10)
    .attr('height', 10)
    .style('fill', function(d) {
      return color(d.name);
    });

  legend.append('text')
    .attr('x', width - 5)
    .attr('y', function(d, i) {
      return (i * 20) + 9;
    })
    .text(function(d) {
      return d.name;
    });

  svg.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + height + ")")
    .call(xAxis)
    .append("text")
    .attr("x", width + 40)
    .attr("dy", "-0.31em")
    .style("text-anchor", "end")
    .text("Round #");;

  svg.append("g")
    .attr("class", "y axis")
    .call(yAxis)
    .append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", 6)
    .attr("dy", ".71em")
    .style("text-anchor", "end")
    .text("Number");

  var city = svg.selectAll(".city")
    .data(alg)
    .enter().append("g")
    .attr("class", "city");

  var edit_path = city.append("path")
    .attr("class", "line")
    .style("stroke", function(d) {
      return color(d.name);
    })
    .style("stroke-width", 2)
    .attr("d", function(d) {
      return line_var(d.values);
    })

  var mouseG = svg.append("g")
    .attr("class", "mouse-over-effects");
  
  mouseG.append("path") // this is the black vertical line to follow mouse
    .attr("class", "mouse-line")
    .style("stroke", "black")
    .style("stroke-width", "1px")
    .style("opacity", "0");
    
  var lines = document.getElementsByClassName('line');

  var mousePerLine = mouseG.selectAll('.mouse-per-line')
    .data(alg)
    .enter()
    .append("g")
    .attr("class", "mouse-per-line");

  mousePerLine.append("circle")
    .attr("r", 7)
    .style("stroke", function(d) {
      return color(d.name);
    })
    .style("fill", "none")
    .style("stroke-width", "1px")
    .style("opacity", "0");

  mousePerLine.append("text")
    .attr("transform", "translate(10,3)");

  mouseG.append('svg:rect') // append a rect to catch mouse movements on canvas
    .attr('width', width) // can't catch mouse events on a g element
    .attr('height', height)
    .attr('fill', 'none')
    .attr('pointer-events', 'all')
    .on('mouseout', function() { // on mouse out hide line, circles and text
      d3.select(".mouse-line")
        .style("opacity", "0");
      d3.selectAll(".mouse-per-line circle")
        .style("opacity", "0");
      d3.selectAll(".mouse-per-line text")
        .style("opacity", "0");
    })
    .on('mouseover', function() { // on mouse in show line, circles and text
      d3.select(".mouse-line")
        .style("opacity", "1");
      d3.selectAll(".mouse-per-line circle")
        .style("opacity", "1");
      d3.selectAll(".mouse-per-line text")
        .style("opacity", "1");
    })
    .on('mousemove', function() { // mouse moving over canvas
      var mouse = d3.mouse(this);
      d3.select(".mouse-line")
        .attr("d", function() {
          var d = "M" + mouse[0] + "," + height;
          d += " " + mouse[0] + "," + 0;
          return d;
        });

      d3.selectAll(".mouse-per-line")
        .attr("transform", function(d, i) {
          var xDate = x.invert(mouse[0]),
              bisect = d3.bisector(function(d) { return d.x; }).right;
              idx = bisect(d.values, xDate);
          
          var beginning = 0,
              end = lines[i].getTotalLength(),
              target = null;

          while (true){
            target = Math.floor((beginning + end) / 2);
            pos = lines[i].getPointAtLength(target);
            if ((target === end || target === beginning) && pos.x !== mouse[0]) {
                break;
            }
            if (pos.x > mouse[0])      end = target;
            else if (pos.x < mouse[0]) beginning = target;
            else break; //position found
          }
          
          d3.select(this).select('text')
            .text(y.invert(pos.y).toFixed(2));
            
          return "translate(" + mouse[0] + "," + pos.y +")";
        });
  });
  function update(selected) {

    let data = [];
    for (let i = 0; i < d.length; i++){
      if (d[i]["metric"] == selected){
        data.push(d[i])
      }
    }

    // Give these new data to update line

    alg = color.domain().map(function(name) {
      return {
        name: name,
        values: data.map(function(d) {
          return {
            x: d.x,
            n: +d[name]
          };
        })
      };
    });

    edit_path
    .data(alg)
    .transition().duration(1000)
    .attr("d", function(d){
      return line_var(d.values);
    })
  }

  // When the button is changed, run the updateChart function
  d3.select("#select-form").on("change", function(d) {
      // recover the option that has been chosen
      var selectedOption = d3.select("#select-form").property("value")
      // run the updateChart function with this selected option
      update(selectedOption)
  })
}
