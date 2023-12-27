import React, { useState, useEffect, useContext } from 'react';
import { ApiCall, ProductContext } from '../../services/Api';
import Loader from '../../components/Loader';
import './style.scss'
import RatingStar from '../../components/RatingStar';
import { PaginationControl } from 'react-bootstrap-pagination-control';
const Home = () => {
    const [loading, setLoading] = useState(false);
    const [productList, setproductList] = useState([]);
    const [categoryList, setcategoryList] = useState([]);
    const [category, setcategory] = useState("");
    const [currentPage, setcurrentPage] = useState(1);
    const [recordsPerPage] = useState(10);
    const searchProduct = useContext(ProductContext);
    const [total, setToal] = useState(0);
    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    const currentPages = productList.slice(indexOfFirstRecord, indexOfLastRecord);
    const getCategory = async () => {
        setLoading(true)
        const res = await ApiCall(`products/categories/${category}`, 'GET');
        if (res) {
            setcategoryList(res);
            setLoading(false)
        } else {
            setLoading(false)
        }
    }
    const getProduct = async (url) => {
        setLoading(true)
        const res = await ApiCall(url, 'GET');
        if (res) {
            setproductList(res.products);
            setToal(res.total);
            setcurrentPage(1);
            setLoading(false)
        } else {
            setLoading(false)
        }
    }

    const handleChange = (e) => {
        searchProduct.clear("");
        const value = e.target.value
        const url = value ? `products/category/${e.target.value}` : 'product';
        getProduct(url);
        setcategory(e.target.value);
    }
    const searchChange = () => {
        setcategory("");
        const url = searchProduct.search ? `products/search?q=${searchProduct.search}` : 'product';
        getProduct(url);
    }
    const pageChange = (page) => {
        setcurrentPage(page)
    }
    useEffect(() => {

        getCategory();
        getProduct('product');

    }, []); // eslint-disable-line react-hooks/exhaustive-deps
    useEffect(() => {
        searchChange();
    }, [searchProduct.search]); // eslint-disable-line react-hooks/exhaustive-deps
    return (
        <section className='home-section'>
            <div className='container'>

                <div className='row'>
                    <div className='col-md-12 mb-4 order-change'>
                        <div className='color-box'>
                            <h4 className='mb-2 text-white fw-600 f-16'>Lorem Ipsum</h4>
                            <p className='mb-0 fw-400 f-14'>Slash sale begins in June.Get up to 80% Discount on all products<a className='fw-600 text-white text-decoration-none ms-1' href='/#'>Read More</a></p>
                        </div>
                    </div>
                    <div className="col-md-12 mb-4">
                        <div className='row'>
                            <div className='col-md-3'>
                                <select value={category} onChange={handleChange} className='form-control fw-400 text-text1'>
                                    <option value="">Select Category</option>
                                    {categoryList && categoryList.length ? <React.Fragment>
                                        {categoryList.map((item) => (
                                            <option key={item} value={item}>{item}</option>
                                        ))}
                                    </React.Fragment> : <option value="">Loading...</option>}

                                </select>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='row'>
                    {loading ? <div className='col-md-12'><Loader /></div> : null}
                    {!loading ? <React.Fragment>

                        {currentPages && currentPages.length ? <React.Fragment>
                            {currentPages.map((item) => (
                                <div className='col-md-3 col-6 mb-4' key={item.title}>
                                    <div className='content-box'>
                                        <div className='img' style={{ backgroundImage: 'url(' + item.thumbnail + ')' }}>
                                            <div className='heart'>
                                                <i className='fa fa-heart-o'></i>
                                            </div>
                                        </div>
                                        <div className='content'>
                                            <h4 className='mb-2 f-16 fw-600 text-primary'>{item.title}</h4>
                                            <p className='mb-2 f-14 fw-400 text-text1'>{item.description}</p>
                                            <h3 className='mb-0 f-18 fw-600 text-primary'><span className='me-2'><i className="fa fa-usd" aria-hidden="true"></i></span>{item.price}</h3>
                                            <RatingStar rating={item.rating} />
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <div className='col-md-12'>
                                <PaginationControl
                                    page={currentPage}
                                    between={4}
                                    total={total}
                                    limit={recordsPerPage}
                                    changePage={pageChange}
                                    ellipsis={1}
                                />
                            </div>

                        </React.Fragment> : <div className='col-md-12'>No Data Found ...</div>}

                    </React.Fragment> : null}
                </div>
            </div>
        </section>);
}

export default Home;