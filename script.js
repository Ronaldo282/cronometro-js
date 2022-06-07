var sec = 00;
var min = 00;
var hora = 00;
var interval;

function start(){
   interval = setInterval(relogio,1000)
}
function pausar(){
    clearInterval(interval)
}
function parar(){
    clearInterval(interval)
    sec = 0
    min = 0
    document.getElementById('relogio').innerText='00:00:00'
}
function relogio(){
    sec++
    if(sec == 60){
        min++
        sec = 0
        if(min == 60){
            hora++
            min = 0
        }
   
}
    document.getElementById('relogio').innerText = doisDigitos(hora) + ':'+doisDigitos(min) + ':'+doisDigitos(sec)
}
function doisDigitos(digit){
    if(digit < 10){
        return('0'+digit)
    }else{
        return(digit)
    }
}
