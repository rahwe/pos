

$(document).ready(function () {

//=================================//
// ball selection 3D
//================================//

var bingBuyNum = [];
var bingoNum = [];
var bingBuyColor = [];
var bingBuyOE = [];
var bingBuyCard = [];

var cartArray = [];




$('.b-num').each(function () {
    $(this).click(function () {
      $(this).toggleClass('b-active')
            if($(this).hasClass('b-active')) {
                bingBuyNum.push($(this).text());
                
                num = parseInt($(".cart-notification").text());
                $(".cart-notification").text(num+1);

            }
            else {
               var index = bingBuyNum.indexOf($(this).text());
               if (index > -1) {
                bingBuyNum.splice(index, 1);
                num = parseInt($(".cart-notification").text());
                $(".cart-notification").text(num-1);


                
                } 
                
            }  
    });
    
});



$('.inner').each(function () {
    $(this).click(function () {
      $(this).toggleClass('b-active')
            if($(this).hasClass('b-active')) {
                bingoNum.push($(this).text());
                num = parseInt($(".cart-notification").text());
                $(".cart-notification").text(num+1);

                $('.inner-buy-game').append($(this).text()+'.');
            }
            else {

               var index = bingoNum.indexOf($(this).text());
               if (index > -1) {
                bingoNum.splice(index, 1);
                num = parseInt($(".cart-notification").text());
                $(".cart-notification").text(num-1);


                var easy_numpad_output_val = $('.inner-buy-game').text();
                var easy_numpad_output_val_deleted = easy_numpad_output_val.slice(0, -5);
                $('.inner-buy-game').text(easy_numpad_output_val_deleted);
                
                } 
                
            }  
    });
    
});



$('.b-color').each(function () {
    $(this).click(function () {
      $(this).toggleClass('b-active')
            if($(this).hasClass('b-active')) {
                bingBuyColor.push($(this).text());
                num = parseInt($(".cart-notification").text());
                $(".cart-notification").text(num+1);
                
            }
            else {
               var index = bingBuyColor.indexOf($(this).text());
               if (index > -1) {
                bingBuyColor.splice(index, 1);
                num = parseInt($(".cart-notification").text());
                $(".cart-notification").text(num-1);
                
                } 
                
            }  
    });
    
});



$('.b-oe').each(function () {
    $(this).click(function () {
      $(this).toggleClass('b-active')
            if($(this).hasClass('b-active')) {
                bingBuyOE.push($(this).text());
                num = parseInt($(".cart-notification").text());
                $(".cart-notification").text(num+1);
                
            }
            else {
               var index = bingBuyOE.indexOf($(this).text());
               if (index > -1) {
                bingBuyOE.splice(index, 1);
                num = parseInt($(".cart-notification").text());
                $(".cart-notification").text(num-1);
                
                } 
                
            }  
    });
    
});



$('.b-card').each(function () {
    $(this).click(function () {
      $(this).toggleClass('b-active')
            if($(this).hasClass('b-active')) {
                bingBuyCard.push($(this).val());
                num = parseInt($(".cart-notification").text());
                $(".cart-notification").text(num+1);
                
            }
            else {
               var index = bingBuyCard.indexOf($(this).val());
               if (index > -1) {
                bingBuyCard.splice(index, 1);
                num = parseInt($(".cart-notification").text());
                $(".cart-notification").text(num-1);
                
                } 
                
            }  
    });
    
});


$("#plus").click(function(){
    num = parseInt($(".b-multiple").text());
    $(".b-multiple").text(num+1);
 
});

$("#minus").click(function(){
    num = parseInt($(".b-multiple").text());
    if(num > 1){
        $(".b-multiple").text(num-1);
    }
    
});



var arrIcon = []
$('#buyBCart').click(function(){

    disableBNum()
    disableBColor()
    disableBOe()
    disableBCard()
    disableBInner()

   
    num = parseInt($(".cart-notification").text());

    numM = parseInt($(".b-multiple").text());

    if(num !== 0){
        $(".cart-notification").text('0')
        $('#cartWrap').removeClass('d-none');
        $('#btnBuy').removeClass('d-none');
        $('#bingTotal').removeClass('d-none');


        if(bingBuyNum.length !== 0){
            $('#listGroup').prepend(`<li class="list-group-item d-flex justify-content-between">
            <div class="b-buy-game">`+ bingBuyNum.join('.')+`</div>
            <div class="b-buy-detail">S1000R*`+bingBuyNum.length+`Q*`+numM+`M <br> `+bingBuyNum.length*1000+` R</div>
            <a class="item-delete" href="#"><i class="fa fa-window-close" aria-hidden="true"></i></a></li>`);
           
            cartArray.push($(this))
            bingBuyNum = []
            
        }

        if(bingoNum.length !== 0){
            $('#listGroup').prepend(`<li class="list-group-item d-flex justify-content-between">
            <div class="b-buy-game">`+ bingoNum.join('.')+`</div>
            <div class="b-buy-detail">S1000R*`+bingoNum.length+`Q*`+numM+`M <br> `+bingoNum.length*1000+` R</div>
            <a class="item-delete" href="#"><i class="fa fa-window-close" aria-hidden="true"></i></a></li>`);
            cartArray.push($(this))
            bingoNum = []

        }
        
        
        if(bingBuyColor.length !== 0){
            $('#listGroup').prepend(`<li class="list-group-item d-flex justify-content-between">
            <div class="b-buy-game">`+ bingBuyColor.join('.')+`</div>
            <div class="b-buy-detail">S1000R*`+bingBuyColor.length+`Q*`+numM+`M <br> `+bingBuyColor.length*1000+` R</div>
            <a class="item-delete" href="#"><i class="fa fa-window-close" aria-hidden="true"></i></a></li>`);
            cartArray.push($(this))
            bingBuyColor = []
        }
        

        if(bingBuyOE.length !== 0){
            $('#listGroup').prepend(`<li class="list-group-item d-flex justify-content-between">
            <div class="b-buy-game">`+ bingBuyOE.join('.')+`</div>
            <div class="b-buy-detail">S1000R*`+bingBuyOE.length+`Q*`+numM+`M <br> `+bingBuyOE.length*1000+` R</div>
            <a class="item-delete" href="#"><i class="fa fa-window-close" aria-hidden="true"></i></a></li>`);
            cartArray.push($(this))
            bingBuyOE = []
        }
        
        if(bingBuyCard.length !== 0){

            $.each(bingBuyCard,function( index, value ) {
                if(value === 'heart'){
                    icon = "<img src='img/icon/heart.png' alt='heart'>"
                    arrIcon.push(icon)
                    
                }
                if(value === 'club'){
                    icon = "<img src='img/icon/club.png' alt='club'>"
                    arrIcon.push(icon)
                   
                }
                if(value === 'diamond'){
                    icon = "<img src='img/icon/diamond.png' alt='diamond'>"
                    arrIcon.push(icon)
                  
                }

                if(value === 'spade'){
                    icon = "<img src='img/icon/spade.png' alt='spade'>"
                    arrIcon.push(icon)
                   
                }
                
            });

            $('#listGroup').prepend(`<li class="list-group-item d-flex justify-content-between">
            <div class="b-buy-game">`+ arrIcon.join('.') +`</div>
            <div class="b-buy-detail">S1000R*`+bingBuyCard.length+`Q*`+numM+`M <br> `+bingBuyCard.length*1000+` R</div>
            <a class="item-delete-card" href="#"><i class="fa fa-window-close" aria-hidden="true"></i></a></li>`);
           
            bingBuyCard = []
            arrIcon = []
        }

      
    }


})



$('#listGroup').on('click',  '.item-delete', function() {


    var allNumFromList = [];
  
    var valueFromList = $(this).closest('li').clone()    //clone the element
    .children('.b-buy-detail') //select all the children
    .remove()   //remove all the children
    .end()  //again go back to selected element
    .text();

    allNumFromList = $.trim(valueFromList).split(".")
    //console.log(allNumFromList)
 
    $('.b-num').each(function(){
        if($(this).hasClass('b-active')){
           
           if($.inArray( $(this).text(), allNumFromList) !=-1){
               $(this).removeClass('b-active').removeClass('b-disable')
           };
        }
       
    });

    $('.inner').each(function(){
        if($(this).hasClass('b-active')){
            
            if($.inArray( $(this).text(), allNumFromList) !=-1){
                $(this).removeClass('b-active').removeClass('b-disable')
            };
        }
        
    });

    $('.b-color').each(function(){
        if($(this).hasClass('b-active')){
       
           if($.inArray( $(this).text(), allNumFromList) !=-1){
               $(this).removeClass('b-active').removeClass('b-disable')
           };
        }
       
    });


    
    $('.b-oe').each(function(){
        if($(this).hasClass('b-active')){
       
           if($.inArray( $(this).text(), allNumFromList) !=-1){
               $(this).removeClass('b-active').removeClass('b-disable')
           };
        }
       
    });


    
    $('.b-color').each(function(){
        if($(this).hasClass('b-active')){
           if($.inArray( $(this).text(), allNumFromList) !=-1){
               $(this).removeClass('b-active').removeClass('b-disable')
           };
        }
       
    });

    // $('.b-card').each(function(){
    //     if($(this).hasClass('b-active')){
    //        if($.inArray($(this).val(), allNumFromList) !=-1){
    //            $(this).removeClass('b-active').removeClass('b-disable')
    //        };
    //     }
       
    // });


    $(this).closest('li').remove()

    
});


$('#listGroup').on('click',  '.item-delete-card', function() {
    var allNumFromList = [];

        $(this).closest('li').find('img').each(function() {
    
        var img = $(this);
        if (img.attr("alt"))
            allNumFromList.push(img.attr("alt"))
        });

        $('.b-card').each(function(){
            if($(this).hasClass('b-active')){
            if($.inArray($(this).val(), allNumFromList) !=-1){
                $(this).removeClass('b-active').removeClass('b-disable')
            };
            }
        
        });

    $(this).closest('li').remove()

});






$('#verifyPrize').click(function(){
    $('.win-prize').removeClass('d-none');
})
    
});

$('#btnBuy').click(function(){
    $('#printAction').removeClass('d-none');
})





function disableBNum(){
    $('.b-num').each(function () {
        if($(this).hasClass('b-active')) {
            $(this).addClass('b-disable')
        }
    });
}

function disableBColor(){
    $('.b-color').each(function () {
        if($(this).hasClass('b-active')) {
            $(this).addClass('b-disable')
        }
    });
}

function disableBOe(){
    $('.b-oe').each(function () {
        if($(this).hasClass('b-active')) {
            $(this).addClass('b-disable')
        }
    });
}

function disableBCard(){
    
$('.b-card').each(function () {
    if($(this).hasClass('b-active')) {
        $(this).addClass('b-disable')
    }
});
}
function disableBInner(){
    $('.inner').each(function () {
        if($(this).hasClass('b-active')) {
            $(this).addClass('b-disable')
        }
    });
}

