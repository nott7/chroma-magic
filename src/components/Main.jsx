import React, { useState } from 'react'

const Main = () => {

    const [color, setColor] = useState(null)
    const [image, setImage] = useState("https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png")

    const openEyeDropper = async () =>{
        // i have to use useEyeDropper
        let eyeDropper = new EyeDropper()
        const {sRGBHex} = await eyeDropper.open()
        setColor(sRGBHex)
    }

    const handleFileInput = (e) => {
        setImage(URL.createObjectURL(e.target.files[0]))

    }
  return (
    <main className='container mx-auto mt-6 p-8 flex justify-around items-center bg-slate-900 shadow-md rounded-lg'>
        <div>
        <h1 className='text-slate-400 text-3xl font-bold'>Pick a Color from an Image</h1>
        <h2 className='mt-4 text-slate-400 text-xl'>Upload your image...</h2>
        <input onChange={handleFileInput} accept='image/*' className='mt-4 text-slate-400' type="file" name="image-uploader" id="image-uploader" />
        <button className='bg-slate-400 mt-4 px-4 py-2 rounded-md block'>Click here to pick a color!</button>
       { color && <div className='mt-6'>
            <h2 className='mb-4 text-slate-400'>Color picked:</h2>
            <div className={`bg-[${color}] w-72 h-32 rounded-lg flex items-center justify-center`}>
                <p>{color}</p>
            </div>
        </div>}
        </div>
        <div>
            <img src={image} alt="image placeholder" className='w-96'/>
        </div>
    </main>
  )
}

export default Main