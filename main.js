function startClassification()
{
  navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/kuKWXTDPL/', modelReady);
}

function modelReady(){
  classifier.classify( gotResults);
}

function gotResults(error , results){
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    
    document.getElementById("result_label").innerHTML = 'I can hear - '+ results[0].label;
    document.getElementById("result_confidence").innerHTML = 'Accuracy - '+ (results[0].confidence*100).toFixed(2)+" %";
    document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
    document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";

    img = document.getElementById('Cat') 
    img1 = document.getElementById('Dog')
    img2 = document.getElementById('Lion')

     if (results[0].label == "Cat meowing"){
       img.src = 'noob.gif';
       img1.src = 'cute pitbull.jpg';
       img2.src = 'l.jpg';
     }
    else if (results[0].label == "Dog barking"){
      img.src = 'cat.jpg';
      img1.src = 'giphy.gif';
      img2.src = 'l.jpg'; 
    }
    else if (results[0].label == "Lion roaring"){
     img.src = 'cat.jpg';
     img2.src = 'cute pitbull.jpg';
     img3.src = 'lol.gif';
    }
    }
  }

