import  React from "react"
import  ReactDOM  from "react-dom";

const header = React.createElement("div", { className: "arjun", id: "patil" }, [
  React.createElement("h2", { onClick : handleclick}, "Hello React"),
  React.createElement("h3", { }, "Hello React"),
]);
console.log(header);
const root = ReactDOM.createRoot(document.getElementById("main"));
//  debugger

function handleclick() {
  console.log("Hello from clikc");
}
root.render(header);

// document.getElementById("patil").addEventListener("click", ()=> {
//     console.log("Hekk")
// })

const str = "Arjun"
console.log(str != "Arjun")