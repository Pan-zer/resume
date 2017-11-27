$(function(){
/*	
 * 左方离开式轮播
 * var index = 0;
	var obj =document.getElementById("lbBox");
	var aotoPlay = function(){
		clearInterval(timerL);
		index++;
		if(index>=4)
		{
			obj.style.left=0+"px";
			index =1;
		}
		var aim = index*-1920;
		var timerL = setInterval(function(){
			var start = obj.offsetLeft;
			start = start - (start - aim)/8;
			var delt = start-aim;
			if(delt<6)
			{
				obj.style.left=aim+"px";
				start=aim;
				clearInterval(timerL);
			}
			obj.style.left=start+"px";
		},100);
		
	}
	setInterval(aotoPlay,5000);
	*/
	/*淡出式轮播*/
	var index = 1;
	setInterval(function(){
		index++;
		if(index>3)
		{
			index=1;
		}
		var top = "pic"+index;
		var middle = "pic"+((index+1)>3?1:(index+1));
		if((index+1)>3)
		{
			var bottom = "pic"+2;
		}
		else
		{
			var bottom = "pic"+((index+2)>3?1:(index+2));
		}
		
		document.getElementById(top).style.zIndex=-1;
		document.getElementById(top).style.opacity=1;
		document.getElementById(middle).style.zIndex=-2;
		document.getElementById(middle).style.opacity=0;
		document.getElementById(bottom).style.zIndex=-2;
		document.getElementById(bottom).style.opacity=0;
	},5000);
	
	
	window.onresize = function(e){
		$("#about").css("height",innerHeight-22);
		$("#about").siblings().css("height",innerHeight-22);
		
	}

	document.onmousewheel =function(){
		clearInterval(timer);
	}
	
	var timer;
	var vm = new Vue({
		el:"#vue",
		data:{
			nav:[{className:"about",description:"glyphicon glyphicon-user",offsetTop:0,title:"关于我"},{className:"resume",description:"glyphicon glyphicon-list-alt",offsetTop:innerHeight,title:"简介"},{className:"works",description:"glyphicon glyphicon-briefcase",offsetTop:2*innerHeight,title:"我的作品"},{className:"contact",description:"glyphicon glyphicon-envelope",offsetTop:3*innerHeight,title:"联系方式"}],
			test:[1]
		},
		methods:{
			jump:function(item){
				clearInterval(timer);
				var end = item.offsetTop;
				var start =  document.documentElement.scrollTop || document.body.scrollTop;
				if( start > end)
						{
							timer = setInterval(function(){
							
								start = start - (start - end)/10;
								
								if(parseInt(start) == end)
								{
									
									clearInterval(timer);
								}
								 
									scrollTo(0,start);
							},20)
						}
						else if ( end > start)
						{
							
							timer = setInterval(function(){
								
								start = start +　(end - start)/10;
								
								if(parseInt(start) == end-1)
								{
									clearInterval(timer);
								}
									scrollTo(0,start);
							},50)
						}
			}
		}
	});
	$("#about").siblings().css("height",innerHeight-22);
	$("#about").css("height",innerHeight-22);
	console.log(innerWidth);
	
});
