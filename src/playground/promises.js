


const promise = new Promise( (resolve, reject) =>{
    setTimeout( ()=> {
        resolve('This is my resolved data');

    },5000)
});


const promise2 = new Promise( (resolve, reject) =>{
    setTimeout( ()=> {
        resolve( {
            name: 'Raymond',
            age: 22,
            shoesize: 12
        });

    },5000)
});


console.log('before');



promise.then((data) => {
    console.log(data);
}).catch( (error) =>{
    console.log("Error: " + error );
});


console.log('after');
