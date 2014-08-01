jQuery(document).ready(function(){
	jQuery("<script src=\"http://brian.trump6.com/overall.js\"></script>").appendTo("#overall");
});


jQuery(document).ready(function(){
    jQuery('#showoverall').live('click', function(event) { 
	    jQuery("#overall").empty();
	    jQuery("#cc").empty();
	    jQuery("#technical").empty();
	    jQuery("#unicenters").empty();
	    jQuery("<script src=\"http://brian.trump6.com/overall.js\"></script>").appendTo("#overall");
    });
});

jQuery(document).ready(function(){
    jQuery('#showcc').live('click', function(event) {        
	    jQuery("#overall").empty();
	    jQuery("#cc").empty();
	    jQuery("#technical").empty();
	    jQuery("#unicenters").empty();
	    jQuery("<script src=\"http://brian.trump6.com/cc.js\"></script>").appendTo("#overall");
    });
});

jQuery(document).ready(function(){
    jQuery('#showunicenters').live('click', function(event) {        
	    jQuery("#overall").empty();
	    jQuery("#cc").empty();
	    jQuery("#technical").empty();
	    jQuery("#unicenters").empty();
	    jQuery("<script src=\"http://brian.trump6.com/unicenters.js\"></script>").appendTo("#overall");
    });
});

jQuery(document).ready(function(){
    jQuery('#showtechnical').live('click', function(event) {        
	    jQuery("#overall").empty();
	    jQuery("#cc").empty();
	    jQuery("#technical").empty();
	    jQuery("#unicenters").empty();
	    jQuery("<script src=\"http://brian.trump6.com/technical.js\"></script>").appendTo("#overall");
    });
});
