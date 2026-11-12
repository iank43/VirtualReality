class rocket {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.dy = 0.02;
    this.obj = document.createElement("a-entity");

    let top = document.createElement("a-cone");
    top.setAttribute("color","red");
    top.setAttribute("position","0 1.5 0");
    top.setAttribute("height","1");
    top.setAttribute("radius-top","0");
    top.setAttribute("radius-bottom","0.5");
    this.obj.append( top );

    let middle = document.createElement("a-cylinder");
    middle.setAttribute("color","white");
    middle.setAttribute("position","0 0 0");
    middle.setAttribute("height","2");
    middle.setAttribute("radius","0.5");
    this.obj.append( middle );


    let window = document.createElement("a-sphere");
    window.setAttribute("color","skyblue");
    window.setAttribute("position","0 0.3 0.42");
    window.setAttribute("radius","0.2");
    this.obj.append( window );

    let left = document.createElement("a-box");
    left.setAttribute("color","red");
    left.setAttribute("position","-0.6 -0.7 0");
    left.setAttribute("rotation","0 0 25");
    left.setAttribute("width","0.4");
    left.setAttribute("height","0.8");
    left.setAttribute("depth","0.1");
    this.obj.append( left );

    let right = document.createElement("a-box");
    right.setAttribute("color","red");
    right.setAttribute("position","0.6 -0.7 0");
    right.setAttribute("rotation","0 0 -25");
    right.setAttribute("width","0.4");
    right.setAttribute("height","0.8");
    right.setAttribute("depth","0.1");
    this.obj.append( right );

    let nozzle = document.createElement("a-cylinder");
    nozzle.setAttribute("color","gray");
    nozzle.setAttribute("position","0 -1.15 0");
    nozzle.setAttribute("height","0.3");
    nozzle.setAttribute("radius","0.3");
    this.obj.append( nozzle );

    let flame = document.createElement("a-cone");
    flame.setAttribute("color","orange");
    flame.setAttribute("position","0 -2 0");
    flame.setAttribute("height","1.5");
    flame.setAttribute("radius-top","0");
    flame.setAttribute("radius-bottom","0.28");
    flame.setAttribute("rotation","180 0 0");
    this.obj.append(Flame);

    this.obj.setAttribute("position",{x:x,y:y,z:z});
    scene.append(this.obj);
  }

  launch(){
    this.y += this.dy
    this.obj.setAttribute("position",{x:this.x, y:this.y, z:this.z});
  }
}