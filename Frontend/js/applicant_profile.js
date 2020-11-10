$(document).ready(function(){

  $('#application_table .application-status').each(function() {
      var application_status = $(this).html();
      var application_id = $(this).attr('id');

        switch(application_status) {
          case "Accept":
            document.getElementById(application_id).className += " text-success";
            break;
          case "In Progress":
            document.getElementById(application_id).className += " text-warning";
            break;
          case "Rejected":
            document.getElementById(application_id).className += " text-danger";
            break;
          default:
            break;
        }
   });

});
