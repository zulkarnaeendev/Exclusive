import React, { useEffect, useState } from 'react'
import axios from 'axios';
import BreadCrump from '../components/BreadCrump';
import Page from '../components/Page';
<<<<<<< HEAD
import { useDispatch } from 'react-redux';
import { categoryreducer, productreducer } from '../slices/roductslice';
=======
>>>>>>> de9f8e4bc59c9b427e938c22dde1da0b6a0d864e

const Shop = () => {

  const [product, setProduct] = useState([])
  const [category, setCategory] = useState([])
<<<<<<< HEAD
  const [value, setvalue] = useState(9)
  const [currentPage, setCurrentPage] = useState(0)

  const dispatch = useDispatch()

  async function allProducts() {
    await axios.get('https://dummyjson.com/products')
      .then((data) => {
        setProduct(data.data.products)
        dispatch(productreducer(data.data.products))
      })
=======
  const [itemsPerPage, setItemsPerPage] = useState(6)
  const [currentPage, setCurrentPage] = useState(0)

  async function allProducts() {
    await axios.get('https://dummyjson.com/products')
      .then((data) => {
        setProduct(data.data.products);
        const uniqueCategories = [...new Set(data.data.products.map(p => p.category))];
        setCategory(uniqueCategories);
      })
    console.log(category)
>>>>>>> de9f8e4bc59c9b427e938c22dde1da0b6a0d864e
  }

  useEffect(() => {
    allProducts();
  }, [])

  useEffect(() => {
<<<<<<< HEAD
    const uniqueCategories = [...new Set(product.map((p) => p.category))];
    setCategory(uniqueCategories)
  }, [product])

  const hangelcategory = (items) => {
    const filteritems = product.filter((catitem) => catitem.category === items)
    dispatch(categoryreducer(filteritems))
  }

  const handelvalue = (e) => {
    setvalue(e.target.value)
  }
=======
    setCurrentPage(0);
  }, [itemsPerPage, product.length]);

  const pageCount = itemsPerPage > 0 ? Math.ceil(product.length / itemsPerPage) : 0
>>>>>>> de9f8e4bc59c9b427e938c22dde1da0b6a0d864e




  return (
    <>
      <div className="container ">
        <BreadCrump />
      </div>
      <div className="container flex gap-24.25 mt-12.25 mb-26 ">
        <div className='w-[17%]'>
          <h2 className='text-[#262626] font-bold text-[20px]'>Shop by Category</h2>
          <ul className="flex flex-col gap-y-4 w-54.25 font-normal pt-4 mb-10">
<<<<<<< HEAD
            <li className='cursor-pointer hover:text-reddish text-[#262626] font-bold text-[18px]' onClick={() => dispatch(productreducer(product))}>All Products</li>
            {category.map((items, idx) => {
              return (
                <li className='cursor-pointer hover:text-reddish' onClick={() => hangelcategory(items)} key={idx}>{items}</li>
=======
            {product.map((items, idx) => {
              return (
                <li key={idx}>{items.category}</li>
>>>>>>> de9f8e4bc59c9b427e938c22dde1da0b6a0d864e
              )
            })}
          </ul>
          <h2 className='font-bold text-[20px] mb-3.75'>Shop by Color</h2>
          <ul className='flex flex-col gap-4.5'>
            <li className='flex gap-2.5 items-center'>
              <div className='w-2.75 h-2.75 rounded-full bg-black '></div>
              <p>Color 1</p>
            </li>
            <li className='flex gap-2.5 items-center'>
              <div className='w-2.75 h-2.75 rounded-full bg-reddish '></div>
              <p>Color 2</p>
            </li>
            <li className='flex gap-2.5 items-center'>
              <div className='w-2.75 h-2.75 rounded-full bg-green-300 '></div>
              <p>Color 3</p>
            </li>
          </ul>
        </div>
        <div className="w-[83%]">
          <div className="flex flex-col items-end">
            <div className="flex gap-3 items-center mb-7.5 mr-3">
              <p>Show : </p>
<<<<<<< HEAD
              <div>
                <select className='h-7.25 w-24.25 border rounded-[5px]' onChange={handelvalue}>
                  <option value='9'>9</option>
                  <option value='12'>12</option>
                  <option value='15'>15</option>
=======
              {/* options definition */}
              <div>
                {/* when not hiding, show all options */}
                <select
                  className='h-7.25 w-24.25 border rounded-[5px]'
                  onChange={(e) => setItemsPerPage(Number(e.target.value))}
                  value={itemsPerPage}
                >
                  <option value={9}>9</option>
                  <option value={18}>18</option>
                  <option value={27}>27</option>
                  <option value={30}>30</option>
>>>>>>> de9f8e4bc59c9b427e938c22dde1da0b6a0d864e
                </select>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap">
<<<<<<< HEAD
            <Page
              itemsPerPage={value}
              onPageChange={setCurrentPage}
              selectedPage={currentPage} />
=======
            <Page itemsPerPage={itemsPerPage} products={product} onPageChange={setCurrentPage} selectedPage={currentPage} />
>>>>>>> de9f8e4bc59c9b427e938c22dde1da0b6a0d864e
          </div>
        </div>
      </div>
    </>
  )
}

export default Shop