// Declarações
titulo = document.querySelector('#titulo');
descricao = document.getElementById('descricao');
btEnviar = document.querySelector("#btnEnviar");
spans = document.querySelectorAll('span');
btAdicionarCampo = document.querySelector('#btnAddField');

form = document.querySelector('form');
console.log(form.childNodes);

// Funções
const validarTitulo = () => {
    const re = /[a-zA-Z]/;
    const valor = titulo.value;
    if (!re.test(valor.slice(-1))) {
        titulo.value = valor.slice(0, -1);
    }
};
const toggleTituloField = () => {
    titulo.classList.toggle("invalid");
}

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


// Eventos
titulo.addEventListener('keyup', (e) => {
    console.log("Soltou a tecla!");
    validarTitulo();
});

titulo.addEventListener('blur', (e) => {
    console.log("Saiu no campo!");
    if (titulo.value.length < 10) {
        console.log('O nome deve ter mais do que 10 caracteres!');
    }
});

btAdicionarCampo.addEventListener('click', adicionarCampo);

btEnviar.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('Clicou no botão!');

    if (!titulo.value) {
        titulo.classList.add("invalid");
        spans[0].classList.remove("hide");
    } else {
        titulo.classList.remove("invalid");
        spans[0].classList.add("hide");
    }

    btAdicionarCampo.removeEventListener('click', adicionarCampo);});
// funcaoUsandoAwait();

const conectarAoServidor = async () => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    const res = await fetch(url);
    console.log(res.status);
    if(!res.ok){
        console.log("Erro no servidor");
    }else{
        const json = res.json();
        console.log(json);
    }
}
const conectarAoServidorPost = async () => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    const data = {
        title: 'Título da postagem',
        body: 'Corpo da postagem',
        userId: '1'
    }
    const res = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data)
    });
    console.log(res.status);
}

const conectarAoServidorAxios = async () => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    const res = await axios.get(url);
    console.log(res.status);
    const data = res.data;
    console.log(data);
}

const conectarAoServidorPostAxios = async () => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    const data = {
        title: 'Título da postagem',
        body: 'Corpo da postagem',
        userId: '1'
    }
    const res = await axios.post(url, { data });
    console.log(res.status);
}

conectarAoServidorPostAxios();

// conectarAoServidorPost();