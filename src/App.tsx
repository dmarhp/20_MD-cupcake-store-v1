import './App.scss';

import Shop from "./components/Shop/Shop";
import AboutUs from "./components/AboutUs/AboutUs";
import Start from "./components/Start/Start";

const App = () => {

    return (
        <div>
            <Start />
            <AboutUs/>
            <Shop/>
        </div>
    );
};

export default App;




