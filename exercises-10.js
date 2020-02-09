// // Logic Challenge - Change Me!

function changeMe(arr) {
    // you can only write your code here!

    function umur() {
        if( arr[i][3] > 2020 || arr[i][3] === undefined ) {
            return 'Invalid Birth Year';
        } else {
            return 2020 - arr[0][3];
        }
    }

    if( arr.length === 0 ) {
        console.log(`""`);
    }
    else {
        for( i = 0; i < arr.length; i++ ) {
            
            var data = {
                firstName: arr[i][0],
                lastName: arr[i][1],
                gender: arr[i][2],
                age: umur()
                }

            console.log(`${i+1}. ${arr[i][0]} ${arr[i][1]}: `);
            console.log(data);

        }
    }

}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 37 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""