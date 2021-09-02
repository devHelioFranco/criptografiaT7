

var seletorSifra = document.getElementById('selection');
var fieldset = document.getElementById('fieldset');

var exibidorCesar = document.getElementById('divCesar');
var exibidorBase64 = document.getElementById('divB64');

function cifraCod(arr, key){
    return arr.map((c)=>{
        let code = c.charCodeAt();
        if(code >= 65 && code <= 90){
            return String.fromCharCode(((code - 65 + key) % 26) + 65)
        } else if(code >= 97 && code <= 122){
            return String.fromCharCode(((code - 97 + key) % 26) + 97)
        } else return c
    }).join('')    
}

function cifraDecod(arr, key){
    return arr.map((c)=>{
        let code = c.charCodeAt();
        if(code >= 65 && code <= 90){
            return (code-65-key < 0)?String.fromCharCode(((code - 65 - key + 26)%26)+65):String.fromCharCode(((code - 65 - key)%26)+65) 
        } else if(code >= 97 && code <= 122){
            return String.fromCharCode(((code - 97 - key + 26) % 26) + 97)
        } else return c
    }).join('')    
}

function base64fun(input, codDecide){
    return (codDecide)? btoa(input) : atob(input)
}

selection.addEventListener('change',()=>{
    (selection.value == 'base64')? base64() : caesar(); 
});

document.getElementById('textinput').addEventListener('keyup', (c)=>{
    let input = document.getElementById('textinput').value.split('');
    let output = document.getElementById('textoutput');
    let chave = parseInt(document.getElementById('chave').value);
    let codDecide = document.getElementById('cesarCod').checked

    if(codDecide){
        output.value = cifraCod(input, chave);
    } else {
        output.value = cifraDecod(input, chave)
    }
       
})

document.getElementById('textinput2').addEventListener('keyup', (c)=>{
    let input = document.getElementById('textinput2').value
    let output = document.getElementById('textoutput2');
    let codDecide = document.getElementById('b64Cod').checked
    
    output.value = base64fun(input, codDecide)
})



var base64 = ()=>{
    
    exibidorCesar.style.display = 'none'
    exibidorBase64.style.display = 'flex'
}

var caesar = ()=>{
    exibidorCesar.style.display = 'flex'
    exibidorBase64.style.display = 'none'
}






