$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();

    var blahs = ['person1', 'person2', 'animal', 'exclamation', 'verb', 'noun'];

    blahs.forEach(function(blah) {

      var user = $('input#' + blah).val();

      $('.' + blah).text(user);
    });
    $('#story').show();

    //THE OLD CODE
    // var person1Input = $("input#person1").val();
    // var person2Input = $("input#person2").val();
    // var animalInput= $("input#animal").val();
    // var exclamationInput = $("input#exclamation").val();
    // var verbInput = $("input#verb").val();
    // var nounInput = $("input#noun").val();
    //
    // $(".person1").append(person1Input);
    // $(".person2").append(person2Input);
    // $(".animal").append(animalInput);
    // $(".exclamation").append(exclamationInput);
    // $(".verb").append(verbInput);
    // $(".noun").append(nounInput);
    //
    // $("#story").show();











  });
});
