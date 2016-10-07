// function getTempCallback(location, callback) {
//     callback(undefined, 78);
//     callback("city not found");
// }

// getTempCallback('Leicester', function(err,temp) {
//     if(err) {
//         console.log('error', err)
//     } else {
//         console.log('success',temp)
//     }
    
// });

// //promises

// function getTempPromise(location) {
//     return new Promise(function(resolve, reject) {
//       setTimeout(function() {
//           resolve(79);
//         reject('City not found');  
//       }, 2000);
       
//     });
// }



// getTempPromise("leicester").then(function(temp) {
//     console.log('promise success',temp);
// }, function(err) {
    
//     console.log('promise error', err);
// })

//CHALENGE AREA

function addPromise(a,b) {
    return new Promise(function(resolve, reject) {
        if(typeof a ==='number' && typeof b ==='number') {
            if(a<5 && b<5) {
                resolve(a*b);
            }
            if(a>b && a>5) {
                resolve(a-b);
            }
               setTimeout(function() {
                   resolve(a+b);
            
               },2000);
               
        } else {
            
            setTimeout(function() {
                reject('A & B need to be numbers! Please enter only numbers.');
            },2000);
        }
        
    });
}

var jeden = 2;
addPromise(6,jeden).then(
    function (resolve) {
        console.log('success',resolve);
    }, 
    function (reject) {
        console.log('error',reject)
    }

);
















