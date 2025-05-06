/* меню */
$("#toggler").click(() => {
    $("#menu").toggleClass("max-lg:top-0 max-lg:-translate-y-full")
    $("#menu").toggleClass("max-lg:top-full")
    $("#overlay").toggleClass("hidden")
})

$("#overlay").click(() => {
    $("#menu").addClass("max-lg:top-0 max-lg:-translate-y-full")
    $("#menu").removeClass("max-lg:top-full")
    $("#overlay").addClass("hidden")
})


/* табы */
$( function() {
    $( "#tabs" ).tabs({
        active: 0
    })
} )