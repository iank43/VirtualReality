let scene;
let car;
let pokeball;
let rocket;
let dude;
let sun;

window.addEventListener("DOMContentLoaded",function() {
scene = document.querySelector("a-scene");
car = document.querySelector("#car");
car.x = 0;
car.dx = -0.1;

pokeball = document.querySelector("#pokemonball")
pokeball.x = 0
pokeball.dx = 0.1

rocket = document.querySelector("#rocket");
rocket.y = 0
rocket.dy = 0.1

dude = document.querySelector("#dude");
dude.x = 0
dude.dx = 0.01

sun = document.querySelector("#sun");
sun.x = 1
sun.dx = -0.001


loop();

function loop(){
car.x += car.dx;
car.setAttribute("position",{x:car.x, y:0, z:0});

pokeball.x += pokemonball.dx;
pokemonball.setAttribute("rotation",{x:pokemonball.x, y:0, z:0});

rocket.y += rocket.dy
rocket.setAttribute("position", {x:0, y:rocket.y, z:0});

dude.x += dude.dx
dude.setAttribute("scale", `${dude.x} ${dude.x} ${dude.x}`);

sun.x += sun.dx
sun.setAttribute("opacity", sun.x);

window.requestAnimationFrame(loop);

}

})