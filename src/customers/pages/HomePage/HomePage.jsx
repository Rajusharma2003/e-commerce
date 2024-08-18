import MainCarousel from '../../components/HomeCarousel/MainCarousel'
import HomeSectionDetails from '../../components/HomeSectionDetails/HomeSectionDetails'

import { kurtaPage1 } from '../../../ecommerce-products-data-master/Kurta/kurta.js';


const HomePage = () => {
  return (
    <div>
        {/* this is the main carousel */}
        <MainCarousel/>

        {/*This is for the product details carousel  */}
        <div>
            <HomeSectionDetails data={kurtaPage1}/>
           
        </div>
    </div>
  )
}

export default HomePage