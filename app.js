$( document ).ready(function() {
    
    var request = $.ajax({
      method: "GET",
      url: "http://localhost:3000/users/1",
      dataType: "JSON"
    });

    request.done(function(data) {
        console.log(data)
        loadUser(data);
    });

    function loadUser(data) {
      var template = $('#template').html();
      Mustache.parse(template);   // optional, speeds up future uses
      var rendered = Mustache.render(template, {first_name: data.first_name});
      $('#target').html(rendered);
    };
});