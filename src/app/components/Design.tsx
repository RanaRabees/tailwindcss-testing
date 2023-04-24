import React from 'react'
import Head from 'next/head';
function Design() {
    return (
        <>
            {/* 1 */}
            <p className="rounded-sm hover:rounded-full transition-all text-center text-3xl text-orange-300 hover:italic hover:font-bold pt-5 md:ml-[39%] lg:ml-[39%] sm:ml-[20%] bg-gradient-to-br from-gray-800 to-blue-900 h-20 lg:w-72 md:w-72 sm:w-full hover:cursor-pointer">Free Books</p>
            <br />
            {/* 2 */}
            <div className="bg-gradient-to-br from-gray-800 to-blue-900 hover:rounded-3xl rounded-xl transition-all text-center text-3xl text-orange-400 pt-3 lg:h-[100px] md:h-[100px] sm:h-[150px] w-full">
                <p className="hover:italic hover:font-bold hover:cursor-pointer">
                    We Provide You Best Books For Your Skills.<br />
                    Character, Personality, Carrier Knowledge, History.</p>
            </div>
            <section className="w-full h-96 bg-gradient-to-br from-red-800 to-green-900 hover:rounded-3xl rounded-xl transition-all">
                {/* 4 */}
                <div id="four" className='inline-block w-[30%] h-[100%] bg-black'></div>
                <section className="inline-block w-[40%] h-full bg-gradient-to-br from-red-800 to-green-900 transition-all">
                    {/* 5 */}
                    <div className="w-full h-[80px] bg-gradient-to-br from-pink-800 to-pink-900 hover:rounded-3xl rounded-xl transition-all"></div>
                    {/* 7 */}
                    <div className="w-full h-[67px] bg-gradient-to-br from-yellow-800 to-cyan-900 transition-all"></div>
                    {/* 8 */}
                    <div className="lg:w-64 md:w-64 sm:w-32 h-20 bg-gradient-to-br from-blue-800 to-orange-900 transition-all"></div>
                    {/* 9 */}
                    <div className="w-full h-[80px] bg-gradient-to-br from-red-800 to-purple-900 hover:rounded-3xl rounded-xl transition-all"></div>
                </section>
                {/* 3 */}
                <div id="three" className='transition-all inline-block w-[30%] h-[80%] bg-black ml-[0px] mb-[77px]'></div>
            </section>
            {/* 11 */}
            <div id="eleven" className="transition-all text-center text-3xl text-orange-400 pt-3 h-[150px] rounded-full w-full"></div>
            <br />
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* 12 */}
                    <div className="flex justify-center text-6xl border-2 border-gray-300 rounded-xl p-6 bg-gray-100" id="twelve"><br /></div>
                    {/* 13 */}
                    <div className="flex justify-center text-6xl border-2 border-gray-300 rounded-xl p-6 bg-gray-100" id="thurteen"><br /></div>
                    {/* 14 */}
                    <div className="flex justify-center text-6xl border-2 border-gray-300 rounded-xl p-6 bg-gray-100" id="fourteen"><br /></div>
                    {/* 15 */}
                    <div className="flex justify-center text-6xl border-2 border-gray-300 rounded-xl p-6 bg-gray-100" id="fifteen"><br /></div>
                </div>
            </div>

        </>
    )
}

export default Design
