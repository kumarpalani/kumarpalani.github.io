
var slideStart = 1;
var numQues=1;
var crctCol = '#48A200';
var wrongCol = '#C61D23';
var slidemove = -680;
var defId = 1;
var imgdiv = 105;
var isclicked= false;

var ddarr = {
	dd_1:{
		droppos:[[100,0],[130,120],[130,270],[100,400],[70,498],[70,568]],
		dragpos:[[0,0],[50,0],[100,0],[150,0],[200,0],[250,0]],
		drtext:["Amazon","Hudson's Bay"],
		dtext:["We have more than 341,000 employees worldwide.","Our website receives 183 million U.S. vistors each month.","Our total sales were $14.35 billion in 2017.","We have more than 27.7 million Facebook Likes and 2.68 million Twitter Followers.","We have more than 65,000 employees around the world.","Our website receives 87 million visitors each month.","Our total sales were $136 billion in 2016.","We hire more than 120,000 workers for the holiday season.","We have more than 450,000 Facebook Likes and 150,000 Twitter Followers.","We have 480 stores nation-wide."],
	AnsTxt:["Amazon","Amazon","Hudson's Bay","Amazon","Hudson's Bay","Hudson's Bay","Amazon","Amazon","Hudson's Bay","Hudson's Bay"],
	// 	_drop1:["Value priced to compete with Rockstar and Monster Energy."],
	//  _drop2:["Sold in 171 countries in tens of thousands of convenience stores, grocery stores, and restaurants."],
	//  _drop3:["Television and print advertising. Heavy social media presence, with 49 million Facebook likes and more than 2 million Twitter followers. Sponsorship and event marketing for extreme sports and musical acts."],
	//	dropTop:[4,124,152,23,82,0],
	 //   dropLeft:[34,66,211,166,318,284],
option:["A","B"],
	dropHt:[212,212,212,212],
	parTxt:["Amazon and Hudson's Bay are two very different companies. One is the largest online retailer in the world, the other is the largest offline retailer in the world. However, the companies are similar in many ways as well. See if you can identify the company being described by playing . . . Amazon or Hudson's Bay?","Tim Horton's","HP Inc."],
	bgimg:["img1","img1b","img1a"]
	},

	dd_2:{

		_drop0:["A variety of baked goods, hot beverages and sandwiches."],
		_drop1:["Typically priced lower than competitors, such as Second Cup and Starbucks."],
	 _drop2:["3820 locations in Canada and 811 in the United States. Expanding into grocery stores with sales of bottled iced coffee products."],
		// _drop3:["Providing rock-bottom prices only to distributors in underserved areas","Collaborating with other medical clinics to guarantee low prices in low-income countries (collusion)"],
		_drop3:["Traditional advertising and contests, such as Roll Up the Rim."],
		dtext:["Lower-than-expected sales in the recent year.","Introduce enhancements such as rewards programs and mobile payments.","Traditional advertising and contests, such as Roll Up the Rim.","Possible increases in minimum wage.","Recently redesigned locations and the addition of McCafe drinks make the stores more appealing.","Multiple changes to top management in the last 10 years","Expansion of breakfast offerings from Starbucks and Taco Time.","Expand growth into China."],
		AnsTxt:["Weakness","Opportunity","Strength","Threat","Strength","Weakness","Threat","Opportunity"],
		
	},
	dd_3:{

		_drop0:["Laptop and desktop computers and printers."],
		_drop1:["Priced low to high, depending on the model and technical specifications of the equipment."],
	 _drop2:["Sold worldwide in electronics stores, department stores, and retailers. Sold consumer direct through its website. Sold business direct through its enterprise sales force."],
		// _drop3:["Providing rock-bottom prices only to distributors in underserved areas","Collaborating with other medical clinics to guarantee low prices in low-income countries (collusion)"],
		_drop3:["Spends roughly $500 million in advertising, including TV, print, and online ads. Higher advertising spending than Dell and Toshiba."],
		dtext:["Priced low to high, depending on the model and technical specifications of the equipment.","Laptop and desktop computers and printers.","Sold worldwide in electronics stores, department stores, and retailers. Sold consumer direct through its website. Sold business direct through its enterprise sales force.","Spends roughly $500 million in advertising, including TV, print, and online ads. Higher advertising spending than Dell and Toshiba."],


	}
}

var page_num=1;
var amazonCnt=0;
var HudsonsBayCnt=0;
var ctLeft, ctTop = 0;
var isIpad = navigator.userAgent.match(/iPad|iPhone/i) != null;
var isAndroid = /(android)/i.test(navigator.userAgent);
var isMacLike = navigator.platform.match(/(Mac|iPhone|iPod|iPad)/i)?true:false;
var isIOS = navigator.platform.match(/(iPhone|iPod|iPad)/i)?true:false;
var isMac = navigator.platform.toUpperCase().indexOf('MAC')>=0;
var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
var lastWord ;
const capitalizeString = string => string.split(' ').map(item => item.replace(item.charAt(0), item.charAt(0).toUpperCase())).join(' ');

$(document).ready(function(){
	var defTop = 0;
	var defCount = 0;
	//var dropTop = 35;
	//	$("._content").prepend('<div role="text" tabindex="0"  aria-label="'+ddarr['dd_'+1]['parTxt'][0]+ '" class="ques_tle">'+ddarr['dd_'+1]['parTxt'][0]+'</div>');

	
	
	//$('.ddArea').append('<div class="introTxt" role="text" tabindex="0"  aria-label="'+ddarr['dd_'+1]['parTxt'][0]+'">'+ddarr['dd_'+1]['parTxt'][0]+'</div><div class="scoreboard" role="text" tabindex="0"  aria-label="The image shows Amazon vs Hudson&#39;s Bay"><img src="images/img1a.png" alt="The image shows Amazon vs Hudson&#39;s Bay" width="530"/><div class="numQues" role="text" tabindex="0"  aria-label="'+numQues+' of 10">'+numQues+' of 10</div><div class="amazonImg" role="application" tabindex="0"  aria-label="Amazon"><img src="images/amazon.png" width="92" alt="Amazon"/></div><div class="amazonCnt" role="text" tabindex="0"  aria-label="'+amazonCnt+'">'+amazonCnt+'</div><div class="versusImg" role="application" tabindex="0"  aria-label="Versus"><img src="images/versus.png" width="30" alt="Versus"/></div><div class="HudsonsBayCnt"  role="text" tabindex="0"  aria-label="'+HudsonsBayCnt+'">'+HudsonsBayCnt+'</div><div class="HudsonsBayImg" role="application" tabindex="0"  aria-label="Hudson&#39;s Bay"><img src="images/HudsonsBay.png" width="92" alt="Hudson&#39;s Bay"/></div></div><div class="dragDiv"> </div>');
	for(var i=1;i<3;i++){		

		


		for(var j=0;j<ddarr['dd_'+i]['dtext'].length;j++){			 
			var setText = ddarr['dd_'+i]['dtext'][j];

			
			var dragpans;
	//		console.log(setText);
		
			//if(j%3 == 0){ defTop += 120;defCount=0}
		
			//$('.dropDiv').append('<div class="dropCom" role="application" aria-label="To select the box by using enter key." tabindex="0" dropans="'+anstext+'" style="width:'+setW+'px;left:'+setL+'px;top:0px;"></div>');
			//$('.dragDiv').append('<div class="dragCom" style="left:'+(imgdiv*defCount)+'px;top:'+defTop+'px;"><div role="application"  tabindex="0" class="dragImg" aria-label="This is the '+setText.replace(/(?:&nbsp;|<br>)/g,'')+' icon."><img width="60px" alt="This is the '+setText.replace(/(?:&nbsp;|<br>)/g,'')+' icon." src="images/img'+(j+1)+'.png"/></div><div class="dragtext">'+setText+'</div></div>')
// if(ddarr['dd_2'].Maintenance_Factors.indexOf(setText)!==-1){
// 	dragpans="Maintenance Factors";


// }else{
// 	dragpans= "Motivation Factors";
	

// }

//for( var mark in ddarr['dd_2']){ console.log(mark+":"+setText)};
//console.log(ddarr['dd_2'].length());


// switch(){

// case "":

// }




		$('.dragDiv').eq(i-1).append('<div class="dragCom"><div role="application"  tabindex="0" class="dragImg"  dragpans="'+setText+'" aria-label='+JSON.stringify(setText) +'>'+setText +'</div></div>')

			defTop =+defTop+10
			$('.dragDiv').eq(1).css("display","none");
			$('.dragDiv').eq(2).css("display","none");
		}

	}
	$(".leftHeader").append ('<div  class="dropDiv" > </div>');
		for(var k=0;k<ddarr['dd_1']['drtext'].length;k++){			
			
			var ansColor = ddarr['dd_1']['bgimg'][k];
		//var dropTop = ddarr['dd_'+i]['dropTop'][k];
		//var dropLeft = ddarr['dd_'+i]['dropLeft'][k];
		var dropHeight = ddarr['dd_1']['dropHt'][k];
		var AnsTxt =ddarr['dd_'+1]['AnsTxt'][k]; 
	//	var bgrotate = ddarr['dd_'+i]['bgrot'][k];
			var anstext = ddarr['dd_'+1]['drtext'][k]; 
		console.log(anstext);
			//var ansColor = ddarr['dd_'+i]['drtext'][k]; 
			lastWord = anstext.split(' ').pop();
			var treeParent = ddarr['dd_'+1]['parTxt'][k];
			var optiontxt = ddarr['dd_'+1]['option'][k];

	

	 
			
		$('.dropDiv').append('<span tabindex="0"  class="gr_" role="text"  aria-label="'+optiontxt+'">'+optiontxt+'</span><div role="application" tabindex="0"  aria-label="'+anstext+'" dropans="'+anstext+'" class="dropCom">'+anstext+'</div>');
			//dropTop =+ dropTop+70;
			// $('.leftDrop').eq(k).append('<div class="deptBg tree"><ul><li><div class="_parent"><p>'+treeParent+'</p></div> <ul><li> Manager Human Resources</li><li> Manager Human Resources</li><li> Manager Human Resources</li><li> Manager Human Resources</li><li> Manager Human Resources</li></ul></li> </ul> </div>')
			//for(var n=0; n<ddarr['dd_2']['_drop'+k].length;n++){

			//	var childText = ddarr['dd_2']['_drop'+k][n];
				
			//	console.log(ddarr['dd_2']['_drop'+k].indexOf(childText)+":"+childText+"_drop"+ddarr['dd_'+i]['drtext'][k]+":"+n);
				//$('.dropCom').eq(k).append(' <div class="emptyTxt"> </div> '); //'+childText+'
			
		
			//  }
		}

// 		for(var m=0; m<4;m++){
			
// 			var treeParent = ddarr['dd_'+1]['parTxt'][m];
// $('.leftDrop').eq(m).append('<div class="deptBg tree"><ul tabindex="-1"><li><div class="_parent"><p>'+treeParent+'</p></div> <ul class="_child" tabindex="-1"></ul> </div>')
// 			for(var n=0; n<ddarr['dd_2']['tree'+m].length;n++){
			
// 			var childText = ddarr['dd_2']['tree'+m][n];
			
			
			
			
			
//         $('._child').eq(m).append(' <li> '+childText+'</li> ');
// 		}
// 		}
		
	
	
	// $(' .leftDrop').on('click',function(e)
	// {
	//   e.stopPropagation();
	//   e.stopImmediatePropagation();

		
	//$('.contentHolder').append('<div class="scoreboard" role="text" tabindex="0"  aria-label="The image shows Amazon vs Hudson&#39;s Bay"><img src="images/img1a.png" alt="The image shows Amazon vs Hudson&#39;s Bay" width="530"/><div class="numQues" role="text" tabindex="0"  aria-label="'+numQues+' of 10">'+numQues+' of 10</div><div class="amazonImg" role="application" tabindex="0"  aria-label="Amazon"><img src="images/amazon.png" width="92" alt="Amazon"/></div><div class="amazonCnt" role="text" tabindex="0"  aria-label="'+amazonCnt+'">'+amazonCnt+'</div><div class="versusImg" role="application" tabindex="0"  aria-label="Versus"><img src="images/versus.png" width="30" alt="Versus"/></div><div class="HudsonsBayCnt"  role="text" tabindex="0"  aria-label="'+HudsonsBayCnt+'">'+HudsonsBayCnt+'</div><div class="HudsonsBayImg" role="application" tabindex="0"  aria-label="Hudson&#39;s Bay"><img src="images/HudsonsBay.png" width="92" alt="Hudson&#39;s Bay"/></div></div>');
	
		

	// });

	$('.numQues').attr("aria-label", numQues+" of 10");
	$('.numQues').text(numQues+" of 10");
	$('.amazonCnt').attr("aria-label", amazonCnt);
	$('.amazonCnt').text(amazonCnt);
	$('.HudsonsBayCnt').attr("aria-label", HudsonsBayCnt);
	$('.HudsonsBayCnt').text(HudsonsBayCnt);
	

	$('.dragDiv').eq(page_num-1).find('.dragImg').eq(numQues-1).css('display',"flex");
	$('.navHead').off('click').on('click', expand);
	
	$('.navHead').attr('trigger','click').attr('tabindex','0');
	
	function expand(){
		defId = Number($(this).attr('id').split('_')[1]);
		var getHeight = $(this).parent().height();	
		$('.nav').not('#navGr_'+defId).css('height','40px');
		$('.nav').not('#navGr_'+defId).find('.triangleR').css('transform','rotate(0)');	
		$('.ddArea').css('display','none');
		
		if(getHeight == 40){
			$(this).parent().stop().animate({
				height:350
			},500);
			$(this).parent().find('.triangleR').stop().animate(
			  {rotation: 90},
			  {
				duration: 500,
				step: function(now, fx) {
				  $(this).css({"transform": "rotate("+now+"deg)"});
				}
			  }
			);
			$(this).parent().find('.ddArea').fadeIn(1000);	
		}
		else{
			$(this).parent().stop().animate({
				height:40
			},500);
			$(this).parent().find('.triangleR').stop().animate(
			  {rotation: 0},
			  {
				duration: 500,
				step: function(now, fx) {
				  $(this).css({"transform": "rotate("+now+"deg)"});
				}
			  }
			);
		}
	}
	
	var defZ=1;
	// $('.dragImg').draggable({		
	// 	containment: $("#wrapper"),

		
		
		
	// start: function(event, ui) {
	// 		ctLeft = parseInt($(this).css('left'));
	// 		ctTop = parseInt($(this).css('top'));
	// 		$(this).css('z-index', defZ++);
			
	// 	},
    //     drag: function(event, ui) {				
	// 		ui.position.left = ui.position.left / scale1;
	// 		ui.position.top = ui.position.top / scale1;
			
	// 	},
	// 	stop: function(event,ui){
	// 		$(this).stop().animate({
	// 			top:ctTop,
	// 			left: ctLeft 
	// 		},500,function(){
				
	// 		});			
	// 	}
	// });
	$('.gr_,.dropCom').attr('trigger','click');


	$('.gr_').click(function(){

		if(isclicked) return false
		$('.gr_').css( {"background-color":"", "color":"#000"});
		$('.gr_').next().css("font-family","OpenSans");
		if($(this).next().text() ===ddarr['dd_'+page_num]['AnsTxt'][numQues-1]){
			
			console.log($(this));
			$(this).css( {"background-color": "#3A8200","color":"#fff"} );$(this).next().css("font-family","OpenSansBold");
	
			
			
			//$(this).addClass('correctColor');
				runDialog($(this));
	return false;
			}else{
	console.log("wrong");
				
	//$(this).css("background-color","#E0004D");
	//$('.dropDiv').find('.tick').remove();
	//$(this).prepend('<img class="tick" src="images/img2a.png" alt="result" />');
	//$(this).addClass('wrongColor');
	$(this).css( {"background-color":"#C61D23", "color":"#fff"});
	$(this).next().css("font-family","OpenSansBold");
			
			}
	
		
		
		


	});

	$('.dropCom').click(function(){
	//	console.log(isclicked);
		if(isclicked) return false
		//console.log(isclicked);
//$('.dropDiv').css("background-color","#3F3F3F");

console.log($(this).next().text());
$('.gr_').css( {"background-color":"", "color":"#000"});
$('.gr_').next().css("font-family","OpenSans");
		if($(this).text() ===ddarr['dd_'+page_num]['AnsTxt'][numQues-1]){
			
		console.log($(this));
	$(this).prev().css( {"background-color": "#3A8200","color":"#fff"} );$(this).css("font-family","OpenSansBold");

		
		
		//$(this).addClass('correctColor');
			runDialog($(this));
return false;
		}else{
console.log("wrong");
			
//$(this).css("background-color","#E0004D");
//$('.dropDiv').find('.tick').remove();
//$(this).prepend('<img class="tick" src="images/img2a.png" alt="result" />');
//$(this).addClass('wrongColor');
$(this).prev().css( {"background-color":"#C61D23", "color":"#fff"});
$(this).css("font-family","OpenSansBold");
		
		}



	});

	
// 	$('.dropCom').droppable({		
// 		drop: function(event, ui) {
// 			var dragId = $(ui.draggable);
			
// 			var correctAns ;
// 		var dropAns = dragId.text();
// 		var dragpPans = dragId.attr('dragpans');
// 	//console.log(dragpPans);
			
// 		//$('.dropCom').each(function(){
// 			correctAns = $(this).attr('dropans');
// 		//console.log(correctAns);
// 		//	if($(this).attr('dropans') == dragpPans){
					
// 			//	console.log(correctAns);
// 				//	$(this).find('div').css("display","block");


// 				//	console.log($(this).index());
// 			//	}
			
				
// 		//});

				
// //console.log(ddarr['dd_2']["_drop"+ddarr['dd_1']['drtext'].indexOf(correctAns)].indexOf(dragpPans));
				
						
// 		//	if(dragpPans== correctAns)
			
// 			if(ddarr['dd_'+page_num]["_drop"+ddarr['dd_1']['drtext'].indexOf(correctAns)].indexOf(dragpPans)!=-1){	
// 				//console.log($(this).find("div").length);
// 				for(var i=0;i<$(this).find("div").length;i++){
// //console.log($(this).find("div").eq(i).text());
// 					if($(this).find("div").eq(i).text()==dragpPans) return false;
// 				}
					
			
// 			 runDialog($(this), dragId, dropAns);		
			
// 				return false;
// 			}
// 			else{

			
		

// 				}
			
		
				
			
// 		}
// 	});

	
	var isEvtfire = false;
	function runDragUp(e){
		var enterKey = e.keyCode || e.which;
		//var options = $(e.target).droppable("option").disabled;
	
		//if(options) return;		
		if(enterKey == 13 || enterKey == 32){
		console.log("drag")	;
			
			ctDropId = $(e.target);
			isEvtfire =true;
		///	$('.dropDiv').css("background-color","#3F3F3F");
		//console.log(ctDropId.next().text());
		//console.log(isclicked);
		if(isclicked)return false;
		//console.log(isclicked);
		$('.dropCom').removeClass('wrongColor');
			if(ctDropId.text()===ddarr['dd_'+page_num]['AnsTxt'][numQues-1]){
				ctDropId.addClass('correctColor');
				//console.log(ctDropId.find('div').text());
				runDialog(ctDropId);
	return false;
			}else{
	//console.log(ctDropId.find('div').text());
				
	//ctDropId.css("background-color","#E0004D");
	ctDropId.addClass('wrongColor');
	
	
			}


			
	



		//	console.log(isEvtfire);
		//$('.dragImg').eq(0).focus();

	 //if($(this).find("div").css('display')=="none") 
// 	 console.log(ddarr['dd_'+page_num]["_drop"+ddarr['dd_1']['drtext'].indexOf(ctDropId.attr('dropans'))].length);

// var divLength = $(this).find("div").length ;

// 	var currDroplen =ddarr['dd_'+page_num]["_drop"+ddarr['dd_1']['drtext'].indexOf(ctDropId.attr('dropans'))].length;

// 	 if( divLength < currDroplen ){

// 		//$('#Try_again').css("display","inline-flex");
// 		$('.dragImg').not(".ui-draggable-disabled").eq(0).focus();
	
// 	}

			
	// else if(divLength  < 3 && page_num ===2 && $(this).attr('dropans')!=="Demographic:"){
	
	// 	$('.dragImg').not(".ui-draggable-disabled").eq(0).focus();
	
	// }else{
	
	
	
	// }

	
	// if(divLength < 2 && $(this).attr('dropans')=="Demographic:" && page_num===2){

	// 	$('.dragImg').not(".ui-draggable-disabled").eq(0).focus();
	
	// }

	// if(divLength < 2 && $(this).attr('dropans')=="Geographic:"){

	// 	$('.dragImg').not(".ui-draggable-disabled").eq(0).focus();
	
	// }


		}
	/*if($('.dragImg .ui-draggable-disabled').length === $('.dragImg').length ){

		$('#show_answer').css("display","none")
        $('#Try_again').css("display","block")

	}*/
	}
	
	function runDropUp(e){
			
		e.stopImmediatePropagation();
		var enterKey = e.keyCode || e.which;
	//console.log("drop")	;
		
		if(enterKey == 13 || enterKey == 32){
			var dragId = $(e.target);
			var dropEvt;
			var correctAns;
			var dropAns = dragId.text();

			var dragpPans = dragId.attr('dragpans');
		//	alert(isEvtfire);
		if(!isEvtfire) return false;
	//	if(dragId.attr("tabindex")!=0) return;
//	alert(isEvtfire);


//console.log(dropAns );
			
correctAns = ctDropId.attr('dropans');

	    //    $('.dropCom').each(function(){
			
			//	if(ctDropId.attr('dropans') ==dragpPans){
					//console.log(ctDropId.attr('dropans'));
				
				//	dropEvt =$(this);
				//	console.log(ctDropId.attr('dropans'));

				// $(this).find('div').css("display","block");
			//			correctAns = ctDropId.attr('dropans');

				
					
						
			//	}
		//	});
		//	if(ctDropId.droppable("option").disabled) return;	

		
		//	if(correctAns == dragpPans )
			if(ddarr['dd_'+page_num]["_drop"+ddarr['dd_1']['drtext'].indexOf(correctAns)].indexOf(dragpPans)!=-1){	
				
				for(var i=0;i<ctDropId.find("div").length;i++){
				//	console.log(ctDropId.find("div").eq(i).text());
										if(ctDropId.find("div").eq(i).text()==dragpPans) return false;
									}

			//	console.log(ctDropId.find("div").css('display'));
			//	if(ctDropId.find("div").css('display')=="none") 	
			if(ctDropId.find("div").length<=3)	runDialog(ctDropId, dragId,dropAns);	
				
			//	return false;
			
			}
		else{
			//runWrong("Try Again");
			//	if(ctDropId.find('div').css("display")== "none")
			
			//runWrong("Incorrect:","Placement is not correct");
			return false;
		//	dragId.css("background","#C61D23")	
			//dragId.css("color","#FFFFFF");
			//dragId.draggable("disable");
			//dragId.css("outline", "0px solid rgba(0,0,0,0.001)");
			//dragId.css("cursor","default");
		//	dragId.attr("tabindex",1);
			


		//	window.setTimeout(function(){
		//		$('.groupDrop').focus()
				
			//},10)
			
}
		//	
			//console.log(isEvtfire);
			
			isEvtfire= false;//alert(isEvtfire);
		}


		
			
		
	}

	function Showans(){

		

	}
	$('#show_answer').click(function(){


		showAnsText("block");
		$('.dragImg').css("outline", "0px solid rgba(0,0,0,0.001)");
        $('#show_answer').css("display","none")
        $('#Try_again').css("display","inline-flex")
    for(var i=0; i<$('.dragImg').length;i++){$('.dropCom').eq(i).attr('aria-label',ddarr['dd_1']['drtext'][i]);
 if($('.dragImg').eq(i).attr('tabindex')!=-1){
	
		$('.dragImg').eq(i).attr("tabindex",1);
		$('.dragImg').eq(i).draggable("disable");
		$('.dragImg').eq(i).css("color","#3F3F3F");
	 }
		

	}
	
		
		$('.dropDiv div').eq(0).focus();
		
//	$('.dragImg').css("cursor","default");
		
});
	


$('#Next_btn').click(function(){
	//showAnsText();
	//matched =0;
	console.log(resultPos);
	isclicked =false;
	//$('.dropDiv').find('.tick').remove();
	$('#Next_btn').css("display","none");
	$('.dragDiv').eq(page_num-1).find('.dragImg').eq(numQues-1).css('display',"none");
	numQues++;
	$('.numQues').text(numQues +" of 10");
	$('.numQues').attr('aria-label',numQues +" of 10");
	
	$('.dragDiv').eq(page_num-1).find('.dragImg').eq(numQues-1).css('display',"flex");
	//$('.dropDiv').eq(resultPos).css("justify-content","center");
	//$('.dragImg').attr("tabindex",3);
	//console.log(page_num);
//	$("._titleTxt").css("color","#fff");
	//$('.ques_tle').focus();
	//$('.dropDiv').css("background","#3F3F3F");
	$('.dropCom').css("cursor","pointer");
	$('.dropDiv').find('span').css("cursor","pointer");
	//$('.dropDiv').find('div').attr("tabindex",-1);
	//$('.dropDiv').find('div').unbind('focusout');
	$('.dropDiv').find('span').attr("tabindex",0);
	$('.dropDiv').find('div').attr("tabindex",0);
	$('.dropCom').prev().css( {"background-color": "","color":"#000"} );
	$('.dropDiv').find('span').css("pointer-events","");
	$('.dropCom').css("font-family","OpenSans")
	$('.dropCom').css("pointer-events","");
	$('.dropCom img').css("pointer-events","");
// if(matched===8){

// 	$('.dragDiv').eq(page_num-1).css('display',"none");
// 	$('.dragDiv').eq(page_num-1).find('.dragImg').eq(numQues-1).css('display',"none");
// 	numQues=1;
// 	page_num++;
// 	$('.dragDiv').eq(page_num-1).css('display',"flex");
// 	$('.dragDiv').eq(page_num-1).find('.dragImg').eq(numQues-1).css('display',"flex");


// }
	
// 	if(page_num==2){
// 			$('.dragDiv').eq(0).css("display","none");
// 	$('.dragDiv').eq(1).css("display","flex");
// 	//$('.dragDiv').find('.dragImg').eq(0).draggable("disable");
// $('.ques_tle').text(ddarr['dd_'+1]['parTxt'][1]);
// $('.ques_tle').attr('aria-label',ddarr['dd_'+1]['parTxt'][1]);

// 	}else if(page_num==3){


// 		$('.dragDiv').eq(1).css("display","none");
// 	$('.dragDiv').eq(2).css("display","flex");
// 	$('.ques_tle').text(ddarr['dd_'+1]['parTxt'][2]);
// $('.ques_tle').attr('aria-label',ddarr['dd_'+1]['parTxt'][2]);


// 	}else{


// 	}

 //$('.dragDiv .dragImg').draggable("enable");
// $('.dragImg').css("cursor","pointer");

//   $('.dragImg').eq(i).css("outline", "");
 
 
 //$('.dropCom').attr('aria-label','To select the box by using enter key.');

});


	$('#Try_again').click(function(){
		$('.dragDiv').eq(page_num-1).css('display',"none");
		$('.dragDiv').eq(page_num-1).find('.dragImg').eq(numQues-1).css('display',"none");
		matched =0;
		amazonCnt=0;
		HudsonsBayCnt=0;
		
		page_num=1;
		numQues=1;
		isclicked =false;
		$('.dragDiv').eq(page_num-1).css('display',"flex");
		$('.dragDiv').eq(page_num-1).find('.dragImg').eq(numQues-1).css('display',"flex");
		$('.numQues').text(numQues +" of 10");
	$('.numQues').attr('aria-label',numQues +" of 10");
	$('.amazonCnt').text(amazonCnt);
$('.amazonCnt').attr('aria-label',amazonCnt);
	

	
		$('.HudsonsBayCnt').text(HudsonsBayCnt);
		$('.HudsonsBayCnt').attr('aria-label',HudsonsBayCnt);
		//showAnsText();
		//$("._titleTxt").css("color","#fff");
		//$('#show_answer').css("display","inline-flex")
	//	$('.ques_tle').text(ddarr['dd_'+1]['parTxt'][0]);
		//$('.ques_tle').attr('aria-label',ddarr['dd_'+1]['parTxt'][0]);
	//	$('.dropDiv').css("background","#3F3F3F")
	//$('.dropDiv').find('.tick').remove();
	$('#Try_again').css("display","none")
	//$('.dropDiv').find('div').unbind('focusout');
		//$('.dragImg').css("display","block")
	//	$('.dragImg').css("visibility", "visible");
	//	$('.contentHolder').css('display',"flex");
	// $('.dragImg').draggable("enable");
	  // $('.dragImg').eq(i).css("opacity",1);
		//$('.dragImg').eq(i).css("color","#000")
		//$('.dragImg').css("cursor","pointer");
		//$('.dragImg').attr("tabindex",3);
		
		
		$('.dropDiv').find('div').attr("tabindex",0);
		$('.dropDiv').find('span').attr("tabindex",0);
		
		
		$('.dropCom').css("pointer-events","");
		$('.dropCom').css("cursor","pointer");

		$('.dropDiv').find('span').css("cursor","pointer");
	//$('.dropDiv').find('div').attr("tabindex",-1);
	//$('.dropDiv').find('div').unbind('focusout');

	$('.dropCom').prev().css( {"background-color": "","color":"#000"} );
	$('.dropDiv').find('span').css("pointer-events","");
	$('.dropDiv').find('span').css( {"background-color": "","color":"#000"} );
	$('.dropCom').css("font-family","OpenSans")
	$('.dropCom').css("pointer-events","");
		//$('.dropCom').find('span').remove();
	//	$('.dropDiv').css("justify-content","center");
	  //   $('.dragImg').eq(i).css("outline", "");
	  //$('.dragDiv').eq(1).css("display","none");
	 // $('.dragDiv').eq(2).css("display","none");
	 // $('.dragDiv').eq(0).css("display","flex");
		
		//$('.dropCom').attr('aria-label','To select the box by using enter key.');
	//	$('.dropCom').css('background','');	
		//$('.dropCom').attr("tabindex",0);
		//$('.dropCom').css("outline", "");
		// $('.leftDrop').css("background", "#DFDFDF");
		//$('.footBot').css("display","none");
	});



function showAnsText(){

	// ddarr['dd_1']['drtext'].forEach(function(item,index){

	// 	//$('.dropCom').eq(index).append('<div>'+item+'</div>');
	

	// 	$('.dropCom').eq(index).find('div').css('display',showoptn);
	// 	$('.dropCom').eq(index).attr('aria-label',item)	

	// 	if(item=="Contraction"){
	// 		$('.dropCom').eq(index).find('div').css('transform','rotate(314deg)');
			
	// 		}
	if($('.dropCom').find('div').length >1)
		{
			$('.dropCom').find('div').remove();
		}
	
	

// ddarr['dd_1']['dtext'].forEach(function(item,index){
// var hidedrag=$('.dragCom').eq(index).find('div').text();


// if(ddarr['dd_1']['drtext'].includes(hidedrag)){

// $('.dragCom').eq(index).find('div').css("opacity",0.5);

// $('.dragCom').eq(index).find('div').attr("tabindex",1);


//  }
// });

}


	
	function runWrong(title){
	//	$('.wrongPop').css("display","flex");
		$('.resultPop').css("display","flex");

    if(title=="Correct"){

     $(".resultPop h2").text(title).css("color","#3A8200").fadeIn(100).fadeOut(2000);
	
	// $(".wrongPop").css("background","#C61D23").fadeIn(100).fadeOut(2500);
	//$(".wrongPop img").attr("src","images/a4/x.png").css("width","100%").fadeIn(100).fadeOut(2500);
	
      }else{	console.log(title);
		$(".resultPop h2").text(title).css("color","#C61D23").fadeIn(100).fadeOut(2000);
	//	$(".wrongPop").css("background","#3A8200").fadeIn(100).fadeOut(2500);
//$(".wrongPop img").attr("src","images/a4/checkmark.png").css("width","100%").fadeIn(100).fadeOut(2500);
	
	  }
	
		
//$('.resultPop').css("display","block");	
//$('.resultPop h2').text(title).css("color","col");
//$('.resultPop p').text(cont);
//$('.groupDrop').fadeIn(2500);
//$('.groupDrop').fadeOut(2500);

/*$('.wrongPop').stop().animate(
		  {rotation: 1},
		  {
			duration: 500,
			step: function(now, fx) {					
			  $(this).css({"transform": "scale("+now+")"});
			},
			complete: function(){
				$('.wrongPop').stop().animate(
				  {rotation: 0},
				  {
					duration: 1000,
					
					step: function(now, fx) {					
					  $(this).css({"transform": "scale("+now+")"});
					},
					complete: function(){
						
					}
				  },500);
			}
		  }
		);*/
	}


var matched = 0;
var resultPos;
	function runDialog(ansDiv){	
		//console.log(drop,drag.attr('src'))
	//drag.remove();	

	//drag.css("display","none");
	//drag.css("visibility", "hidden");
	//runWrong("Correct");
    // drag.draggable({
	// 	revert: true,
	// 	revertDuration: 0
	// });
	isclicked =true;
	resultPos = $( ".leftHeader .dropDiv").index(ansDiv);

	console.log(ansDiv.text());
	if(ansDiv.text()==="Amazon" || ansDiv.text()==="A"  ){
amazonCnt++;
$('.amazonCnt').text(amazonCnt);
$('.amazonCnt').attr('aria-label',amazonCnt);
	}
	else{

		HudsonsBayCnt++
		$('.HudsonsBayCnt').text(HudsonsBayCnt);
		$('.HudsonsBayCnt').attr('aria-label',HudsonsBayCnt);
	}
//ansDiv.next().attr("tabindex",4);
	$('.dropCom').css("cursor","default");
	$('.dropCom').css("pointer-events","none");
	$('.dropDiv').find('span').css("pointer-events","none");
	$('.dropDiv').find('span').css("cursor","default");
	//$('.dropDiv').css("t","none");
//	$('.dropDiv').find('.tick').remove();
	//ansDiv.prepend('<img class="tick" src="images/img3b.png" alt="result" />');

	//ansDiv.css("justify-content","flex-start");
	//$('.dragImg').attr("tabindex",-1);
	//console.log(ansDiv.attr("tabindex"));
	//var tabNum=ansDiv.attr("tabindex");
$('.dropDiv').find('div').attr("tabindex",-1);
$('.dropDiv').find('span').attr("tabindex",-1);
console.log(ansDiv.next().find('div').text());
ansDiv.next('div').attr("tabindex",0);
//console.log(tabNum);
//ansDiv.next().attr("tabindex",tabNum);
	// ansDiv.next().focusout(function(){
	// 	$(this).attr("tabindex",-1);
		
	//   });

	// ansDiv.next().bind('focusout',function(){
	// 		$(this).attr("tabindex",-1);
			
	// 	  });


	$('.dropCom img').css("pointer-events","none");
//drop.attr("tabindex",-1);
		
	//drop.droppable( "option", "disabled", false );
	

	//drop.find(".emptyTxt").eq(0).text(ans).addClass("dropTxt").removeClass("emptyTxt");

	//drop.append('<div>'+ans+'</div>')
	//console.log(drop.find(".emptyTxt").length);
	
	//drop.find("div:last").remove();
	//lastWord = ans.split(' ').pop();

	//	drop.find('div').css('display','flex');
	//	console.log(drop.attr('dropans'));

	//	drop.attr('aria-label',ans)	;
	// var ansColor = ddarr['dd_1']['bgimg'][$( ".dropCom").index(drop)];
	// drop.parent().css("background", ansColor);
	// drop.prev("._titleTxt").css("color","#3F3F3F");

		
		
	//	drop.attr('aria-label',ans)	
	//	drop.css("background", "#FFFFFF");

		//drop.parent().next().css("background", "#FFFFFF");
	//drop.css("background", "#70CDFF");
	//drop.find('div').css('color','#3F3F3F')
	
	
		// drag.addClass("dropped");
        // drag.draggable( "disable" )
		// drag.css("color","#3F3F3F")
		//drag.attr("tabindex",-1);
	//	drop.css("outline", "0px solid rgba(0,0,0,0.001)");
		//drop.focus();
	//	drag.css("cursor","default");
		

matched++;
$('#Next_btn').css("display","inline-flex");

if(matched===10){
	$('#Try_again').css("display","inline-flex");
	$('#Next_btn').css("display","none");

}

// if($('.dropCom').eq(0).children().length===6){


// 	$('.dropCom').eq(0).attr("aria-label","Motivation Factors");
	


// }

// if($('.dropCom').eq(1).children().length===6){

// 	$('.dropCom').eq(1).attr("aria-label","Maintenance Factors");
	


// }


//var currDroplen =ddarr['dd_'+page_num]["_drop"+ddarr['dd_1']['drtext'].indexOf(drop.attr('dropans'))].length;

//console.log("match"+matched);

// if(drop.find("div").length === currDroplen){

// 	drop.attr('aria-label',ans)


// $('.dragImg').draggable("disable");
 //$('#Try_again').css("display","inline-flex");
// $('.contentHolder').css('display',"none");
// $('.footBot').css('bottom',"200px")

// $('.footBot').css("display","block");
// //$('#show_answer').css("display","none");
// $('.dragImg').css("cursor","default");
// $('.dragImg').css("outline", "0px solid rgba(0,0,0,0.001)");
// if($('.dragImg').attr("tabindex")==0){

// 	$('.dragImg').attr("tabindex",1);
// }


 	//matched = 0;
//}


// if(drop.find("div").length===1 && drop.attr('dropans')=="Geographic:"){

// 	drop.attr('aria-label',drop.attr('dropans'))


// }
//console.log(page_num);


// window.setTimeout(function(){
// 			drop.focus()
			
// 		},10)

// if(matched===4 && page_num===1){

// 	//$('#Try_again').css("display","inline-flex");
// 	$('#Next_btn').css("display","inline-flex");
	
// 	page_num=2;
// 	return false;

// }else if(matched===4 && page_num===2){



// 	page_num=3;

// 	return false;

// }else{



// }

// if(page_num===3 && matched===4){

// $('#Try_again').css("display","inline-flex");
	
	
// 	page_num=1;
// 	return false;

// }

// 	const resultPos = "Position "+($( ".dropCom").index(drop)+1);
	//$(".resultPop h2").css("color","#3A8200");
	//runWrong("Correct:",resultPos);
	
		
		
		//drop.find('.dragCom').css('left',0).css('top',0);
	}
	
	//$('.dropCom').off('keyup').on('keyup', runDragUp);
	//$('.dragImg').off('keyup').on('keyup', runDropUp);
	
	//$('#nav_3').trigger('click');
	
	/* $('.time_1').each(function(){
		$(this).attr('aria-label',$(this).attr('alt'));
	}) */
	
	if(isIpad){
		$('[role=application]').attr('role','text');
		$('#h1,#h2').attr('role','text');	
	}
	if(isFirefox){
		$('#wrapper').attr('role','application');
	}
	$(document).off('keyup').on('keyup', function(e){
	var enterKey = e.keyCode || e.which;	
	if($('[trigger=click]').is(':focus')){
		console.log('click');
		if(enterKey == 13 || enterKey == 32){			
			$(e.target).trigger('click');
		}
	}	
});
});

