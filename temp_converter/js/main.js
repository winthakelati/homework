
// First Button
// When the user clicks the #fahrenheit_to_celsius button
$('#fahrenheit_to_celsius').on('click', function(){
	// Get the value from #temperature and store in variable fahrenheit
	var fahrenheit = $('#temperature').val();
    // Convert that value to a number
	fahrenheit = parseFloat(fahrenheit);
    // Convert to celsius and store in variable celsius
   var celsius = (fahrenheit - 32) / 1.8;
    // Display in #result
    $('#result').html(celsius+'&#8451;'+' = '+fahrenheit+'&#8457;');
    // Clear the Value
    $('#result').val('');
});

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
  $('#result').val('');
});

