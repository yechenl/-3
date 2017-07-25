window.onload=function(){
	var lis=document.querySelectorAll("#lis>li");
	var divs=document.querySelectorAll("#divs>div");
	// console.log(lis);
	// console.log(divs);
	var last=lis[0];
	for(var i=0; i<lis.length; i++){
		lis[i].index=i;
		//添加索引值
		lis[i].onclick=function(){
			last.style.background="green";
			divs[last.index].style.display="none";
			this.style.background="yellow";
			this.style.color="red";
			divs[this.index].style.display="block";
			last=this;
		 }
	}
}			