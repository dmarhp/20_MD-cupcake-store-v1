import './SearchBar.scss';
import {ChangeEvent, useState} from 'react';

interface Props {
    search: (event: ChangeEvent<HTMLInputElement>) => void;
    searchValue: string;
}

const SearchBar = ({search, searchValue}: Props) => {
    const [searchInputText, setSearchInputText] = useState('');

    return (
        <div className="search-wrapper">
            <form className="searchForm">

                <i className="fas fa-search"/>

                <input
                    className="search"
                    type="text"
                    value={searchInputText}
                    onChange={(event: ChangeEvent<HTMLInputElement>) => {search(event); setSearchInputText(event.target.value)}}
                    placeholder="item...."
                />
            </form>
        </div>
    );
};

export default SearchBar;
