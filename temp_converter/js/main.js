
// First Button
// When the user clicks the #fahrenheit_to_celsius button
$('#fahrenheit_to_celsius').on('click', function(){
	
	// Get the value from #temperature and store in variable fahrenheit
	var fahrenheit = $('#temperature').val();
    // Convert that value to a number
	fahrenheit = parseFloat(fahrenheit);
	// if the #temperature is not a number, then hide the result and show the .error-message instead.
	
    // Convert to celsius and store in variable celsius
   	var celsius = (fahrenheit - 32) / 1.8;

 // Display in #result
    $('#result').html(celsius+'&#8451;'+' = '+fahrenheit+'&#8457;');
    // Clear the Value
    $('#temperature').val('');
// Call the changeBackgroundColor function
	changeBackgroundColor(fahrenheit);



 //     $('body').removeClass('')
 //     if (isNaN(fahrenheit)) {
	// 	$('#result').hide()
	// 	$('.error-message').show()
	// };
	// else if()

});

// // Adding an Error Message
// 	
// Change background color

// Second Button C to F
// when the celsius_fahrenheit button is clicked 
$('#celsius_to_fahrenheit').on('click', function(){
// get the value of #temperature and store it in a variable
	var celsius = $('#temperature').val();
// convert it into an integer 
	celsius = parseFloat(celsius);
// multiply stored value of temparature by 5/9
	var fahrenheit = (celsius * 1.8) + 32;
// Display in #result
    $('#result').html(fahrenheit+'&#8457;'+' = '+celsius+'&#8451;');
// Clear the value
  	$('#temperature').val('');	
// Call the changebackground color function
	changeBackgroundColor(fahrenheit);
});

function changeBackgroundColor (temperature){
	if (temperature <= 32){
		$('body').attr('class','cold');
	}
	else if (temperature => 50){
		$('body').attr('class','hot');
	}
	else {
		$('body').attr('class','mild');
	}
};


// add a class to the body
// // -- ^^ Sarah note for above line: you can add a class to the body to change the background color
// // // // else if it is greater than 40 degrees fahrenheit 
// // // } else if var fahrenheight  (>20){
// // // // 	give the whole page ('*') a special class
// // // } else{
// // // 	body.style.backgroundColor:"yellow";
// // // 	// make the backround the same
// // // }