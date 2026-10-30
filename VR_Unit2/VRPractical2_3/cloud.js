class cloud{
  constructor(x,y,z){
    this.obj = document.createElement("a-entity");
  
    base.setAttribute("position","0 0.5 0");
    base.setAttribute("color","RED");
    base.setAttribute("scale", "2 2 2");
    this.obj.append( base );
  
    let cloud2 = document.createElement("a-sphere");
    cloud2.setAttribute("color","WHITE");
    cloud2.setAttribute("position","0 7 1");
    this.obj.append( cloud2 );

    let cloud3 = document.createElement("a-sphere");
    cloud3.setAttribute("color","WHITE");
    cloud3.setAttribute("position","-0.8 7 0");
    this.obj.append( cloud3 );
  
    this.obj.setAttribute("position",{x:x, y:y, z:z});
    scene.append( this.obj )
  }
}