
import Hotproducts from '../component/Home/Hotproducts'
import Choices from '../component/Home/Choices'
import NewProducts from '../component/Home/NewProducts'
import ReadyToOrder from '../component/Home/ReadyToOrder'
import SourceByRegion from '../component/Home/SourceByRegion'
import FeaturedCategories from '../component/Home/FeaturedCategories'
import SourcingServices from '../component/Home/SourcingServices'
import MainBar from '../component/Home/MainBar'
import FoodBeverages from '../component/AllCatagories/FoodBeverages'
import ApparelFashion from '../component/Home/ApparelFashion'
import ClientReview from '../component/Home/ClientReview'






const Home = () => {
  return (
    <>
      <div className=' bg-[#e6e2e2] pt-14 sm:pt-28'>
        <div >
          <MainBar />
        </div>
        <Hotproducts />
        <Choices />
        <NewProducts />
        <ReadyToOrder />
        <FoodBeverages />
        <ApparelFashion />
        <SourceByRegion />
        <FeaturedCategories />
        <ClientReview />
        <SourcingServices />
      </div>

    </>

  )
}

export default Home
