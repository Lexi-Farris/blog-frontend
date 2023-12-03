import { Header } from "./Header";
import { Content } from "./Content";
import { Footer } from "./Footer";
import { BrowserRouter } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  const [flashMessage, setFlashMessage] = useState("");

  //UseEffect below has an anon function b/c it's being defined/created in the code below as opposed to calling a previously declared function. It has no name, thus is anon!

  useEffect(() => {
    if (localStorage.flashMessage) {
      setFlashMessage(localStorage.flashMessage);
      localStorage.removeItem("flashMessage");
    }
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Header />
        <div onClick={() => setFlashMessage(null)} className="text-center">
          {flashMessage}
        </div>
        <Content />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
