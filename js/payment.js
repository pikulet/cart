$(document).ready(function() {
    // retrieve value from sessionStorage
    var amount = sessionStorage.getItem("totalCost");

    // set value in html element
    $("#amt-value").html(amount);

    $("#pay-btn").click(function() {
        // direct payment to paypal
    });
});

