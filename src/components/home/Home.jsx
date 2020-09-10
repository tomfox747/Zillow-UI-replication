import React,{useState, useRef, useEffect} from 'react'
import './home.css'

import searchIcon from '../../images/searchIcon.png'
import cardImage1 from '../../images/cardImage1.png'
import cardImage2 from '../../images/cardImage2.png'
import cardImage3 from '../../images/cardImage3.png'
import dropdown from '../../images/dropdown.png'

const Home = () =>{
    const searchBox = useRef()

    const [renderFixedSearchbar, setRenderFixedSearchBar] = useState(false)

    useEffect(() =>{
        window.addEventListener('scroll', handleScroll)

        return(() =>{
            window.removeEventListener('scroll', handleScroll)
        })
    })

    const handleScroll = (() =>{
        if(searchBox.current.getBoundingClientRect() !== null){
            if(searchBox.current.getBoundingClientRect().top > 0
            ){
                setRenderFixedSearchBar(false)
                return
            }
            
            setRenderFixedSearchBar(true)
        }
    })

    return(
        <div id="home">
            { renderFixedSearchbar &&
                <FixedSearchBox/>
            }
            <div className="container-top">
                <h1>Reimagine Home</h1>
                <h3>We'll help you find a place you'll love.</h3>
                <div ref={searchBox}>
                    <SearchBox/>
                </div>
            </div>
            <div className="container-middle">
                <h2>We have the most listing and constant updates.</h2>
                <h2>So you'll never miss out.</h2>
                <hr className="separator"/>
                <Cards/>
                <DropDowns/>
            </div>
        </div>
    )
}

const SearchBox = () =>{
    const [inputContent, setInputContent] = useState("Type a postcode or city")

    const submitSearch = (e) =>{
        e.preventDefault()
    }

    return(
        <div id="search-box">
            <form className="search-box-form" onSubmit={(e) => submitSearch(e)}>
                <input className="search-box-text" onClick={(e) => setInputContent("")} value={inputContent} type="text" onChange={(e) => setInputContent(e.target.value)}/>
                <button className="search-box-button">
                    <div className="icon">
                        <img alt="search" src={searchIcon}/>
                    </div>
                </button>
            </form>
        </div>
    )
}

const FixedSearchBox = () =>{
    return(
        <div id="fixed-search-box">
            <div className="fixed-search-box">
                <SearchBox/>
            </div>
        </div>
    )
}

const Cards = () =>{
    return(
        <div className="cards-container">
            <div className="card1">
                <img alt="img" src={cardImage1} className="card-image"/>
                <h3>Buy A Home</h3>
                <p>Find your place with an immersive photo experience and the most listings, including things you won't find anywhere else</p>
                <div>
                    <button className="card-button">Search Homes</button>
                </div>
            </div>
            <div className="card2">
                <img alt="img" src={cardImage3} className="card-image"/>
                <h3>Sell A Home</h3>
                <p>Whether you sell with new Zillow Offers or take another appriach, we'll help you navigate the path to a successful sale.</p>
                <div>
                    <button className="card-button">See Your Options</button>
                </div>
            </div>
            <div className="card3">
                <img alt="img" src={cardImage2} className="card-image"/>
                <h3>Rent A Home</h3>
                <p>We're creating a seamless online experience - from shopping on the largest rental network, to applying, to paying rent.</p>
                <div>
                    <button className="card-button">Search Rentals</button>
                </div>
            </div>
        </div>
    )
}

const DropDowns = () =>{
    const RealEstateData = [
        "Browse All",
        "West Yorkshire",
        "East Yorkshire",
        "South Yorkshire",
        "Oxfordshire",
        "Gloucestershire",
        "Lincolnshire",
    ]
    const RentalsData = [
        "Browse All",
        "West Yorkshire",
        "East Yorkshire",
        "South Yorkshire",
        "Oxfordshire",
        "Gloucestershire",
        "Lincolnshire",
    ]
    const MortgageData = [
        "Browse All",
        "West Yorkshire",
        "East Yorkshire",
        "South Yorkshire",
        "Oxfordshire",
        "Gloucestershire",
        "Lincolnshire",
    ]
    const BrowseHomesData = [
        "Browse All",
        "West Yorkshire",
        "East Yorkshire",
        "South Yorkshire",
        "Oxfordshire",
        "Gloucestershire",
        "Lincolnshire",
    ]
    return(
        <div className="dropdowns-container">
            <DropdownButton text={"Real Estate"} data={RealEstateData}/>
            <DropdownButton text={"Rentals"} data={RentalsData}/>
            <DropdownButton text={"Mortgage Rates"} data={MortgageData}/>
            <DropdownButton text={"Browse Homes"} data={BrowseHomesData} border={false}/>
        </div>
    )
}

const DropdownButton = ({text, border, data}) =>{
    const [open, setOpen] = useState(false)

    if(border === false){
        return(
            <div className="dropdown1 no-border" onClick={(e) => setOpen(!open)}>
                <button className="dropdown-button" >
                    <div>
                        <p className="dropdown-text">{text}</p>
                        <div>
                            <img alt="arrow" className="dropdown-icon" src={dropdown}/>
                        </div>
                    </div>
                </button>
                {open &&
                    <ListOfItems items={data}/>
                }
            </div>
        )    
    }else{
        return(
            <div className="dropdown1" onClick={(e) => setOpen(!open)}>
                <button className="dropdown-button">
                    <div>
                        <p className="dropdown-text">{text}</p>
                        <div>
                            <img alt="arrow" className="dropdown-icon" src={dropdown}/>
                        </div>
                    </div>
                </button>
                {open &&
                    <ListOfItems items={data}/>
                }
            </div>
        )
    }
}

const ListOfItems = ({items}) =>{
    return(
        <div className="list">
            {
                items.map((item, index) =>{
                    return  <div key={item}>
                                <p>{item}</p>
                            </div>
                })
            }
        </div>
    )
}

export default Home 