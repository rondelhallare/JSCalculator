function dis(val){
    document.getElementById('input').value+=val;
    document.getElementById('input').focus();
}
function eq(val){
    let i = document.getElementById('input').value;
    let r = eval(i);
    document.getElementById('input').value = `${r}`;
}
function cl(){
    document.getElementById('input').value="";
}

var keypress = document.getElementById('input');
keypress.addEventListener('input', restrictToNumbers);
function restrictToNumbers () {
    var newValue = this.value.replace(new RegExp(/[^\d\+\-\/\*\%\=]/), "");
    this.value = newValue;
}