function writeCards(names, surprise) {
    let messages=[];
    for(let i=0; i < names.length; i++ ) {
    messages.push(`Thank you, ${names[i]}, for the wonderful ${surprise} gift!`)
    }
 return messages;
}


function countDown(number=10) {
    while(number >= 0) {
      console.log(number);
      number--;


    }
}


