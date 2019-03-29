
var bmi;
$("button").click(function(){
	$("div").last().addClass("sample");
	var h=$("input").first().val();
	var w=$("input").last().val();
	if(h>0 && w>0)
	{
	bmi=w/(h*h);
	if(bmi<18)
	{
		$("h3").text("YOU ARE UNDERWEIGHT");
	}
	else if(bmi>18.5 && bmi<24.9)
	{
		$("h3").text("YOUR BMI IS NORMAL");
	}
	else if(bmi>25 && bmi<29.9)
	{
		$("h3").text("YOUR BMI IS CONSIDERED OVERWEIGHT");
	}
	else
	{
		$("h3").text("YOU ARE OBESE :(");
	}
	}
	else{
		$("h3").text("INVALID INPUT");
	}
});



