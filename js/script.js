const imagem = document.querySelector('img');
const botao = document.querySelector('button');
const nomeDoPersonagem = document.querySelector('#nome');
const especie = document.querySelector('#especie');
const condicao = document.querySelector('#status');

function gerarpersonagem (pimgdata,pname, pespecie ,pcondicao , id ){
    console.log(pimgdata)
    var personacontainer = document.createElement('div')
    personacontainer.id =id
    var imagempersona =document.createElement('img')
    imagempersona.classList.add("personagempicture")
    imagempersona.src=pimgdata
    var title01= document.createElement('h4');
    title01.textContent=`Nome Do Personagem ${pname}`
    var especietext = document.createElement('h4');
    especietext.textContent=`Especie do Personagem ${pespecie}`
    var condicao = document.createElement('h4');
    condicao.textContent=`Especie do Personagem ${pcondicao}` 
    personacontainer.appendChild(imagempersona);
    personacontainer.appendChild(title01);
    personacontainer.appendChild(especietext);
    personacontainer.appendChild(condicao);
    document.getElementById('personas').appendChild(personacontainer)
}

gerarValorAleatorio = () => 
{
    return Math.floor(Math.random()* 671);
}

pegarPersonagem = () => 
{
    let numeroAleatorio = gerarValorAleatorio();

    return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`,{
        method:'GET',
        headers: 
        {
            Accept: 'application/json',
            "Content-type":'application/json'
        }
    }).then((response) => response.json()).then((data) => 
    {
        var id = gerarValorAleatorio()
        var dataimage=data.image;
        var dataname= data.name
        var datanomedop=data.name
        var especiedop=data.species
        var condicaodop=data.status
        console.log(data)
        gerarpersonagem(dataimage,datanomedop ,especiedop, condicaodop , id );
        });
}
 
function initial(ttoalp){
    var totaldepersonagensacarrega = ttoalp;
    for (var i = 0; i < (totaldepersonagensacarrega); i++) {
        pegarPersonagem();
     }
}
