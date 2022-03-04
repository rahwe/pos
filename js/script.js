$(document).ready(function () {


    //=================================//
    // post selection
    //================================//
    var postArr = []
    $('.btn-post').each(function () {
        if($(this).hasClass('btn-active')){
            postArr.push($(this).text());
        }
     
        $(this).click(function () {
          $(this).toggleClass('btn-active')
                if($(this).hasClass('btn-active')) {
                  postArr.push($(this).text());
                  if(postArr.length == 4){
                    $('#btn-all').addClass('btn-active');
                    }
                }
                else {
                   var index = postArr.indexOf($(this).text());
                   if (index > -1) {
                      postArr.splice(index, 1);
                      $('#btn-all').removeClass('btn-active');
                      if(postArr.length == 0){
                          $(this).addClass('btn-active')
                          postArr.push($(this).text());
                          
                      }
                    } 
                }      
        });
    });
    
    $('#btn-all').click(function(){
        postArr = []
        var btn = $('.btn-post');
        btn.toggleClass('btn-active');
        if(btn.hasClass('btn-active')){
            btn.addClass('btn-active');
        }
    
        btn.each(function () {
            if($(this).hasClass('btn-active')) {
                postArr.push($(this).text());
                
            }else {
                if(postArr.length == 0){
                    postArr.push("A");
                }
                $('.btn-post:first').addClass('btn-active');
             }  
        });
    
        if(postArr.length == 4){
            $('#btn-all').addClass('btn-active');
        }else{
            $('#btn-all').removeClass('btn-active');
        }

    });

 //=================================//
    // Ball sellection
    //================================//
var firstRowArr = [];
var secondRowArr = [];

    $('.ball').each(function () {
        $(this).click(function () {
            
            // Handle select removing value
            if (firstRowArr.find(element => parseInt(element) == parseInt($(this).text())))
            {
                $(this).toggleClass('active-ball');
                firstRowArr.remove($(this).text());
               
                
                if(firstRowArr.remove($(this).text()) && firstRowArr.length == 1){
                    $('#rowTwo').removeClass('disable-btn');
                    $('#rowThree').removeClass('disable-btn');
                }
                
            }
            else
            {
                // Handle selection all group (1st, 2nd, 3rd)
                if ((secondRowArr.length >= 2) && firstRowArr.length >= 1)
                {
                        if (parseInt(firstRowArr[0]) == parseInt($(this).text()))
                        {
                            $(this).toggleClass('active-ball');
                            firstRowArr.remove($(this).text());
                            
                        }else{
                            //alert("Not allowed!!");
                        }
                        
                        
                }
                else
                {
                    $(this).toggleClass('active-ball');
                    firstRowArr.push($(this).text());
                   
                    if(firstRowArr.length >= 2){
                        $('#rowTwo').addClass('disable-btn');
                        $('#rowThree').addClass('disable-btn');
                    }
                    
                }
            }
    
        });
        
    });
    
    $('.ball-second').each(function () {
        $(this).click(function () {
    
            // Handle select removing value
            if (secondRowArr.find(element => parseInt(element) == parseInt($(this).text())))
            {
                $(this).toggleClass('active-ball');
                secondRowArr.remove($(this).text());
                
                
                if(secondRowArr.remove($(this).text()) && secondRowArr.length == 1){
                    $('#rowOne').removeClass('disable-btn');
                    $('#rowThree').removeClass('disable-btn');
                }
    
            }
            else
            {
                // Handle selection all group (1st, 2nd, 3rd)
                if ((firstRowArr.length >= 2 ) && secondRowArr.length >= 1)
                {
                        if (parseInt(secondRowArr[0]) == parseInt($(this).text()))
                        {
                            $(this).toggleClass('active-ball');
                            secondRowArr.remove($(this).text());
                           
                            
                        }else{
                            //alert("Not allowed!!");
                        }
                        
                }
                else
                {
                    $(this).toggleClass('active-ball');
                    secondRowArr.push($(this).text());
                  
                    if(secondRowArr.length >= 2){
                        $('#rowOne').addClass('disable-btn');
                        $('#rowThree').addClass('disable-btn');
                    }
                    
                }
            }
        });
    });
    
    
    
    // Arrow function to handle removing item from array
    Array.prototype.remove = function() {
        var what, a = arguments, L = a.length, ax;
        while (L && this.length) {
            what = a[--L];
            while ((ax = this.indexOf(what)) !== -1) {
                this.splice(ax, 1);
            }
        }
        return this;
    };
    
    
    $('#rowOne').click(function(){
        firstRowArr = [];
        var btn = $('#firstRow').find('.ball');
        btn.toggleClass('active-ball');
        if(btn.hasClass('active-ball')){
            btn.addClass('active-ball');
        }
        btn.each(function () {
            
            if($(this).hasClass('active-ball')) {
                
                firstRowArr.push($(this).text());
                $('#rowTwo').addClass('disable-btn');
                $('#rowThree').addClass('disable-btn');
                
                
            }else {
                firstRowArr = [];
                $('#rowTwo').removeClass('disable-btn');
                $('#rowThree').removeClass('disable-btn');
               
             }  
        });
        ;
    });
    
    $('#rowTwo').click(function(){
        secondRowArr = [];
        var btn = $('#secondRow').find('.ball-second');
        btn.toggleClass('active-ball');
        if(btn.hasClass('active-ball')){
            btn.addClass('active-ball');
        }
        btn.each(function () {
            if($(this).hasClass('active-ball')) {
                secondRowArr.push($(this).text());
                $('#rowOne').addClass('disable-btn');
                $('#rowThree').addClass('disable-btn');
               
            }else {
                secondRowArr = [];
                $('#rowOne').removeClass('disable-btn');
                $('#rowThree').removeClass('disable-btn');
             }  
        });
        
    });



    $('#buyTwoD').click(function(){
        var first;
        var second;
        var third;
        if(firstRowArr.length >= 2){
            first = '('+firstRowArr.join('+')+')';
        }else{
            first = firstRowArr;
        }
        if(secondRowArr.length >= 2){
            second = '('+secondRowArr.join('+')+')';
        }else {
            second = secondRowArr;
        }

        lOne = firstRowArr.length;
        lTwo = secondRowArr.length;
        if(lOne!== 0 && lTwo !== 0){

            $(".inner-cart").append(`<li class="list-group-item d-flex justify-content-between"><span> `+ first+`:`+second+` 2D-`+postArr.sort().join('')+` ZX|N|100R</span><a class="item-add" href="#"><i class="fa fa-window-close" aria-hidden="true"></i></a></li>`);
            
            $('.ball').removeClass('disable-btn');
            $('.ball').removeClass('active-ball');

            $('.ball-second').removeClass('disable-btn');
            $('.ball-second').removeClass('active-ball');

            $('.ball-third').removeClass('disable-btn');
            $('.ball-third').removeClass('active-ball');

            $('#rowOne,#rowTwo').removeClass('disable-btn');
            
            firstRowArr = [];
            secondRowArr = [];
            
        }
    
        
    });
    


    
    $('.nav-link').click(function(){
        $('.key').removeClass('disable-key');
        $('.input > p').empty();
        $('.ball-bingo').removeClass('btn-active');
        $('.ball-bingo').removeClass('btn-active');
        $('.big-small').removeClass('active-big');

        $('.ball-bingo').removeClass('disable-btn');
  
        qty = 0;
        amt = 0;
        numArray = [];
        numArrayEnd = [];

        firstRowArr = [];
        secondRowArr = [];

        $('#rangeStart').empty();
        $('#rangeEnd').empty();
        $('#singebet').empty();
    
        $('#rangStartKey').removeClass('d-none');
        $('#rangEndKey').addClass('d-none');

        $('.ball').removeClass('disable-btn');
        $('.ball').removeClass('active-ball');

        $('.ball-second').removeClass('disable-btn');
        $('.ball-second').removeClass('active-ball');

        $('#rowOne,#rowTwo').removeClass('disable-btn');
        
    });
    
    
    
    
    
    //=================================//
    // bingo selection
    //================================//
    // Single(SP)
    var spBtn=[];
    var qty = 0;
    var amt = 0;
    $('.ball-bingo').each(function () {
          $(this).click(function () {
            $(this).toggleClass('btn-active')
                  if($(this).hasClass('btn-active')) {
                    spBtn.push($(this).text());
                    $('.qty > span').text(qty+=1);
                    $('.amt > span').text(amt+=1000);
                    if(spBtn.length == 7){
                        addDisableSp();
                    }
    
                  }
                  else {
                     var index = spBtn.indexOf($(this).text());
                     if (index > -1) {
                        spBtn.splice(index, 1);
                        $('.qty > span').text(qty-=1);
                        $('.amt > span').text(amt-=1000);
                        removeDisableSp();
                      } 
                  }  
          });
    });
    
    function addDisableSp(){
        $('.ball-bingo').each(function () {
            if(!$(this).hasClass('btn-active')){
                $(this).addClass('disable-btn');
            }
        });
    }
    function removeDisableSp(){
        $('.ball-bingo').each(function () {
            $(this).removeClass('disable-btn');
        });
    }
    
    $('#buySp').click(function(){
        if(spBtn.length !== 0) {
            $('.ball-bingo').removeClass('btn-active');
            $(".inner-cart").append(`<li class="list-group-item d-flex justify-content-between"><span> `+ spBtn.join('+') + `BINGO-DG|100R</span><a class="item-add" href="#"><i class="fa fa-window-close" aria-hidden="true"></i></a></li>`);
        
        }
        qty = 0;
        amt = 0;
        $('.qty > span').text("0");
        $('.amt > span').text("0");
        removeDisableSp();
        spBtn = [];
        
    })
    
    $('.inner-cart').on('click', '.item-add', function() {
        $(this).closest('li').remove();
    });
    
    $('#randOne').click(function(){
        randNum = Math.floor((Math.random() * 35) + 1);
        $(".inner-cart").append(`<li class="list-group-item d-flex justify-content-between"><span> ` + randNum + ` BINGO-DG|100R</span><a class="item-add" href="#"><i class="fa fa-window-close" aria-hidden="true"></i></a></li>`);
    })
    
    $('#randFive').click(function(){
        var arrNum = [];
        var numberRandom = 1;
        var x = 0, i=0;
        var listItem = [[],[],[],[],[]];
        for(x = 0; x<5; x++) {
            arrNum= [];
            for(i = 0; i<numberRandom; i++) {
            randNum = Math.floor((Math.random() * 35) + 1);
            arrNum.push(randNum);
        }
            listItem[x].push(arrNum.join('+'));
        }
        listItem.forEach(function(v){
            $(".inner-cart").append(`<li class="list-group-item d-flex justify-content-between"><span> ` + v +  ` BINGO-DG|100R</span><a class="item-add" href="#"><i class="fa fa-window-close" aria-hidden="true"></i></a></li>`);
        });
        
      });
    
    // Big and Small
    var bigSmallBtn=[];
    var qty = 0;
    var amt = 0;
    $('.big-small').each(function () {
          $(this).click(function () {
            $(this).toggleClass('active-big')
                  if($(this).hasClass('active-big')) {
                    bigSmallBtn.push($(this).val());
                    $('.qty > span').text(qty+=1);
                    $('.amt > span').text(amt+=1000);
                   
                  }
                  else {
                     var index = bigSmallBtn.indexOf($(this).val());
                     if (index > -1) {
                        bigSmallBtn.splice(index, 1);
                        $('.qty > span').text(qty-=1)
                        $('.amt > span').text(amt-=1000)
                        
                      } 
                  }  
          });
    });
    
    $('#buyBig').click(function(){
        if(bigSmallBtn.length !== 0) {
            $('.big-small').removeClass('active-big');
            $(".inner-cart").append(`<li class="list-group-item d-flex justify-content-between"><span> `+ bigSmallBtn.join('+') + ` BINGO-DG|100R</span><a class="item-add" href="#"><i class="fa fa-window-close" aria-hidden="true"></i></a></li>`);
        }
        qty = 0;
        amt = 0;
        $('.qty > span').text("0");
        $('.amt > span').text("0");
        bigSmallBtn = [];
    })



    //=================================//
    // 5/35 selection
    //================================//
    var thirtyBtn=[];
    var qty = 0;
    var amt = 0;
    $('.ball-five').each(function () {
          $(this).click(function () {
            $(this).toggleClass('btn-active')
                  if($(this).hasClass('btn-active')) {
                    thirtyBtn.push($(this).text());
                    if(thirtyBtn.length == 5){
                        $('.qty > span').text('1');
                        $('.amt > span').text('100');
                        addDisableFive();
                    }
    
                  }
                  else {
                     var index = thirtyBtn.indexOf($(this).text());
                     if (index > -1) {
                        thirtyBtn.splice(index, 1);
                        $('.qty > span').text('0');
                        $('.amt > span').text('0');
                        removeDisableFive();
                      } 
                  }  
          });
    });
    
    function addDisableFive(){
        $('.ball-five').each(function () {
            if(!$(this).hasClass('btn-active')){
                $(this).addClass('disable-btn');
            }
        });
    }
    function removeDisableFive(){
        $('.ball-five').each(function () {
            $(this).removeClass('disable-btn');
        });
    }
    

    $('#buyFive').click(function(){
        if(thirtyBtn.length == 5) {
            $('.ball-five').removeClass('btn-active');
            $(".inner-cart").append(`<li class="list-group-item d-flex justify-content-between"><span> `+ thirtyBtn.join('+') + ` 5/35-ZX|N|100R</span><a class="item-add" href="#"><i class="fa fa-window-close" aria-hidden="true"></i></a></li>`);
            
            $('.ball-five').removeClass('disable-btn');
            $('.qty > span').text('0');
            $('.amt > span').text('0');
            thirtyBtn = [];
            qty = 0;
            amt = 0;
            
        }
    });

    $('#nrandOne').click(function(){
        var arrNum = [];
        var numberRandom = 5;
        var x = 0, i=0;
        var listItem = [[]];
        for(x = 0; x<1; x++) {
            arrNum= [];
            for(i = 0; i<numberRandom; i++) {
            randNum = Math.floor((Math.random() * 35) + 1);
            arrNum.push(randNum);
        }
            listItem[x].push(arrNum.join('+'));
        }
        listItem.forEach(function(v){
            $(".inner-cart").append(`<li class="list-group-item d-flex justify-content-between"><span> ` + v +  ` 5/35-ZX|N|100R</span><a class="item-add" href="#"><i class="fa fa-window-close" aria-hidden="true"></i></a></li>`);
        });
        
    });


    $('#nrandFive').click(function(){
        var arrNum = [];
        var numberRandom = 5;
        var x = 0, i=0;
        var listItem = [[],[],[],[],[]];
        for(x = 0; x<5; x++) {
            arrNum= [];
            for(i = 0; i<numberRandom; i++) {
            randNum = Math.floor((Math.random() * 35) + 1);
            arrNum.push(randNum);
        }
            listItem[x].push(arrNum.join('+'));
        }
        listItem.forEach(function(v){
            $(".inner-cart").append(`<li class="list-group-item d-flex justify-content-between"><span> ` + v +  ` 5/35-ZX|N|100R</span><a class="item-add" href="#"><i class="fa fa-window-close" aria-hidden="true"></i></a></li>`);
        });
        
      });



    
    
    //////////////////////////////////////////////
    // Single(S)
    $('#buySigle').on('click', () => {
        if(numArray.length == 2){
            $(".inner-cart").append(`<li class="list-group-item d-flex justify-content-between"><span> `+ numArray.join('') +` 2D-`+postArr.sort().join('')+` ZX|S|100R</span><a class="item-add" href="#"><i class="fa fa-window-close" aria-hidden="true"></i></a></li>`);
        }
        numArray = []
        $('#singebet').empty();
        $('.key').removeClass('disable-key')
    });
    
    $('#srandOne').on('click', () =>{
        srandNum = Math.floor((Math.random() * 100) + 1);
        $(".inner-cart").append(`<li class="list-group-item d-flex justify-content-between"><span> `+ srandNum +` 2D-`+postArr.sort().join('')+` ZX|S|200R</span><a class="item-add" href="#"><i class="fa fa-window-close" aria-hidden="true"></i></a></li>`);
    });
    
    $('#srandFive').click(function(){
        var arrNum = [];
        var numberRandom = 1;
        var x = 0, i=0;
        var listItem = [[],[],[],[],[]];
            for(x = 0; x<5; x++) {
                arrNum= [];
                for(i = 0; i<numberRandom; i++) {
                randNum = Math.floor((Math.random() * 100) + 1);
                arrNum.push(randNum);
            }
                listItem[x].push(arrNum.join('+'));
            }
    
            listItem.forEach(function(v){
                $(".inner-cart").append(`<li class="list-group-item d-flex justify-content-between"><span> ` + v + ` 2D-`+postArr.sort().join('')+ ` ZX|S|200R</span><a class="item-add" href="#"><i class="fa fa-window-close" aria-hidden="true"></i></a></li>`);
            });
        
    });
    
    //////////////////////////////////////////
    // Range
    $('#rangeEnd').click(function(){
        $('#rangStartKey').addClass('d-none')
        $('#rangEndKey').removeClass('d-none')
        //$('#rangEndKey').find('.key').removeClass('disable-key')
        if(numArrayEnd.length != 2){
           
            $('#rangEndKey').find('.key').removeClass('disable-key')
                
        }

    });
    
    $('#rangeStart').click(function(){
        $('#rangStartKey').removeClass('d-none')
        $('#rangEndKey').addClass('d-none')
        //$('#rangStartKey').find('.key').removeClass('disable-key')
        if(numArray.length != 2){
            $('#rangStartKey').find('.key').removeClass('disable-key')
                
        }
    });
    
    
    $('.buy-key-rang').on('click', () => {
        var arrayOne = numArray.join('');
        var arrayTwo = numArrayEnd.join('');
        if(numArray.length == 2 && numArrayEnd.length == 2){
            if(parseInt(arrayOne) < parseInt(arrayTwo)){
                $(".inner-cart").append(`<li class="list-group-item d-flex justify-content-between"><span> `+ numArray.join('')+`:`+ numArrayEnd.join('')+` 2D-`+postArr.sort().join('')+` ZX|R|100R</span><a class="item-add" href="#"><i class="fa fa-window-close" aria-hidden="true"></i></a></li>`);
            
                numArray = [];
                numArrayEnd = [];
    
                $('#rangeStart').empty();
                $('#rangeEnd').empty();
                $('.key').removeClass('disable-key');
            
                $('#rangStartKey').removeClass('d-none');
                $('#rangEndKey').addClass('d-none');
            }
            
        
        }
        
    });
    
    ////////////////////////////////
    // Arrange
    $('#buyArrang').on('click', () => {
        if(numArray.length == 2){
            $(".inner-cart").append(`<li class="list-group-item d-flex justify-content-between"><span> `+ numArray.join(':') +` 2D-`+postArr.sort().join('')+` ZX|A|100R</span><a class="item-add" href="#"><i class="fa fa-window-close" aria-hidden="true"></i></a></li>`);
            $('#arrangeBet').empty();
            numArray = [];
            $('.key').removeClass('disable-key');
        
        }
        
    });
    
        
    });/// End Document=============================
    
    ///////////////////////
    // easynum singlebet
    var numArray = []
    var numArrayEnd = []
    function easynum() {
        event.preventDefault();
        navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;
        if (navigator.vibrate) {
            navigator.vibrate(60);
        }
    
        var easy_num_button = $(event.target);
        var easy_num_value = easy_num_button.val();
    
        $('#singebet').append(easy_num_value);
        numArray.push(easy_num_value);
        limit_num()
    }
    
    
    function easy_numpad_del() {
        event.preventDefault();
        var easy_numpad_output_val = $('#singebet').text();
        var easy_numpad_output_val_deleted = easy_numpad_output_val.slice(0, -1);
        $('#singebet').text(easy_numpad_output_val_deleted);
        numArray.pop(easy_numpad_output_val_deleted);
        $('.key').removeClass('disable-key')
      
    }
    
    
    
    ////////////////
    // easynum range Start
    function rangenumStart() {
        event.preventDefault();
        navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;
        if (navigator.vibrate) {
            navigator.vibrate(60);
        }
    
        var easy_num_button = $(event.target);
        var easy_num_value = easy_num_button.val();
        $('#rangeStart').append(easy_num_value);
        numArray.push(easy_num_value);
        limit_num()
    }
    function easy_numpad_del_rangeStart() {
        event.preventDefault();
        var easy_numpad_output_val = $('#rangeStart').text();
        var easy_numpad_output_val_deleted = easy_numpad_output_val.slice(0, -1);
        $('#rangeStart').text(easy_numpad_output_val_deleted);
        numArray.pop(easy_numpad_output_val_deleted);
        $('.key').removeClass('disable-key')
    }
    
    // easynum range End
    function rangenumEnd() {
        event.preventDefault();
        navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;
        if (navigator.vibrate) {
            navigator.vibrate(60);
        }
    
        var easy_num_button = $(event.target);
        var easy_num_value = easy_num_button.val();
        $('#rangeEnd').append(easy_num_value);
        numArrayEnd.push(easy_num_value);
        limit_numEnd()
    }
    function easy_numpad_del_rangeEnd() {
        event.preventDefault();
        var easy_numpad_output_val = $('#rangeEnd').text();
        var easy_numpad_output_val_deleted = easy_numpad_output_val.slice(0, -1);
        $('#rangeEnd').text(easy_numpad_output_val_deleted);
        numArrayEnd.pop(easy_numpad_output_val_deleted);
        $('.key').removeClass('disable-key')
    }
    
    
    
    
    //////////////////////
    // easynum arrange
    function numarrange() {
        event.preventDefault();
        navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;
        if (navigator.vibrate) {
            navigator.vibrate(60);
        }
    
        var easy_num_button = $(event.target);
        var easy_num_value = easy_num_button.val();
        $('#arrangeBet').append(easy_num_value);
        numArray.push(easy_num_value);
        limit_num()
    }
    function del_arrange() {
        event.preventDefault();
        var easy_numpad_output_val = $('#arrangeBet').text();
        var easy_numpad_output_val_deleted = easy_numpad_output_val.slice(0, -1);
        $('#arrangeBet').text(easy_numpad_output_val_deleted);
        numArray.pop(easy_numpad_output_val_deleted);
        $('.key').removeClass('disable-key')
    }
    
    
    
    /////////////////////
    /// for use next time
    function easy_numpad_clear() {
        event.preventDefault();
        $('#easy-numpad-output').text("");
    }
    function easy_numpad_cancel() {
        event.preventDefault();
        $('#easy-numpad-frame').remove();
    }
    function easy_numpad_done() {
        event.preventDefault();
        var easy_numpad_output_val = $('#easy-numpad-output').text();
        $('.easy-put').val(easy_numpad_output_val);
        easy_numpad_close();
    }
    
    function easy_numpad_close() {
        $('#easy-numpad-frame').remove();
    }
    
    function limit_num(){
        var title = $('.header-title').text();
        var trimTitle = $.trim(title)
        if(trimTitle === '2D'){
            if(numArray.length == 2){
                $('.key').addClass('disable-key')
            }
        }
    }
    
    function limit_numEnd(){
        var title = $('.header-title').text();
        var trimTitle = $.trim(title)
        if(trimTitle === '2D'){
            if(numArrayEnd.length == 2){
                $('.key').addClass('disable-key')
            }
        }
    }

    
 

  

    

 
    
    
    
    
    