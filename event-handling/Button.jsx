function printHello(){
    console.log("Hello!!");
}
function printBye(){
    console.log("bye");
}
export default function Button(){
    return(
        <div>
            <button onClick={printHello}>Click Me</button>
            <p onClick={printBye}>this is paragraph onclick event </p>
        </div>
    );
}