var countBy = function(finish, increment) {
  if (increment <= 0) {
    alert("Be nice, pick a positive number.");
  } else {
    for (index = 0; index <= finish; index += increment ) {
      $(".results").append("<li>" + index + "</li>");
    };
}
};

$(document).ready(function() {
  $("#user-form").submit(function(event) {
    $("ul.results").empty();
    var finishNum = parseFloat($("#finish-num").val());
    var increment = parseFloat($("#increment").val());
    countBy(finishNum, increment);
    event.preventDefault();
  });

});
