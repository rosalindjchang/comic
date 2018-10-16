$(document).ready(function(){
    
    var roomIn = false;
    var windowclicked = false;
    
    var windowoo = document.getElementById("windowo");
    var windowSS = document.getElementById("windowS");
    var roomframe = document.getElementById("roomr");
    var landframe = document.getElementById("land");
    land.style.visibility = "hidden";
    windowoo.style.visibility = "hidden";
    windowSS.style.visibility = "hidden";
    
    var window1 = document.getElementById("window1");
    var window2 = document.getElementById("window2");
    
    $("#roomr").click(function(){
        
       $(".room").removeClass("r1");
        $("#roomr").addClass("r2").removeClass("r1");
        $("body").addClass("light").removeClass("dark");
        $(".shade").addClass("noshade");
         windowoo.style.visibility = "visible";
        windowSS.style.visibility = "visible";
        roomframe.style.visibility = "hidden";
    });
    
     if (roomIn == false){
            roomIn = true;
            
            //click windows
            $("#windowo").click(function(){
                 windowclicked = true;
                land.style.visibility = "visible";
                $("#window1").addClass("ww").removeClass("openw1");
                $(".room").addClass("r3");
                $("#land").addClass("openw1");
                setTimeout(function(){
                    $("#land").addClass("la");
                }, 1);
                windowoo.style.visibility = "hidden";
                windowSS.style.visibility = "hidden";
            });
         
            $("#windowS").click(function(){
                windowclicked = true;
                $(".room").addClass("r1");
                $("#roomr").addClass("r1").removeClass("r2");
                $("body").addClass("dark").removeClass("light");
                $(".shade").removeClass("noshade");  
                windowoo.style.visibility = "hidden";
                windowSS.style.visibility = "hidden";
                roomframe.style.visibility = "visible";
            });
         
            // if hover over windows
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
    
       
    
    
    
 });

