import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../redux/Slices/productSlice'

const Home = () => {

  const dispatch = useDispatch()

  const { allProducts, loading, errorMsg } = useSelector(state => state.productReducer)
  // console.log(allProducts, loading, errorMsg);

  const[currentPage,setCurrentPage]=useState(1);
  const productPerPage=8;
  const totalPages=Math.ceil(allProducts?.length/productPerPage)
  const CurrentPageProductLastIndex=currentPage * productPerPage
  const CurrentPageProductFirstIndex=CurrentPageProductLastIndex - productPerPage
  const visibleAllProducts=allProducts?.slice(CurrentPageProductFirstIndex,CurrentPageProductLastIndex)

  const navigateToNextPage=()=>{
    if(currentPage!=totalPages){
      setCurrentPage(currentPage+1)
    }
  }
  const navigateToPreviousPage=()=>{
    if(currentPage!=1){
      setCurrentPage(currentPage-1)
    }
  }


  useEffect(() => {
    dispatch(fetchProducts())
  }, [])

  return (
    <>
      <Header insideHome={true} />
      <div style={{ paddingTop: '100px', minHeight: "70vh" }} className='container px-4 mx-auto'>
        {
          loading ?
            <div className='flex items-center my-5 mx-auto justify-center'>
              <img src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExYWVodnlyOGN4aDkyMDV2NzQ4ZWptcG9rbWg5dzQ3ZWRqcmI5Nnc1MSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/3oEjI6SIIHBdRxXI40/giphy.webp" alt="" />
              Loading ...
            </div>
            :
            <>
              <div className='grid grid-cols-4 gap-4'>
                {
                  allProducts?.length > 0 ?
                    visibleAllProducts?.map(product => (
                      <div key={product?.id} className='rounded border p-2 shadow'>
                        <img width={'100%'} height={'200px'} src={product.thumbnail} alt="" />
                        <div className='text-center'>
                          <h3 className='text-xl font-bold '>{product.title}</h3>
                          <Link to={`/${product.id}/view`} className='bg-violet-600 rounded p-1 mt-3 text-white inline-block'>View More</Link>
                        </div>
                      </div>
                    ))
                    :
                    <div className='flex justify-center items-center font-bold text-red-600 my-5 text-lg'>
                      Products Not Found!!!
                    </div>
                }
              </div>
              <div className='text-2xl text-center font-bold mt-20'>
                <span onClick={navigateToPreviousPage} className='cursor-pointer'><i className='fa-solid fa-backward me-5'></i> </span>
                <span>{currentPage} of {totalPages}</span>
                <span onClick={navigateToNextPage} className='cursor-pointer'><i className='fa-solid fa-forward ms-5'></i> </span>
              </div>
            </>
        }
      </div>
    </>
  )
}

export default Home