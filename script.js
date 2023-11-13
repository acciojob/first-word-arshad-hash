function firstWord(s) {
    let r=s;
    if(!r.includes(" ")){
        return r;
    }
    // your code here
    if(s.length==0){return "";}
   
     let red =s.trim().split(" ");
     return (red[0]);

      
  
  }
  
  // Do not change the code below
  
   const s = prompt("Enter String:");
   alert(firstWord(s));