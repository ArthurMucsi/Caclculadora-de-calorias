$(document).on("click", "#calc", function(){

  var calc = $("#calc").val();
  var n1 = $("#n1").val();
  var n2 = $("#n2").val();
  var result;

  // contas // 
  var mais = $("#mais").val();
  var menos = $("#menos").val();
  var divisao = $("#divisao").val();
  var multiplicacao = $("#multiplicacao").val();

  // HOMI //
  if (calc == 'mais'){
  result = (n1 + n2);
  }

  if (calc == 'menos' ){
  result = (n1 - n2);
  }

  if (calc == 'divisao' ){
  result = (n1 / n2);
  }

  if (calc == 'multiplicacao' ){
  result = (n1 * n2);
  }

  alert("Resultado é: " +result);
});

$(document).on("click", "#alerta", function() {
  navigator.notification.alert("Minha mensagem", null, "Aviso!", "Aceito");
});

$(document).on("click", "#confirmar", function() {
  function confirma(buttonIndex) {
    if(buttonIndex == 1) {
      navigator.notification.alert("Escolheu a op巽達o B");
    }else{
      navigator.notification.alert("Escolheu a op巽達o A");     
    }
  }
  navigator.notification.confirm("A ou B", confirma, "Escolha: ", ['B', 'A']);
});

$(document).on("click", "#notificar", function() {
  navigator.notification.beep(1);
});

$(document).on("click", "#vibrar", function() {
  navigator.vibrate(1000);
});

function mostraMapa(lat, long) {
  L.mapquest.key = 'ybliJHRjLaNpWqLLNi4n4sKAoDCSVflu';

  var map = L.mapquest.map('map', {
    center: [lat, long],
    layers: L.mapquest.tileLayer('map'),
    zoom: 12
  });

  map.addControl(L.mapquest.control());

}

$(document).on("click", "#local", function() {
  var onSuccess = function(position) {
    mostraMapa(position.coords.latitude, position.coords.longitude)
  };

    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError);
});