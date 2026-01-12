import Navbar from "./Navbar";
import menuData from "./menu";

function App() {
  return (
    <>
      <Navbar
        logo="https://www.cdmi.in/assets/front/images/creative-logo-blue.svg"
        menu={menuData}
      />
    </>
  );
}

export default App;
