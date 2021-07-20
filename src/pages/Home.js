import React, {useRef} from 'react'
import Item from '../components/Item'

const data = [
    {
        "num": 112, 
        "title": "Add tags for solutions", 
        "body": "Easier to search for solutions based on a specific stack",
        "category": "Enhancement",
        "commentNum": 2
    },
    {
        "num": 99, 
        "title": "Add a dark theme option", 
        "body": "It would help people with ligth sensitivities and who prefer dark mode",
        "category": "Feature",
        "commentNum": 4
    },
    {
        "num": 65, 
        "title": "Q&A within the challenge hubs", 
        "body": "Challenge specific Q&A would make for easy reference",
        "category": "Feature",
        "commentNum": 1
    },
    {
        "num": 51, 
        "title": "Allow image/video upload to feedback", 
        "body": "Images and screencasts can enhance comments on solutions",
        "category": "Enhancement",
        "commentNum": 2
    },
    {
        "num": 42, 
        "title": "Ability to follow others", 
        "body": "Stay updated on comments and solutions other people post",
        "category": "Feature",
        "commentNum": 3
    },
    {
        "num": 3, 
        "title": "Preview images not loading", 
        "body": "Challenge preview images are missing when you apply a filter",
        "category": "Bug",
        "commentNum": 0
    },
]

const Home = () => {
    const menuRef = useRef()
    const sidebarRef = useRef()

    const handleShow = () => {
        sidebarRef.current.classList.toggle("active-bar")   
        menuRef.current.classList.toggle("toggle")   
    }

    return (
        <main id="home">
            <div className="container">
                
                <div className="main py-3">
                    <aside className="main-sidebar" ref={sidebarRef}>
                        <div className="main-sidebar-1">
                            <h3>Frontend Mentor</h3>
                            <p>Feedback Board</p>
                        </div>
                        <div className="main-sidebar-2">
                            <span className="active">All</span>
                            <span>UI</span>
                            <span>UX</span>
                            <span>Enhancement</span>
                            <span>Bug</span>
                            <span>Features</span>
                        </div>
                        <div className="main-sidebar-3">
                            <header>
                                <h3>Roadmap</h3>
                                <span className="view">View</span>
                            </header>
                            <ul>
                                <li className="list-1">
                                    <div className="list-wrap">
                                        <span>Planned</span>
                                        <span>2</span>
                                    </div>
                                </li>
                                <li className="list-2">
                                    <div className="list-wrap">
                                        <span>In-Progress</span>
                                        <span>3</span>
                                    </div>
                                </li>
                                <li className="list-3">
                                    <div className="list-wrap">
                                        <span>Live</span>
                                        <span>1</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </aside>
                    <section className="main-sec">
                        <div id="dash-bar" className="menu-icon" ref={menuRef} onClick={handleShow}>
                            <span></span>
                        </div>
                        <div className="main-sec-top">
                            <div className="main-sec-top-1">
                                <div className="img-wrap">
                                    <img src="/helm.png" className="icon-style" />
                                    <span>6 suggestions</span>
                                </div>
                                <div className="sort-wrap">
                                    <span>Sort by</span>
                                    <select className="filter">
                                        <option value="most-upvotes">Most Upvotes</option>
                                    </select>
                                </div>
                            </div>
                            <button className="btn-add">
                                <i className="fa fa-plus" aria-hidden="true"></i> Add Feedback
                            </button>
                        </div>
                        <div className="main-sec-wrap my-1">
                            {
                                data.map( (it, index) => {
                                    return <Item key={index} item={it} />
                                })
                            }
                            
                        </div>
                    </section>
                </div>
            </div>
        </main>
    )
}

export default Home
