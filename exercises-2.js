// Logic Challenge - Faktor Persekutuan Terbesar

/**
 
1. Cek angka yang lebih besar antara dua parameter.
2. Gunakan angka yang lebih besar sebagai batas looping.
3. Looping kondisi satu per satu sampai parameter habis dibagi angka tertentu.
4. Tampilkan hasil.
 
 */

function fpb(angka1, angka2) {
    // you can only write your code here!
    let lebihBesar;
    if( angka1 > angka2 ) {
        lebihBesar = angka1;
    } else {
        lebihBesar = angka2;
    }
    // console.log(lebihBesar)

    let hasil;
    for( i = 0; i < lebihBesar; i++ ) {
        for( j = 1; j < lebihBesar; j++ ) {
            if( angka1 % j === 0 && angka2 % j === 0 ) {
                hasil = j;
            }
        }
    }

    return hasil;

  }
  
  // TEST CASES
  console.log(fpb(12, 16)); // 4
  console.log(fpb(50, 40)); // 10
  console.log(fpb(22, 99)); // 11
  console.log(fpb(24, 36)); // 12
  console.log(fpb(17, 23)); // 1