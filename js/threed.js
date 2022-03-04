$(document).ready(function () {

    $('.inner-cart').on('click', '.item-add', function() {
        $(this).closest('li').remove();
    });

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
// ball selection 3D
//================================//

var firstRowArr = [];
var secondRowArr = [];
var thirdRowArr = [];

$('.ball').each(function () {
    $(this).click(function () {
        
        // Handle select removing value
        if (firstRowArr.find(element => parseInt(element) == parseInt($(this).text())))
        {
            $(this).toggleClass('active-ball');
            firstRowArr.remove($(this).text());
            //console.log(firstRowArr)
            if(firstRowArr.remove($(this).text()) && firstRowArr.length == 1){
                $('#rowTwo').removeClass('disable-btn');
                $('#rowThree').removeClass('disable-btn');
            }
            
        }
        else
        {
            // Handle selection all group (1st, 2nd, 3rd)
            if ((secondRowArr.length >= 2 || thirdRowArr.length >= 2) && firstRowArr.length >= 1)
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
                //console.log(firstRowArr)
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
            //console.log(secondRowArr)
            if(secondRowArr.remove($(this).text()) && secondRowArr.length == 1){
                $('#rowOne').removeClass('disable-btn');
                $('#rowThree').removeClass('disable-btn');
            }

        }
        else
        {
            // Handle selection all group (1st, 2nd, 3rd)
            if ((firstRowArr.length >= 2 || thirdRowArr.length >= 2) && secondRowArr.length >= 1)
            {
                    if (parseInt(secondRowArr[0]) == parseInt($(this).text()))
                    {
                        $(this).toggleClass('active-ball');
                        secondRowArr.remove($(this).text());
                        console.log(secondRowArr)
                    }else{
                        //alert("Not allowed!!");
                    }
                    
            }
            else
            {
                $(this).toggleClass('active-ball');
                secondRowArr.push($(this).text());
                //console.log(secondRowArr)
                if(secondRowArr.length >= 2){
                    $('#rowOne').addClass('disable-btn');
                    $('#rowThree').addClass('disable-btn');
                }
                
            }
        }
    });
});

$('.ball-third').each(function () {
    $(this).click(function () {
        
        // Handle select removing value
        if (thirdRowArr.find(element => parseInt(element) == parseInt($(this).text())))
        {
            $(this).toggleClass('active-ball');
            thirdRowArr.remove($(this).text());
            //console.log(thirdRowArr)
            if(thirdRowArr.remove($(this).text()) && thirdRowArr.length == 1){
                $('#rowOne').removeClass('disable-btn');
                $('#rowTwo').removeClass('disable-btn');
            }
        }
        else
        {
            // Handle selection all group (1st, 2nd, 3rd)
            if ((firstRowArr.length >= 2 || secondRowArr.length >= 2) && thirdRowArr.length >= 1)
            {
                    if (parseInt(thirdRowArr[0]) == parseInt($(this).text()))
                    {
                        $(this).toggleClass('active-ball');
                        thirdRowArr.remove($(this).text());
                       // console.log(thirdRowArr)
                    }else{
                        //alert("Not allowed!!");
                    }
                    
            }
            else
            {
                $(this).toggleClass('active-ball');
                thirdRowArr.push($(this).text());
                //console.log(thirdRowArr)
                if(thirdRowArr.length >= 2){
                    $('#rowOne').addClass('disable-btn');
                    $('#rowTwo').addClass('disable-btn');
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
            //console.log(firstRowArr)
            
        }else {
            firstRowArr = [];
            $('#rowTwo').removeClass('disable-btn');
            $('#rowThree').removeClass('disable-btn');
            //console.log(firstRowArr)
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
            //console.log(secondRowArr)
        }else {
            secondRowArr = [];
            $('#rowOne').removeClass('disable-btn');
            $('#rowThree').removeClass('disable-btn');
         }  
    });
    
});

$('#rowThree').click(function(){
    thirdRowArr = [];
    var btn = $('#thirdRow').find('.ball-third');
    btn.toggleClass('active-ball');
    if(btn.hasClass('active-ball')){
        btn.addClass('active-ball');
    }
    btn.each(function () {
        if($(this).hasClass('active-ball')) {
            thirdRowArr.push($(this).text());
            $('#rowOne').addClass('disable-btn');
            $('#rowTwo').addClass('disable-btn');
            //console.log(thirdRowArr)
        }else {
            thirdRowArr = [];
            $('#rowOne').removeClass('disable-btn');
            $('#rowTwo').removeClass('disable-btn');
         }  
    });
    
});


    
    $('#buyThreeD').click(function(){
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
        if(thirdRowArr.length >= 2){
            third = '('+thirdRowArr.join('+')+')';
        }else {
            third = thirdRowArr;
        }
        lOne = firstRowArr.length;
        lTwo = secondRowArr.length;
        lThree = thirdRowArr.length;
        if(lOne!== 0 && lTwo !== 0 && lThree !== 0){

            $(".inner-cart").append(`<li class="list-group-item d-flex justify-content-between"><span> `+ first+`:`+second+`:` + third +` 3D-`+postArr.sort().join('')+` ZX|N|100R</span><a class="item-add" href="#"><i class="fa fa-window-close" aria-hidden="true"></i></a></li>`);
            
            $('.ball').removeClass('disable-btn');
            $('.ball').removeClass('active-ball');

            $('.ball-second').removeClass('disable-btn');
            $('.ball-second').removeClass('active-ball');

            $('.ball-third').removeClass('disable-btn');
            $('.ball-third').removeClass('active-ball');

            $('#rowOne,#rowTwo,#rowThree').removeClass('disable-btn');
            
            firstRowArr = [];
            secondRowArr = [];
            thirdRowArr = [];
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

        $('#rangeStart').empty();
        $('#rangeEnd').empty();
        $('#singebet').empty();
    
        $('#rangStartKey').removeClass('d-none');
        $('#rangEndKey').addClass('d-none');

        $('.ball').removeClass('disable-btn');
        $('.ball').removeClass('active-ball');

        $('.ball-second').removeClass('disable-btn');
        $('.ball-second').removeClass('active-ball');

        $('.ball-third').removeClass('disable-btn');
        $('.ball-third').removeClass('active-ball');

        $('#rowOne,#rowTwo,#rowThree').removeClass('disable-btn');

        firstRowArr = [];
        secondRowArr = [];
        thirdRowArr = [];


    });


    //////////////////////////////////////////
    // Range
    $('#rangeEnd').click(function(){
      $('#rangStartKey').addClass('d-none')
      $('#rangEndKey').removeClass('d-none')
      
      if(numArrayEnd.length != 3){
          
          $('#rangEndKey').find('.key').removeClass('disable-key')    
      }

  });
  
  $('#rangeStart').click(function(){
      $('#rangStartKey').removeClass('d-none')
      $('#rangEndKey').addClass('d-none')
      if(numArray.length != 3){
          $('#rangStartKey').find('.key').removeClass('disable-key')
              
      }
  });


       //////////////////////////////////////////////
    // Single(S)
    $('#buySingle').on('click', () => {
      if(numArray.length == 3){
          $(".inner-cart").append(`<li class="list-group-item d-flex justify-content-between"><span> `+ numArray.join('') +` 3D-`+postArr.sort().join('')+` ZX|S|100R</span><a class="item-add" href="#"><i class="fa fa-window-close" aria-hidden="true"></i></a></li>`);
      
          numArray = []
          $('#singebet').empty();
          $('.key').removeClass('disable-key')
      
        }
      
  });
  
  $('#srandOne').on('click', () =>{
      //srandNum = Math.floor((Math.random() * 100) + 1);
      srandNum = Math.floor(Math.random()*(999-100+1)+100);
      $(".inner-cart").append(`<li class="list-group-item d-flex justify-content-between"><span> `+ srandNum +` 3D-`+postArr.sort().join('')+` ZX|S|200R</span><a class="item-add" href="#"><i class="fa fa-window-close" aria-hidden="true"></i></a></li>`);
  });
  
  $('#srandFive').click(function(){
      var arrNum = [];
      var numberRandom = 1;
      var x = 0, i=0;
      var listItem = [[],[],[],[],[]];
          for(x = 0; x<5; x++) {
              arrNum= [];
              for(i = 0; i<numberRandom; i++) {
              randNum = Math.floor(Math.random()*(999-100+1)+100);
              arrNum.push(randNum);
          }
              listItem[x].push(arrNum.join('+'));
          }
  
          listItem.forEach(function(v){
              $(".inner-cart").append(`<li class="list-group-item d-flex justify-content-between"><span> ` + v + ` 3D-`+postArr.sort().join('')+ ` ZX|S|200R</span><a class="item-add" href="#"><i class="fa fa-window-close" aria-hidden="true"></i></a></li>`);
          });
      
    });

      //////////////////////////////////////////////
    // Range(R)
    $('.buy-key-rang').on('click', () => {
      var arrayOne = numArray.join('');
      var arrayTwo = numArrayEnd.join('');
      if(numArray.length == 3 && numArrayEnd.length == 3){
          if(parseInt(arrayOne) < parseInt(arrayTwo)){
              $(".inner-cart").append(`<li class="list-group-item d-flex justify-content-between"><span> `+ numArray.join('')+`:`+ numArrayEnd.join('')+` 3D-`+postArr.sort().join('')+` ZX|R|100R</span><a class="item-add" href="#"><i class="fa fa-window-close" aria-hidden="true"></i></a></li>`);
          
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
      if(numArray.length == 3){
          $(".inner-cart").append(`<li class="list-group-item d-flex justify-content-between"><span> `+ numArray.join(':') +` 2D-`+postArr.sort().join('')+` ZX|A|100R</span><a class="item-add" href="#"><i class="fa fa-window-close" aria-hidden="true"></i></a></li>`);
          $('#arrangeBet').empty();
          numArray = [];
          $('.key').removeClass('disable-key');
      
      }
      
  });
  




















});// End Document =================================


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
        if(trimTitle === '3D'){
            if(numArray.length == 3){
                $('.key').addClass('disable-key')
            }
        }
    }
    
    function limit_numEnd(){
        var title = $('.header-title').text();
        var trimTitle = $.trim(title)
        if(trimTitle === '3D'){
            if(numArrayEnd.length == 3){
                $('.key').addClass('disable-key')
            }
        }
    }
    