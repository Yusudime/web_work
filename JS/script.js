const btn = document.querySelector('#btn');
const titulo = document.querySelector('#titulo');
const input = document.querySelector('#input');
const descricao = document.querySelector('#descricao');

const validarTitulo=()=>{
    const re = /[a-zA-Z]/;
    const valor = titulo.value;
     if (!re.test(valor.slice(-1))){
        titulo.value = valor.slice(0,-1);
     }}
titulo.addEventListener('keyup',(e)=>{
    console.log(" Parou de Apertou uma tecla");
    validarTitulo();
});
titulo.addEventListener('blur',(e)=>{
    console.log("Desfocou");
    if(titulo.value.length > 250){
        alert("titulo muito grande");
       
    }});
