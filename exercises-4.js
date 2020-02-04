// Logic Challenge - Mencari Modus

console.log('MENCARI MODUS');

function cariModus(arr) {

    var arrHasil = []; // Tampung hasil akhir

    for( i = 0; i <= arr.length-1; i++ ) {
        for( j = 1; j <= arr.length-1; j++ ) {
            if( arr[i] === arr[j] ) {
                // arrHasil[0].push(arr[j]);
                arrHasil.push(arr[j]);
            }
            // else if(arr[i] === arr[j] && i !== j) {
            //     arrHasil[0].push(arr[j]);
            // }
        }
    }

    console.log(arrHasil);

//     if ( arrHasil.length >= 2  ) {
//         return arrHasil[0];
//     }
    
  }
  
  // TEST CASES
  console.log(cariModus([10, 4, 5, 2, 4])); // 4
  console.log(cariModus([5, 10, 10, 6, 5])); // 5
//   console.log(cariModus([10, 3, 1, 2, 5])); // -1
//   console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
//   console.log(cariModus([7, 7, 7, 7, 7])); // -1