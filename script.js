
    function validar_form_contato(){
    
        var nome = form_contato.nome.value;
        var email = form_contato.email.value;
        var mensagem = form_contato.mensagem.value;
       
        // var form = document.getElementsByClassName('form_contato');

         //       form.onsubmit = function(evt){
           //         evt.preventDefault();
             //       console.log(form.nome.value);
               //     form.reset();
                    
               // }
    
        if (nome == ""){
            alert("Campo Nome é obrigatório");

            form_contato.nome.focus();
            return false;
        }


        if (email == ""){
            alert("Campo Email é obrigatório");

            form_contato.email.focus();
            return false;
        }


        if (mensagem == ""){
            alert("Campo Mensagem é obrigatório");

            form_contato.mensagem.focus();
            return false;
        }    
    }

