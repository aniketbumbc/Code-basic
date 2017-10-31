if (jQuery) {
    console.log("Hello Jquery Ready");
} else {
    console.log("Hello Jquery Not Ready");
}
// jquery function

$(document).ready(function () {
    var output = $("#one").html();
    console.log(output);
});

//class content updated
$(document).ready(function () {
    $(".one").html("Hello <br><hr>Form JQuery");
    //$("div").html("hello from div ");
    //$(".one").text("Hello <br><hr>Form JQuery");
});

$(document).ready(function () {
    var a = $("#name").val();
    //$("p").text(a);
});

//list append and before and after
// $(document).ready(function(){
// $("li").each(function(index,event){
//     console.log($(this).html ());
//     console.log(index);
//     console.log(event);
//   //  $(this).after("how are you ?");
//     //before
//    // $(this).append("Hello ");
//     //remove
//     //$(this).remove();
// });
// //$("li:eq(2)").html("andy ani");
// });

//clicke event in jquery ( mouse over)

$(document).ready(function () {
    $("#nav-bar").on("click", function (event) {
        $(this).append("x");
    });
});

// $(document).ready(function(){
// $("#nav-bar").click(function(event){
// event.preventDefault();
// $(this).append("x");
// });
// });

//daynamic way create list item 
$(document).ready(function () {
    $("#btnlist").click(function (event) {
        $(".listclass").append("<li>New</li>");
    });
});

$(document).ready(function () {
    $("#btnshoplist").click(function (event) {
        //var txtbox=$("txtlist").val();
        //console.log(txtbox);
        $("#shoplist").append("<li>Add items</li>");
        //$('#msg').html($('input:textbox').val());
    });
});

// Mouse Event  With DIV tag over and out

$(document).ready(function () {
    //$("#divbox").on("mouseover",function(event){
    //$(this).append("x");

    $("#divbox")
        .mouseover(function (e) {
            $(this).text("Hello");
        })
        .mouseout(function (e) {
            $(this).text("Hello Out");
        })
        .mousemove(function (e) {
            $(this).text("Hello Moving Mouse");
        })
        .mousedown(function (e) {
            $(this).text("Mouse Clicked");
        })
        .mouseup(function (e) {
            $(this).text("Mouse Clicked Done");
        });
});

//form event in jquery

$(document).ready(function(){
$("#form1").submit(function(e){    
    e.preventDefault();
    console.log(e);
$("divbox").text("Hello Form Submitted");
});
});