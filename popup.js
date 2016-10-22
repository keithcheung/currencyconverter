$(document).ready(function(){
	$.getJSON("http://api.fixer.io/latest", function (json) {
		console.log(json);
		var html = "<option>EUR</option>";
		console.log(json.rates);
		$.each(json.rates, function(key, value) {
			html += "<option>" + key + "</option>";
		});
		//console.log(html);
		$(".currency").html(html);
		$("#convert").click(function(){
			let newPrice = 0;
			const option1 = $(".option1 option:selected").text();
			const option2 = $(".option2 option:selected").text();
			const price = $(".price").val();
			const rate1 = (json.rates[option1]);
			const rate2 = (json.rates[option2]);
			//console.log(option1 + price1 + " " + option2 + price2);
			if (option1 == "EUR" && option2 == "EUR") {
				newPrice = price;
			}
			else if (option1 == "EUR") {
				newPrice = price * rate2;
			}
			else if (option2 == "EUR") {
				newPrice = price / rate1;
			}
			else {
			newPrice = ((price / rate1) * rate2); // change to base case
			}
			strReturn = "Converted value is <b>" + newPrice.toFixed(2) + " </b>" + option2;
			$(".main-statement").html(strReturn);
			console.log (newPrice);

		});

	});
});
