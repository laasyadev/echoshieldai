import { analyzeMessage, analyzeImage } from 'backend/chatbot';

let uploadedImageUrl = null; // store uploaded image URL

$w.onReady(function () {

  // When user selects a file
  $w('#uploadButton').onChange(() => {
    if ($w('#uploadButton').value.length > 0) {
      $w('#chatBox').text += "\n\nUploading image...\n";

      // Start upload
      $w('#uploadButton').startUpload()
        .then((uploadedFile) => {
          uploadedImageUrl = uploadedFile.url;
          $w('#chatBox').text += `\n\nImage uploaded successfully.\n`;
        })
        .catch((uploadError) => {
          $w('#chatBox').text += `\n\nUpload failed: ${uploadError.message}\n`;
        });
    }
  });

  // Function to send user message
  async function sendMessage() {
    const userInput = $w('#userInput').value;
    if (!userInput) return;

    $w('#chatBox').text += `\n\nYou: ${userInput}\n`;
    const response = await analyzeMessage(userInput);
    $w('#chatBox').text += `\n\nEcho: ${response}\n`;
    $w('#userInput').value = "";
  }

  // Send on button click
  $w('#sendButton').onClick(sendMessage);

  // Send on Enter key
  $w('#userInput').onKeyPress((event) => {
    if (event.key === "Enter") {
      sendMessage();
    }
  });

  // Analyze Image button
  $w('#analyzeImageButton').onClick(async () => {
    if (!uploadedImageUrl) {
      $w('#chatBox').text += "\n\nPlease upload an image first.\n";
      return;
    }

    $w('#chatBox').text += "\n\nAnalyzing uploaded image...\n";
    const analysis = await analyzeImage(uploadedImageUrl);
    $w('#chatBox').text += `\n\nAnalysis: ${analysis}\n`;
  });

});
