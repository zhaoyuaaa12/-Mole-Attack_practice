
$(document).ready(function(){
	$(".Start").fadeIn(2000);
	
})

function startgame(){
	$(".Back").fadeOut(1000);
	$(".Suslik").fadeOut(1000);
	$(".Start").fadeOut(1000);
	$(".Back1").fadeIn(1000,function(){
		$("#scorelable").fadeIn(1000);
		$("#time").fadeIn(1000);
		$("#holes").fadeIn(1000);
		var gameDiv = document.getElementById("holes");
			var one=setInterval(ranDom,1000);
			function ranDom(){
	            
	            for(var i=0;i<9;i++){
	            	var img=gameDiv.children[i];
	            	img.src="img/hole.png";
	            	
	            }
	            var x=Math.random()*9;
	            x=Math.floor(x);
	            var img = gameDiv.children[x];
	            img.src="img/gamesuslik.png";
	    
            }
			
			
			
		var timer=30;
		var two=setInterval(function(){
			
	        timer-=1;
	        document.getElementById("time").innerHTML=timer;
	        if(document.getElementById("time").innerHTML==0){
	        	window.clearInterval(two);
	        	window.clearInterval(one);
	        }
		},1000);
		
		
	});
	
}
var score=0;
function beat(obj){
	
	var str = obj.src;
	
	if(str.charAt(str.length-14)=="g"){
		
		obj.src="img/hole.png";
		score+=1;
		document.getElementById("scorelable").innerHTML="得分："+score;
	}
}



	
	
	
	
	


