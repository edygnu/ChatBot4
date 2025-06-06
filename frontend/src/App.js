import React from 'react';
import Chatbot from './components/Chatbot';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Chatbot de la Biblioteca de la Facultad de Filosofía y Letras</h1>
      </header>
      <main>
        <Chatbot />
      </main>
    </div>
  );
}

export default App;

// import React from "react";
// import { Widget } from "rasa-webchat";

// function App() {
//   return (
//     <div>
//       <Widget
//         initPayload={"/get_started"}
//         socketUrl={"http://localhost:5005"}
//         socketPath={"/socket.io/"}
//         title={"Chatbot Biblioteca"}
//         subtitle={"¿En qué puedo ayudarte?"}
//       />
//     </div>
//   );
// }

// export default App;