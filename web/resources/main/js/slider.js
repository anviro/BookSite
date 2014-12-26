function slideBook() {
	$(document).ready(function(){
		
		var images = ["resources/main/images/imgbooks/1.jpg", "resources/main/images/imgbooks/2.jpg", 
                "resources/main/images/imgbooks/3.jpg", "resources/main/images/imgbooks/4.jpg", 
                "resources/main/images/imgbooks/5.jpg", "resources/main/images/imgbooks/6.jpg", 
                "resources/main/images/imgbooks/7.jpg", "resources/main/images/imgbooks/8.jpg", 
                "resources/main/images/imgbooks/9.jpg", "resources/main/images/imgbooks/10.jpg", 
                "resources/main/images/imgbooks/11.jpg", "resources/main/images/imgbooks/12.jpg", 
                "resources/main/images/imgbooks/13.jpg", "resources/main/images/imgbooks/14.jpg", 
                "resources/main/images/imgbooks/15.jpg", "resources/main/images/imgbooks/16.jpg"];
		var currentImage = 0;
		
		$("#img1").attr("src", images[currentImage]);
		$("#img2").attr("src", images[currentImage + 1]);
		$("#img3").attr("src", images[currentImage + 2]);
		$("#img4").attr("src", images[currentImage + 3]);
		$("#img5").attr("src", images[currentImage + 4]);
                
		$("#previous").click(function(){  
			if(currentImage != 0){
				currentImage--;
				$("#img1").attr("src", images[currentImage]);
				$("#img2").attr("src", images[currentImage + 1]);
				$("#img3").attr("src", images[currentImage + 2]);
				$("#img4").attr("src", images[currentImage + 3]);
				$("#img5").attr("src", images[currentImage + 4]);
			}
		});
              
		$("#next").click(function(){
			if(currentImage != images.length - 5){
				currentImage++;
				$("#img1").attr("src", images[currentImage]);
				$("#img2").attr("src", images[currentImage + 1]);
				$("#img3").attr("src", images[currentImage + 2]);
				$("#img4").attr("src", images[currentImage + 3]);
				$("#img5").attr("src", images[currentImage + 4]);
			}
		});
	});
}

