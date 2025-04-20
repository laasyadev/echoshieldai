/************
.web.js file
************

Backend '.web.js' files contain functions that run on the server side and can be called from page code.

Learn more at https://dev.wix.com/docs/develop-websites/articles/coding-with-velo/backend-code/web-modules/calling-backend-code-from-the-frontend

****/

/**** Call the sample multiply function below by pasting the following into your page code:

import { multiply } from 'backend/new-module.web';

$w.onReady(async function () {
   console.log(await multiply(4,5));
});



// backend/aiHandler.jsw
import { fetch } from 'wix-fetch';

export async function getOpenAIResponse(userInput) {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer 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"
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: userInput }],
            temperature: 0.7
        })
    });

    const data = await response.json();
    return data.choices[0].message.content;
}
****/