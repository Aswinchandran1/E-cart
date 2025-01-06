import React from 'react'
import Header from '../Components/Header'

const View = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col mx-5">
        <div className="grid grid-cols-2 items-center h-screen">
          <img width={'450px'} height={'200px'} src="https://www.museumofplay.org/app/uploads/2021/08/Hot-wheels-sq.jpg" alt="" />
          <div>
            <h3 className='font-bold'>PID: id</h3>
            <h1 className='text-5xl font-bold'>Product Name</h1>
            <h4 className="font-bold text-red-600 text-2xl">$ 250</h4>
            <h4>Brand  : brand</h4>
            <h4>Category : category</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, distinctio reiciendis minima ab odio nostrum perferendis rem minus id impedit suscipit facere soluta ipsam corporis eaque recusandae, mollitia, voluptatibus dicta!</p>
            <div className='flex justify-between mt-5'>
              <button className='bg-blue-600 text-white p-2'>Add to wishlist</button>
              <button className='bg-green-600 text-white p-2'>Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default View