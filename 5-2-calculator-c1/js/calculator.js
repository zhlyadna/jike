function calculator(symbol){
	var iuput1=parseFloat(document.getElementById('input1').value);
	var iuput2=parseFloat(document.getElementById('input2').value);
	var result=document.getElementById('result');

	switch (symbol){
		//加	
		case 'add':
		if(!isNaN(iuput1) && !isNaN(iuput2)){ 
		   result.value = eval(iuput1 + iuput2);
		}else{
			alert("请输入数字！");
		    result.value = "输入错误";	
		}
	  	break;

		//减
		case 'subtract':		
		if(!isNaN(iuput1) && !isNaN(iuput2)){ 
		   result.value =  eval(iuput1 - iuput2);
		}else{
			alert("请输入数字！");
		    result.value = "输入错误";	
		}	
		break;

		//乘
		case 'multiply':
		if(!isNaN(iuput1) && !isNaN(iuput2)){ 
		   result.value =  eval(iuput1 * iuput2);
		}else{
			alert("请输入数字！");
		    result.value = "输入错误";	
		}	
		break;

		//除
		case 'divide':
		if(!isNaN(iuput1) && !isNaN(iuput2) && iuput2!==0){ 
		   result.value =  eval(iuput1 / iuput2);
		}else if(iuput2==0){
			alert("被除数不能为0！");
		    result.value = "输入错误";	
		}else{
			alert("请输入数字！");
		    result.value = "输入错误";	
		}	
		break;
	}

}
