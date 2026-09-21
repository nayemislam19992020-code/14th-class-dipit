const studentuinfo = {
    name: "Nayem",
    gender: "male",
    isMarried: true,
    ChildrenCount: 1,
    protfolio: true,
    cPlausPlaus: false,
    bestFrind: ["Shade khan", "joy", "soikoat"],
    city: "Shiragon",

    maininfo: function () {
        return `${this.name} live in ${this.city} and he has ${this.ChildrenCount} child/Children`;
    },

    presentAddres: {
        HouseNo: "9/2",
        street: "Mirpur Road",
        ares: "Pollobi",
        city: "Dhaka",
        zipCode: "1216"
    }
};

console.log(studentuinfo.name);
console.log(studentuinfo.maininfo());
console.log(studentuinfo["gender"]);

studentuinfo.income = 20000;
console.log(studentuinfo.income);
console.log(studentuinfo.presentAddres.zipCode);
console.log(studentuinfo.bestFrind[0]);
for ( let i = 0; i < studentuinfo.bestFrind.length; i++) {
    console.log(studentuinfo.bestFrind[i]);
}
studentuinfo.bestFrind.map(function (dhaka) {
    console.log(dhaka)
})

// Function

function sumDay (ms1 = "hello", msg2 = "world") {
    return 'this is message  : ${msg1} ${msg2}'

}
console.log(sumDay("hello", "abba"));
console.log(sumDay("hello", "amma"));
console.log(sumDay());
console.log(sumDay("hi"));


function calcuator (num1, num2, num3, operetor) {
    if(!+num1 || !+num2)
        return "Number are not vialid"

    switch (operetor) {
        case"+":
        return num1 + num2;
        case "-":
            return num1 - num2;
            case"*":
            return num1 * num2;
            case"/":
            return num1 / num2;
            default:
                return "invalid operator"
    }
}

console.log(calcuator("5", 5, "+"));
console.log(calcuator("10", 5, "-"));
console.log(calcuator("10", 5, "!"));
console.log(calcuator("kaku", 5, "+"));