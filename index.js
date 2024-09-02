// import inquirer from 'inquirer';
// import qr from 'qr-image';
// import fs from 'fs';
//
// inquirer
//   .prompt([
//     {
//       type: 'input',
//       name: 'URL',
//       message: 'Enter the URL:',
//       validate: function(value) {
//         var pass = value.match(
//           /^(ftp|http|https):\/\/[^ "]+$/
//         );
//         if (pass) {
//           return true;
//         }
//         return 'Please enter a valid URL';
//       }
//     }
//   ])
//   .then((answers) => {
//     const url = answers.URL;
//
//     // Generate QR code image
//     const qr_svg = qr.image(url);
//     qr_svg.pipe(fs.createWriteStream('qr_img.png'));
//     console.log('QR code image saved as qr_img.png');
//
//     // Save URL to a text file
//     fs.writeFile('URL.txt', url, (err) => {
//       if (err) throw err;
//       console.log('The URL has been saved to URL.txt');
//     });
//
//   })
//   .catch((error) => {
//     if (error.isTtyError) {
//       console.error('Prompt couldn\'t be rendered in the current environment');
//     } else {
//       console.error('An error occurred:', error);
//     }
//   });

$(document).ready(function() {
    $('#generateBtn').click(function() {
        // Get the URL from the input field
        const url = $('#urlInput').val();

        // Check if the input is not empty
        if (url.trim() === "") {
            alert("Please enter a URL.");
            return;
        }

        // Generate the QR code
        QRCode.toDataURL(url, { width: 300 }, function(err, url) {
            if (err) {
                console.error(err);
                alert("An error occurred while generating the QR code.");
                return;
            }
            // Set the src attribute of the img tag to the generated QR code
            $('#qrImage').attr('src', url);
        });
    });
});
