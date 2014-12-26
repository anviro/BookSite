
function createContent() {    
    $(document).ready(function (){
            $('#content').load('main.html');
              
            $('ul.nav li a').click(function() {
                  var page = $(this).attr('href');
                    $('#content').load(page + ".html");
                    return false;
            });
    });
}