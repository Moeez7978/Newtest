import React from 'react'

const Hero = () => {
    return (
        <>
            <div className='border-b border-slate-500 py-4 lg:pb-36'>
                <div className='flex flex-col justify-center items-center gap-8 lg:flex-row lg:justify-between lg:gap-60'>
                    <div className="w-full lg:w-1/2 ">
                        <div className="flex flex-col  justify-centeritems-center lg:items-start ml-4 p-4">
                            <h1 className='text-6xl font-thin text-slate-700  tracking-tighter lg:text-8xl lg:mt-16 p-2'>Abdul Moeez</h1>
                            <span className='p-2 bg-gradient-to-r from-violet-500 via-slate-500 to-fuchsia-500 bg-clip-text text-transparent text-3xl font-bold'>Front-End Developer</span>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda harum repudiandae, possimus vitae officia eveniet ratione, iste ea excepturi obcaecati beatae tempora nostrum aliquid doloremque quae optio nihil recusandae blanditiis?</p>
                        </div>
                    </div>
                    <div className='w-full lg:w-1/2 p-4 flex flex-col justify-center items-center'>
                        <img src="https://images.pexels.com/photos/7331227/pexels-photo-7331227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Picture of the author" className='h-96 w-96 rounded-md'/>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero
