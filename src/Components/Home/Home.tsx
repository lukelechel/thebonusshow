import './Home.css'
import EpisodesList from '../EpisodesList/EpisodesList'

const Title = () => (<div id="title">
    <h1>The Bonus Show</h1>
    <h2>A podcast about fitness, tech, and productivity. New episodes every sometimes.</h2>
</div>)

const Home = () => (<div id="home">
    <Title />
    <EpisodesList />
</div>)

export default Home