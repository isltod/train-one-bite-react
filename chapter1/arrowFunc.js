let greeting1 = (name) => `hello ${name}`;
const greetingText = greeting1("wolf");
console.log(greetingText);

let greeting2 = (name) => {
    let greetingText = `hello ${name}`
    console.log(greetingText);
}
greeting2('wolf');