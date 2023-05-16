$(document).ready(function() {
  $('#cep').on('blur', function() {
    var cep = $(this).val().replace(/\D/g, '');
    if (cep !== "") {
      var url = `https://viacep.com.br/ws/${cep}/json/`;
      $.getJSON(url, function(data) {
        if (!("erro" in data)) {
          $('#endereco').val(data.logradouro);
          $('#cidade').val(data.bairro);
          $('#estado').val(data.uf);
          $('#cep-status').text('');
        } else {
          $('#endereco').val('');
          $('#cidade').val('');
          $('#estado').val('');
          $('#cep-status').text('CEP inválido.');
        }
      });
    } else {
      $('#endereco').val('');
      $('#cidade').val('');
      $('#estado').val('');
      $('#cep-status').text('');
    }
  });

  $('#cep').on('input', function() {
    $(this).val($(this).val().replace(/\D/g, ''));
    if ($(this).val().length === 8) {
      $(this).blur();
    }
  });
})