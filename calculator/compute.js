
function show(value)
{
    
    
    document.getElementById("result").value+=value;
	

}
function check()
{
    
  
   let operand=compute()
    document.getElementById("result").value=operand
    

}
   function compute()
   {
    let ans=[];
	let count=0;
	let answer=document.getElementById("result").value.toString()
	let i;
	for(let i=0;i<=answer.length;i++)
	{
		if((answer[i]=="+")||(answer[i]=="-")||(answer[i]=="*")||(answer[i]=="/"))
		count+=1;
	}
	
	if(count>1)
	{
		
		return eval(document.getElementById("result").value)
	}

    else if(document.getElementById("result").value.includes("+")){
		
		 ans= document.getElementById("result").value.split('+');
	     return parseInt(ans[0]) + parseInt(ans[1]);
	}
		
	    else if(document.getElementById("result").value.includes("-")){
		ans= document.getElementById("result").value.split('-');
		return parseInt(ans[0]) - parseInt(ans[1]);
    }
		
		else if(document.getElementById("result").value.includes("/")){
		ans= document.getElementById("result").value.split('/');
        return parseInt(ans[0]) / parseInt(ans[1]);
	}
		
		else if(document.getElementById("result").value.includes("*")){
		ans = document.getElementById("result").value.split('*');
	    return parseInt(ans[0]) * parseInt(ans[1]);
	}
	

	}
		

	
	
  
 