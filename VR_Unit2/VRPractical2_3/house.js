class house{
  constructor(x,y,z){
    this.obj = document.createElement("a-entity");
  
    let base = document.createElement("a-box");
    base.setAttribute("position","0 0.5 0");
    base.setAttribute("color","RED");
    base.setAttribute("scale", "2 2 2");
    this.obj.append( cloud1 );
  
    let roof = document.createElement("a-cylinder");
    roof.setAttribute("segments-radial", 3);
    roof.setAttribute("rotation","270 0 0");
    roof.setAttribute("position","0 2.25 0");
    roof.setAttribute("scale","1.25 2 1.5")
    roof.setAttribute("color","BLACK");
    this.obj.append( roof );
  
    this.obj.setAttribute("position",{x:x, y:y, z:z});
    scene.append( this.obj )
  }
}