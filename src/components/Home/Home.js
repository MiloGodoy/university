import Services from "../Services/Services"
import Courses from "../Courses/Courses"
import Carousel from "../Carousel/Carousel"
import { Link } from "react-router-dom"

function Home () {
    return(
            <div>
                <div className="animate">
                    <Link to="/posts"> Latest Post </Link>
                </div>


               <Carousel />
               <Services hideSearchBar={true}></Services>
               <Courses />
            </div>
        )
}


export default Home