function tocaSom (idElementoAudio) {
    const elemento = document.querySelector(idElementoAudio);

    if(elemento && elemento.localName === 'audio'){
        elemento.play();
    }
    else{
        //alert('Elemento não encontrado');
        console.log('Elemento não encontrado ou seletor inválido');
    }
    
}

const listaDeTeclas = document.querySelectorAll('.tecla');

//for = para
for (let contador = 0; contador < listaDeTeclas.length;contador++){

    const tecla = listaDeTeclas[contador];    
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; //templete string
    
    tecla.onclick = function(){
        tocaSom(idAudio);
    };

    tecla.onkeydown = function(evento){

        if(evento.code === 'Space' || evento.code === 'Enter'){
            tecla.classList.add('ativa');  
        }        
    }

    tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
    }
}



    /*if (elemento === null){
        //alert('Elemento não encontrado');
        console.log('Elemento não encontrado');
    }

    if(elemento != null && elemento.localName === 'audio'){
        elemento.play();
    }
    */
   
    /* Com while (enquanto)
    let contador = 0;

    while(contador < listaDeTeclas.length){

        const tecla = listaDeTeclas[contador];    
        const instrumento = tecla.classList[1];
        //templete string
        const idAudio = `#som_${instrumento}`;
        
        //console.log(idAudio);

        tecla.onclick = function(){
            tocaSom(idAudio);
        };

        contador = contador + 1;

        //console.log(contador);
    }
    */
