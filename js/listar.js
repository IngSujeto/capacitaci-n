$(document).ready(function(){
  listar();
});

function listar(){

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
  });
}

function __ajax(url, data){
  var ajax = $.ajax({
    "method": "POST",
    "url": url,
    "data": data
  })
  return ajax;
}