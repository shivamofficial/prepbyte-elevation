process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });

    main();
});

function readLine() {
    return inputString[currentLine++];
}

const countCharacters = (S) => 
{
   /* let B=[];
    let count=0;
    let t;
  
    for(let i=0; i<S.length; i++)
    {
      if(S[i]===A.toUpperCase())
      {
      count++;
      }
    }
    B.unshift(count);
    for(let j=0; j<S.length; j++)
    {
      if(S[i]===D.toUpperCase());
      {
        t++;
      }
    }
    B.push(t);
    return B;
    */
    let b1=S.match(/[A]/g).length;
    let b2=S.match(/[D]/g).length;
    let B=[b1,b2];
    return B;
};
 

function main(){
    var S = readLine();
    const op_arr = countCharacters(S);
    let op_s = '';
    for(let i = 0;i < 2;i++){
        op_s += op_arr[i] + ' ';
    }
    console.log(op_s.trim());
}
