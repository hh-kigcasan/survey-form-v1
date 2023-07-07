$(document).ready(function() {
    $("body")
      .on("click", "#register_or_login_button", registerOrLogin);
});

function registerOrLogin(e){
  e.preventDefault();
  
  let form = $("#register_or_login_form");
  let is_processing = parseInt(form.attr("data-is-processing"));

  if (is_processing === 0) {
      form.attr("data-is-processing", 1);

      $.post(form.attr("action"), form.serialize(), function(response) {

          if (response.status === true && response.redirect_url) {
              window.location.href = response.redirect_url;
          }
          form.attr("data-is-processing", 0);
      }, "json");

      return false;
  }	
}