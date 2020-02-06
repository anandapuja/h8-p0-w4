// Logic Challenge - Check AB

/*
1. Jika indeks a atau b
2. Loop sampai bertemu a atau b selanjutnya
3. Hitung masing2 jarak a ke b, atau b ke a
4. Jika salah satu adalah 3 true
5. Selain itu false
*/

function checkAB(num) {

    var jarakA = 0;
    var jarakB = 0;
    for( i = 0; i < num.length; i++ ) { 
        if( num[i] === 'b' ) {
            for( j = i; j <= num.length; j++ ) {
                if( num[j] === 'a' ) {
                    jarakB = j - i-1;
                    // console.log(jarakB);
                }
            }
        }
        if( num[i] === 'a' ) {
            for( j = i; j <= num.length; j++ ) {
                if( num[j] === 'b' ) {
                    jarakA = j - i-1;
                    // console.log(jarakA);
                }
            }
        }
    }
    if( jarakA === 3 || jarakB === 3 ) {
        return true;
    } else {
        return false;
    }

}
  
  // TEST CASES
  console.log(checkAB('lane borrowed')); // true
  console.log(checkAB('i am sick')); // false
  console.log(checkAB('you are boring')); // true
  console.log(checkAB('barbarian')); // true
  console.log(checkAB('bacon and meat')); // false