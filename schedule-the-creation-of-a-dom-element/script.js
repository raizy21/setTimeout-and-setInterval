/*
Schedule the creation of a DOM element
Objective:

Use setTimeout to schedule the creation of a DOM element that displays a promotion message 
styled with Tailwind CSS.

Instructions:

Use setTimeout to schedule the creation of a promotion message after 3 seconds.
Create a new DOM element (e.g., a <div>) for the promotion message.
Add some text to the promotion message, 
like "Special Offer: Get 20% off your next purchase!".
Use Tailwind CSS to style the message with a background color, 
padding, rounded corners, and centered text.
Append the new element to the message-container div.
*/

//container
const container = document.querySelector("#message-container");

setTimeout(() => {
  //create h2
  const h2 = document.createElement("h2");
  h2.textContent = "Special Offer: Get 20% off your next purchase!";
  h2.className = 'bg-red-500 text-white p-4 rounded-lg shadow-lg max-w-md mx-auto'
  //append
  container.appendChild(h2);
}, 3000);

// //msg
// const promotionMsg = "Special Offer: Get 20% off your next purchase!";

// //append
// const createMsg = () => {
//   //create p
//   const paragraph = document.createElement("p");
//   paragraph.textContent = promotionMsg;
//   paragraph.classList.add("text-xl", "font-bold", "rounded-xl");
//   container.classList.add("bg-slate-200", "py-8", "rounded-xl");
//   container.appendChild(paragraph);
// };

// //timeout 3000
// setTimeout(createMsg, 3000);
