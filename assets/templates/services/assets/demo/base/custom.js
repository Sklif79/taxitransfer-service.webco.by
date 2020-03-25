window.addEventListener("load", function(	) {	
	//Set travel date time mask BEGIN
	var setTravelDateTimeMask = function () {
		var items = $(".data-time-mask");
		if ( items.length ) items.mask('00.00.0000 00:00');
	};
	//Set travel date time mask END





	//Initialization BEGIN
	setTravelDateTimeMask();
	//Initialization END
});