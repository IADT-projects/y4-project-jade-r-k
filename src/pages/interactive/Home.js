import Navbar from '../../components/InteractiveNav'
import Carousel from '../../components/Carousel'
import Cards from '../../components/InteractiveCards'

const Home = () => {
    return (
        <>
        <Navbar/>
        <Carousel/>
        <div class="banner-white">
                        <h3 class="f2">View the breathtaking artwork from the Art Institute of Chicago API</h3>
                        <h5 class="f2">This site is for comparing static and interactive design.</h5>
                    </div>
                    <Cards/>
        </>
    );
};

export default Home;