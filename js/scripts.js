var countBy = function(finish, increment) {
  for (index = 0; index <= finish; index += increment ) {
    $(".results").append("<li>" + index + "</li>");
  };

};

$(document).ready(function() {
  $("#user-form").submit(function(event) {
    var finishNum = parseInt($("#finish-num").val());
    var increment = parseInt($("#increment").val());
    countBy(finishNum, increment);
    event.preventDefault();
  });
  
});
