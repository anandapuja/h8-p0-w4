// Logic Challenge: Graduates

function graduates (students) {
    // Code disini
    // VAR AKHIR (RESULT)
    var result = {};
    for( i = 0; i < students.length; i++ ) {
        // JIKA CLASS BELUM ADA DI RESULT, BUAT KEY NAME, ISI ARRAY KOSONG, PUSH DATA YANG BELUM ADA
        if( result[students[i].class] == null ) {
          result[students[i].class] = [];
          result[students[i].class].push({
            name: students[i].name,
            score: students[i].score
          })
        }
        // JIKA CLASS SUDAH ADA, PUSH YANG PUNYA SCORE LEBIH DARI 75 KE DALAM OBJECT CLASS
        else if( students[i].score > 75 ) {
          result[students[i].class].push({
            name: students[i].name,
            score: students[i].score
        })
    }
  }
 
  // KEMBALIKAN RESULT
  return result;

}
  
  console.log(graduates([
    {
      name: 'Dimitri',
      score: 90,
      class: 'foxes'
    },
    {
      name: 'Alexei',
      score: 85,
      class: 'wolves'
    },
    {
      name: 'Sergei',
      score: 74,
      class: 'foxes'
    },
    {
      name: 'Anastasia',
      score: 78,
      class: 'wolves'
    }
  ]));
  
  // {
  //   foxes: [
  //     { name: 'Dimitri', score: 90 }
  //   ],
  //   wolves: [
  //     { name: 'Alexei' , score: 85 },
  //     { name: 'Anastasia', score: 78 }
  //   ]
  // }
  
  console.log(graduates([
    {
      name: 'Alexander',
      score: 100,
      class: 'foxes'
    },
    {
      name: 'Alisa',
      score: 76,
      class: 'wolves'
    },
    {
      name: 'Vladimir',
      score: 92,
      class: 'foxes'
    },
    {
      name: 'Albert',
      score: 71,
      class: 'wolves'
    },
    {
      name: 'Viktor',
      score: 80,
      class: 'tigers'
    }
  ]));
  
  // {
  //   foxes: [
  //     { name: 'Alexander', score: 100 },
  //     { name: 'Vladimir', score: 92 }
  //   ],
  //   wolves: [
  //     { name: 'Alisa', score: 76 },
  //   ],
  //   tigers: [
  //     { name: 'Viktor', score: 80 }
  //   ]
  // }
  
  
  console.log(graduates([])); //{}