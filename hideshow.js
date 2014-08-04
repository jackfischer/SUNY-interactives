jQuery(document).ready(function(){
	jQuery("<script src=\"overall.js\"></script>").appendTo("#overall");
});

jQuery(document).ready(function(){
    jQuery('#showoverall').live('click', function(event) { 
	    jQuery("#overall").empty();
	    jQuery("<script src=\"overall.js\"></script>").appendTo("#overall");
    });
});

jQuery(document).ready(function(){
    jQuery('#showcc').live('click', function(event) {        
	    jQuery("#overall").empty();
	    jQuery("<script src=\"cc.js\"></script>").appendTo("#overall");
    });
});

jQuery(document).ready(function(){
    jQuery('#showunicenters').live('click', function(event) {        
	    jQuery("#overall").empty();
	    jQuery("<script src=\"unicenters.js\"></script>").appendTo("#overall");
    });
});

jQuery(document).ready(function(){
    jQuery('#showtechnical').live('click', function(event) {        
	    jQuery("#overall").empty();
	    jQuery("<script src=\"technical.js\"></script>").appendTo("#overall");
    });
});

jQuery(document).ready(function(){
    jQuery('#showcomprehensive').live('click', function(event) {        
	    jQuery("#overall").empty();
	    jQuery("<script src=\"comprehensive.js\"></script>").appendTo("#overall");
    });
});
