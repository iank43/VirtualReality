class mech{
     constructor(x,y,z){
    this.x = x;
    this.z = z;
    this.y = y;
    
    this.obj = mech.cloneNode(true);
    
    this.obj.setAttribute("position",{x:x,y:y,z:z});
    scene.append(this.obj);  
    
  }

}