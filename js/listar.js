
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


function __ajax(url, data){
  var ajax = $.ajax({
    "method": "POST",
    "url": url,
    "data": data
  })
  return ajax;
}