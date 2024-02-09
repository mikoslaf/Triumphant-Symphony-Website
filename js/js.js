const Countries = [
  "Albania",
  "Andorra",
  "Austria",
  "Belarus",
  "Belgium",
  "Bosnia and Herzegovina",
  "Bulgaria",
  "Croatia",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Estonia",
  "Finland",
  "France",
  "Germany",
  "Greece",
  "Hungary",
  "Iceland",
  "Ireland",
  "Italy",
  "Kosovo",
  "Latvia",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Malta",
  "Moldova",
  "Monaco",
  "Montenegro",
  "Netherlands",
  "North Macedonia",
  "Norway",
  "Poland",
  "Portugal",
  "Romania",
  "Russia",
  "San Marino",
  "Serbia",
  "Slovakia",
  "Slovenia",
  "Spain",
  "Sweden",
  "Switzerland",
  "Turkey",
  "Ukraine",
  "United Kingdom",
  "Vatican City",
  "Other",
];

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

  const today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const yyyy = today.getFullYear();
  
  $('.navbar-text').html("Seize Every Day. " + dd + '/' + mm + '/' + yyyy);

  const targets = [
    ...document.querySelectorAll(".fade-s"),
    ...document.querySelectorAll(".fade-e"),
    ...document.querySelectorAll(".fade-b"),
    ...document.querySelectorAll(".fade"),
  ];
  targets.forEach(lazyload);

  $("#confirm_form").click(function (e) {
    e.preventDefault();

    //console.log($('#validationServer04').val().length);
    
    for (let i = 1; i < 7; i++) {
      if(i != 4)
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

    console.log($('#validationServer06').val());

  });

  $(".to-form").click(function (e) { 
    e.preventDefault();
    window.location.href = 'form.html';
  });

  $("#button_from").click(function (e) { 
    e.preventDefault();
    window.location.href = '#validationServer01';
  });

  $('#button-addon').click(function (e) {
    e.preventDefault();
    const value = $(".form-control").val();
    if(value.length > 0)
      $('#addon').append("<li>" + value + "</li>");
  });

  Countries.forEach((e) => {
    $('#validationServer04').append($('<option>', {
      value: e,
      text: e
  }));
  });
});
