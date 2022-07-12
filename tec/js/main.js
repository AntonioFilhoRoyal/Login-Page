console.log("Estou aqui!");


function pass(){
    // Captura dos valores
    let eye = document.querySelector('.fa-eye')
    let eyeHidden = document.querySelector('.fa-eye-slash');
    let text = document.querySelector('.input-password');

    // condição para o olho aberto e fechado
    if(eye.style.display === 'block'){ // eye em block
        // enquanto eye estive block, text e eyeHidden ficam em password e none respectivamente
        eye.style.display = 'none';
        eyeHidden.style.display = 'block';
        text.type = 'text';
    } else{
        // o inverso de if
        eye.style.display = 'block';
        eyeHidden.style.display = 'none';
        text.type = 'password';
    }
}

 // Captura o valor button e escuta o click
let btn = document.querySelector('.btn-succed').addEventListener('click', (e) => {
    e.preventDefault(); // parar envio

    // Assim que clica ele ira faze oque a função manda

    // campos de usuario e senha
    let passwordInput = document.querySelector('.input-password').value;
    let nameInput = document.querySelector('.input-name').value;

    // Promise
    const myPromise = new Promise((resolved, rejected) => { // paramentro resolved e rejected

        // condição de acesso ao site
        if(nameInput === 'admin' && passwordInput === 'admin123'){ // ambos tem que ser iguais
            resolved(); // resolved
            alert('logado com sucesso!'); // caso esteja tudo certo o alerta sera chamado
        } else{
            rejected(new Error('Sem permissão')); // caso de error
            alert("Usuario ou senha invalido!"); // se tiver error, o alert sera chamado
        }
    })

    // Inicio das chamadas do Promise
    myPromise.then((resolve) =>{
        return resolve; // Retorna o alert
// Se tive algo dentro do resolved(), coloca no HTML ou chama no console.log()        
    }).catch((reject) =>{
        console.log(reject); // Ira chama o rejected() dentro do console.log()
        return reject; // retorna o alert
    })
});

let btnRegister = document.querySelector('.btn-register').addEventListener('click', (e) => e.preventDefault());