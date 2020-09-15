let _num = window.document.querySelector('input#txtnum');
let _list = window.document.querySelector('select#txtlist')
let val = [];

function eNum(n){
    if(Number.parseFloat(n) >=1 && Number.parseFloat(n) <= 100){
        return true;
    }else{
        return false;
    }
}

function naList(n, l){
    if(l.indexOf(Number.parseFloat(n)) != -1){
        return true;
    }else{
        return false;
    }
}

function inserir(){
    if(eNum(_num.value) && !naList(_num.value, val)){
        val.push(Number.parseFloat(_num.value));
        let item = window.document.createElement('option');
        item.text = `${_num.value} adicionado`;
        _list.appendChild(item);
        res.innerHTML = '';
}else{
    window.alert("Valor inválido ou ja encontrado na lista!");
 }
 _num.value = "";
 _num.focus();
}
function finalizar(){
    if(val.length == 0){
        window.alert("[ERRO] Insira algum dado e tente novamente!")
    }else{
        let total = val.length;

        res.innerHTML = '';
    res.innerHTML += `<p>Temos ${total} números cadastrados.</p>`

    }
}