var fisrtimer=1;
var wordcounter=0;
var correctwords=0;
var wrongwords=0;
var len=0;
var jeystrokes=0;
$(document).ready(function(){

var fes=['One reason people lie is to achieve personal power. Achieving personal power is helpful for someone who pretends to be more confident than he really is. For example, one of my friends threw a party at his house last month. He asked me to come to his party and bring a date. However, I didnâ€™t have a girlfriend. One of my other friends, who had a date to go to the party with, asked me about my date. I didnâ€™t want to be embarrassed, so I claimed that I had a lot of work to do. I said I could easily find a date even better than his if I wanted to. I also told him that his date was ugly. I achieved power to help me feel confident; however, I embarrassed my friend and his date. Although this lie helped me at the time, since then it has made me look down on myself.','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.','Most students like the freedom they have in college. Usually college students live on their own, in the dormitory or in an apartment. This means they are free to come and go as they like. Their parents canâ€™t tell them when to get up, when to go to school, and when to come home. It also means that they are free to wear what they want. There are no parents to comment about their hair styles or their dirty jeans. Finally, they are free to listen to their favorite music without interference from parents.'];


var hy=Math.floor(fes.length*(Math.random()));
    $("#t1").html(fes[hy]);

	var datatext=$("#t1").html();
	var splittext=datatext.trim().split(' ');
	len = splittext.length;
    var result = []; 
    for( var i = 0; i < len; i++ ) 
	{
		if(splittext[i]!="")
		{
				result[i] = '<span>' + splittext[i] + '</span>';
		}        
    }
	 $("#t1").html(result.join(' '));

	 $("#t2").keyup(function(e)
	 {
		if(e.keyCode!=32 && e.keyCode!=17 && e.keyCode!=20 && e.keyCode!=18 && e.keyCode!=9)
		{
			jeystrokes++;
		}
		if(fisrtimer==1)
		{
			starttimer2();
			fisrtimer=0;
		}
	 
		var temp1=$(this).val();
		if(e.keyCode==32)
		{
			//alert(splittext[wordcounter]);
			if(temp1.trim()==splittext[wordcounter])
			{
				//alert("hell yeah!");
				$(this).val(' ');
				correctwords++;
				$("#t1 span:nth-child("+(wordcounter+1)+")").css('color','#33CC00');
			}
			else
			{
				$(this).val(' ');
				wrongwords++;
				$("#t1 span:nth-child("+(wordcounter+1)+")").css('color','red');
				
			}
			wordcounter++;
			
		}
	 
	 });
	 

});


function starttimer2()
{
	var r=setInterval(function(){
				var g=$(".tmev").html();
				g=parseInt(g)-1;
				//console.log(g);
				if(g==0)
				{
					clearInterval(r);
					//alert("Total Words:"+wordcounter+",Correct Words:"+correctwords+",Wrong Words:"+wrongwords);
					$(".nofwrds0").html(len);
					$(".nofwrds1").html(correctwords);
					$(".nofwrds2").html(wrongwords);
					
					var c=Math.floor(((correctwords/(wrongwords+correctwords))*100));
					if(isNaN(c))
					{
						$(".nofwrds4").html('0');
					}
					else
					{
						$(".nofwrds4").html(c);
					}
					
					$(".nofwrds3").html(Math.floor((jeystrokes/5)));
					$("#g1").click();
				}
				$(".tmev").html(g);
			 },1000);
	
}


function rel()
{
	location.reload();
}