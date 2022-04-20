let tamaño1=350
let tamaño2=350
let tamaño3=380
let tamañoxl=400
let efecto0=0
let efecto1=10
let efecto2=20
let efecto3=30
let efecto4=40
let efecto5=50
let efecto6=60
let efecto7=70
let efecto8=80
let efecto9=90
let efecto10=100
let dibujo0=0
let dibujo1=20
let dibujo2=40
let dibujo3=60
let dibujo4=80
let dibujo5=100
let dibujo6=120
let dibujo7=140
let dibujo8=160
let dibujo9=180
let dibujo10=200


function calcular(){
    let x = parseInt(document.getElementById("tamaño").value);
    let y = parseInt(document.getElementById("efecto").value);
    let z = parseInt(document.getElementById("dibujo").value);
    document.getElementById("resultado").innerHTML = (x+y+z);
}

