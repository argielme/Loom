import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Chat from "./pages/Chat";
import Error from "./pages/Error";

function App() {
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>Hello world</h1>} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/:username/chat" element={<Chat />} />
          <Route path="/server-error" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;