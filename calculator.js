// let display = document.getElementById('display');

// let buttons = Array.from(document.getElementsByClassName('button'));

// buttons.map(button => {
//     button.addEventListener('click', (e) => {
//         switch(e.target.innerText){
//             case 'C':
//                 display.innerText = '';         //emptry string ''
//                 break;                          //break the C also dont display
//             case '←': 
//                 if(display.innerText){
//                     display.innerText = display.innerText.slice(0, -1);
//                 }
//                 break;
            
//             case '=':
//                 try{
//                     display.innerText = eval(display.innerText);
//                 } catch{
//                     display.innerText = 'Error';
//                 }
//                 break;
//             default: 
//                  display.innerText += e.target.innerText;
//         }
//     }); 
// });
let display = document.getElementById("display");

let buttons = Array.from(document.getElementsByClassName("button"));

const messages = [
  "Unblock nako JAY ANN BORBON ROBLES😭😭😭",
  "I LOVE YOU JAY ANN BORBON ROBLES, please unblock me😭❤",
  "I miss you so much, my love, please unblock me😭❤",
  "Please forgive me, JAY ANN BORBON ROBLES, please unblock me😭❤",
  "I'm sorry for everything, I love you more than words can express, please unblock me😭❤",
  "You are the love of my life, please come back to me, please unblock me😭❤",
  "I'm here waiting for you, my heart belongs to you, please unblock me😭❤",
  "I promise to make things right, please unblock me, please unblock me😭❤",
  "I can't imagine my life without you, I love you JAY ANN BORBON ROBLES, please unblock me😭❤",
  "You're my everything, I'm sorry for hurting you, please unblock me😭❤",
];

let messageShown = false; // Flag to track if message was shown

buttons.map((button) => {
  button.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "C":
        display.innerText = ""; // Clear display
        messageShown = false; // Reset the flag
        break;
      case "←":
        if (display.innerText) {
          display.innerText = display.innerText.slice(0, -1);
        }
        messageShown = false; // Reset the flag
        break;
      case "=":
        if (display.innerText.trim().length > 0 && !messageShown) {
          // Check if there's content and message wasn't shown
          try {
            // Randomly select a message from the array
            const randomMessage =
              messages[Math.floor(Math.random() * messages.length)];
            display.innerText = randomMessage;
            messageShown = true; // Set the flag to true after showing the message
          } catch {
            display.innerText = "Unblock nako please❤❤❤😭😭😭";
          }
        }
        break;
      default:
        if (messageShown) {
          display.innerText = ""; // Clear display if a message was shown and a new character is entered
          messageShown = false; // Reset the flag
        }
        display.innerText += e.target.innerText;
    }
  });
});
