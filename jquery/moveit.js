   $(document).ready(function(){
        $(".girl").click(function(){
            $(".hand").css('bottom', '250px');
             setTimeout(function(){
                    $(".hand").css('bottom', '220px');
                },2500);
             $(".ee1").css({
                 top: '6px',
                 left: '4.5px'
             });
             setTimeout(function(){
                    $(".ee1,.ee2").css({
                 top: '4.6px',
                 left: '3px'
             });
                },2500);
             $(".ee2").css({
                 top: '6px',
                 left: '2px'
             });
             
                
            });
            
            
        });