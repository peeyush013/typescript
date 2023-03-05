//Enum

//company
//tester
//sr_tester
//dev
//sr_developer
//ProjectManager
//sr_projectManager


// if(sr-tester){

// }

// enum positions {
//     tester,
//     sr_tester,
//     dev,
//     sr_developer,
//     ProjectManager,
//     sr_projectManager
// }

// if(positions.sr_tester){
//     console.log('start testing')
// }


// //number enum
// //string enum


// //number enum
// enum days {
//     day1 = 5,
//     day2,
//     day3
// }

// console.log(days.day1) //5
// console.log(days.day3) //7



// //string enum

// enum weekDay {
//     day1 = "DAY1",
//     day2 = "DAY2",
//     day3 = "DAY3"
// }

// console.log(weekDay.day1)


// let info: { firstName: string, lastName: string } = {
//     firstName: "mayuri",
//     lastName: "Katwe"
// }

// type person = {
//     firstName: string,
//     lastName: string
// }

// let sham: person = {
//     firstName: "sham",
//     lastName: "sharma"

// }

// let ram: person = {
//     firstName: "ram",
//     lastName: "sharma"
// }

// let sita: person = {
//     firstName: "sita",
//     lastName: "rao"
// }


// interface person {
//     firstName: string,
//     lastName: String
// }

// let mayuri: person = {
//     firstName: "Mayuri",
//     lastName:"katwe"
// }

//union

// let a: number | string | boolean
// a = "mayuri"
// a = 12000
// a = true

function add(code: string | number) {
    console.log(`my address is ${code}`)
}

add("ramnagri")
add(20)


// function sub(x: string | number, y: string | number) {
//     console.log(x + y)
// }


//function
//return type
//without type

function addition(): void {
    console.log('i am addition')
}
addition()


function add2(): string {
    return "mayuri"
}
console.log(add2())

function add3(): number {
    return 12234
}
console.log(add3())

function add4(): boolean {
    return true
}
console.log(add4())
