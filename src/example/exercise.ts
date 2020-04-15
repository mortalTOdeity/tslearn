class Greeter {
  greeting: string
  constructor(message: string) {
    this.greeting = message
  }
  greet() {
    return `Hello, ${this.greeting}`
  }
}


// let greeter = new Greeter('Chen')

// let the_info = greeter.greet()

// let the_item: any = document.getElementById('the_id')
// the_item.innerHTML = the_info