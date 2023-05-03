//https://teachablemachine.withgoogle.com/models/hF7_bT2tE/
Webcam.set({
    width: 320,
    height: 240,
    image_format: 'jpeg',
    jpeg_quality: 90
 });
 Webcam.attach( '#camera' );
 function take_snapeshot(){
    Webcam.snap( function(data_uri) {
        // display results in page
        document.getElementById('result').innerHTML = 
         '<img id="img1" src="'+data_uri+'"/>';
    } );
 }
 console.log("hii")
 console.log("ml5 version is "+ml5.version)
 classfier=ml5.imageClassifier("https://storage.googleapis.com/tm-model/q4HzxmnPf/model.json",modalLoaed)
 function modalLoaed(){
    console.log("modal is Loaded")
 }
 function check(){
image1=document.getElementById("img1");
classfier.classify(image1,gotResults);

 }
 function gotResults(error,result){
if (error){
   console.log (error)
}
else{
   console.log (result)
   prediction1=result[0].label;
   
   document.getElementById("result_emotion_name").innerHTML=prediction1;
   if(prediction1=="Victory "){
    document.getElementById("update_emoji").innerHTML="&#9996";
  }
  if(prediction1=="Best"){
   document.getElementById("update_emoji").innerHTML="&#128077";
  }
  if(prediction1=="Amazing "){
   document.getElementById("update_emoji").innerHTML="&#128076";
  }
  
  
  
  

}
 }