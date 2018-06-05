var i=0;
function funk1() {
   i=i+1;
   return i;
}

function funk2() {
   i=i=0;
   return i;
}

function add() {
   document.getElementById("progress").innerHTML = funk1();
}