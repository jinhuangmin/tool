(function($) {
	$.extend({
        exist: function(elm) {
            if (typeof elm == null) return false;
            if (typeof elm != "object") elm = $(elm);
            return elm.length ? true : false;
        }
    });
	$.fn.extend({
        exist : function(){
			return $.exist($(this));
		},
        outerHtml : function(){
			return $(this).prop('outerHTML');
		},
        rect : function(outer){
        	outer = typeof outer == 'undefined'?true:outer;
			var me = $(this);
			var of = me.offset();
			if(!of)QM.log(this);
			return {left:of.left,top:of.top,width:outer?me.outerWidth():me.width(),height:outer?me.outerHeight():me.height()};
		},
        reverse : function(){//集合反转
			return $($(this).get().reverse());
		}
     });
}(jQuery));

