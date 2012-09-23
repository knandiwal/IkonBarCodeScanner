
function Controller() {

	var $this = this;
	
	//$('body').append('<p>Controller created</p>');

	this.test = function() {

		// some test code here
		console.log('Running test method');

		navigator.notification.alert('You are the winner test!', // message
		false, // callback
		'Game Over', // title
		'Done' // buttonName
		);

	}

	this.captureBarcode = function() {

		/*
		 * window.plugins.barcodeScanner.encode(BarcodeScanner.Encode.TEXT_TYPE,
		 * "http://www.nytimes.com", function(success) { alert("encode success: " +
		 * success); }, function(fail) { alert("encoding failed: " + fail); } );
		 */

		window.plugins.barcodeScanner.scan(function(result) {
/*			alert("We got a barcode\n" + "Result: " + result.text + "\n"
					+ "Format: " + result.format + "\n" + "Cancelled: "
					+ result.cancelled);*/
			
			$this.lookupbarcode( result.text );
			
		}, function(error) {
			alert("Scanning failed: " + error);
		});

	};

	this.lookupbarcode = function(barcode) {
		
		$.ajax({
			  url: 'http://ikon.richards19.com/api/barcodelookup',
			  dataType: 'json',
			  data: { 
				  barcode: barcode 
			  },
			  success: function(data) {
					
					//alert(data.result.msg );
					
				  $('#scanresults .message').html(data.result.msg);
				  $('#scanresults .barcode').html(barcode);
				  $('#scanresults .description').html(data.Description);
				  $('#scanresults .costprice').html(data.CostPrice);
				  $('#scanresults .filtonstock').html(data.filton_stock);
				  $('#scanresults .stock').html(data.Stock);
				  $('#scanresults .deptname').html(data.DeptName);
				
			},
			error: function(){
				alert("System lookup error (network)");
			}
		});
		

		
	}

}