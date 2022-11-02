function adatBanyasz(){
    var nev=document.getElementById("megrendelonevid").value;
	document.getElementById("nev").innerHTML="Név: "+nev;

    var cim=document.getElementById("megrendelocimid").value;
	document.getElementById("cim").innerHTML="Cím:"+cim;

    var telo=document.getElementById("telefonid").value;
	document.getElementById("telo").innerHTML="Telefon: "+telo;
}

function fokuszban1(){
    document.getElementById("megrendelonevid").style.backgroundColor = "rgba(0, 0, 2000, 0.10)";
}
function fokuszban2(){
    document.getElementById("megrendelocimid").style.backgroundColor = "rgba(0, 0, 2000, 0.10)";
}
function fokuszban3(){
    document.getElementById("telefonid").style.backgroundColor = "rgba(0, 0, 2000, 0.10)";
}


function nincsfokuszban1(){
    document.getElementById("megrendelonevid").style.backgroundColor = "white";
}
function nincsfokuszban2(){
    document.getElementById("megrendelocimid").style.backgroundColor = "white";
}
function nincsfokuszban3(){
    document.getElementById("telefonid").style.backgroundColor = "white";
}
