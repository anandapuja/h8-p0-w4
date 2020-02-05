// Logic Challenge - Mencari Modus

console.log('MENCARI MODUS');

function cariModus(arr) {

    var arrHasil = []; // Tampung hasil akhir
    var indeks = 0;
    for( i = 0; i <= arr.length-1; i++ ) {
        for( j = 0; j <= arr.length-1; j++ ) {
            if( arr[i] === arr[j] ) {
                arrHasil.push(arr.slice(j,j+1));
            }
        }
    }

    console.log(arrHasil);

  }
  
  // TEST CASES
  console.log(cariModus([10, 4, 5, 2, 4])); // 4
//   console.log(cariModus([5, 10, 10, 6, 5])); // 5
//   console.log(cariModus([10, 3, 1, 2, 5])); // -1
//   console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
//   console.log(cariModus([7, 7, 7, 7, 7])); // -1