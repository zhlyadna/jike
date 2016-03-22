var letter_count = function(){ //定义函数
	var Letter=new Array("a","x","b","d","m","a","k","m","p","j","a"); //定义数组
	var str='';//定义连接字符串
	var Show=document.getElementById('show');//定义HTML输出容器
	var Rank=new Array();//定义排序用二维数组

	function letter_count_rank(no1,no2){        
        this.no1=no1;          
        this.no2=no2;    
    } //定义排序用二维数组属性   

	for(var i=0;i<Letter.length;i++){ //第一次遍历数组
		var count=0; //出现次数
		if(Letter[i]!=-1){  //判断是否循环
			var temp=Letter[i]; //参照物
			str+='<div>字母 '+temp+' 出现的顺序是：'; //HTML输出
			for(var j=0;j<Letter.length;j++){ //第二次遍历数组
				if(temp==Letter[j]){ //如果等于参照物
					count++; //出现次数+1
					var time=j+1; //所在数组的位置
					str+=time+' '; //HTML输出
					Letter[j]=-1; //重复元素标记	
				}	
			}
			str+='。共出现'+count+'次。</div>'; //HTML输出	
			Rank.push(new letter_count_rank(temp,count)); //写入新的二维数组        
		}
	}
    
	Rank.sort(function(a,b){            
		return b.no2-a.no2 
	}); //排序

	str+='<div class="red">总结：字母 '+Rank[0].no1+' 出现次数最多</div>'; //HTML输出   
	Show.innerHTML=str; //写入容器
}	

