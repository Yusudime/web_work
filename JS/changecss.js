$(document).ready(function() {
    // Ao pressionar qualquer link ou botão que contém
    // a class "trocacssbtn", executar a função.
    $(".changecss").on("click", function() {

    // Pega o atributo do link clicado para definir qual será o valor a ser trocado.
        var cssclass = $(this).attr("href"); 

       // Faz a troca do arquivo de css tema
       $("#temacss").attr("href", cssclass);

       // Retorna false para manter na mesma tela e finalizar a função.
        return false;
    });
});