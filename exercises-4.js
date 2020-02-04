// Logic Challenge - Mencari Modus

console.log('MENCARI MODUS')

function cariModus(arr) {

    var arrHasil = []; // Tampung hasil akhir
    for( i = 0; i < arr.length; i++ ){ // Looping start perkalian masing2 indeks
        var hasilKali = 1;
        for( j = 0; j < arr.length; j++){ // Loopinging hasil kalinya
            if( j == i ){
                hasilKali += 1;
            }
        }
        arrHasil.push(hasilKali); // Masukkan tiap nilai akhir hasil kali ke var penampung
    }
    return arrHasil;
    
  }
  
  // TEST CASES
  console.log(cariModus([10, 4, 5, 2, 4])); // 4
//   console.log(cariModus([5, 10, 10, 6, 5])); // 5
//   console.log(cariModus([10, 3, 1, 2, 5])); // -1
//   console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
//   console.log(cariModus([7, 7, 7, 7, 7])); // -1