import React from 'react'

const Main = () => {
  return (
    <main className='container mx-auto mt-6 p-8 flex justify-around items-center bg-slate-900 shadow-md rounded-lg'>
        <div>
        <h1 className='text-slate-400 text-3xl font-bold'>Pick a Color from an Image</h1>
        <h2 className='mt-4 text-slate-400 text-xl'>Upload your image...</h2>
        <input className='mt-4 text-slate-400' type="file" name="image-uploader" id="image-uploader" />
        <button className='bg-slate-400 mt-4 px-4 py-2 rounded-md block'>Click here to pick a color!</button>
        <div className='mt-6'>
            <h2 className='mb-4 text-slate-400'>Color picked:</h2>
            <div className='bg-slate-100 w-72 h-32 rounded-lg flex items-center justify-center'>
                <p>#2323232</p>
            </div>
        </div>
        </div>
        <div>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png" alt="image placeholder" className='w-96'/>
        </div>
    </main>
  )
}

export default Main