const names = [ 'Lisa', 'Kaitlin', 'Jan' ];
const occasion = ['surprise'];

function writeCards(names, occasion) {
    let thankYouCards = []
  for (let i = 0; i < names.length; i++) {
    thankYouCards.push(`Thank you, ${names[i]}, for the wonderful ${occasion} gift!`);
  }
  return thankYouCards;
}





function countDown(number) {
    while (0 <= number) {
      console.log(number--);
    }
  }
  
  countDown(10);