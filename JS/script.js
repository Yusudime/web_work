const btn = document.querySelector('#btn');
const titulo = document.querySelector('#titulo');
const input = document.querySelector('#input');
const descricao = document.querySelector('#descricao');
// declaração de função
const validarTitulo=()=>{
    const re = /[a-zA-Z]/;
    const valor = titulo.value;
     if (!re.test(valor.slice(-1))){
        titulo.value = valor.slice(0,-1);
     }}
     let campo = "Novo Campo";
     const adicionarCampo = () => {
     
         const div = document.createElement('div');
         div.classList.add('input-container');
     
         const label = document.createElement('label');
         label.innerHTML = campo;
         label.htmlFor = campo;
     
         const input = document.createElement('input');
         input.id = campo;
         input.name = campo;
     
         div.appendChild(label);
         div.appendChild(input);
     
         form.insertBefore(div, form.lastElementChild);
     };
// eventos
titulo.addEventListener('keyup',(e)=>{
    validarTitulo();
});
titulo.addEventListener('blur',(e)=>{
    console.log("Desfocou");
    if(titulo.value.length > 250){
        alert("titulo muito grande");
       
    }});
    const validardescricao=()=>{
        const valor = descricao.value;
         if (!re.test(valor.slice(-1))){
            descricao.value = valor.slice(0,-1);
         }}
    descricao.addEventListener('keyup',(e)=>{
        validardescricao();
    });
    descricao.addEventListener('blur',(e)=>{   
        if(descricao.value.length = null){
            alert("precisa de uma descrição");
        }});
        btAdicionarCampo.addEventListener('click', adicionarCampo);

        btEnviar.addEventListener('click', (e) => {
            e.preventDefault();
            console.log('Clicou no botão!');
        
            if (!nome.value) {
                nome.classList.add("invalid");
                spans[0].classList.remove("hide");
            } else {
                nome.classList.remove("invalid");
                spans[0].classList.add("hide");
            }
        
            btAdicionarCampo.removeEventListener('click', adicionarCampo);
        
            setTimeout(() => {
                console.log("Timeout!");
            }, 2000);
        
            setInterval(() => {
                console.log("Interval!");
            }, 2000);
        });
        