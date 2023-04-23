

  // NOTE: hello

  let sentences = []
  function generate() {
  var grammar_rules = {

        "shapes" :["#polygon#", "#circle#", "#ellipse#"],
        "polygon" :["#n#gon", "#triangle#", "#quadrilateral#"],
        "n"  :["penta", "hexa", "septa", "octa", "nona", "deca"],
        "triangle" :["scalane triangle", "isosceles triangle", "equilateral triangle"],
        "quadrilateral" :["square", "rombus", "trapezoid", "rectangle"],
        "circle" :["circle of radius #number#"],
        "ellipse" :["ellipse with major axis #number# and minor axis #number#"],
        "number" :["#digit#", "#digit##number#"],
        "digit" :[ "1", "2", "3", "4", "5", "6", "7", "8", "9"]


        }
      let grammar = tracery.createGrammar(grammar_rules);
      let expansion = grammar.flatten('#shapes#');

      sentences.push(expansion);

      let textBox = document.getElementById("sentences");
      textBox.innerHTML = "<p>"+sentences[Math.floor(Math.random() * sentences.length)]+"</p>"

  }
