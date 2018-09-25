
    function validar_form_contato(){
    
        var nome = form_contato.nome.value;
        var telefone = form_contato.telefone.value;
        var email = form_contato.email.value;
        var mensagem = form_contato.mensagem.value;
       
      
    
        if (nome == ""){
            alert("Campo Nome é obrigatório");

            form_contato.nome.focus();
            return false;
        }

        if (telefone == ""){
            alert("Campo Telefone é obrigatório");

            form_contato.telefone.focus();
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
        
        if (enviar == "onclick"){
            alert("Mensagem Enviada");

            form_contato.onclick.focus();
            return false;
        }
    }

