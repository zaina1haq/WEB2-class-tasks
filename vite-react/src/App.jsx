import Header from "./components/Header";
import Search from "./components/Search";
import Menu from "./components/Menu";
import FirstCards from "./components/FirstCards";
import SecondCards from "./components/SecondCards";
import ThirdCards from "./components/ThirdCards";
import Flight from "./components/Flight";
import Form from "./components/Form";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Search />
      <Flight />
      <Menu />
      <FirstCards />
      <SecondCards />
      <ThirdCards />
      <Form/>
      <Footer/>
    </>
  );
}

export default App;
