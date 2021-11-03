import './App.css';
import NavBar from "./components/NavBar/NavBar";
import Header1 from "./components/Header1/Header1";
import Card from "./components/Card/Card";
import shopItems from "./props";

const App = () => {

    return (
        <div className="app">
            <Header1 hTextWhite="Our" hTextPink="Store"/>
            <NavBar/>
            <div className="card-wrapper">
                {
                    shopItems.map((item, index) => {
                        console.log(item)
                        return (
                            <Card
                                key={index}
                                imgSrc={item.imgSrc}
                                title={item.title}
                                price={item.price}
                            />
                        );
                    })
                }
            </div>
        </div>
    );
}

export default App;
