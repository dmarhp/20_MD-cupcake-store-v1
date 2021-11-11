import "./Shop.scss"
import shopItemList from "../shopItemList";
import Button from "../Button/Button";
import {ChangeEvent, useEffect, useState} from "react";
import SearchBar from "../SearchBar/SearchBar";
import Card from "../Card/Card";
import Heading1 from "../Heading1/Heading1";

const shopItemTypes: string[] = [];
shopItemList.forEach((item) => {
    if (!shopItemTypes.includes(item.type)) {
        shopItemTypes.push(item.type);
    }
});
shopItemTypes.sort();
let itemsToShow = shopItemList;

let titleColor = "";
let timer: NodeJS.Timeout;

const Shop = () => {

    const [itemsShow, setItemsShow] = useState(itemsToShow);
    const [searchInputText, setSearchInputText] = useState('');
    const [filterValue, setFilterValue] = useState("");
    const [counter, setCounter] = useState(0);



    const searchBar = (event: ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;
        setSearchInputText(inputValue)

        let itemsToSearch: { title: string; price: number; imgSrc: string; type: string; }[] = [];
        if (inputValue === "") {
            itemsToSearch = itemsToShow;
        } else {
            itemsShow.map((item) => {
                if (item.title.toUpperCase().includes(inputValue.toUpperCase())) {
                    itemsToSearch.push(item);
                }
            })
        }
        setItemsShow([...itemsToSearch])
    }

    const clickFilterButton = (value: string) => {
        setFilterValue(value);
        setCounter(0);

        if (value !== "ALL") {
            itemsToShow = []
            shopItemList.map((item) => {
                if (item.type === value) {
                    itemsToShow.push(item)
                }
            })
        } else if (value === "ALL") {
            itemsToShow = shopItemList;
        }
        setItemsShow([...itemsToShow]);

        clearTimeout(timer);
    }

    useEffect(() => {
        alert("Component Shop is loaded");
    }, []);



    useEffect(() => {
        titleColor = generateColor();
    }, [filterValue]);



    const generateColor = () => {
        return '#' + Math.random().toString(16).substr(-6);
    }

    useEffect(() => {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => setCounter(counter + 1), 1000);
        if (counter >= 9 && counter % 2 !== 0) {
            titleColor = generateColor();
        }
    }, [counter]);

    return (
        <div className="partShop">
            <div className="container">
                <Heading1 textColor={titleColor} text="Priecīgus" textPink="Ziemassvētkus"/>
                <div>timer: {counter}</div>
                <div className="ButtonBar-wrapper">
                    <Button buttonName={"ALL"} clickHandler={() => clickFilterButton("ALL")}/>
                    {
                        shopItemTypes.map(item => {
                            return <Button key={item} buttonName={item} clickHandler={() => clickFilterButton(item)}/>
                        })
                    }
                </div>

                <SearchBar search={searchBar} searchValue={searchInputText}/>

                <div className="shopItems">
                    {
                        itemsShow.map((item) => (
                            <Card
                                key={item.imgSrc}
                                imgSrc={item.imgSrc}
                                title={item.title}
                                price={item.price}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Shop;
