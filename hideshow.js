jQuery(document).ready(function(){
    jQuery('#showoverall').live('click', function(event) {        
	jQuery('#overall').show();
	jQuery('#cc').hide();
	jQuery('#unicenters').hide();
	jQuery('#technical').hide();

    });
});

jQuery(document).ready(function(){
    jQuery('#showcc').live('click', function(event) {        
	jQuery('#overall').hide();
	jQuery('#cc').show();
	jQuery('#unicenters').hide();
	jQuery('#technical').hide();

    });
});

jQuery(document).ready(function(){
    jQuery('#showunicenters').live('click', function(event) {        
	jQuery('#overall').hide();
	jQuery('#cc').hide();
	jQuery('#unicenters').show();
	jQuery('#technical').hide();

    });
});

jQuery(document).ready(function(){
    jQuery('#showtechnical').live('click', function(event) {        
	jQuery('#overall').hide();
	jQuery('#cc').hide();
	jQuery('#unicenters').hide();
	jQuery('#technical').show();

    });
});
