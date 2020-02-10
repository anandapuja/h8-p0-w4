// Logic Challenge - Digit Perkalian Minimum

function digitPerkalianMinimum(angka) {
    // you can only write your code here!
    var hasilSementara = [];

    // CARI PENGALI TAMPUNG HASILNYA
    for( i = 0; i <= angka; i++ ) {
        for( j = angka; j >= 1; j-- ) {
            if( i * j == angka ) {
                hasilSementara.push(`${i}${j}`);
            }
        }
    }

    // SORTING KE DIGIT PALING KECIL
    for( i = 0; i < hasilSementara.length; i++ ) {
        var pembanding;
        for( j = 0; j < hasilSementara.length; j++ ) {
            if( hasilSementara[i] > hasilSementara[j] ) {
                pembanding = hasilSementara[i];
                hasilSementara[i] = hasilSementara[j];
                hasilSementara[j] = pembanding;
            }
        }
    }

    // AMBIL DIGIT PALING KECIL UNTUK RETURN
    var hasil = hasilSementara[0].length;
    return hasil;

}
  
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2