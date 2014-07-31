 var intTimeOut;
	function scrollToTop() 
	{ 
		for(i=(window.scrollY);i>0;i--){
			
			scrol(1,i);
		}
		
	} 
	function scrol(i,interval)
	{
		setTimeout(function(){window.scrollBy(0,-i);},interval); console.log(i);
	}
	
	
	window.onscroll=function(){
		if(window.scrollY>400)
			{
				document.getElementById('scroll-to-top').style.display="block";
			}
			else{
				document.getElementById('scroll-to-top').style.display="none";
			}
		
		};