// Logic Challenge - Shopping Time!

function shoppingTime(memberId, money) {
    // you can only write your code here!

    var barang = ['Sepatu Stacattu', 'Baju Zoro', 'Baju H&N', 'Sweater Uniklooh', 'Casing Handphone'];
    var harga = [1500000, 500000, 250000, 175000, 50000];
    var kembalian = money;
    var beli = [];

    for( i = 0; i < harga.length; i++ ) {
        if( money > harga[i] ) {
            kembalian = kembalian - harga[i];
            beli.push(barang[i]);
        }
    }

    if( memberId === '' || money === undefined ) {
        return 'Mohon maaf, toko X hanya berlaku untuk member saja';
    }
    else if( money < harga[4] ) {
        return 'Mohon maaf, uang tidak cukup';
    }
    else {
        var dataMember = {
            memberId: memberId,
            money: money,
            listPurchased: beli,
            changeMoney: kembalian
        }
        return dataMember;
    }

  }
  
  // TEST CASES
  console.log(shoppingTime('1820RzKrnWn08', 2475000));
    //{ memberId: '1820RzKrnWn08',
    // money: 2475000,
    // listPurchased:
    //  [ 'Sepatu Stacattu',
    //    'Baju Zoro',
    //    'Baju H&N',
    //    'Sweater Uniklooh',
    //    'Casing Handphone' ],
    // changeMoney: 0 }
  console.log(shoppingTime('82Ku8Ma742', 170000));
  //{ memberId: '82Ku8Ma742',
  // money: 170000,
  // listPurchased:
  //  [ 'Casing Handphone' ],
  // changeMoney: 120000 }
  console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
  console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
  console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja