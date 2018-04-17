/* async function greet() {
    console.log('hello');
    return "done";
}

greet().then(function (result) {
    console.log("greet done");
    console.log(result);  
})
.catch(function (err) {
    console.log(err);
}); */

/* async function f() {

    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("done!"), 10000)
    });

    let result = await promise; // wait till the promise resolves (*)

    console.log(result);
}

f(); */

function greet(time) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("done");
        }, time);
    });
}

var array = [];
array.push(greet(1000));
array.push(greet(2500));
array.push(greet(2000));
array.push(greet(1500));
array.push(greet(1000));

Promise.all(array).then(function (responses) {
    console.log("responses", responses);
})
.catch(function (err) {
    console.log("err",err);
})