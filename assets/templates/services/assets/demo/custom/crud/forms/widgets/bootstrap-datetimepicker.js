//== Class definition

var BootstrapDatetimepicker = function () {
    
    //== Private functions
    var demos = function () {
        // minimal setup
        $('#travel_date_time').datetimepicker({
            todayHighlight: true,
            autoclose: true,
            format: 'dd.mm.yyyy hh:ii'
        });

        $('#date').datetimepicker({
            todayHighlight: true,
            autoclose: true,
            format: 'dd.mm.yyyy'
        });

    }

    return {
        // public functions
        init: function() {
            demos(); 
        }
    };
}();

jQuery(document).ready(function() {    
    BootstrapDatetimepicker.init();
});