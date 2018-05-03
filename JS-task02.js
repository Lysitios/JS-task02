function lohref()
{
	window.location.href="./JS-task02-04.html";
}


function iptset() 
{
	var a=document.getElementById("iptnum").value;
	if (a>=4 && a<=8) 
	{
		document.getElementById("assin").innerHTML="杀手1人";
		document.getElementById("civil").innerHTML="平民"+(a-1)+"人";
		rdm(1);
	}
	    else if (a>=9 && a<=11) 
	    {
	        document.getElementById("assin").innerHTML="杀手2人";
		    document.getElementById("civil").innerHTML="平民"+(a-2)+"人";
		    rdm(2);
	    }
		    else if (a>=12 && a<=15) 
		    {
			    document.getElementById("assin").innerHTML="杀手3人";
	            document.getElementById("civil").innerHTML="平民"+(a-3)+"人";
	            rdm(3);
		    }
			    else if (a>=16 && a<=18) 
			    {
			    	document.getElementById("assin").innerHTML="杀手4人";
	                document.getElementById("civil").innerHTML="平民"+(a-4)+"人";
	                rdm(4);
			    }
			        else 
			        {
			        	document.getElementById("assin").innerHTML="杀手 人";
	                    document.getElementById("civil").innerHTML="平民 人";
			        	alert("请输入正确的玩家数量。");
			        	document.getElementById("mblk").innerHTML="";
			        }
}

function rdm(n)
{
	var i=document.getElementById("iptnum").value;
    var arr = [];
    for (var asn = 0; asn < n; asn++)
    {
    	arr.push("杀手");
    }
    for (var cvl = 0; cvl < (i-n); cvl++ )
    {
    	arr.push("平民");
    }
    while (i) 
    {
    	var j = Math.floor(Math.random() * i--);
    	var tem = arr[i];
    	arr[i] = arr[j];
    	arr[j] = tem;
    }
    var narr = arr.join("，");
    document.getElementById("mblk").innerHTML= narr;
}