// Logic Challenge - Mengurutkan Abjad

function urutkanAbjad(str) {
    // you can only write your code here!
    var alfabet = 'abcdefghijklmnopqrstuvwxyz'; // Buat var pengecek
    var hasil = '';
    for( i = 0; i <= alfabet.length-1; i++ ) { // Alfabet sebagai pembanding
        for( j = 0; j <= str.length-1; j++ ) {
            if ( alfabet[i] === str[j] ) { // Jika ada Alfabet sama dengan str
                hasil += alfabet[i]; // Masukkan ke var hasil
            }
        }
    }

    return hasil; // Kembalikan hasil

  }
  
  // TEST CASES
  console.log(urutkanAbjad('hello')); // 'ehllo'
  console.log(urutkanAbjad('truncate')); // 'acenrttu'
  console.log(urutkanAbjad('developer')); // 'deeeloprv'
  console.log(urutkanAbjad('software')); // 'aeforstw'
  console.log(urutkanAbjad('aegis')); // 'aegis'