
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

        alert("Mensagem eviada com sucesso!")
    }
        



function validar_form_cad(){
        
        var nome_cad = form_cad.nome_cad.value;
        var ult_cad = form_cad.ult_cad.value;
        var email_cad = form_cad.email_cad.value;
        var senha_cad = form_cad.senha_cad.value;
        var conf_senha_cad = form_cad.conf_senha_cad.value;
        var end_cad = form_cad.end_cad.value;
        var compl_end_cad = form_cad.compl_end_cad.value;
        var cid_cad = form_cad.cid_cad.value;
        var esta_cad = form_cad.esta_cad.value;
        var cep_cad = form_cad.cep_cad.value;

        
        if (nome_cad == ""){
            alert("Campo Nome é obrigatório");

            form_cad.nome_cad.focus();
            return false;
        }

        if (ult_cad == ""){
            alert("Campo Último nome é obrigatório");

            form_cad.ult_cad.focus();
            return false;
        }


        if (email_cad == ""){
            alert("Campo Email é obrigatório");

            form_cad.email_cad.focus();
            return false;
        }


        if (senha_cad == ""){
            alert("Campo Senha é obrigatório");

            form_cad.senha_cad.focus();
            return false;
        }

        if (conf_senha_cad == ""){
            alert("Por favor, confirme sua senha");

            form_cad.conf_senha_cad.focus();
            return false;
        }

        if (end_cad == ""){
            alert("Campo Endereço é obrigatório");

            form_cad.end_cad.focus();
            return false;
        }

        
        if (cid_cad == ""){
            alert("Campo Cidade é obrigatório");

            form_cad.cid_cad.focus();
            return false;
        }

        if (esta_cad == ""){
            alert("Campo Estado é obrigatório");

            form_cad.esta_cad.focus();
            return false;
        }

        if (cep_cad == ""){
            alert("Campo Cep é obrigatório");

            form_cad.cep_cad.focus();
            return false;
        }

        alert("Usuário cadastrado com sucesso!")
}


