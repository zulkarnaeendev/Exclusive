import Card from './Card';
import React, { useState, useEffect } from 'react'
import ReactPaginate from 'react-paginate';
<<<<<<< HEAD
import { useSelector } from 'react-redux';

const Page = ({ itemsPerPage, onPageChange, selectedPage = 0 }) => {

    const reduxProducts = useSelector((state) => state.allProduct.value);

    const items = Array.isArray(reduxProducts) ? reduxProducts : [];
=======

const Page = ({ itemsPerPage = 6, products = [], onPageChange, selectedPage = 0 }) => {

    const items = Array.isArray(products) ? products : [];
>>>>>>> de9f8e4bc59c9b427e938c22dde1da0b6a0d864e

    function Items({ currentItems }) {
        return (
            <>
                {currentItems &&
                    currentItems.map((item, idx) => (
                        <Card
<<<<<<< HEAD
                            key={idx}
                            id={item.id}
=======
                            key={item.id ?? idx}
>>>>>>> de9f8e4bc59c9b427e938c22dde1da0b6a0d864e
                            img={item.thumbnail}
                            discount={item.discountPercentage ? item.discountPercentage + '%' : null}
                            Name={item.title}
                            prize={'$' + Math.round(item.price - (item.discountPercentage || 0) * item.price / 100)}
                            prevprize={item.price}
<<<<<<< HEAD
                            rating={item.rating}
                            review={item.reviews ? item.reviews.length : 0}
=======
                            review={item.reviews.length}
>>>>>>> de9f8e4bc59c9b427e938c22dde1da0b6a0d864e
                            display={true}
                        />
                    ))}
            </>
        );
    }

    const [itemOffset, setItemOffset] = useState(0);

<<<<<<< HEAD
=======
    // reset to first page whenever page size or items change
>>>>>>> de9f8e4bc59c9b427e938c22dde1da0b6a0d864e
    useEffect(() => {
        setItemOffset(0);
    }, [itemsPerPage, items.length]);

<<<<<<< HEAD
=======
    // sync with parent-selected page (when user clicks external page buttons)
>>>>>>> de9f8e4bc59c9b427e938c22dde1da0b6a0d864e
    useEffect(() => {
        const newOffset = (selectedPage * itemsPerPage) % Math.max(1, items.length);
        setItemOffset(newOffset);
    }, [selectedPage, itemsPerPage, items.length]);

    const endOffset = itemOffset + itemsPerPage;
<<<<<<< HEAD
    const currentItems = items.slice(itemOffset, endOffset);
=======
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const currentItems = items.slice(itemOffset, endOffset);
    // make pageCount safe (avoid division by zero) and derive a clamped currentPage index
>>>>>>> de9f8e4bc59c9b427e938c22dde1da0b6a0d864e
    const pageCount = itemsPerPage > 0 ? Math.ceil(items.length / itemsPerPage) : 0;
    const currentPage = Math.max(0, Math.min(Math.floor(itemOffset / (itemsPerPage || 1)), Math.max(0, pageCount - 1)));

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % items.length;
<<<<<<< HEAD
        setItemOffset(newOffset);
=======
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
        // notify parent (Shop) about page changes so it can adjust UI
>>>>>>> de9f8e4bc59c9b427e938c22dde1da0b6a0d864e
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

<<<<<<< HEAD
export default Page;
=======
export default Page;
>>>>>>> de9f8e4bc59c9b427e938c22dde1da0b6a0d864e
