
function searchhotels()
{
	var country=document.getElementById('country').value;;
	var state=document.getElementById('state').value;
	var city=document.getElementById('city').value;
	var theUrl="http://api.eancdn.com/ean-services/rs/hotel/v3/list";
		var datas="?cid=55505&minorrev=99&apiKey=by3hemnmrt74nsmtpqd8twfr&&city="+city+
		"&stateProvinceCode="+state+"&countryCode="+country+"&_type=json"; 
		theUrl+=datas;
	var ajax=new XMLHttpRequest();
	ajax.open('get',theUrl,false);

	ajax.onloadend=function()
		{
			displayData(eval('('+ajax.responseText+')').HotelListResponse.HotelList.HotelSummary);
		};
	ajax.send();
	var ajax=new XMLHttpRequest();
	
} 
function displayData(data)
{
	var cont=document.getElementById('display-box');
	
		
	for(i=0;i<data.length;i++)
	{
		var ul=document.createElement('ul');
			li1=document.createElement('li');
			li1.innerHTML=data[i].name;
			li1.className="hotel-name";
			ul.appendChild(li1);
			
			li2=document.createElement('li');
			li2.innerHTML="Address : "+data[i].address1;
			li2.className="hotel-address";
			ul.appendChild(li2);
			
			li3=document.createElement('li');
			li3.innerHTML="Hotel Rating : "+data[i].hotelRating;
			ul.appendChild(li3);
			
			li3=document.createElement('li');
			li3.innerHTML="Highest Rates per Room per Night : $"+data[i].highRate;
			ul.appendChild(li3);
			
			li3=document.createElement('li');
			li3.innerHTML="Lowest Rates per Room per Night : $"+data[i].lowRate;
			ul.appendChild(li3);
			
			li3=document.createElement('li');
			li3.innerHTML=htmlEntities(data[i].shortDescription);
			ul.appendChild(li3);
			
		cont.appendChild(ul);
	}	
	
}
function htmlEntities(str) 
{
	var parser = new DOMParser();
    var a= str.replace(/&lt;/gi,'<').replace( /&gt;/gi,'>').replace( /&quot;/gi,'').replace(/<b>/gi,'<strong style="font-weight:bold;">').replace(/<[/]b>/,'</strong>');
	return a;
}