import React, { useContext, useState, useEffect } from 'react';
import { DebounceInput } from 'react-debounce-input';
import './style.scss';
import { ProductContext } from '../../services/Api';
import menu from '../../assets/images/menu.jpg';
const Header = () => {
    const [search, setsearch] = useState("");
    const searchProduct = useContext(ProductContext);
    const handleChange = (e) => {
        setsearch(e.target.value);
        searchProduct.change(e.target.value);
    }
    useEffect(() => {
        setsearch("")
    }, [searchProduct.clearSearch]);
    return (<header>
        <nav className="navbar navbar-expand-lg">
            <div className="container">
                <button className="navbar-toggler" type="button">
                    <img src={menu} alt="menu" />
                </button>
                <a className="navbar-brand" href="/#"><span>M</span>oBoo<span>M</span></a>
                <div className='d-block d-sm-none debounce-mobile col-12'>
                    <DebounceInput
                        minLength={2}
                        className="form-control"
                        debounceTimeout={300}
                        value={search}
                        placeholder="Search items..."
                        onChange={handleChange} />
                </div>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">

                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <li >
                            <DebounceInput
                                minLength={2}
                                className="form-control"
                                debounceTimeout={300}
                                value={search}
                                placeholder="Search items..."
                                onChange={handleChange} />
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="/#">Store</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#">Account</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href='/#'>Wish List</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href='/#'>Basket <i className="fa fa-shopping-basket"></i></a>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    </header>);
}

export default Header;