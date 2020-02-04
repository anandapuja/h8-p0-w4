// Logic Challenge - Mencari Median

function cariMedian(arr) {

    var ganjil = Math.floor(arr.length / 2); // Cari nilai tengah untuk ganjil

    var hasil;
    if ( arr.length % 2 == 1 ) { 
        hasil = arr[ganjil]; // Kondisi ganjil adalah nilai indeks dari var ganjil
    }
    else { // Untuk yang genap tinggal isi indeks variabel ganjil kurang 1 + isi indeks ganjil bagi 2
        hasil = (arr[ganjil - 1] + arr[ganjil]) / 2; // Pakai kurung untuk jumlah, jika tidak, pembagian akan dieksekusi lbh dulu
    }
    return hasil; // Kembalikan hasil
  }
  
// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5