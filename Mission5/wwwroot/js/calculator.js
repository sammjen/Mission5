$(document).ready(function() {
    //my chosen hourly rate is 20 an hour
    const HOURLY_RATE = 20.00;
    // Select elements
    const $input = $('#hoursInput');
    const $output = $('#totalCost');
    const $error = $('#errorMsg');
    const $button = $('#calculate'); // Select the new button
    
    $button.on('click', function() {

        // Get the value
        let hours = $input.val();
        let hoursNum = parseFloat(hours);

        // Validate and Calculate
        if ($.isNumeric(hoursNum) && hoursNum >= 0) {
            let total = hoursNum * HOURLY_RATE;
            $output.text(total.toFixed(2));
            $error.hide();
        } else {
            // Error handling
            $output.text("0.00");
            $error.show();
        }
    });
});