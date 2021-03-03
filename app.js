

 const ticketCountry = [["JPN","PHL"],["BRA","UAE"],["USA","BRA"],["UAE","JPN"]];

const first = ticketCountry.map((i) => i[0]);
const seconds = ticketCountry.map((i) => i[1]);

const startPoint = first.filter((ctry) => !seconds.includes(ctry))[0];

let path = [startPoint];
let now = startPoint;
while (path.length < ticketCountry.length + 1) {
   ticketCountry.map((ctc) => {
    if (ctc[0] == now) {
      now = ctc[1];
      path.push(now);
    }
  });
}

console.log(path);



