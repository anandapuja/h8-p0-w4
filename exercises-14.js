// Logic Challenge - Naik Angkot

function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    //your code here
    var result = [];
    var bayar = 0;

    for( i = 0; i < arrPenumpang.length; i++ ) {
        for( j = 0; j < rute.length; j++ ) {
            if( arrPenumpang[i][1] === rute[j] ) {
                for( k = 0; k < rute.length; k++ ) {
                    if( arrPenumpang[i][2] === rute[k] ) {
                        bayar = (k - j) * 2000;
                        result.push({
                            'penumpang': arrPenumpang[i][0],
                            'naikDari': arrPenumpang[i][1],
                            'tujuan': arrPenumpang[i][2],
                            'bayar': bayar
                        });
                    }
                }
            }
        }
    }
    return result;
  }
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]