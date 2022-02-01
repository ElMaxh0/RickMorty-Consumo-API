
     const $btn = document.querySelector('#botao');
     var jasorteado=[]
     var repeticoes = 0
     //Funcoes responsaveis por receber a resposta 
     const createRandonValue = (max, min) =>
        {
            var sorteio =Math.floor(Math.random() * (max - min + 1)) + min;
            console.log(jasorteado.includes(sorteio))

            if(jasorteado.length >= 600){
                jasorteado= []
                console.log("CLEANED JA SORTEADOS")
            }
            else{
            
            }
            //VERIFICA SE O PERSONAGEM JA FOI SORTEADO ANTERIORMENTE 
            console.log('Total de Repeticoes :::'+repeticoes)
            if((jasorteado.includes(sorteio)) === true){
                repeticoes++
                return createRandonValue(671,1)
            }

            else{
                jasorteado.push(sorteio);
                console.log(jasorteado);
                console.log(sorteio);
                return sorteio
                
            }

        }
       
    var getPersona = async () =>
        {
            const aleatorio = createRandonValue(671,1);
            const person = await fetch(`https://rickandmortyapi.com/api/character/${aleatorio}`);
            return person;
        }
     // FUNCAO QUE STARTA A CRIANDO UM LOOP A FIM DE DEIXAR O CODIGO MAIS LIMPO 
     // CRIA UM CONTADOR PARA ESTEB LOOP CONTROLADO PELA VARIAVEL COM NOME i NA QUAL QUANDO ACABA DE RODAR ELE RODA UM i++(ACRESCENTAR UM AO VALOR)
     //ESTE CONTADOR SERVE APENAS PARA APROVEITAR O CODIGO JA EXISTENTE E EVITAR TER DE ESCREVER PARA OS TREZ PERSONAGENS O CODIGO 
     function initial(totalPersonagens)
     {   
         var totalDePersonagensCarregar = totalPersonagens;
         for (var i = 0; i < (totalDePersonagensCarregar); i++) 
         {
            charactersIdentified(i);
         }
     
     }
     //FUNCAO QUE RECEBE OS DADOS DA API E ATRIBUI A ELES UMA VARIAVEL PARA POSTERIORMENTE TRAZER OS DADOS A FUNCAO QUE REALMENTE ESCREVE OS DADOS NO HTML
     //REPASSANDO JUNTO DOS DADOS A ID GERADA NO ANTERIORMENTE 
        const charactersIdentified = async (id) => 
        {  
           const person = await getPersona(id);
            person.json().then(response => 
            {
                console.log('Response abaixo');
                var pImg = response.image; 
                var pNome = response.name;
                var estatusP = response.status;
                var especie =  response.species;                                                     
                console.log(getUsers(pImg, pNome, estatusP, especie, id));
                getUsers(pImg, pNome, estatusP, especie, id);
            })
        }

    // FUNCAO RESPONSAVEL POR PROCESSAR E EXIBIR OS DADOS NO HTML 
    function getUsers(imageP, nomeP, especieP, condicaoP, id)
        {
            const img = document.getElementById('img'+id);
            const nome = document.getElementById('nome'+id);
            const especie = document.getElementById('especie'+id);
            const condicao = document.getElementById('condicao'+id);
            img.src = imageP;
            nome.innerHTML = nomeP;
            especie.innerHTML = especieP;
            condicao.innerHTML = condicaoP;
        }


        //FUNCAO QUE ANALISA EVENTOS 
    $btn.addEventListener('click', Element =>
    {
        Element.preventDefault();
        initial(3)
        
   });   
      

