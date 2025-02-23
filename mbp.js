function checkName() {
    const name = document.getElementById('name').value.trim();
    const allowedNames = ["Anjum Afra", "Anjum Afra Nadia"];

    if (allowedNames.includes(name)) {
        document.getElementById('step1').style.display = 'none';
        document.getElementById('step2').style.display = 'block';
        document.getElementById('noEntry').style.display = 'none';
    } else {
        document.getElementById('noEntry').style.display = 'block';
    }
}

function showCamera() {
    document.getElementById('step2').style.display = 'none';
    document.getElementById('camera').style.display = 'block';

    navigator.mediaDevices.getUserMedia({ video: true })
        .then(function(stream) {
            const video = document.getElementById('video');
            video.srcObject = stream;
            video.onplaying = function() {
                document.getElementById('beautifulText').style.display = 'block';
            };
        })
        .catch(function(err) {
            console.error("Error accessing the camera: ", err);
        });
}

function goHome() {
    document.getElementById('camera').style.display = 'none';
    document.getElementById('step1').style.display = 'block';
    document.getElementById('beautifulText').style.display = 'none';
    const video = document.getElementById('video');
    if (video.srcObject) {
        video.srcObject.getTracks().forEach(track => track.stop());
    }
}