//Procurar o botao
document.querySelector("#add-time")
//Quando clicar no botao
.addEventListener('click', cloneField)

//Executar uma acao

function cloneField(){
    //Duplicar os campos
   const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)
      //pegar os campos
    const fields = newFieldContainer.querySelectorAll('input')

     //para limpar os campos
     fields.forEach(function(field){
         //pega field do momento
         field.value=""
        
    })
        //colocar na pagina, onde?
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}
