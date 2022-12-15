import NewsFeed from "../components/home/NewsFeed"
import Time from "../components/home/Time"
import UserInfo from "../components/home/UserInfo"

const Home = () => {
    return (
        <div className="container">
            <div className="row py-2">
                {/* Left */}
                <div className="col-md-4 py-3 ">
                    <UserInfo />
                    <Time />
                </div>
                {/* Right */}
                <div className="col-md-8 border border-2 border-dark rounded px-4 py-2">
                    <NewsFeed />
                </div>
            </div>
        </div>
    )
}

export default Home