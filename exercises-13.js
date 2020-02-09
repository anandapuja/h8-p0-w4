// Logic Challenge: Deep Sum

function deepSum (arr) {
    // Code disini
    if( arr.length === 0 ) {
        return 'No number';
    }
    else {
        // GABUNGKAN SEMUA DALAM 1 ARRAY
        var gabungan = [];
        for( i = 0; i < arr.length; i++ ) {
            for( j = 0; j < arr[i].length; j++ ) {
                for( k = 0; k < arr[i][j].length; k++ ) {
                    gabungan.push(arr[i][j][k]);
                }
            }
        }
        // JUMLAHKAN SEMUA INDEKS DALAM ARRAY HASIL PENGGABUNGAN
        var result = 0;
        for( m = 0; m < gabungan.length; m++ ) {
            result = result + gabungan[m];
        }

        // KEMBALIKAN HASIL PENJUMLAHAN
        return result;
    }

}
  
  //TEST CASE
  console.log(deepSum([
    [
      [4, 5, 6],
      [9, 1, 2, 10],
      [9, 4, 3]
    ],
    [
      [4, 14, 31],
      [9, 10, 18, 12, 20],
      [1, 4, 90]
    ],
    [
      [2, 5, 10],
      [3, 4, 5],
      [2, 4, 5, 10]
    ]
  ])); // 316
  
  console.log(deepSum([
    [
      [20, 10],
      [15],
      [1, 1]
    ],
    [
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      [2],
      [9, 11]
    ],
    [
      [3, 5, 1],
      [1, 5, 3],
      [1]
    ],
    [
      [2]
    ]
  ])); // 156
  
  console.log(deepSum([])); // No number