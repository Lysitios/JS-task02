function lohref()
{
	window.location.href="./JS-task02-04.html";
}


function iptset() 
{
	var a=document.getElementById("iptnum").value;
	if (a>=4 && a<=18) 
	{
		var n=Math.floor(a/3);
		document.getElementById("assin").innerHTML="杀手"+n+"人";
		document.getElementById("civil").innerHTML="平民"+(a-n)+"人";
		rdm(n);
	}
	else 
	{
		document.getElementById("assin").innerHTML="杀手 人";
		document.getElementById("civil").innerHTML="平民 人";
		document.getElementById("mblk").innerHTML="";
		alert("请输入正确的玩家数量。");
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