document.write(" print a pattern of triangle while loop "+"<br>");
document.write("-------------------------"+"<br>");
let n=parseInt(prompt("Enter a number:"));
let i=1;
while(i<=n){
    let k=n;
    while(k>=i){
        document.write("&nbsp"+"&nbsp");
        k--;
    }
    let j=1;
    while(j<=i){
        document.write("*");
        j++;
    }
    let l=1;
    while(l<=i){
        document.write("*");
        l++;
    }
    i++;
    document.write("<br>");
}


