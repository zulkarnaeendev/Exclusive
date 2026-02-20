import Card from './Card';
import React, { useState, useEffect } from 'react'
import ReactPaginate from 'react-paginate';
import { useSelector } from 'react-redux';

const Page = ({ itemsPerPage, onPageChange, selectedPage = 0 }) => {

    const reduxProducts = useSelector((state) => state.allProduct.value);

    const items = Array.isArray(reduxProducts) ? reduxProducts : [];

    function Items({ currentItems }) {
        return (
            <>
                {currentItems &&
                    currentItems.map((item, idx) => (
                        <Card
                            key={idx}
                            wholeproduct={item}
                            id={item.id}
                            img={item.thumbnail}
                            discount={item.discountPercentage ? item.discountPercentage + '%' : null}
                            Name={item.title}
                            prize={'$' + Math.round(item.price - (item.discountPercentage || 0) * item.price / 100)}
                            prevprize={item.price}
                            rating={item.rating}
                            review={item.reviews ? item.reviews.length : 0}
                            display={true}
                        />
                    ))}
            </>
        );
    }

    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
        setItemOffset(0);
    }, [itemsPerPage, items.length]);

    useEffect(() => {
        const newOffset = (selectedPage * itemsPerPage) % Math.max(1, items.length);
        setItemOffset(newOffset);
    }, [selectedPage, itemsPerPage, items.length]);

    const endOffset = itemOffset + itemsPerPage;
    const currentItems = items.slice(itemOffset, endOffset);
    const pageCount = itemsPerPage > 0 ? Math.ceil(items.length / itemsPerPage) : 0;
    const currentPage = Math.max(0, Math.min(Math.floor(itemOffset / (itemsPerPage || 1)), Math.max(0, pageCount - 1)));

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % items.length;
        setItemOffset(newOffset);
        if (typeof onPageChange === 'function') onPageChange(event.selected);
    }

    return (
        <>
            <Items currentItems={currentItems} />
            {pageCount > 1 && (
                <ReactPaginate
                    breakLabel="..."
                    nextLabel=""
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    previousLabel=""
                    forcePage={currentPage}
                    renderOnZeroPageCount={null}
                    className='flex gap-2.5 mt-10'
                    pageClassName='w-13.5 h-6.75 bg-black text-white text-center cursor-pointer'
                />
            )}
        </>
    );
}

export default Page;
