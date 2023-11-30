const lazyload = (target) => {
  const io = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const newclass = entry.target.classList[0] + "-in";
        $(entry.target).addClass(newclass);
        observer.disconnect();
      }
    });
  });
  io.observe(target);
};

$(function () {
  const targets = [
    ...document.querySelectorAll(".fade-s"),
    ...document.querySelectorAll(".fade-e"),
    ...document.querySelectorAll(".fade-b"),
    ...document.querySelectorAll(".fade"),
  ];
  targets.forEach(lazyload);

  $("#confirm_form").click(function (e) {
    for (let i = 1; i < 4; i++) {
      if ($("#validationServer0" + i).val().length == 0)
        $("#validationServer0" + i).addClass("is-invalid");
      else $("#validationServer0" + i).removeClass("is-invalid");
    }

    if ($("#validationServer04").val() == null)
      $("#validationServer04").addClass("is-invalid");
    else $("#validationServer04").removeClass("is-invalid");

    if(!$("#invalidCheck3").is(":checked"))
      $("#invalidCheck3").addClass("is-invalid");
    else $("#invalidCheck3").removeClass("is-invalid");
  });

  $(".to-form").click(function (e) { 
    e.preventDefault();
    window.location.href = 'form.html';
  });

  $("#button_from").click(function (e) { 
    e.preventDefault();
    window.location.href = '#validationServer01';
  });
});
