// Logic Challenge - Mencari Modus

function cariModus(arr) {

    // KELOMPOKKAN ANGKA YANG SAMA DAN JUMLAHKAN
    var result = [];
    for( i = 0; i < arr.length; i++ ) {
        var cek = false;
        for( j = 0; j < result.length; j++ ) {
            if( arr[i] === result[j][0] ) {
                result[j][1]++;
                cek = true;
            }
        }
        if ( !cek ) {
            result.push([arr[i], 1]);
        }
    }

    // KONDISI JIKA TIDAK DITEMUKAN MODUS
    var hasilHitung = 0;
        for( k = 0; k < result.length; k++ ) {
        if ( result[k][1] === 1 ) {
            hasilHitung += 1;
        }
    }
    if ( hasilHitung === result.length ) {
        return -1;
    }

    // KONDISI JIKA DITEMUKAN MODUS
    if( result.length === 1 ) {
        return -1
    }
    else {
        var hasil;
        var penampung = 0;
        for( i = 0; i < result.length; i++ ) {
            if( result[i][1] > penampung ) {
                penampung = result[i][1];
                hasil = result[i][0];
            }
        }
        return hasil
    }

}

  
  // TEST CASES
  console.log(cariModus([10, 4, 5, 2, 4])); // 4
  console.log(cariModus([5, 10, 10, 6, 5])); // 5
  console.log(cariModus([10, 3, 1, 2, 5])); // -1
  console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
  console.log(cariModus([7, 7, 7, 7, 7])); // -1