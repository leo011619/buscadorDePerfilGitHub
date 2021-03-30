var busca = document.querySelector("#user");
var nomeUser = document.querySelector("#usuario");
var bioUser = document.querySelector("#bio");
var imagemUser = document.querySelector("imgUser");
var dtCadAttUser = document.querySelector("#datas");

var botao = document.querySelector("#button-addon2")
botao.addEventListener ("click", buscandoInfos) 
function buscandoInfos() {
    fetch(`https://api.github.com/users/${busca.value}`).then(usuario => {
       if( usuario.status === 404){
           return alert('Usuario não encontrado!')
       } else{
           usuario.json().then(perfil => adicionandoInfos(perfil))
        }
    });

    

    function adicionandoInfos(perfil) {
            var dtcad = perfil.created_at;
            var dtatt = perfil.updated_at;
            nomeUser.innerHTML = perfil.login;
            bioUser.innerHTML = perfil.bio;
            dtCadAttUser.innerHTML = `Desde: ${dtcad.slice(8, 10)}/${dtcad.slice(5, 7)}/${dtcad.slice(0, 4)} | Ultima atualização: ${dtatt.slice(8, 10)}/${dtatt.slice(5, 7)}/${dtatt.slice(0, 4)}`;
            ;
            
            document.querySelector("#imgUser").src = perfil.avatar_url;

            document.querySelector('#avatar').href = `https://github.com/${perfil.login}`


            console.log(perfil);


        }
    }
