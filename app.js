var btnAdd = document.getElementById('add');
var btnSubtract = document.getElementById('subtract');
var btnNumber = document.getElementById('number')
var btnCut = document.getElementById('cut')

function add(){
    btnNumber.value = parseInt(btnNumber.value) + 1;
}
function sub(){
    btnNumber.value = parseInt(btnNumber.value) - 1;
}
function emp(){
    btnNumber.value = 0;
}