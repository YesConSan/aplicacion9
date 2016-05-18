// JavaScript Document
$(document).ready(function(e) {
 //WhatchID se re refier a actual
	
	var watchID=null;
	document.addEventListener("deviceready",Dispositivo_Listo,false);
	
	//Cuando esta listo el dispositivo
	function Dispositivo_Listo(){
		Comienza();
	}
	//Empieza la observacion de la aceleracion
	
	function Comienza(){
		
		//Actualiza la aceleracion cada 2 segundos
		//
		var opciones={frecuency:2000};
		
		whatchID=navigator.accelerometer.watchAcceleration(Correcto,Error,opciones);
		navigator.geolocation.getCurrentPosition(Localiza,ErrorLocalizacion);
	}
	//Detiene la observacion de la aceleracion
	
	function Detente(){
		if (whatchID) {
			navigator.accelerometer.clearWhatch (watchID);
			whatchID=null;
			}
	}
	//Correcto:toma una captura de la aceleracion
	
	function Correcto(acceleration){
		var element=document.getElementById('acelerometro');
		element.innerHTML='Aceleracion en X:'+acceleration.x+'<br/>'+
		'Aceleracion en Y:'+acceleration.y+'<br/>'+
		'Intervalo:'+acceleration.timestamp+'<br/>';	
		}
		
		//Error :Falla al obtener la aceleracion
		function Error(){
			alert('Error')			
		}
	//Exito al localizar
	function Localiza(posicion){
		var element=document.getElementById('geolocalizacion');
		element.innerHTML='Latitud:'+posicion.coords.latitude+ '<br/>' +
		'Longitud:' +posicion.coords.longitude +'<br/>' +
		'Precision:' +posicion.coords.accuracy +'<br/>'+
		'Intervalo:' +posicion.timestamp  +'<br/>';
		}
		//Error en la geolocalizacion
		function ErrorLocalizacion(error){
			alert('codigo:'+error.code +'\n'+
			'mensaje:'+error.message+'\n');
			}
});//document ready

