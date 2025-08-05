Webcam.set(
    {
        width: 350,
        height: 300,
        image_format: 'png',
        png_quality: 90
    }
)
Webcam.attach('#camera')

function displayImage(data){
    document.getElementById('result').innerHTML="<img src='" +data + "'>"
}

function take_snap(){
    Webcam.snap(displayImage)
}