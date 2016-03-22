window.onload=function(){
	var Score=[];
	var List=document.getElementById('list');
	var str='';

	/* 固定表格部分 */
	str+='<caption>成绩表</caption>';
	str+='<tr>';
	str+='<th>学生</th>';
	str+='<th>分数</th>';
	str+='<th>评级</th>';
	str+='</tr>';

	for (var i=0; i < 10; i++) {
		Score[i] = Math.round(Math.random()*100);
		var  ScoreId=i+1;
		/* 遍历表格部分 */
		str+='<tr>';
		if(Score[i]>=90){
			str+='<td>学生'+ScoreId+'</td>';
			str+='<td>'+Score[i]+'</td>';
			str+='<td>一等生</td>';
		}else if(Score[i]>=80 && Score[i]<90){
			str+='<td>学生'+ScoreId+'</td>';
			str+='<td>'+Score[i]+'</td>';
			str+='<td>二等生</td>';
		}else if(Score[i]>=70 && Score[i]<80){
			str+='<td>学生'+ScoreId+'</td>';
			str+='<td>'+Score[i]+'</td>';
			str+='<td>三等生</td>';
		}else if(Score[i]>=60 && Score[i]<70){
			str+='<td>学生'+ScoreId+'</td>';
			str+='<td>'+Score[i]+'</td>';
			str+='<td>四等生</td>';
		}else if(Score[i]>=50 && Score[i]<60){
			str+='<td>学生'+ScoreId+'</td>';
			str+='<td>'+Score[i]+'</td>';
			str+='<td>五等生</td>';
		}else if(Score[i]>=40 && Score[i]<50){
			str+='<td>学生'+ScoreId+'</td>';
			str+='<td>'+Score[i]+'</td>';
			str+='<td>六等生</td>';
		}else if(Score[i]>=30 && Score[i]<40){
			str+='<td>学生'+ScoreId+'</td>';
			str+='<td>'+Score[i]+'</td>';
			str+='<td>七等生</td>';
		}else if(Score[i]>=20 && Score[i]<30){
			str+='<td>学生'+ScoreId+'</td>';
			str+='<td>'+Score[i]+'</td>';
			str+='<td>八等生</td>';
		}else if(Score[i]>=10 && Score[i]<20){
			str+='<td>学生'+ScoreId+'</td>';
			str+='<td>'+Score[i]+'</td>';
			str+='<td>九等生</td>';
		}else if(Score[i]>0 && Score[i]<10){
			str+='<td>学生'+ScoreId+'</td>';
			str+='<td>'+Score[i]+'</td>';
			str+='<td>十等生</td>';
		}else{
			str+='<td>学生'+ScoreId+'</td>';
			str+='<td>'+Score[i]+'</td>';
			str+='<td>劝退！</td>';
		}
		str+='</tr>';
	}

	List.innerHTML=str;
}
