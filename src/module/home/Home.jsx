import { useEffect, useState } from "react"
import { fetchRestaurants } from "../../services/fetchRestaurants"
import "./home.scss"

const Home = () => {
    const [restaurants, setRestaurants] = useState([])
    console.log('restaurants', restaurants)

    //Run only once after page loaded
    useEffect(() => {
        const tmpFetch = async () => {
            const tmpData = await fetchRestaurants()

            const sortedData = {}
            tmpData?.forEach((restaurant) => {
                if (!sortedData[restaurant.state])
                    sortedData[restaurant.state] = []
                sortedData[restaurant.state].push(restaurant)
            })
            setRestaurants(sortedData)
        }
        tmpFetch()
    }, [])

    return (
        <>
            <div className="container">
                {
                    Object.keys(restaurants)?.map((city, index) => {
                        return (
                            <div key={index} className="city-card">
                                <div className="card-title">{city ?? ''}</div>
                                {
                                    restaurants[city]?.map((restaurant, indx) => {
                                        return (
                                            <div key={indx} className="items">
                                                <span>{restaurant.restaurant_name ?? ''}</span>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Home