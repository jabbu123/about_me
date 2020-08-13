function set_body_width() { // set body height = window height
    var wh = $(window).width();
    $(".image").width(wh);
  }
  $(document).ready(function() {
    set_body_width();
    $(window).bind('resize', function() { set_body_width(); });
  });
  
  $(document).ready(function(){
      $(".scrll").animate({
          bottom: '0px'
      },'500', 'swing')

    var btn = $(".top");

    $(window).scroll(function() {
      if ($(window).scrollTop() > 300) {
        btn.addClass('show');
      } else {
        btn.removeClass('show');
      }
    });
  
    btn.on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({scrollTop:0}, '300');
    });
  

    // $(window).on('scroll', function(){
    //     console.log("it works!");
        
    // })


    $('body').on('click','img.scrll',function()
    {     const inscroll = $(window).scrollTop();
        console.log(inscroll);
        if(inscroll < window.innerHeight){
            $('html, body').animate({
                scrollTop: window.innerHeight}, 1000);
                console.log(inscroll);
        };
        if(window.innerHeight <= inscroll && inscroll < 2*window.innerHeight){
            $('html, body').animate({
                scrollTop: 2*window.innerHeight}, 1000);
        }
        if(inscroll >= 2*window.innerHeight){
            $('html, body').animate({
                scrollTop: 3*window.innerHeight}, 1000);
        }

        
        

    })
  });
  
  console.log("hello");