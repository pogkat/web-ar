const colors = ['#ff0000','#0000ff','#00ff00','#ffff00','#ff00ff','#ffffff'];

function getColor(){
    return colors[Math.floor(Math.random()*colors.length)];
}


window.onload = function() {
    const aEntity = document.querySelector("#earthModel");
    aEntity.addEventListener('click', function(ev, target){
        aEntity.setAttribute("color", getColor());

    });
};
