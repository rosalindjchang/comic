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
            $("#land").toggleClass("show");
        },1000);
        $(".h1").toggleClass("show");
        $("#portal2").toggleClass("show");
        $("#bi").toggleClass("show");
        $("#bo").toggleClass("show");
    });
    
    
    // INTO BUILDING
    $("#bi").click(function() {
        console.log("innn");
        $("#bi").removeClass("show");
        $("#bo").removeClass("show");
        $(".building").removeClass("show").addClass("min");
        $("#portal1").removeClass("show");
        $("#broom").addClass("buildroom").removeClass("min");
        $("#bbox").addClass("box1").removeClass("boxmin");
        $("#bikeclick").addClass("bikebox").removeClass("hide");
    });
    
     $("#bikeclick").mouseover(function(){
        
     });
    
    // SEE CAVE
    
     $("#portal2").click(function() {
        $("#house").toggleClass("h2");
        $("#land").toggleClass("la2"); 
        $(".cave").toggleClass("show min");
        setTimeout(function() {
            $("#land").toggleClass("show");
        },1000);
         $(".h1").toggleClass("show");
        $("#portal1").toggleClass("show");
    });
    
    
 
    
    
 });

