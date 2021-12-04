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
        "right": "Right Content",
    })
    content.push({
        "title": "Introduction",
        "subtitle": "",
        "left": "Matching algorithms play an important role in the setting of kidney-paired donation, in which participants are patient-donor pairs who look to participate in chains and cycles to donate and receive kidneys. In the course, we've discussed the maximum cardinality matching approach, which provides a Pareto dominant matching. While in theory, this would maximize the possible number of transplants at a given time of the model (under the assumption that matches will result in transplants), there arise a number of complications with this design in practice. In particular, this simple model does not consider the dynamic nature of the system; patients and donors are continuously joining and leaving the system. It also fails to take into consideration the probability that matches may fail to result in transplants; with close to 93\% of all proposed algorithmic matches failing, this is an extremely real and extremely important concern.",
        "right": "right",
    })
    content.push({
        "title": "Evaluating Different Prioritization Schemes in Kidney Matching: <br/> Who, When, and How?",
        "subtitle": "Luca D'Amico-Wong, Jennifer Liang, <br/> Phyllis Zhang",
        "left": "",
        "right": "Right Content",
    })
    content.push({
        "title": "Evaluating Different Prioritization Schemes in Kidney Matching: <br/> Who, When, and How?",
        "subtitle": "Luca D'Amico-Wong, Jennifer Liang, <br/> Phyllis Zhang",
        "left": "4",
        "right": "Right Content",
    })
    content.push({
        "title": "Evaluating Different Prioritization Schemes in Kidney Matching: <br/> Who, When, and How?",
        "subtitle": "Luca D'Amico-Wong, Jennifer Liang, <br/> Phyllis Zhang",
        "left": "5",
        "right": "Right Content",
    })
    content.push({
        "title": "Evaluating Different Prioritization Schemes in Kidney Matching: <br/> Who, When, and How?",
        "subtitle": "Luca D'Amico-Wong, Jennifer Liang, <br/> Phyllis Zhang",
        "left": "6",
        "right": "Right Content",
    })
    content.push({
        "title": "Evaluating Different Prioritization Schemes in Kidney Matching: <br/> Who, When, and How?",
        "subtitle": "Luca D'Amico-Wong, Jennifer Liang, <br/> Phyllis Zhang",
        "left": "7",
        "right": "Right Content",
    })
    content.push({
        "title": "Evaluating Different Prioritization Schemes in Kidney Matching: <br/> Who, When, and How?",
        "subtitle": "Luca D'Amico-Wong, Jennifer Liang, <br/> Phyllis Zhang",
        "left": "8",
        "right": "Right Content",
    })
    content.push({
        "title": "Evaluating Different Prioritization Schemes in Kidney Matching: <br/> Who, When, and How?",
        "subtitle": "Luca D'Amico-Wong, Jennifer Liang, <br/> Phyllis Zhang",
        "left": "9",
        "right": "Right Content",
    })
    content.push({
        "title": "Evaluating Different Prioritization Schemes in Kidney Matching: <br/> Who, When, and How?",
        "subtitle": "Luca D'Amico-Wong, Jennifer Liang, <br/> Phyllis Zhang",
        "left": "",
        "right": "<div class='row'><div class='col-6'><img src='./img/luca.png' style='width: 70%; float: right'></div><div class='col-6'><img src='./img/jennifer.jpg' style='width: 70%';></div></div><br/><div class='row'><div class='col-12'><img src='./img/phyllis.jpg' style='width: 35%'></div></div>",
    })


    document.getElementById('title').innerHTML = content[n-1]["title"];
    document.getElementById('subtitle').innerHTML = content[n-1]["subtitle"];
    document.getElementById('left').innerHTML = content[n-1]["left"];
    document.getElementById('right').innerHTML = content[n-1]["right"];
}

