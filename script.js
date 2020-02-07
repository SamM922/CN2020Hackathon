$(".rate").click(function() {
  let rate = document.querySelector('input[name="star"]:checked').value;
  
  let comment = $("input").val();
  
  $(".comments").append(`<p class= "border">${comment}</p>`);
  $(".ratings").append(`<p class="border">${rate}</p>`)
  
});