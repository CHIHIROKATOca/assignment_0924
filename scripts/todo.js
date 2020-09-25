
     $("#btn-add").click(function(){
            $('ul').prepend(('<li>')+$("#input-todo").val()+('</li>'));
            $("#input-todo").val("");
        });

    $(function(){
        　　 $("#list-container ul").on("click", "li",function () {
        　 　$(this).toggleClass("completed");
        　　})
        　})
