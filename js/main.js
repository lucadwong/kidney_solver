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
      "limit": 500,
      "value": 230
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
      {source: 0, target: 2}, 
      {source: 1, target: 0},
      {source: 1, target: 3}, 
      {source: 2, target: 0}, 
      {source: 2, target: 3}, 
      {source: 3, target: 0}, 
      {source: 3, target: 1}, 
      {source: 3, target: 2}, 
      {source: 4, target: 2}, 
    ]
  }

  console.log(dataset);


  var svg = d3.select("#right").append("svg").attr({"width":w,"height":h});

  svg.append("rect")
    .attr("width", "100%")
    .attr("height", "100%")
    .attr("fill", "white");

  svg.append("text")
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
    .attr({"r":15})
    .style("fill",function(d,i){return colors(i);})
    .call(force.drag)


  var nodelabels = svg.selectAll(".nodelabel") 
      .data(dataset.nodes)
      .enter()
      .append("text")
      .attr({"x":function(d){return d.x;},
            "y":function(d){return d.y;},
            "class":"nodelabel",
            "stroke":"black"})
      .text(function(d){return d.name;});

  var edgepaths = svg.selectAll(".edgepath")
      .data(dataset.edges)
      .enter()
      .append('path')
      .attr({'d': function(d) {return 'M '+d.source.x+' '+d.source.y+' L '+ d.target.x +' '+d.target.y},
              'class':'edgepath',
              'fill-opacity':0,
              'stroke-opacity':0,
              'fill':'blue',
              'stroke':'red',
              'id':function(d,i) {return 'edgepath'+i}})
      .style("pointer-events", "none");

  var edgelabels = svg.selectAll(".edgelabel")
      .data(dataset.edges)
      .enter()
      .append('text')
      .style("pointer-events", "none")
      .attr({'class':'edgelabel',
              'id':function(d,i){return 'edgelabel'+i},
              'dx':80,
              'dy':0,
              'font-size':10,
              'fill':'#aaa'});

  edgelabels.append('textPath')
      .attr('xlink:href',function(d,i) {return ''})
      .style("pointer-events", "none")
      .text(function(d,i){return 'label '+i});


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
          .attr('fill', '#ccc')
          .attr('stroke','#ccc');
    

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

      edgepaths.attr('d', function(d) { var path='M '+d.source.x+' '+d.source.y+' L '+ d.target.x +' '+d.target.y;
                                          //console.log(d)
                                          return path});       

      edgelabels.attr('transform',function(d,i){
          if (d.target.x<d.source.x){
              bbox = this.getBBox();
              rx = bbox.x+bbox.width/2;
              ry = bbox.y+bbox.height/2;
              return 'rotate(180 '+rx+' '+ry+')';
              }
          else {
              return 'rotate(0)';
              }
      });
  });
}