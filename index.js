var cont = document.getElementById('conteudo');
var res1 = document.getElementById('resultado1');
var res2 = document.getElementById('resultado2');
var btncr = document.getElementById('btnCr');
var limpar = document.getElementById('limpar');


function criptografar(event){
    
    res1.innerHTML = '';
    var valor = cont.value;
    var valor2 = cont.value;

    if(valor === ''){
        alert("Digite uma mensagem");
    }
    else{
        var cripto = crip(valor);      
        res1.innerHTML = cripto;
        res2.innerHTML = valor2;
        cont.value = '';
    }
    
}

function crip(value){
    var tamanho = value.length;
    var cod;
    var l;
    var cara = [];
    
    for(let i = 0; i<tamanho;i++){
        cod = value.charCodeAt(i);
        l = analisar(cod);
        cara.push(String.fromCharCode(l).toLowerCase());
        
    }
    return cara.join('');
}

function analisar(codigo){
    var basef = 59;
    var basei = 46;
    var axe = true;

   
    if(codigo > basef && codigo!==63 && axe === true|| codigo < basei && codigo!==33 || codigo === 255 || codigo === 47){
        return codigo - 3;
    }

    else{
        if(codigo === basei || codigo === 33 || codigo === 63 || codigo === 32){
            return codigo;
        }
        else{
            for(let i = 48;i<60;i++){
                if(codigo===i)
                    return codigo;
            }
        }
    }
}


btncr.onclick = criptografar;
limpar.addEventListener('click',()=>{
    if(res1.value === '' && res2.value === '')
        alert("Áreas já limpas");
    else{
        res1.innerHTML = '';
        res2.innerHTML = '';
    }
})