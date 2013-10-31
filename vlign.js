$(document).ready(function(){

  var verticalign = $(".vlign").toArray();
    for (var i = 0; i < verticalign.length; i++) {

		vwide = $(verticalign[i]).width();
    vtall = $(verticalign[i]).height();
		vmartop = parseInt(vtall/2);
		vmarleft = parseInt(vwide/2);
		
		$(verticalign[i]).css("position","relative");
        $(verticalign[i]).css("top","50%");
		$(verticalign[i]).css("left","50%");
		$(verticalign[i]).css("margin-top","-"+vmartop+"px");
		$(verticalign[i]).css("margin-left","-"+vmarleft+"px");
    }
	
});
