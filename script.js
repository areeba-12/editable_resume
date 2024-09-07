// Select form elements
var form = document.getElementById('resumeform');
var resumeOutput = document.getElementById('resumeOutput');
var resumeContent = document.getElementById('resumeContent');
var generateResumeBtn = document.getElementById('generateResumeBtn');
// Function to generate resume from form data
function generateResume() {
    // Retrieve values from the form
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // Create resume content
    var resumeHTML = "\n        <div>\n            <h3>Personal Information</h3>\n            <p><strong>Name:</strong> <span contenteditable=\"true\">".concat(name, "</span></p>\n            <p><strong>Email:</strong> <span contenteditable=\"true\">").concat(email, "</span></p>\n            <p><strong>Phone:</strong> <span contenteditable=\"true\">").concat(phone, "</span></p>\n        </div>\n\n        <div>\n            <h3>Education</h3>\n            <p contenteditable=\"true\">").concat(education, "</p>\n        </div>\n\n        <div>\n            <h3>Experience</h3>\n            <p contenteditable=\"true\">").concat(experience, "</p>\n        </div>\n\n        <div>\n            <h3>Skills</h3>\n            <p contenteditable=\"true\">").concat(skills, "</p>\n        </div>\n    ");
    // Display the generated resume
    resumeContent.innerHTML = resumeHTML;
    resumeOutput.style.display = 'block';
}
// Add event listener to the generate resume button
generateResumeBtn.addEventListener('click', generateResume);

const { JSDOM } = require('jsdom');

// Create a new JSDOM instance
const dom = new JSDOM(`<form id="resumeform"></form>`);
const document = dom.window.document;

// Now you can use `document` as if you were in a browser environment
var form = document.getElementById('resumeform');
console.log(form); // Should print the form element
