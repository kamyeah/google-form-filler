Description
This script automates filling out a Google Form with random responses. It uses Google Apps Script (JavaScript) to interact with Google Forms. The script is designed to randomly select answers for multiple-choice and checkbox questions while leaving text and paragraph fields blank. Additionally, for questions with options "Present" or "Absent," it will always choose "Absent."

The script is intended to be used for testing purposes or simulating responses to a form. It does not submit any personalized data but randomly selects answers to demonstrate form submission automation.

Features
Randomized Answers: Automatically fills multiple choice and checkbox questions with random selections.

Blank Text Fields: Automatically leaves text and paragraph fields empty.

Absent Selection: For questions asking "Present" or "Absent," it always selects "Absent."

Simulated Submissions: The script submits 100 responses (this number can be adjusted) with randomized answers to the form.

Requirements
A Google Form is created in your Google account.

The FormApp service is enabled in Google Apps Script.

The Google Form ID for the target form.

How to Use
Open Google Apps Script:

Go to your Google Form.

Click on the three dots at the top right of the form and select Script Editor.

Copy the Code:

Copy the provided code into the script editor.

Replace "YOUR_FORM_ID" with your Google Form ID.

Run the Script:

Save and run the script to start submitting random responses to your form.
