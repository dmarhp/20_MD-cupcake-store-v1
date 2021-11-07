import "./Shop.scss"
import shopItemList from "../shopItemList";
import Button from "../Button/Button";
import {ChangeEvent, useState} from "react";
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

const Shop = () => {

    let [itemsShow, setItemsShow] = useState(itemsToShow);
    const [searchInputText, setSearchInputText] = useState('')

    const searchBar = (event: ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;
        setSearchInputText(inputValue)

        let itemsToSearch: { title: string; price: number; imgSrc: string; type: string; }[] = [];
        if (inputValue === "") {
            itemsToSearch = itemsShow;
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
        console.log(value)
        if (value !== "ALL") {
            itemsToShow = []
            shopItemList.map((item) => {
                if (item.type === value) {
                    itemsToShow.push(item)
                }
            })
        } else if (value==="ALL"){
            itemsToShow = shopItemList;
        }
        setItemsShow([...itemsToShow]);
    }

    return (
        <div className="partShop">
            <div className="container">
                <Heading1 text="Our" textPink="Store" />
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
