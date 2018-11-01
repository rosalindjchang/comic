$(document).ready(function(){
    
    var roomIn = false;
    
    var windowoo = document.getElementById("windowo");
    var windowSS = document.getElementById("windowS");
    var roomframe = document.getElementById("roomr");
    var landframe = document.getElementById("land");
    var houseframe = document.getElementById("house");
    
    houseframe.style.visibility = "hidden";
    landframe.style.visibility = "hidden";
    windowoo.style.visibility = "hidden";
    windowSS.style.visibility = "hidden";
    
    var window1 = document.getElementById("window1");
    var window2 = document.getElementById("window2");
    
    var falling = false;
    
    // ENTER ROOM
    
    $("#roomr").click(function(){
       $(".room").removeClass("r1").addClass("r2");
        $("#roomr").addClass("r2").removeClass("r1");
        $("body").addClass("light").removeClass("dark");
        $(".shade").addClass("noshade");
         windowoo.style.visibility = "visible";
        windowSS.style.visibility = "visible";
        roomframe.style.visibility = "hidden";
    });
      
     if (roomIn == false){
            roomIn = true;
            
            // GO OUTSIDE
            $("#windowo").click(function(){
                landframe.style.visibility = "visible";
                houseframe.style.visibility = "visible";
                $("#window1").addClass("ww").removeClass("openw1");
                $(".room").addClass("r3");
                $("#house").addClass("h2");
                $("#land").addClass("openw1");
                setTimeout(function(){
                    $("#land").addClass("la");
                }, 1);
               $("#portal1").addClass("show");
                $("#portal2").addClass("show");
                windowoo.style.visibility = "hidden";
                windowSS.style.visibility = "hidden";
            });
         
            // RETURN to SCN1
            $("#windowS").click(function(){
                $(".room").addClass("r1").removeClass("r2");
                $("#roomr").addClass("r1").removeClass("r2");
                $("body").addClass("dark").removeClass("light");
                $(".shade").removeClass("noshade");  
                windowoo.style.visibility = "hidden";
                windowSS.style.visibility = "hidden";
                roomframe.style.visibility = "visible";
            });
         
            // WINDOW HOVER
                $("#windowo").mouseover(function(){
                    window1.style.visibility = "visible";
                    $("#window1").fadeIn().addClass("openw1");
                });

                $("#windowo").mouseout(function(){
                   $("#window1").fadeOut().removeClass("openw1");
                });

               $("#windowS").mouseover(function(){
                   window2.style.visibility = "visible";
                   $("#window2").fadeIn().addClass("closew1");
                });

                $("#windowS").mouseout(function() {
                    $("#window2").fadeOut().removeClass("closew1");
                });
         
        } else if (roomIn == true) {
            roomIn = false;
        }
    
    
    // BACK INSIDE SCN2
    $("#house").click(function() {
        $("#window1").removeClass("ww").addClass("openw1");
        $(".room").removeClass("r3");
        $("#house").removeClass("h2");
        $("#land").removeClass("la"); 
        setTimeout(function() {
            $("#land").removeClass("openw1"); 
            landframe.style.visibility = "hidden";
        },1000);
        houseframe.style.visibility = "hidden";
        windowoo.style.visibility = "visible";
        windowSS.style.visibility = "visible";
        $("#portal1").removeClass("show");
        $("#portal2").removeClass("show");
    });
    
    
    // outside
    
    $("#portal1").mouseover(function(){
        $("#land").addClass("lp1").removeClass("lp");
     });
    
    $("#portal1").mouseout(function(){
        $("#land").removeClass("lp1").addClass("lp");
     });
    
    $("#portal2").mouseover(function(){
        $("#land").addClass("lp2").removeClass("lp");
     });
    
    $("#portal2").mouseout(function(){
        $("#land").removeClass("lp2").addClass("lp");
    });
    
    // SEE BUILDING
    
    $("#portal1").click(function() {
        $("#house").toggleClass("h2");
        $("#land").toggleClass("la2"); 
        $(".building").toggleClass("show min");
        setTimeout(function() {
            $("#land").toggleClass("show2");
        },1000);
        $(".h1").toggleClass("show2");
        $("#portal2").toggleClass("show");
        $("#bi").toggleClass("show");
        $("#bo").toggleClass("show");
    });
    
    
    // INTO BUILDING
    $("#bi").click(function() {
        $("#bi").removeClass("show");
        $("#bo").removeClass("show");
        $(".building").removeClass("show").addClass("min");
        $("#portal1").removeClass("show");
        $("#broom").addClass("buildroom show").removeClass("broomin");
        $("#bbox").addClass("box1").removeClass("boxmin");
        $("#bikeclick").addClass("bikebox").removeClass("hide");
        $("#wallclick").addClass("wallbox").removeClass("hide");
        $("#rugclick").addClass("rugbox").removeClass("hide");
    });
    
     $("#wallclick").mouseover(function(){
        $("#twod").addClass("show").removeClass("hide");
     });
    
    $("#wallclick").mouseout(function(){
        $("#twod").removeClass("show").addClass("hide");
     });
    
     $("#rugclick").mouseover(function(){
        $("#rug").removeClass("hide");
     });
     $("#rugclick").mouseout(function(){
        $("#rug").addClass("hide");
    });
    
    // 2D ROOM 
    
    $("#wallclick").click(function() {
        $("#broom").addClass("buildside hide").removeClass("show");
        $("#broom2").addClass("buildside show").removeClass("hide");
        
        $("#twod").addClass("rugIn"); 
        setTimeout(function() {
            $("#twod").removeClass("rugIn");
            $("#wallclick2").removeClass("hide").addClass("show");
        },1600);
        $("#threed").removeClass("hide").addClass("rugIn"); 
        $("#bikeclick").removeClass("bikebox").addClass("hide");
        $("#wallclick").removeClass("wallbox").addClass("hide");
        
        $("#rugclick").removeClass("rugbox").addClass("hide");
        $(".book").removeClass("hide").addClass("show");
    });
    
    
    $("#book1").mouseover(function(){
        $("#comic1").removeClass("c1min hide").addClass("show");
        $("#book2").addClass("hide").removeClass("show");
        $("#book3").addClass("hide").removeClass("show");
     });
     $("#book1").mouseout(function(){
        $("#comic1").addClass("c1min hide").removeClass("show");
         $("#book2").addClass("show").removeClass("hide");
         $("#book3").addClass("show").removeClass("hide");
    });
    
    
     $("#book2").mouseover(function(){
        $("#comic2").removeClass("c2min hide").addClass("show");
        $("#book1").addClass("hide").removeClass("show");
        $("#book3").addClass("hide").removeClass("show");
     });
     $("#book2").mouseout(function(){
        $("#comic2").addClass("c2min hide").removeClass("show");
         $("#book1").addClass("show").removeClass("hide");
         $("#book3").addClass("show").removeClass("hide");
    });
    
    $("#book3").mouseover(function(){
        $("#comic3").removeClass("c3min hide").addClass("show");
        $("#book1").addClass("hide").removeClass("show");
        $("#book2").addClass("hide").removeClass("show");
     });
     $("#book3").mouseout(function(){
        $("#comic3").addClass("c3min hide").removeClass("show");
         $("#book1").addClass("show").removeClass("hide");
         $("#book2").addClass("show").removeClass("hide");
    });
    
    $("#wallclick2").click(function(){
        $("#broom").addClass("show").removeClass("buildside hide");
        $("#broom2").addClass("hide").removeClass("buildside show");
        $("#threed").addClass("hide minthreed"); 
        setTimeout(function() {
            $("#threed").removeClass("rugIn minthreed");
            $("#wallclick").removeClass("hide").addClass("wallbox");
        },1100);
        $("#bikeclick").removeClass("hide").addClass("bikebox");
        $("#wallclick2").removeClass("show").addClass("hide");
        $("#rugclick").removeClass("hide").addClass("rugbox");
        $(".book").removeClass("show").addClass("hide");
    });

    
    // RETURN OUT
    
    $("#bikeclick").click(function(){
        $("#bi").addClass("show");
        $("#bo").addClass("show");
        $(".building").addClass("show").removeClass("min");
        $("#portal1").addClass("show");
        $("#broom").addClass("broomin").removeClass("buildroom show");
        $("#bbox").removeClass("box1").addClass("boxmin");
        $("#bikeclick").removeClass("bikebox").addClass("hide");
        $("#wallclick").removeClass("wallbox").addClass("hide");
        $("#rugclick").removeClass("rugbox").addClass("hide");
     });
    
    // FALL DOWN
    
    $("#rugclick").click(function(){
        $("#broom").addClass("broomin").removeClass("buildroom show");
        $("#bikeclick").removeClass("bikebox").addClass("hide");
        $("#wallclick").removeClass("wallbox").addClass("hide");
        $("#rugclick").removeClass("rugbox").addClass("hide");
        $("#bbox").removeClass("box1").addClass("boxmin");
        $("#rug").addClass("rugIn"); 
        setTimeout(function() {
            $("#rug").removeClass("rugIn");
        },1100);
        $("#rug2").removeClass("hide").addClass("rugIn"); 
        $("#rugdown").addClass("yesdisplay").removeClass("nodisplay"); 
        setTimeout(function() {
           $("#rugdown").addClass("rugd").removeClass("hider"); 
        },100);
        
        //scroll down
        $(window).scroll(function() {
         if($(window).scrollTop() + $(window).height() > $(document).height() - 400) {
            $("#rug3").removeClass("hide"); 
        } else if($(window).scrollTop() + $(window).height() < $(document).height() - 400) {
            $("#rug3").addClass("hide"); 
        }
        });
        
    });
      
    
    // SEE CAVE
    
     $("#portal2").click(function() {
        $("#house").toggleClass("h2");
        $("#land").toggleClass("la2"); 
        $(".cave").toggleClass("show min");
        setTimeout(function() {
            $("#land").toggleClass("show2");
        },1000);
         $(".h1").toggleClass("show2");
        $("#portal1").toggleClass("show");
    });
    
    
 });

