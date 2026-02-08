import Card from './Card';
import React, { useState, useEffect } from 'react'
import ReactPaginate from 'react-paginate';

const Page = ({ itemsPerPage = 6, products = [], onPageChange, selectedPage = 0 }) => {

    const items = Array.isArray(products) ? products : [];

    function Items({ currentItems }) {
        return (
            <>
                {currentItems &&
                    currentItems.map((item, idx) => (
                        <Card
                            key={item.id ?? idx}
                            img={item.thumbnail}
                            discount={item.discountPercentage ? item.discountPercentage + '%' : null}
                            Name={item.title}
                            prize={'$' + Math.round(item.price - (item.discountPercentage || 0) * item.price / 100)}
                            prevprize={item.price}
                            review={item.reviews.length}
                            display={true}
                        />
                    ))}
            </>
        );
    }

    const [itemOffset, setItemOffset] = useState(0);

    // reset to first page whenever page size or items change
    useEffect(() => {
        setItemOffset(0);
    }, [itemsPerPage, items.length]);

    // sync with parent-selected page (when user clicks external page buttons)
    useEffect(() => {
        const newOffset = (selectedPage * itemsPerPage) % Math.max(1, items.length);
        setItemOffset(newOffset);
    }, [selectedPage, itemsPerPage, items.length]);

    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const currentItems = items.slice(itemOffset, endOffset);
    // make pageCount safe (avoid division by zero) and derive a clamped currentPage index
    const pageCount = itemsPerPage > 0 ? Math.ceil(items.length / itemsPerPage) : 0;
    const currentPage = Math.max(0, Math.min(Math.floor(itemOffset / (itemsPerPage || 1)), Math.max(0, pageCount - 1)));

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % items.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
        // notify parent (Shop) about page changes so it can adjust UI
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