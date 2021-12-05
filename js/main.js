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
      "width": 1
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
      "lineWidth": 0.5
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
        "right": "Right Content"
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
        "right": "<div class='row'><div class='col-6'><img src='./img/luca.png' style='width: 70%; float: right'></div><div class='col-6'><img src='./img/jennifer.jpg' style='width: 70%';></div></div><br/><div class='row'><div class='col-12'><img src='./img/phyllis.jpg' style='width: 35%'></div></div>"
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
    console.log("hi")
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
        console.log("hi")
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
        .delay(counter * 1000 + 1000);

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
        .delay(counter * 1000 + 2000);

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
        .delay(counter * 1000 + 2000);
  nodes
    .transition().duration(2000)
    .style("fill",function(d,i){return colors.range()[i];})
    .style("opacity", 1)
    .delay(counter * 1000 + 3000);  
}

