var counter = 1;
var start = "";
var end = "";
var totalWaktu = "";

if (localStorage.getItem("topScrore") !== null){
    var topScore = localStorage.getItem("topScore");
    document.getElementById("topScore").innerHTML = topScore + "s";
}       

tampilkanGambar();

//step 1
function tampilkanGambar(){
    var top = Math.random() * 400;
    var left = Math.random() * 400; 

    start = new Date().getTime();

    document.getElementById("bird").src = "img/bird.png";
    document.getElementById("bird").style.height = 60 + "px";
    document.getElementById("bird").style.width = 60 + "px";
    document.getElementById("bird").style.width = 60 + "px";
    document.getElementById("bird").style.top = top + "px";
    document.getElementById("bird").style.left = left + "px";
    document.getElementById("bird").style.position = "relative";
    document.getElementById("bird").style.display = "block";
}

//step 2
document.getElementById("bird").onclick = function() {
    document.getElementById("bird").src = "img/bom.png";
    document.getElementById("bird").style.height = 120 + "px";
    document.getElementById("bird").style.width = 120 + "px";
    setTimeout(sembunyikanGambar,500);
    //step 3
    if (counter < 5){
        setTimeout(tampilkanGambar,600);
        counter++;
    } else {
        setTimeout(function(){ alert("selesai"); }, 100);
        end = new Date().getTime();
        totalWaktu = ( end - start )/1000;
        document.getElementById("totalwaktu").innerHTML = totalWaktu + "s";
        setTopScore();
    }
}
function sembunyikanGambar(){
    document.getElementById("bird").style.display = "none";
}

//step 4
function setTopScore(){
    if (localStorage.getItem("topScore") == null){
        localStorage.setItem("topScore", totalWaktu);
        document.getElementById("topScore").innerHTML = totalWaktu + "s";
    }else if (totalWaktu < topScore){
        localStorage.setItem("topScore", totalWaktu);
        document.getElementById("topScore").innerHTML = totalWaktu + "s";
    }else{

    }
}