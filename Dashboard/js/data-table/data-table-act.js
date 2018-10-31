(function ($) {
 "use strict";
	
	$(document).ready(function() {
		 $('#data-table-basic').DataTable();
	});
	
	$('#myTable').DataTable( {
    ajax: {
        url: 'https://b7ce1e9d.ngrok.io/users/schedule',
        dataSrc: ''
    },
    columns: [ 
		{'data': 'busID'},
		{'data': 'phone'},
		{'data': 'schDate'},
		{'data': 'schTime'},
		{'data': 'date_created'}
	]
} );

	$('#payTab').DataTable( {
    ajax: {
        url: 'https://b7ce1e9d.ngrok.io/users/payments',
        dataSrc: ''
    },
    'columns': [ 
		{'data': 'busID'},
		{'data': 'phone'},
		{'data': 'amount',
			'render': function(data,type,row){
				var n = parseFloat(data);
				return n.toLocaleString('en');
			}
			
			},
		{'data': 'success',
			'render': function(data, type, row){
				return type === 'display' && data ? 
				'Successful' : 'Failed';
			}
			},
		{'data': 'payDate'}
	]
} );
 
})(jQuery); 