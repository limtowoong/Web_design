jQuery(document).ready(function(){

    setInterval(function(){
        $(".imglen").delay(2000)
        .animate({marginLeft:-100+"%"},1000,function(){
            $(".imglen li:first").appendTo(".imglen>ul")
            $(".imglen").css({marginLeft:0})
        })
    })

    $(".main>li").mouseover(function(){
        $(this).find(".sub").stop().slideDown()
    }).mouseout(function(){
        $(this).find(".sub").stop().slideUp()
    })
    
    $(".nobody li").click(function(){
        $(".modal").show()
        
    })

    $("button").click(function(){
        $(".modal").hide()
    })
})