'use client'
import Image from 'next/image'
import { useState } from 'react'
import { FaSearch } from 'react-icons/fa'

export default function Navbar() {
  const [searchActive, setSearchActive] = useState(false)
  const [searchText, setSearchText] = useState('')

  const onChange = (e: any) => {
    const keyword = e.target.value;
        // const newFilter = data.articles.filter((article: any) => {
        //   return article.title.toLowerCase().includes(keyword.toLowerCase())
        // })
        if(keyword === "") {
        //   setFilteredData([])
          setSearchText("")
        }

        // setFilteredData( data.data.filter((tour: any) => tour.name.toLowerCase().includes(keyword.toLowerCase())))
    setSearchText(keyword)
  }
  const checkEmpty = (e: any) => {
    if(e.target.value === "") {
        // setFilteredData([])
        setSearchText("")
    }
}

  return (
    <div className={'navbar'}>
        <div className={'navbar_logo'}>
            <Image src="/images/logo.png" alt="logo" width={100} height={100} />
        </div>
        <div className={'navbar_links'}>
            <a href="/">Home</a>
            <a href="/tours">Tours</a>
            <a href="/contact">Contact</a>
            <a href="/tips">Tips</a>
            <a href="/gallery">Gallery</a>
        </div>
        <div className={'navbar_search'}>
            <div className={`${'searchInput'} ${searchActive && 'searchActive'}`}>
                <input className='min-w-[250px] outline-none border-none rounded-full placeholder:text-sm px-3 py-2 text-black text-sm' placeholder='Search here' type="text" name='search' value={searchText} onChange={onChange} onKeyDown={checkEmpty} />
                {/* {filteredData.length != 0 && (
                    <div className="absolute bottom-0 w-full translate-y-[110%] bg-white text-black shadow-xl rounded-xl p-3" >
                    {data && filteredData.slice(0, 10).map((tour: any, index: any) => (
                        <div className='px-5 py-3 duration-300 hover:bg-gray-100 hover:shadow-md hover:rounded-xl cursor-pointer' key={index}>
                            <p id='blog-search' onClick={() => {
                                clearSearch()
                                dispatch(changeActiveTour(tour))
                                router.push('/tours/view')
                                }} 
                            >
                                {tour.name.charAt(0).toUpperCase() + tour.name.slice(1)}
                            </p>
                        </div>
                    ))}
                    </div>
                )} */}
            </div>
            <div onClick={() => setSearchActive(!searchActive)}>
                <FaSearch size={25} style={{cursor: "pointer"}} color='#fff'/>
            </div>
        </div>
    </div>
  )
}
