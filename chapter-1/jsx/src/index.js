import React from "react";
import ReactDOM from "react-dom/client";

const el = document.getElementById("root");

const root = ReactDOM.createRoot(el);

function App() {
  // const name = "Fathoni";

  // return (
  //   <div>
  //     My name is:
  //     <h1>{name}</h1>
  //     Today is:
  //     <h2>{new Date().toLocaleDateString()}</h2>
  //   </div>
  // );

  // input
  // const inputType = "number";
  // const minValue = 5;
  // return <input type={inputType} min={minValue} />;

  // props
  // return <input style={{ border: "3px solid green" }} type="number" min={5} />;

  // --- JSX Atributte rules -- //
  // 1. camelCase
  // return <textarea autoFocus={true} />;
  // 2. pakai kurung kurawal untuk value number
  // return <input max={5} type="number" />;
  // 3. jika value boolean true, cukup panggil attributenya saja
  // return <input spellCheck />;
  // 4. class ditulis dengan className
  // return (<div className="col">
  //   <h1>Hallo</h1>
  // </div>)
  // inline style harus objek
  return (
    <input
      style={{ border: "3px solid green", backgroundColor: "gray" }}
      type="number"
      min={5}
    />
  );
}

root.render(<App />);
