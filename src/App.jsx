import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen flex flex-wrap content-between">
      <div className="w-full block">
        {/*  <Header />
         */}
        <Header></Header>
        <main className="max-sm:px-8 px-20">
          <Outlet />
        </main>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
