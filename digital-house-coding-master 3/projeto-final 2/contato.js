
   let formulario = document.querySelector('form');
   formulario.addEventListener('submit', function(evento) {
     evento.preventDefault();

     let nome = document.querySelector('.form-control')
     if (nome.value==""){

       alert("Ocorreu um erro no campo nome")
     }

     let cidade = document.querySelector('#inputCity');
     if (cidade.value==""){
       alert("Coloque sua cidade");
     }

     let email = document.querySelector('#inputEmail4');
     if (email.value==""){
       alert("Coloque seu e-mail");
     }

     if(cidade.value !="" && nome.value!="" && email.value!=""){
       alert("MENSAGEM ENVIADA!!!")
       location.href=`contact.html`;
       }
   });