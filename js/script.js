
function gerarpersonagem (pimgdata,pname, pespecie ,pcondicao , id ){
    const imagem = document.getElementById('img'+id);
    const botao = document.querySelector('button'+id);
    const nomeDoPersonagem = document.querySelector('#nome'+id);
    const especie = document.querySelector('#especie'+id);
    const condicao = document.getElementById('statuns'+id);
    imagem.src = pimgdata;
    imagem.alt = pname;
    nomeDoPersonagem.innerHTML= pname;
    especie.innerHTML = pespecie;
    condicao.innerHTML = pcondicao;
}
function atribuirvalores(){

}
gerarValorAleatorio = () => 
{
    return Math.floor(Math.random()* 671);
}

pegarPersonagem = (i) => 
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
        var dataimage=data.image
        var dataname= data.name
        var datanomedop=data.name
        var especiedop=data.species
        var condicaodop=data.status
        gerarpersonagem(dataimage,datanomedop ,especiedop, condicaodop , i );
        });
}
function initial(ttoalp){
    var totaldepersonagensacarrega = ttoalp;
    for (var i = 0; i < (totaldepersonagensacarrega); i++) {
        pegarPersonagem(i);
     }

}

