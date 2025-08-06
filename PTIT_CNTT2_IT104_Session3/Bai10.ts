
let sentence: string = "hello world apple banana orange pumpkin cucumber";
function only1(word: string): boolean {
  let appear: string[] = [];
  for (let i = 0; i < word.length; i++) {
    let character:string = word.charAt(i);
    if (appear.includes(character)) {
      return false; 
    }
    appear.push(character);
  }

  return true; 
}
function longest(sentence: string): string {
  let splitsen = sentence.split(" "); 
  let rs1 = "";

  for (let word of splitsen) {
    if (only1(word) && word.length > rs1.length) {
      rs1 = word;
    }
  }

  return rs1;
}
let rs2 = longest(sentence);
console.log(rs2);
