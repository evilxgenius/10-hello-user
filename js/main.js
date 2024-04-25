// userName can be:
//  - null - if cancel
//  - '' - if press OK when input is empty
const userName = prompt("Enter your name");

if (userName) alert(`Hello, ${userName}! How are you?`);
