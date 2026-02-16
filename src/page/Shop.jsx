import React, { useEffect, useState } from 'react'
import axios from 'axios';
import BreadCrump from '../components/BreadCrump';
import Page from '../components/Page';
import { useDispatch } from 'react-redux';
import { categoryreducer, productreducer } from '../slices/roductslice';

const Shop = () => {

  const [product, setProduct] = useState([])
  const [category, setCategory] = useState([])
  const [value, setvalue] = useState(9)
  const [currentPage, setCurrentPage] = useState(0)

  const dispatch = useDispatch()

  async function allProducts() {
    await axios.get('https://dummyjson.com/products')
      .then((data) => {
        setProduct(data.data.products)
        dispatch(productreducer(data.data.products))
      })
  }

  useEffect(() => {
    allProducts();
  }, [])

  useEffect(() => {
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




  return (
    <>
      <div className="container ">
        <BreadCrump />
      </div>
      <div className="container flex gap-24.25 mt-12.25 mb-26 ">
        <div className='w-[17%]'>
          <h2 className='text-[#262626] font-bold text-[20px]'>Shop by Category</h2>
          <ul className="flex flex-col gap-y-4 w-54.25 font-normal pt-4 mb-10">
            <li className='cursor-pointer hover:text-reddish text-[#262626] font-bold text-[18px]' onClick={() => dispatch(productreducer(product))}>All Products</li>
            {category.map((items, idx) => {
              return (
                <li className='cursor-pointer hover:text-reddish' onClick={() => hangelcategory(items)} key={idx}>{items}</li>
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
              <div>
                <select className='h-7.25 w-24.25 border rounded-[5px]' onChange={handelvalue}>
                  <option value='9'>9</option>
                  <option value='12'>12</option>
                  <option value='15'>15</option>
                </select>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap">
            <Page
              itemsPerPage={value}
              onPageChange={setCurrentPage}
              selectedPage={currentPage} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Shop