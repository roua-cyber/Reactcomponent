import  React from "react"
import './App.css';
import Name from "./component/FullName";
import Address from "./component/Address"
import Picture from "./component/ProfilPhoto"
function App() {
  return (
   <div  className="all">
      <aside >
      <Picture />
      </aside>
      <main>
      <Name />
      <Address />
      </main>
    </div>
   
  );
}

export default App;

