import React from 'react'
import Type from './Type'

export default function Main() {
    return (
        <div className="flex flex-col justify-center items-center z-10 text-red-400 main text-3xl sm:text-5xl font-bold h-full w-full shrink-0">
            <div className='flex flex-col gap-y-6 items-center'>
                <h1>
                    <span className='wstroke'>
                        Hi There!{" "}
                    </span>
                    <span className="wave" role="img" aria-labelledby="wave">
                        👋🏻
                    </span>
                </h1>
                <h1 className='flex flex-col gap-y-6 justify-center items-center'>
                    I'M
                    <strong className="font-extrabold text-red-700">
                        <Type />
                    </strong>
                </h1>
            </div>
        </div>
    )
}
