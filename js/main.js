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
    for (let i = 1; i <= 9; i++){
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
        "title": "Introduction, Code, & Write-up",
        "subtitle": "",
        "left": "<p>Matching algorithms play an important role in the setting of kidney-paired donation, in which participants are patient-donor pairs who look to participate in chains and cycles to donate and receive kidneys. In the course, we've discussed the maximum cardinality matching approach, which provides a Pareto dominant matching. While in theory, this would maximize the possible number of transplants at a given time of the model (under the assumption that matches will result in transplants), there arise a number of complications with this design in practice. In particular, this simple model does not consider the dynamic nature of the system; patients and donors are continuously joining and leaving the system. It also fails to take into consideration the probability that matches may fail to result in transplants; with close to 93\% of all proposed algorithmic matches failing, this is an extremely real and extremely important concern.</p>",
        "right": "<h6>Code</h6><hr/><p>You can find our GitHub repository here. We modified James Trimble's original Kidney-Solver repository to accommodate for dynamic, multi-round simulations with agents entering and exiting the exchange over time.</p><a href='https://github.com/lucadwong/kidney_solver'><button type='button' class='btn btn-outline-primary'>GitHub Repository</button></a><br/><br/><br/><br/><h6>Write-up</h6><hr/><p>You can download and read our write-up, far more detailed than this website, here. </p><a href='./writeup.pdf' download='writeup.pdf'><button type='button' class='btn btn-outline-primary'>Write-up</button></a>"
    })

    var left_theory = ""
    left_theory += "<p>While failure-aware matching maximizes the expected number of matches conditional on the risk of a transplant failing, this might not be the most important goal for a kidney exchange. If we consider the purpose of a kidney exchange to be to save lives through kidney transplants, our objective function would attempt to minimize the expected number of deaths in the network, or in other words, to maximize the expected number of lives saved by the exchange. This is the motivation behind our FRLA matching algorithm.</p>"
    left_theory += "<p>In practice, FRLA maximizes the expected number of lives saved by successful transplants. It achieves this goal by weighting each edge in our compatibility graph by the probability that the patient receiving the transplant (the patient on the terminal node of the edge). FRLA then maximizes the expected sum of the weights, or the expected sum of the death probabilities, of those who successfully receive a kidney transplant. Assuming that doctors/specialists have a good idea as to the condition of their patients, we likely have a good idea of these death probabilities for each patient.</p>"

    var right_theory = "<h6 style='text-align:left'>We will look at four algorithms in particular.</h6><br/><ul style='text-align:left'><li><p>Unextended edge formulation (UEF): This is the unextended edge formulation for the kidney matching problem, placing no restrictions on chain or cycle length.</p></li><li><p>Position-indexed chain-edge formulation (PICEF): This is the position-indexed chain-edge formulation, a formulation developed to allow for more compact representations of chains in the model. We cap cycle length at 3 and chain length at 20.</p></li><li><p>Failure-robust PICEF (FR-PICEF): This is a failure-robust/failure-aware implementation of PICEF a-la Dickerson et al. and explained in Section 2.</p></li><li><p>Failure-robust and longevity aware PICEF (FRLA): A modified version of PICEF, weights each edge according to the probability the patient dies on the terminal node dies in the current round.</p></li></ul>"

    content.push({
        "title": "Theory",
        "subtitle": "In this section, we present our failure-robust longevity-aware (FRLA) algorithm to minimize the expected number of deaths in our network.",
        "left": left_theory,
        "right": right_theory
    })

    var left_setup = ""
    left_setup += "<ol><li><p>Patient/Donor Generation: We generated our patient donor pairs following the general American blood type distribution, with few modifications for incompatibilities. 7 pairs were generated per round with expected 0.7 altruistic donors, reflecting the small number of altruistic donors while still allowing for a meaningful presence.</p></li>"
    left_setup += "<li><p>Death Probability Generation: For each pair, the patient is given a probability of dying in the current round via a modified Normal distribution. The death probability increases each year.</p></li>"
    left_setup += "<li><p>Failed Match Probabilities: For each edge, we assign a constant probability of failure, taken from Dickerson et al. </p></li>"
    left_setup += "<li><p>Compatibility Graph Generation and Matching: Our simulation runs in rounds. New agents are generated every round, and agents are removed when they die or receive a successful transplant. </p></li></ol>"

    var keys = "<ul style='text-align:left'><li><p>UEF: Unextended edge formulation</p></li><li><p>PICEF: position-indexed chain-edge formulation</p></li><li><p>FR-PICEF: failure-robust PICEF</p></li><li><p>FRLA: failure-robust and longevity aware PICEF</p></li></ul>"
    content.push({
        "title": "Simulation Setup",
        "subtitle": "All code can be found in our <a style='color: white' href='https://lucadwong.github.io/kidney_solver'>GitHub</a>, modified from James Trimble's original repository.",
        "left": left_setup,
        "right": ""
    })

    var left_rounds = keys;
    left_rounds += "<p>Note that UEF has the worst performance, completing only 20 transplants and saving 10 lives over 48 rounds compared to the 160 and 60 of FRLA. UEF struggles in this failure-aware environment precisely because of the unrestricted nature of its formulation – long cycles and chains are much more likely to fail than typical 2-cycles. </p>"
    left_rounds += "<p>Both failure-aware algorithms perform better than their failure-ignorant counterparts, resulting in more transplants, fewer deaths, and more lives saved. FRLA clearly outperforms failure-aware PICEF in deaths and lives saved but does not result in significantly more transplants, a result of the difference between the two objective functions.</p>"

    content.push({
        "title": "Simulation: Varying # of Rounds",
        "subtitle": "",
        "left": left_rounds,
        "right": "<select class='form-control' id='select-form'><option value='1'>Transplants (Select Metric)</option><option value='2'>Deaths</option><option value='3'>Lives Saved</option></select><br/>"
    })

    var left_failure = keys;
    left_failure += "<p>In this experiment, we vary the uniform failure probability associated with each edge – we change how likely any given transplant is to fail. FRLA continues to outperform PICEF and failure-aware PICEF in terms of the lives saved and number of deaths. These advantages are most drastic when the failure rate is between 0.5 and 0.7. Additionally, note that Dickerson et al. estimate the probability of a positive crossmatch to be around 0.7.</p>"
    left_failure += "<p>With lower failure rates of 0.3 and 0.5, FRLA completes fewer total transplants. This represents the implicit trade-off FRLA makes when determining optimal cycles/chains– FRLA prefers fewer total transplants so long as it picks high-value transplants expected to save more lives. </p>"
    content.push({
        "title": "Simulation: Varying P(Failure)",
        "subtitle": "",
        "left": left_failure,
        "right": "<select class='form-control' id='select-form'><option value='1'>Transplants (Select Metric)</option><option value='2'>Deaths</option><option value='3'>Lives Saved</option></select><br/>"
    })

    var left_death = keys;
    left_death += "<p>Higher initial probabilities of death will lead to FRLA more clearly outperforming the other algorithms in terms of the number of lives saved and total number of deaths. With an initial N(0.01, 0.01) distribution, differences between the non-UEF algorithms are negligible, but at an initial N(0.04, 0.04) distribution, FRLA dramatically outperforms its two PICEF counterparts, an increase of 25% in saved lives, with fewer deaths.</p>";
    left_death += "<p>With a larger variance in death probabilities, FRLA is able to more clearly pick out the patients who are in severe need of a kidney, prioritizing them for transplants. So, if we expect large variances among the severity of patients' conditions in the real world, FRLA can provide meaningful advantages over other algorithms.</p>"
    content.push({
        "title": "Simulation: Varying P(Death)",
        "subtitle": "",
        "left": left_death,
        "right": "<select class='form-control' id='select-form'><option value='1'>Transplants (Select Metric)</option><option value='2'>Deaths</option><option value='3'>Lives Saved</option></select><br/>"
    })

    var left_conclusions = "<p>FRLA is designed to approach kidney matching with the goal of minimizing the number of deaths in the network, in contrast to the typical objective of maximizing the total number of transplants. It does so by maximizing the number of expected deaths prevented through transplants, allowing patients more likely to die to receive kidneys sooner. The theoretical properties of FRLA are examined, and FRLA is designed precisely to achieve this goal.</p>"
    left_conclusions += "<p>We find that simulations support the theory behind FRLA, suggesting that there are meaningful benefits to implementing FRLA, with more lives saved and fewer deaths reported in the exchange. The benefits of FRLA increase as the distribution of death probabilities among patients in the exchange becomes wider, representing more variance in the severity of the patients' conditions. Additionally, longer simulations result in larger benefits to implementing FRLA. Higher failure probabilities have little effect on FRLA's relative performance, though we do see deterioration among all four tested algorithms at sufficiently high rates of failure.</p>"
    left_conclusions += "<p>As one would expect from its design, FRLA does not result in significantly more transplants than failure-aware matching or capped PICEF matching, and there are times when fewer total transplants are recorded – dependent on the priorities of the exchange, this could be a concern associated with implementing FRLA.</p>"
    content.push({
        "title": "Conclusions & Future Work",
        "subtitle": "",
        "left": left_conclusions,
        "right": "<p style='text-align:left'>While the initial results of FRLA are promising, there are a few questions we may seek to answer next.</p><ol style='text-align:left'><li><p>What happens when we introduce non-uniform edge failure probabilities? What if failure and death probabilities are correlated, as one might expect with especially weak patients who might struggle to receive a kidney?</p></li><li><p>Is the FRLA algorithm ethical? Should we prioritize those with high probabilities of dying over those who have been in the exchange for much longer?</p></li><li><p>Extending the work of previous literature, how does the FRLA algorithm compare to others in terms of expected wait time?</p></li><li><p>How do myopic and static matching compare under the FRLA algorithm? Is it possible that matching intermittently rather than every round yields fewer deaths and more saved lives? </p></li></ol>"
    })
    content.push({
      "title": "Evaluating Different Prioritization Schemes in Kidney Matching: <br/> Who, When, and How?",
      "subtitle": "Luca D'Amico-Wong, Jennifer Liang, <br/> Phyllis Zhang",
      "left": "",
      "right": "<div class='row' style='height:50%'><div class='col-6'><br/><br/><img src='./img/luca.png' style='width: 70%; float: right'></div><div class='col-6'><br/><br/><img src='./img/jennifer.jpg' style='width: 70%';></div></div><br/><div class='row'><div class='col-12'><img src='./img/phyllis.jpg' style='width: 35%'></div></div>"
  })


    document.getElementById('title').innerHTML = content[n-1]["title"];
    document.getElementById('subtitle').innerHTML = content[n-1]["subtitle"];
    document.getElementById('left').innerHTML = content[n-1]["left"];
    document.getElementById('right').innerHTML = content[n-1]["right"];
}

function node(n){

  var h = document.getElementById('right').clientHeight;
  var w = document.getElementById('right').clientWidth;

  var linkDistance=150;

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
      "edges_remove": [8],
      "remove_message": "Removing Patient | Donor Pair",
      "add_message": "Adding Patient | Donor Pairs",
      "standard_message": "Patient | Donor"
    }
  }

  if (n == 4){
    dataset["nodes"] = [{name: "Altruist: AB"}, {name: "AB | O | 0.04"}, {name: "B | A | 0.023"}, {name: "A | B | 0.05"}, {name: "B | O | 0.012"}, {name: "B | A | 0.025"},]
    dataset["edges"] = [
      {source: 0, target: 1},
      {source: 1, target: 2},
      {source: 1, target: 3},
      {source: 1, target: 4},
      {source: 1, target: 5},
      {source: 2, target: 1},
      {source: 2, target: 3},
      {source: 3, target: 1},
      {source: 3, target: 2},
      {source: 3, target: 4},
      {source: 3, target: 5},
      {source: 4, target: 1},
      {source: 4, target: 2},
      {source: 4, target: 3},
      {source: 4, target: 5},
      {source: 5, target: 1},
      {source: 5, target: 3}
    ]

    highlights = [];
    highlights.push({
      "vertices": [0, 1, 2, 3, 5],
      "edges": [0, [1, 5], [6, 8], [10, 16]],
    });
    highlights.push({
      "vertices": [],
      "edges": [],
    });
    highlights.push({
      "vertices": [3, 4, 5, 3],
      "edges": [[9, 13], 14, [16, 10]]
    });

    highlights_data = {
      "add_round": 2,
      "remove_round": 1,
      "vertices_add": [4],
      "vertices_remove": [0, 1],
      "edges_add": [3, 9, 11, 12, 13, 14],
      "edges_remove": [0, 1, 2, 3, 4, 5, 7, 11, 15],
      "remove_message": "2nd edge fails. Altruist & AB | O complete transplant and leave.",
      "add_message": "Patient B | O joins the exchange.",
      "standard_message": "Patient | Donor | P(Death)"
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
    .text(highlights_data["standard_message"])
    .style("font-size", "13px");

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

  let counter = -1;
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
      counter += 2;

    }
    
    for (let i = 0; i < highlights.length; i++){

      // adding vertices in 
      
      if (i == highlights_data["add_round"]){
        
        text
        .transition().duration(1000)
        .text(highlights_data["add_message"])
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

        if (i > highlights_data["remove_round"])
        {
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
        }

        counter++;
      }

      // removing vertices
      else if (i == highlights_data["remove_round"]){

        text
        .transition().duration(1000)
        .text(highlights_data["remove_message"])
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
        .text(highlights_data["standard_message"])
        .delay(counter * 1000 + 3000);

        counter++;
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

      if (i >= highlights_data["remove_round"])
      {
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
      }

      if (i < highlights_data["add_round"])
      {
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
          .attr('marker-end','none')
          .delay(counter * 1000 + 3000);
        }
      }

      counter += 2;

    }
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

  }
  text
    .transition().duration(1000)
    .text(highlights_data["standard_message"])
    .delay(counter * 1000 + 1000);

  nodes
    .transition().duration(2000)
    .style("fill",function(d,i){return colors.range()[i];})
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
}
function line(path, title)
{
  d3.csv(path, function(d) { 
    drawLine(d, title);
  });

}

function drawLine(d, title){
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

  x.domain(d3.extent(d, function(d) {
    return d.x;
  }));

  var y_domain = y.domain([
    d3.min(alg, function(c) {
      return d3.min(c.values, function(v) {
        return v.n;
      });
    }),
    d3.max(alg, function(c) {
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
    .attr("x", width + 60)
    .attr("font-weight", 900)
    .style("text-anchor", "end")
    .text(title);;

  let y_axis = svg.append("g")
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

    y_domain.domain([
      d3.min(alg, function(c) {
        return d3.min(c.values, function(v) {
          return v.n;
        });
      }),
      d3.max(alg, function(c) {
        return d3.max(c.values, function(v) {
          return v.n;
        });
      })
    ]);

    svg.selectAll("g .y.axis").call(d3.svg.axis().scale(y).orient("left"));

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
