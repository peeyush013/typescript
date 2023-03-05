// program 1
class PersonV {
    greeting: string 

    constructor(msg:string) {
        this.greeting = msg
		
		
    }
    greet(): string {
        return this.greeting
    }

}
let pro = new PersonV("hello")
console.log(pro.greeting)
console.log(pro.greet())


// program 2
// private  and public
class PersonNN {
    private name: string;
    public constructor(name: string) {
        this.name = name
    }
    public getName(): string {
        this.getGreet()
        return this.name
    }
    private getGreet() {
        console.log('hello')
    }
}
let poorva = new PersonNN("poorva")
let a = poorva.getName()
console.log(a)

//poorva.name
// program 3
class PersonNNN {
    //private name:string;
    public constructor(private name: string) { }
    public getName(): string {
        return this.name
    }
}
let mayuri = new PersonNNN("peeyush")
console.log(mayuri.getName())


// program 4

class PersonNNNN {
    private readonly name: string;
    public constructor(name: string) {
        this.name = name
    }
    // public setName(neName: string): string {
    //     this.name = neName
    //     return this.name
    // }
    public getName():string{
        return this.name
    }

}
let ankit =  new PersonNNNN("ram")

