$(document).on("click", "#calc", function(){

  var sex = $("#sex").val();
  var height = $("#height").val();
  var age = $("#age").val();
  var pes = $("#pes").val();
  var result;

  // calorias // 
  var fatman = $("#fatman").val();
  var sed = $("#sed").val();
  var lev = $("#lev").val();
  var mod = $("#mod").val();
  var alt = $("#alt").val();
  var ext = $("#ext").val();

  // HOMI //
  if (sex == 'h' && fatman == sed){
  result = sed * (66 + (13.7 * pes)) + (( 5 * height) - (6.8 * age));
  }

  if (sex == 'h' && fatman == lev){
  result = lev * (66 + (13.7 * pes)) + (( 5 * height) - (6.8 * age));
  }

  if (sex == 'h' && fatman == mod){
  result = mod * (66 + (13.7 * pes)) + (( 5 * height) - (6.8 * age));
  }

  if (sex == 'h' && fatman == alt){
  result = alt * (66 + (13.7 * pes)) + (( 5 * height) - (6.8 * age));
  }

  if (sex == 'h' && fatman == ext){
  result = ext * (66 + (13.7 * pes)) + (( 5 * height) - (6.8 * age));
  }

    // MUIÉ NA NET, MANO //
  if (sex == 'm' && fatman == sed){
  result = sed * (655 + (9.6 * pes)) + (( 1.8 * height) - (4.7 * age));
  }

  if (sex == 'm' && fatman == lev){
  result = lev * (655 + (9.6 * pes)) + (( 1.8 * height) - (4.7 * age));
  }

  if (sex == 'm' && fatman == mod){
  result = mod * (655 + (9.6 * pes)) + (( 1.8 * height) - (4.7 * age));
  }

  if (sex == 'm' && fatman == alt){
  result = alt * (655 + (9.6 * pes)) + (( 1.8 * height) - (4.7 * age));
  }

  if (sex == 'm' && fatman == ext){
  result = ext * (655 + (9.6 * pes)) + (( 1.8 * height) - (4.7 * age));
  }

  alert("calorias: " +result);
});