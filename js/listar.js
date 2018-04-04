
var datos;
$(document).ready(function(){
  listar();
});

function listar(){

  selection ="";
  var row = `<tr>
        <th>
          Nombre
        </th>
        <th>
          Dirección
        </th>
        <th>
          Teléfono
        </th>
        <th>
          Correo Eléctronico
        </th>
      </tr>`;
  var option = {"option":1};
  var data = [{"option":option}];
  data = JSON.stringify(data);

  __ajax("php/process.php",{"data": data})
  .done(function(info){
    var lista = JSON.parse(info);

    for(var i in lista.data)
      row += `<tr> 
        <td> ${lista.data[i].Nombre} ${lista.data[i].ApPat} ${lista.data[i].ApMat}</td>
        <td> ${lista.data[i].Calle} ${lista.data[i].Num} ${lista.data[i].Colonia} ${lista.data[i].Ciudad} ${lista.data[i].Estado} ${lista.data[i].Postal}</td>
        <td> ${lista.data[i].Tel} </td>
        <td> ${lista.data[i].Mail} </td> 
        </tr>`

      $("#usuarios").html(row);

      for(var i in lista.data)
      selection += `<option value = "${i.toString()}"> ${lista.data[i].Nombre} </option>`
    
      $("#combo").html(selection);
      datos = lista;
  });
}

$(document).ready(function(){
  $('#modificar').submit(function(e){
      e.preventDefault();
      document.getElementById("Nombre").value = datos.data[document.getElementById("combo").value].Nombre;
      document.getElementById("ApPat").value = datos.data[document.getElementById("combo").value].ApPat;
      document.getElementById("ApMat").value = datos.data[document.getElementById("combo").value].ApMat;
      document.getElementById("Tel").value = datos.data[document.getElementById("combo").value].Tel;
      document.getElementById("Mail").value = datos.data[document.getElementById("combo").value].Mail;
      document.getElementById("Num").value = datos.data[document.getElementById("combo").value].Num;
      document.getElementById("Calle").value = datos.data[document.getElementById("combo").value].Calle;
      document.getElementById("Colonia").value = datos.data[document.getElementById("combo").value].Colonia;
      document.getElementById("Ciudad").value = datos.data[document.getElementById("combo").value].Ciudad;
      document.getElementById("Estado").value = datos.data[document.getElementById("combo").value].Estado;
      document.getElementById("Postal").value = datos.data[document.getElementById("combo").value].Postal;
  });
});

$(document).ready(function(){

  $('#guardar').submit(function(e){
      e.preventDefault();
      var Datos = [{"Id": datos.data[document.getElementById("combo").value].id},
        {"Nombre": document.getElementById("Nombre").value},
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

      var option = {"option":4};
      var data = [{"option":option},{"Datos":Datos}];

      data = JSON.stringify(data);

      __ajax("php/process.php",{"data": data})
            .done(function(info){
              if (info){
                alert("Seguardo con éxito");
              }
            });
  });

});

$(document).ready(function(){

  $('#Eliminar').submit(function(e){
    
      var Id = datos.data[document.getElementById("combo").value].id;
      var Datos = {"Id":Id};

      var option = {"option":2};
      var data = [{"option":option},{"Datos":Datos}];

      console.log(data);

      data = JSON.stringify(data);

      __ajax("php/process.php",{"data": data})
            .done(function(info){
              console.log(info);
              if (info){
                alert("Se elimino con éxito");
                
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