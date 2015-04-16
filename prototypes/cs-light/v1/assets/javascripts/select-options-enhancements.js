var option_row_object = $("<tr><td></td>");

$("#number-of-options-form").remove();
$("#option-form tbody .parcel-row:not(:first-child)").remove();
$(".add-option-button-row").removeClass("visuallyhidden");
$(".delete-link").removeClass("visuallyhidden");
$(".multi-row-field").attr("rowspan", 2);

$(".add-option-button").click( function() {
    var option_row_to_insert = $("#select_options_row tr").clone();
    $(this).closest("tr").before(option_row_to_insert);

    var newMultiRowValue = parseInt($(".multi-row-field").attr("rowspan"), 10) + 1;
    $(".multi-row-field").attr("rowspan", newMultiRowValue);
    addDeleteHandlers();
});

var addDeleteHandlers = function() {
    $(".delete-link").click( function() {
        $(this).closest("tr").remove();
    });
};

