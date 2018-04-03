<?php  
	
	include 'Conexion.php';

	$data = json_decode( $_POST["data"] );

	$op = $data[0]->{"option"};

	$conexion = new Conexion();
	$cnn = $conexion->getConexion();
	$sql = "";
	$statement = null;
	$valor = null;

	switch ($op->{"option"}) {
		case 1:
			
			$sql = "SELECT
					usuarios.idUsuario AS id,
					usuarios.Nombre AS Nombre,
					usuarios.ApPat AS ApPat,
					usuarios.ApMat AS ApMat,
					usuarios.Tel AS Tel,
					usuarios.CorreoE AS Mail,
					directorio.Calle AS Calle,
					directorio.Numero AS Num,
					directorio.Colonia AS Colonia,
					directorio.Ciudad AS Ciudad,
					directorio.Estado AS Estado,
					directorio.CodPostal AS Postal
					FROM
					usuarios
					INNER JOIN directorio ON directorio.IdUsuario = usuarios.idUsuario";
			$statement = $cnn->prepare($sql);
			$valor = $statement->execute();

			if( $valor ){
				while( $resultado = $statement->fetch(PDO::FETCH_ASSOC)){
					$lista["data"][] = $resultado;
				}
				echo json_encode($lista);
				}else{
					echo "error";
				}

				$statement->closeCursor();
				$conexion = null;

			break;
		
		case 2:
			
			break;

		case 3:
			$Datos = $data[1]->{"Datos"};

			try {  
				$statement = $cnn;
				$statement ->beginTransaction();

				$sql = "INSERT INTO  Usuarios (Nombre, ApPat, ApMat, Tel, CorreoE, Contrasena) 
					values ('".$Datos[0]->{"Nombre"}."','".$Datos[1]->{"ApPat"}."','".$Datos[2]->{"ApMat"}."','".$Datos[3]->{"Tel"}."','".$Datos[4]->{"Mail"}."','".$Datos[11]->{"Pass"}."')";
				$statement -> exec($sql);

				$sql = "SELECT MAX(idUsuario) AS id FROM usuarios";

				$idQuery = $cnn->prepare($sql);
				$idQuery->execute();

				$resultado = $idQuery->fetch(PDO::FETCH_ASSOC);

				$id = (string)($resultado["id"]);

				$sql = "INSERT INTO Directorio (IdUsuario, Calle, Numero, Colonia, Ciudad, Estado, CodPostal) values (".$id.",'".$Datos[5]->{"Calle"}."',".$Datos[6]->{"Num"}.",'".$Datos[7]->{"Colonia"}."','".$Datos[8]->{"Ciudad"}."','".$Datos[9]->{"Estado"}."',".$Datos[10]->{"Postal"}.")";
				$statement -> exec($sql);
				
				$statement -> commit();
				echo true;
			} catch (Exception $e) {
				 $statement -> rollBack();
				 echo "Fallo: " . $e->getMessage();
			}
			$conexion = null;
			
	}
