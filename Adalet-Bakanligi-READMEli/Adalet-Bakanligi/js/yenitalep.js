$(document).ready(function () {
  $.getJSON("https://raw.githubusercontent.com/umut79/dinamik-ililce-json/master/tr-il.json", function (iller) {
    $("#il").html('<option value="">İl Seçiniz</option>');
    $.each(iller, function (index, il) {
      $("#il").append('<option value="' + il.il_id + '">' + il.il_adi + '</option>');
    });
  });

  $("#il").on("change", function () {
    var ilID = $(this).val();
    $("#ilce").html('<option value="">İlçe Seçiniz</option>');
    if (ilID) {
      $.getJSON("https://raw.githubusercontent.com/umut79/dinamik-ililce-json/master/tr-ilce.json", function (ilceler) {
        $.each(ilceler, function (index, ilce) {
          if (ilce.il_id === ilID) {
            $("#ilce").append('<option value="' + ilce.ilce_id + '">' + ilce.ilce_adi + '</option>');
          }
        });
      });
    }
  });
});
