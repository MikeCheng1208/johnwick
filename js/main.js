$(function(){
        var position1 = $(".gamePlay").offset();
        var x1 = position1.left;  
        var y1 = position1.top;  

        $(".top3 a").click(function(){
            $("html,body").contents().stop(true,false).animate({scrollTop:y1},900);
//           / $('iframe').contents().scrollTop(400);
        });
    
    
    
//-------音效控制-----------------------------------------------------------------------------------------------------------------------------   
    
        var audio=document.getElementById('demo'); 
        var BG_audio=document.getElementById('demo2'); 

        function Gunfire(){
            audio.pause();
            this.currentTime = 0;
            audio.play();
        }
    
        audio.addEventListener('pause', function(){
            this.currentTime = 0;
        }, false);

        BG_audio.addEventListener('pause', function(){
            this.currentTime = 0;
        }, false);

//------------------------------------------------------------------------------------------------------------------------------------
    
    
//    $(".gamePlay").css("display","block");
//    $(".word").css("display","none");
//    $(".gameover").css("display","none");
    
    
    //遊戲開始畫面
    $(".gamePlay a").click(function(){
        $(".word").css("display","block");
        $(".gamePlay").css("display","none");
        GameplayFn();
        
        //聲音開始
        BG_audio.play();
        //聲音大小
        BG_audio.volume = 0.2;
        
    })
    //在玩一次
    $("#playone").click(function(){
        
        
        BG_audio.pause();
        BG_audio.currentTime = 0;
        window.location.reload();
    })
    
    //分享至臉書
    $("#sim").click(function(){
        // window.open('http://www.facebook.com/share.php?u='.concat(encodeURIComponent(location.href)),"_blank","toolbar=yes, location=yes, directories=no, status=no, menubar=yes, scrollbars=yes, resizable=no, copyhistory=yes, width=600, height=400" )
    })
    
    


    
//------------------------------------------------------------------------------------------------------------------------------------
    
    var Robber0=$(".Robber0")
    var Robber1=$(".Robber1")
    var Robber2=$(".Robber2")
    var Robber3=$(".Robber3")
    var Robber4=$(".Robber4")
    var Robber5=$(".Robber5")
    
    //初始化變數
    var die=0;//擊殺數
    var nodie=0;//沒有打到數
    var s=45;//遊戲時間      
    var a;//人物出現
    var arr=[0,1,2,3,4,5];//人物數量
    
    
    var is_boolen0=false;
    var is_boolen1=false;
    var is_boolen2=false;
    var is_boolen3=false;
    var is_boolen4=false;
    var is_boolen5=false;
    
//------------------------------------------------------------------------------------------------------------------------------------

    //人物出現&離開
    var speed=600;
    var speed_delay=600;
    
    function Shoe(a){
        switch(a){
            case 0:
                Robber0.stop(true, true).animate({left:"400"},speed).delay(speed_delay).animate({left:"465"},200,AFTRE0);
                break;
            case 1:
                Robber1.stop(true, true).animate({top:"30"},speed).delay(speed_delay).animate({top:"125"},200,AFTRE1);
                break;
            case 2:
                Robber2.stop(true, true).animate({top:"250"},speed).delay(speed_delay).animate({top:"365"},200,AFTRE2);
                break;
            case 3:
                Robber3.stop(true, true).animate({top:"165"},speed).delay(speed_delay).animate({top:"262"},200,AFTRE3);
                break;
            case 4:
                Robber4.stop(true, true).animate({left:"150"},speed).delay(speed_delay).animate({left:"80"},200,AFTRE4);
                break;
            case 5:
                Robber5.stop(true, true).animate({left:"570"},speed).delay(speed_delay).animate({left:"632"},200,AFTRE5);
                break;
        }
    }

//------------------------------------------------------------------------------------------------------------------------------------
    //擊殺數量統計
    function DIE(){
        die++;
        $(".die").html("擊殺人數:"+die+"人") 
        Gunfire();
        $("#die").val(die);
     }
    
    //沒打到統計
    function NODIE(){
        nodie++
        $(".nodie").html("沒有打到:"+nodie+"人"); 
        
     }
//------------------------------------------------------------------------------------------------------------------------------------
    
    //初始化文字
     $(".die").html("擊殺人數:"+die+"人") ;
     $(".nodie").html("沒有打到:"+nodie+"人"); 
    
    
//------------------------------------------------------------------------------------------------------------------------------------

//------------------------------------------------------------------------------------------------------------------------------------

    
    function GameplayFn(){
        //時間開始
        function timeFn(){
             s--
            if(s<10){
                speed=500
                speed_delay=200
            } 
             
             
            $(".timetet").html("剩下時間:"+s+"秒") 
             if(s<1){
                 BG_audio.pause();
                clearInterval(TT)
                clearInterval(TT2)
                $(".word").css("display","none");
                $(".gameover").css("display","block");
                $("#die_num").html("擊殺人數:"+die+"人") 
                $("#nodie_num").html("沒打到:"+nodie+"人") 
             }
        }

        //人物出現亂數開始
        function time2Fn(){
            a=Math.floor(Math.random()*(arr.length-0));
            arr.unshift(arr.splice(a,1))
            Shoe(a)
        }

//------------------------------------------------------------------------------------------------------------------------------------
   
    
        //時間開始
        var TT=setInterval(timeFn, 1000);
        //人物出現亂數開始
        var TT2=setInterval(time2Fn, 900);

    
//------------------------------------------------------------------------------------------------------------------------------------
        //攻擊人物
        $(".Robber0 a").click(function(){
            $(".top6 #Robber0").css("display","none");
            $(".top6 #Robber02").css("display","block");
           // Robber0.css("left","465px");
            DIE();
            is_boolen0=true;
            
        })
        $(".Robber1 a").click(function(){   
            $(".top6 #Robber1").css("display","none");
            $(".top6 #Robber12").css("display","block");
            DIE();
            is_boolen1=true;
        })
        $(".Robber2 a").click(function(){
            $(".top6 #Robber2").css("display","none");
            $(".top6 #Robber22").css("display","block");
            DIE();
            is_boolen2=true;
        })
        $(".Robber3 a").click(function(){
            $(".top6 #Robber3").css("display","none");
            $(".top6 #Robber32").css("display","block"); 
            DIE();
            is_boolen3=true;
        })
        $(".Robber4 a").click(function(){ 
            $(".top6 #Robber4").css("display","none");
            $(".top6 #Robber42").css("display","block"); 
            DIE();
            is_boolen4=true;
        })
        $(".Robber5 a").click(function(){ 
            $(".top6 #Robber5").css("display","none");
            $(".top6 #Robber52").css("display","block"); 
            DIE();
            is_boolen5=true;
        })
    
 }

    function src(){
        $(".top6 #Robber0").css("display","block");
        $(".top6 #Robber02").css("display","none");
        
        $(".top6 #Robber1").css("display","block");
        $(".top6 #Robber12").css("display","none");
        
        $(".top6 #Robber2").css("display","block");
        $(".top6 #Robber22").css("display","none");
        
        $(".top6 #Robber3").css("display","block");
        $(".top6 #Robber32").css("display","none");
        
        $(".top6 #Robber4").css("display","block");
        $(".top6 #Robber42").css("display","none");
        
        $(".top6 #Robber5").css("display","block");
        $(".top6 #Robber52").css("display","none");
    }
    
    //判斷是否有打到
    function AFTRE0(){ 
        src()
        if(is_boolen0==false){
            NODIE();
        }
        is_boolen0=false;
    }
    function AFTRE1(){
        src()
        if(is_boolen1==false){
            NODIE();
        }
        is_boolen1=false;
    }
    function AFTRE2(){
        src()
        if(is_boolen2==false){
            NODIE();
        }
        is_boolen2=false;
    }
    function AFTRE3(){
        src()
        if(is_boolen3==false){
            NODIE();
        }
        is_boolen3=false;
    }
    function AFTRE4(){
        src()
        if(is_boolen4==false){
            NODIE();
        }
        is_boolen4=false;
    }
    function AFTRE5(){
        src()
        if(is_boolen5==false){
            NODIE();
        }
        is_boolen5=false; 
    }     
})