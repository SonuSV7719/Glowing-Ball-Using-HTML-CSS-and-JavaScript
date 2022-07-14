function mousemove(event){
    let ball = document.getElementById("ball");
    ball.style.boxShadow = `0px 0px 80px 10px rgb(${event.pageX} ${event.pageY} ${event.pageX}), inset 0px 0px 20px -5px`;
    ball.style.backgroundColor = `rgb(${event.pageX} ${event.pageY} ${event.pageX})`;
}

window.addEventListener('mousemove', mousemove);


