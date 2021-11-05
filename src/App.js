import './App.css';
import AboutUs from "./components/AboutUs/AboutUs";
import ShopItems from "./components/ShopItems/ShopItems";
import Header from "./components/head/Header/Header";
import Start from "./components/head/Start/Start";

const App = () => {
    return (
        <>
            <Start/>
            <AboutUs/>
            <ShopItems/>
        </>
    );
}

export default App;
