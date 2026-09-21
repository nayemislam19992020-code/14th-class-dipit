isKept = true

const nayem = new Promise(function (res, rej) {
setTimeout(function() {
if (isKept) {
    res ("nayem tar kotha rakhini")
}else{
    rej("nayem tar kothas rakheni")
}
}, 3000)

})

// nayem.then(function (data) {
//     console.log(data);

// }) catch(function  (err) {
//     console.log(err);
// })

async function runNayem () {
    try {
        const result = await nayem
        console.log(result)
    }catch(err) {
            console.log(err);
    }
}
runNayem()