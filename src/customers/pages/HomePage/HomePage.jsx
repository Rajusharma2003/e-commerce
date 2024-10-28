import MainCarousel from '../../components/HomeCarousel/MainCarousel'
import HomeSectionDetails from '../../components/HomeSectionDetails/HomeSectionDetails'

import { kurtaPage1 } from '../../../ecommerce-products-data-master/Kurta/kurta.js';
import { mens_kurta } from '../../../ecommerce-products-data-master/Men/men_kurta.js';
import { dressPage1 } from '../../../ecommerce-products-data-master/dress/page1.js';
import { gounsPage1 } from '../../../ecommerce-products-data-master/Gouns/gouns.js';


console.log('mens' , mens_kurta);
const HomePage = () => {
  return (
    <div>
        {/* this is the main carousel */}
        {/* <MainCarousel/> */}

        {/*This is for the product details carousel  */}
        <div>
        </div>
            <HomeSectionDetails data={kurtaPage1} sectionName={"Woman's Kurta"}/>
            <HomeSectionDetails data={gounsPage1} sectionName={"Gouns's"}/>
            <HomeSectionDetails data={dressPage1} sectionName={"dress's"}/>
            <HomeSectionDetails data={mens_kurta} sectionName={"Men's Kurta"}/>
    </div>
  )
}

export default HomePage