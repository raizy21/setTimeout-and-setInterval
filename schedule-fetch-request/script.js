/* 
Schedule a fetch request
Objective: Use setInterval to schedule a fetch request to the Pokémon API and increment a counter. For every request, output an object with the name of the Pokémon and its ID.

Instructions:

Create a variable counter and set it to 1.
Use setInterval to schedule a fetch request to the Pokémon API every second.
The fetch request URL should be https://pokeapi.co/api/v2/pokemon/ 
followed by the current value of counter.
Fetch the data and extract the Pokémon's name and ID.
Output an object with the Pokémon's name and ID to the console.
Increment the counter after each fetch request.
Stop the interval after 150 requests. We only want the OG Pokémon! :D 
 */

// Create a variable counter and set it to 1.
let counter = 1;

//url
const baseUrl = "https://pokeapi.co/api/v2/pokemon/";

const myInterval = setInterval(async () => {
  try {
    const res = await fetch(`${baseUrl}${counter}`);
    if (!res.ok) {
      throw new Error("Something went wrong!");
    }

    const { name, id } = await res.json();
    const pokemon = { name: name, id: id };

    console.log(pokemon);
    counter++;
    if (counter > 150) clearInterval(myInterval);
  } catch (error) {
    console.log(error);
  }
}, 1000);

// //create output
// const logPokerPer = async (intervalID) => {
//   const pokemon = await fetchPokemon(counter);
//   console.log(pokemon.name + " | " + pokemon.id);
//   counter++;
//   if (counter > 150) {
//     clearInterval(intervalID);
//   }
// };

// //setInterval
// const intervalID = setInterval(logPokerPer, 1000);

// //fetch async / await
// const fetchPokemon = async (id) => {
//   const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
//   if (!res.ok) {
//     throw new Error("Something went wrong!");
//   }
//   const data = await res.json();
//   return data;
// };

// let counter = 1;
// // console.log(counter);
// const counterNumberApi = async () => {
//   try {
//     while (counter < 150) {
//       const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${counter}`);
//       // console.log(res);
//       const data = await res.json();
//       // console.log(data);
//       console.log("Name :", data.name);
//       console.log("Id: ", data.id);
//       counter++;
//       console.log(counter);
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };
// const intervalID = setInterval(counterNumberApi, 3000);
