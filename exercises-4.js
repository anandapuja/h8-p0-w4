// Logic Challenge - Mencari Modus

console.log('MENCARI MODUS');

function cariModus(arr) {

    for( i = 0; i < arr.length; i++ ){
        var sorting = [];
        for( j = 0; j < arr.length; j++ ) {
            if( arr[i] < arr[j] ) {
                sorting = arr[j]
                arr[j] = arr[i];
                arr[i] = sorting;
            }
        }
    }

    var hasil = [[]]
    var kosong;
    for( i = 0; i < arr.length; i++ ) {
        for( j = 0; j < arr.length; j++ ) {
            if( arr[i] == arr[j] && i != j ) {
                arr.split('');
            }
            else {
                kosong = -1;
            }
        }
    }


    console.log(hasil);
    console.log(kosong)

    }

  
  // TEST CASES
//   console.log(cariModus([10, 4, 5, 2, 4])); // 4
  console.log(cariModus([5, 10, 10, 6, 5])); // 5
//   console.log(cariModus([10, 3, 1, 2, 5])); // -1
//   console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
//   console.log(cariModus([7, 7, 7, 7, 7])); // -1