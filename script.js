const downwardBox = document.getElementById('downwardBox');
    const upwardBox = document.getElementById('upwardBox');

    downwardBox.addEventListener('input', () => {
        upwardBox.value = downwardBox.value;
    });
    function takeScreenshot() {
        html2canvas(document.getElementById("targetDiv")).then(function(canvas) {
            // Convert canvas to image
            var image = canvas.toDataURL("image/png");
            
            // Create anchor element
            var downloadLink = document.getElementById("downloadLink");
            
            // Set attributes for download
            downloadLink.href = image;
            downloadLink.download = "$GORL.png";
            
            // Trigger download
            downloadLink.click();
        });
    }    