function isGanjil(num: number, cb: any) {
  if (num % 2 === 0) {
    cb(false)
  } else {
    cb(true)
  }
}

// isGanjil(8, function (result: boolean) {
//   if (result === true) {
//     console.log('ganjil')
//   } else {
//     console.log('genap')
//   }
// })

// Promise
function isGenap(num: number) {
  return new Promise(function(resolve, reject) {
    if (num % 2 !== 0) {
      resolve(false)
    } else {
      resolve(true)
    }
    reject()
  })
}

isGenap(9).then(function(result) {
  if (result === true) {
    console.log('Genap')
  } else {
    console.log('Ganjil')
  }
})
.catch(function(error) {
  console.log('Gak tau')
})

