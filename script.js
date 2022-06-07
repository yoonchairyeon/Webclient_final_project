var myImage=document.getElementById("mainImage");
var imageArray=["secondmorning.jpg",
"aeiou.jpg",
"dinotaeng.jpg"];
var imageIndex = 0;

function changeImage(){
	myImage.setAttribute("src",imageArray[imageIndex]);
	imageIndex++;
	if(imageIndex>=imageArray.length){
		imageIndex=0;
	}
}
setInterval(changeImage,3000);