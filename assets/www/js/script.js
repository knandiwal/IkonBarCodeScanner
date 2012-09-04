
document.addEventListener("deviceready", onDeviceReady, false);
$(document).ready(onDeviceReady);
var readyCounter = 0;
function onDeviceReady (){	
	readyCounter++;
	if( readyCounter == 2 ){
		run();
	}	
}


function run(){
	
	var $controller = new Controller();

	
	$('#runtest').on('click',function(){
		
		$controller.test();
		
		return false;
	});
	
	
	$('#scan').on('click',function(){
		
		$controller.captureBarcode();
		
		return false;
	});
	
	
}