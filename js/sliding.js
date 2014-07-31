var images=document.getElementsByClassName('sliderimg');
for(i=0;i<images.length;i++)
{
	images[i].style.display="none";
}
 
images=document.getElementsByClassName('sliderimg')[0].getElementsByTagName('img');
var banner=document.getElementById('banner');
var bannerCaption=document.getElementById('banner-caption');
var bannerWidth='100%';
var recentIndex=0;
var caption=[];
var bannerImages=[];				
var slidingInterval=100000;
var slidingSpeed=100;
var pos=[];
var slideDirection='left';
var incLeft=50;


var bannerbox=function()
				{
					this.left=0;
					this.top=0;
				}

for(i=0;i<images.length;i++)
 {
		caption[i]=images[i].getAttribute('title');
		imageCont=document.createElement('div');
			bannerImages[i]=document.createElement('img');
			bannerImages[i].src=images[i].src;
			bannerImages[i].className="slider-images";
			bannerImages[i].setAttribute('index',i);
			bannerImages[i].setAttribute('title',caption[i]);
			bannerImages[i].setAttribute('alt',caption[i]);
			pos[i]= new bannerbox;
			bannerImages[i].style.top=bannerbox.top+"px";
			bannerImages[i].style.left=bannerbox.left+"px";
			banner.appendChild(bannerImages[i]);
 }

 bannerImages[recentIndex].style.zIndex="9";
 
 //arrange and set z-index of images
 nextimageslide();
 var sliding=[];
 sliding.push(setInterval(slide,slidingSpeed));
 function slidePrev()
 {
	slideDirection='left';
	slide(slideDirection);
 }
 
 function slideNext()
 {
	slideDirection='right';
	slide(slideDirection);
 }
 
 function slide(dir)
 {
	if(slideDirection=='left')
	{
		pos[recentIndex].left-=incLeft;
	}else if(slideDirection=='right')
	{
		pos[recentIndex].left+=incLeft;
	}
	
	//CHECK IF IMAGE IS STILL VISIBLE; IF OUT OF VIEWPORT THEN SET IT BACK TO ZERO
	//IF SLIDING TOWARDS LEFT
	if( dir==undefined && (pos[recentIndex].left<-bannerWidth || pos[recentIndex].left>bannerWidth))
	{
		nextimageslide();
		
		//NOW PAUSE FOR A WHILE
		 clearSliding()
		setTimeout(function(){sliding.push(setInterval(slide,slidingSpeed));},slidingInterval);
	}else if(dir=='left'||dir=='right')
	{
		nextimageslide();
		 slideclear()
		dir='';
		setTimeout(function(){sliding.push(setInterval(slide,1));},slidingInterval);
		
	}
	
	bannerImages[recentIndex].style.left=pos[recentIndex].left+"px";
	
	
 }
 
 function nextimageslide()
 {
		pos[recentIndex].left=0;
		bannerImages[recentIndex].style.left=pos[recentIndex].left+"px";
		//set z-index
		bannerImages[recentIndex].style.zIndex="0";
		//select next image
		recentIndex=nextImage();
		//set z-index of next image
		bannerImages[recentIndex].style.zIndex="5";
		//change the caption
		bannerCaption.innerHTML=bannerImages[recentIndex].getAttribute('title');
		//set z-index of next image
		bannerImages[nextImage()].style.zIndex="1";	
 }
 
 //------------function to clear sliding------------------------
 function slideclear()
 {
	for(i=0;i<sliding.length;i++)
	{
		clearInterval(sliding[i])
		sliding.splice(i,1);
	}
	
 }
 
 //---------FUNCTION TO GIVE INDEX OF PREVIOUS IMAGE-----------------
 function prevImage()
 {
	if(slideDirection=='left' && recentIndex==images.length-1)
	return images.length-1;
	else if(slideDirection=='right' && recentIndex==0)
	return 0;
	else if(slideDirection=='right' )
	return recentIndex+1;
	else if(slideDirection=='left') 
	return recentIndex-1;
 }
 
 //-------------FUNCTION TO GIVE INDEX OF NEXT IMAGE--------------------
 function nextImage()
 {
	if(slideDirection=='left' && recentIndex==images.length-1)
	return 0;
	else if(slideDirection=='right' && recentIndex==0)
	return images.length-1;
	else if(slideDirection=='right' )
	return recentIndex-1;
	else if(slideDirection=='left') 
	return recentIndex+1;
 }