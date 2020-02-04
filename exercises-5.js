// Logic Challenge - Ubah Huruf

function ubahHuruf(kata) {

    var alfabet = 'abcdefghijklmnopqrstuvwxyz'; // Buat var pengecek
    var hasil = '';
    for(j=0;j<=kata.length-1;j++){
        for(i=0;i<=alfabet.length-1;i++){ // Cek satu satu dengan var pengecek
            if(alfabet[i] === kata[j]) {
                hasil += alfabet[i+1]; // Jika ada, isi hasil dengan 1 huruf setelah var pengecek
            }
        }
    }
    return hasil; // Kembalikan hasil
    
  }
  
  // TEST CASES
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu