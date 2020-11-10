$(document).ready(function(){
    $("#submit_question").click(function(event){
       var data=$(this).text();
        event.preventDefault()
        $.ajax({
            url: "set_freq.php",
            type: "POST",
            data: {"set_freq":data},
            success: function(data){
                data = JSON.toString(data);

            }
        });
    });
});
