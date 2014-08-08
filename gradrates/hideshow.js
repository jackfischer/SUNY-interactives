jQuery(document).ready(function(){
	jQuery("<script src=\"overall.js\"></script>").appendTo("#overall");

});


    jQuery('#showcc').click(function() { 
	     $("#overall").append("<script src=\"cc.js\"></script>");
    });

    jQuery('#showunicenters').click(function() {        
	    jQuery("<script src=\"unicenters.js\"></script>").appendTo("#overall");
    });

    jQuery('#showtechnical').click(function() {        
	    jQuery("<script src=\"technical.js\"></script>").appendTo("#overall");
    });

    jQuery('#showcomprehensive').click(function() {        
	    jQuery("<script src=\"comprehensive.js\"></script>").appendTo("#overall");
    });
