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
var p = null;
const AddTwoNumbers = (a,b) => {
    return a+b;
};



function main(){
        var [a,b] = (readLine().split(' '));
        a = Number.parseInt(a);
        b = Number.parseInt(b);
        console.log(AddTwoNumbers(a,b));
}
