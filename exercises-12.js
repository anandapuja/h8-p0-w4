// Logic Challenge - Toko X

function countProfit(shoppers) {
  let listBarang = [ ['Sepatu Stacattu', 1500000, 10],
                     ['Baju Zoro', 500000, 2],
                     ['Sweater Uniklooh', 175000, 1]
                   ];
// console.log(pembeliSepatu.product == null);
  if( shoppers.length == 0 ) {
    return [];
  }
  //MASUKKAN SEMUA PRODUK KE HASIL SEBAGAI TEMPLATE
  var hasil = []
  for( i = 0; i < listBarang.length; i++ ) {
      temp = {
          product: listBarang[i][0],
          shoppers: [],
          leftOver: listBarang[i][2],
          profit: 0
      };
      hasil.push(temp)
  }
  // CEK SATU PER SATU SHOPPERS KE HASIL
  for( i = 0; i < shoppers.length; i++ ) {
      for( j = 0; j < hasil.length; j++ ) {
          if( shoppers[i].product == hasil[j].product && hasil[j].leftOver >= shoppers[i].amount ) {
              hasil[j].shoppers.push(shoppers[i].name)
              hasil[j].leftOver -= shoppers[i].amount
              //var tambahProfit = shoppers[i].amount * listBarang[i][1]
              hasil[j].profit += shoppers[i].amount * listBarang[j][1]
          }
      }
  }
  return hasil

}

// TEST CASES
console.log(countProfit(
  [
    {name: 'Windi', product: 'Sepatu Stacattu', amount: 2},
    {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3},
    {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}
  ]
  ));
//[ { product: 'Sepatu Stacattu',
//   shoppers: [ 'Windi', 'Vanessa' ],
//   leftOver: 5,
//   totalProfit: 7500000 },
// { product: 'Baju Zoro',
//   shoppers: [],
//   leftOver: 2,
//   totalProfit: 0 },
// { product: 'Sweater Uniklooh',
//   shoppers: [],
//   leftOver: 1,
//   totalProfit: 0 } ]

console.log(countProfit(
  [
    {name: 'Windi', product: 'Sepatu Stacattu', amount: 8},
    {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10},
    {name: 'Rani', product: 'Sweater Uniklooh', amount: 1},
    {name: 'Devi', product: 'Baju Zoro', amount: 1},
    {name: 'Lisa', product: 'Baju Zoro', amount: 1}
  ]
  ));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [ 'Windi' ],
//     leftOver: 2,
//     totalProfit: 12000000 },
//   { product: 'Baju Zoro',
//     shoppers: [ 'Devi', 'Lisa' ],
//     leftOver: 0,
//     totalProfit: 1000000 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [ 'Rani' ],
//     leftOver: 0,
//     totalProfit: 175000 } ]
console.log(countProfit(
  [
    {name: 'Windi', product: 'Sepatu Naiki', amount: 5}
  ]
  ));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [],
//     leftOver: 10,
//     totalProfit: 0 },
//   { product: 'Baju Zoro',
//     shoppers: [],
//     leftOver: 2,
//     totalProfit: 0 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [],
//     leftOver: 1,
//     totalProfit: 0 } ]
console.log(countProfit([])); //[]