

setInterval(async() => {
   
myspan = document.getElementById('myspan');
myspan.classList.add("Gradian")
for (var i=100; i>=0; i-=10){
    await sleep()

    myspan.style ="background-position :" + i + "% 50%";
}
for (var i=0; i<=100; i+=10){

    await sleep()

    myspan.style ="background-position :" + i + "% 50%";
}
myspan.classList.remove("Gradian")
}, 6000);

function  sleep() {
    return new Promise(r => setTimeout(r, 200));
}