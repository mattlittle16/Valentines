$(document).ready(function () {

    $(document).on("submit", ".ClueForm", function (e) {
        e.preventDefault();
        var $el = $(this);

        var Answer = $el.find(".Answer").val();
        var Correct = $el.data("answer");

        console.log(Answer);
        console.log(Correct);

        if ($el.find(".Answer").val().toUpperCase() == $el.data("answer").toUpperCase()) {
            $(".NopeText").hide();
            $(".ClueContainer").fadeOut(800, function () {
                $(".NextClue").fadeIn(800);
            });
        } else {
            $(".NopeText").fadeIn(800);
        }
        
    });

    var easter_egg = new Konami();
    //easter_egg.load('https://www.youtube.com/watch?v=BAf7lcYEXag')
    easter_egg.code = function () {
        console.log("modal");
        $("#myModal").modal();
    };
    easter_egg.load();

});