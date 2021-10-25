function consultaCEP(){
    var cep = document.getElementById("cep").value;
    var url = "https://viacep.com.br/ws/"+ cep +"/json/";
    console.log(url);

    if ($.trim($("#cep").val()) != ""){
        $(".barra-progresso").show();
        $.ajax({
            url: url,
            type: "GET",
            success: function(response){                
                    console.log(response);
                    $("#logradouro").html(response.logradouro);
                    $("#bairro").html(response.bairro);
                    $("#localidade").html(response.localidade);
                    $("#uf").html(response.uf);
                    $("#tituloCEP").html("CEP " + response.cep);
                    $(".cep").show();
                    $("#cep").val(""); // limpa o CEP digitado após o envio
                    $(".barra-progresso").hide();
            }
        })
    } else {
        alert("Por favor, insira um CEP");
    }

    
}

$(function(){
    $(".cep").hide();
    $(".barra-progresso").hide();
});
