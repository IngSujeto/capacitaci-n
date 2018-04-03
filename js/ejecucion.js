$(document).ready(function(){

  $('#guardar').submit(function(e){

      var Datos = [{"Nombre": document.getElementById("Nombre").value},
        {"ApPat": document.getElementById("ApPat").value},
        {"ApMat": document.getElementById("ApMat").value},
        {"Tel": document.getElementById("Tel").value},
        {"Mail": document.getElementById("Mail").value},
        {"Calle": document.getElementById("Calle").value},
        {"Num": document.getElementById("Num").value},
        {"Colonia": document.getElementById("Colonia").value},
        {"Ciudad": document.getElementById("Ciudad").value},
        {"Estado": document.getElementById("Estado").value},
        {"Postal": document.getElementById("Postal").value},
        {"Pass": document.getElementById("Pass").value}
      ];

      var option = {"option":3};
      var data = [{"option":option},{"Datos":Datos}];

      data = JSON.stringify(data);

      __ajax("php/process.php",{"data": data})
            .done(function(info){
              if (info){
                alert("Seguardo con éxito");
                //console.log(info);
              }
            });
  });

});

function __ajax(url, data){
  var ajax = $.ajax({
    "method": "POST",
    "url": url,
    "data": data
  })
  return ajax;
}