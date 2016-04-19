// Create an array of image paths
var images = ['images/image_1.jpg', 'images/image_2.jpg', 'images/image_3.jpg', 'images/image_4.jpg', 'images/image_5.jpg', 'images/image_6.jpg' ]
// Store currentPosition as an image
var currentPosition = 0; 


// When the user click on the #next Button 

$('#next').on('click', function(){
//Add one to the current position 
	$('#prev').removeAttr('disabled')
	currentPosition = currentPosition + 1;
// if current position is the last index
	// 	disable the next button
	if (currentPosition === images.length - 1){
		$('#next').attr('disabled', 'true');
	}
// Change the src of the $image-to-vote-on to image at that index
	$('#image-to-vote-on').attr('src', images[currentPosition]);
});

// When you click on the previous button
$('#prev').on('click', function(){
	$('#next').removeAttr('disabled')
// 	It displays the current image in the list - 1 
	currentPosition = currentPosition - 1;
// 	When you reach image 0 it stops
// 	to prevent everyone to click add a disabled attribute to the #previous button
	if (currentPosition === 0){
		$('#prev').attr('disabled', 'true');
	}
	$('#image-to-vote-on').attr('src', images[currentPosition]);
	
});




