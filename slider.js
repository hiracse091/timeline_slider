

function initSlider(){
    var $slider_started = false;
    slides = 20;
    var options = {
        tabWidth:375,
        sliderWidth:1350 //tabwidth*2 +50
    }
    $('.top-slider-main').css('width',options.tabwidth + (slides*75));
    var html = ''
    html += '<div class="slider-box1" style="z-index:96;">'
        html += '<div class="left"><span><p class="verticle_text">200'+(1)+'</p></span><img src="small.png" width="50px" height="50px"></div>'
        html += '<div class="content">'
        html += '<span>'
        html += '   <img src="slider1.png" width="300px" height="80px">'
        html += '   <h2>heading goes here</h2>'
        html += '   <p class="content_desc">Rahim Baksh ventured in to trading cloth and fabrics shortly after birth of his eldest son. This new business operation ran side by side with the previous Ivory Comb and Button manufacturing business. The Cloth and Fabric business ultimately proved to be the foundation for Anwar Hossain’s business empire. </p>'
        html += '   <p class="timeline">2001</p>'
        html += '</span></div>'
        html += '</div>'
    for(i = 1; i<20; i++){
        html += '<div class="slider-box'+(i+1)+'" style="margin-left:'+(options.tabWidth+i*75)+'px; z-index:'+(96+i)+';">'
        html += '<div class="left"><span><p class="verticle_text">200'+(i+1)+'</p></span><img src="small.png" width="50px" height="50px"></div>'
        html += '<div class="content">'
        html += '<span>'
        html += '   <img src="slider1.png" width="300px" height="80px">'
        html += '   <h2>heading goes here</h2>'
        html += '   <p class="content_desc">Rahim Baksh ventured in to trading cloth and fabrics shortly after birth of his eldest son. This new business operation ran side by side with the previous Ivory Comb and Button manufacturing business. The Cloth and Fabric business ultimately proved to be the foundation for Anwar Hossain’s business empire. </p>'
        html += '   <p class="timeline">200'+(i+1)+'</p>'
        html += '</span></div>'
        html += '</div>'
    }
    $('.top-slider-main').html(html);


    function loop(){
        //console.log('loopprev  '+$('.top-slider-main').position().left);
        if($('.top-slider-main').position().left >= 0){
            stop();
            $('.top-slider-main').animate({left:0},'fast','linear')
            return false;
        }
        $('.top-slider-main').stop().animate({left:'+=50'}, 500, 'linear', loop);
    } 
    function loopnext(){
        console.log('loopnext  '+$('.top-slider-main').position().left);
        if(($('.top-slider-main').position().left+$('.top-slider-main').width()) <= $('.wrapperSlider').width()){
            stop();
            //$('.top-slider-main').css({left:0})
            return false;
        }
        $('.top-slider-main').stop().animate({left:'-=50'}, 500, 'linear', loopnext);
    }        

    function stop(){
        $('.top-slider-main').stop();
    }

    $('.btnnext').hover(loopnext, stop); 
    $('.btnprev').hover(loop,stop)
   /* $('.btnnext').mouseover(function(){
        
        $('.top-slider-main').animate({left: $('.top-slider-main').position().left-75-1},'fast','linear');
    })
    $('.btnprev').mouseover(function(){
        //$('.top-slider-main').position().left += -50;
        $('.top-slider-main').css({left: $('.top-slider-main').position().left+75+1},'fast','linear');
    })*/



    var $total_slider = $('.top-slider-main > div').length;
    var $label_width = $('.top-slider-main div .left').width();
    var $max_slider_width = ($total_slider -1)*$label_width;
    var $extra_margin = $('.top-slider-main div').width() - $label_width;
    
    $('.top-slider-main div:not(.slider-box1) .left').click(function(){
        var $slider_index = $('.top-slider-main > div').index($(this).parent()) + 1;
        if($(this).parent().hasClass('on'))
        {
            if($slider_started != 1)
            {
                $slider_started = 2;
                for(i=$total_slider; i>=$slider_index; i--)
                {
                    var $elm = $('.top-slider-main .slider-box'+i);
                    if($elm.hasClass('on'))
                    {
                        $elm.removeClass('on');
                        var $left_margin = ($label_width*(i-1)) + $extra_margin;
                        $elm.stop().animate({marginLeft : $left_margin}, 500, function(){
                            console.log(this.className);
                            $slider_started = false;
                        });
                    }
                }
            }
        }
        else
        {
            if($slider_started != 2)
            {
                $slider_started = 1;
                for(i=2; i<=$slider_index; i++)
                {
                    var $elm = $('.top-slider-main .slider-box'+i);
                    if(!$elm.hasClass('on'))
                    {
                        $elm.addClass('on');
                        var $left_margin = ($label_width*(i-1));
                        $elm.stop().animate({marginLeft : $left_margin}, 500, function(){
                            console.log(this.className);
                            $slider_started = false;
                        });
                    }
                }
            }
        }
    });
}