import React from 'react';
import "./DriverFeed.css";
import DriverGeneralPost from "./DriverGeneralPost";


function DriverFeed() {
    return (
        <div className="driver_feed">
            <div className="driver_feed_body">
                <DriverGeneralPost 
                    profilePic = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYxJgOaEW2kENd4kgRyKELV8Z34RkQVEeECjMV49t71dBdJY51hcu6CZ7-smMrM1sY-I8&usqp=CAU"
                    message = ' "/login" to visit Login page, "/homepage" to visit Home page'
                    timestamp = "Monday"
                    username = 'Money Lisa'
                    image = "https://ih1.redbubble.net/image.1099621303.4631/poster,504x498,f8f8f8-pad,600x600,f8f8f8.jpg"
                />
                <DriverGeneralPost 
                    profilePic = "https://img-9gag-fun.9cache.com/photo/aV7nzjn_460s.jpg"
                    message = 'Pls give me a ride to Walmart and save me from my friend!!!'
                    timestamp = "Sunday"
                    username = 'Son of God'
                    image = "https://thechive.com/wp-content/uploads/2021/12/1L-40.jpg?attachment_cache_bust=3920390&quality=85&strip=info"
                />
                <DriverGeneralPost 
                    profilePic = "https://m.media-amazon.com/images/I/41BEPgN-XqL._AC_UX679_.jpg"
                    message = 'Need a ride? We got ya.'
                    timestamp = "Saturday"
                    username = 'Knox Ride admin'
                    image = "https://pics.me.me/cool-pepe-op-2713474.png"
                />
            </div>
        </div>
    )
}
export default DriverFeed
