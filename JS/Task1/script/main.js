function Fibo() {
  const f = (function * () {
    const A = [ 0, 1 ];
    let forward = true;
    for ( ; true; ) {
      const flag = yield A[0];
      if ( flag===true || flag===false ){
        forward = flag;
      }
      if ( forward ) {
        const next = A[0] + A[1];
        A.push( next );
        A.shift();
      } else {
        const prev = A[1] - A[0];
        A.unshift( prev );
        A.pop();
      }
    }
  })();
  const one = ( flag ) => f.next( flag ).value;
  return ( amount, flag ) => {
     return one( flag );
  
  }
}

output = document.getElementById('output');
button = document.getElementById('butInp');
let start = button.onclick = function getValue(){
const f1 = Fibo();
let i = +(document.getElementById('input').value);
let znak = Math.sign(i);
for(let k=((i+1)-i);k<i+1;k++){



  if (znak==-1){
    f = false;
    console.log( f1(i, f) );
  }
  else if(znak==1){
    f=true;
    console.log( f1( i, f) );
  }else{
    console.log('eror')
  }
}


}


start();