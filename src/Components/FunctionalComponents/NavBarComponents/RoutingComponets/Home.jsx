import React from 'react'
import { Carousel } from 'react-bootstrap'
import './Home.css'

const Home = () => {
  return (
      <div className="home-container">
          <Carousel fade>
              <Carousel.Item>
                  <img src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/PD23/ACQ/hero/v2/PC_Hero_3000x1200_2X_EN._CB600991698_.jpg" alt="carouselim" className="Carousel1"/>
              </Carousel.Item>
              <Carousel.Item>
                  <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img2020/img21/apparelGW/junatf23/unrecapay/WA_eth_3000._CB603210873_.jpg" alt="carouselim" className="Carousel1"/>
              </Carousel.Item>
              <Carousel.Item>
                  <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/PCA/Groomingfest/DesktopHero_UNREC-2X._CB601245817_.jpg" alt="carouselim" className="Carousel1"/>
              </Carousel.Item>
              <Carousel.Item>
                  <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Shreyansh/BAU/Unrexc/D70978891_INWLD_BAU_Unrec_Uber_PC_Hero_3000x1200._CB594707876_.jpg" alt="carouselim" className="Carousel1"/>
              </Carousel.Item>
              <Carousel.Item>
                  <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Softlines_JWL_SH_GW_Assets/July_23/ATF/Unrec/Watches/3000_watches._CB601832227_.jpg" alt="carouselim" className="Carousel1"/>
              </Carousel.Item>
          </Carousel>
          <div class="homeapp-container">
              <div class="card-container">
                  <div className="homeapli-container">
                      <h1 className="home-heada">Revamp your home in style</h1>
                      <div class="appliances-container">
                          <div><img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2021/GW/MSO/April/372x232_1_High._SY232_CB670263840_.jpg" alt="sofa" className="sofaimg" />
                          <p class="sofapara">Bedsheets,Curtains & more</p></div>
                          <div><img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2021/GW/MSO/April/372x232_2_High._SY232_CB670263840_.jpg" alt="sofa" className="sofaimg" />
                          <p class="sofapara">Home Decoration</p></div>
                          <div><img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2021/GW/MSO/April/372x232_3_High._SY232_CB670263840_.jpg" alt="sofa" className="sofaimg" />
                              <p class="sofapara">Home storage</p></div>
                          <div><img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2021/GW/MSO/April/372x232_4_High._SY232_CB670263840_.jpg" alt="sofa" className="sofaimg" />
                          <p class="sofapara">Light Solutions</p></div>
                 </div>
              </div>
                  <div className="prime-container">
                      <h1 className="home-heada">Appliances for your home upto | 50%off</h1>
                      <div class="appliances-container">
                          <div><img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-372x232----B08RDL6H79._SY232_CB667322346_.jpg" alt="sofa" className="sofaimg" />
                              <p class="sofapara">Air conditioners</p>
                          </div>
                          <div><img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/B08345R1ZW---372x232._SY232_CB667322346_.jpg" alt="sofa" className="sofaimg" />
                              <p class="sofapara">Refrigerators</p>
                          </div>
                          <div><img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/B07G5J5FYP._SY232_CB667322346_.jpg" alt="sofa" className="sofaimg" />
                              <p class="sofapara">Microwaves</p>
                          </div>
                          <div><img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08CPQVLZT._SY232_CB667322346_.jpg" alt="sofa" className="sofaimg" />
                              <p class="sofapara">Washing machines</p>
                          </div>
                       </div>

              </div>
                  <div className="off-container">
                      <h1 className="home-heada">Prime exclusive offers | Travel tickets</h1>
                      <div class="appliances-container">
                          <div><img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/AmazonPay/PD23/QC/Flight_372x232._SY232_CB600937543_.jpg" alt="sofa" className="sofaimg" />
                              <p class="sofapara">Get upto 20%off* on flight tickets</p>

                          </div>
                                <div><img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/AmazonPay/PD23/QC/Train_372x232._SY232_CB600937543_.jpg" alt="sofa" className="sofaimg" />
                              <p class="sofapara">Zero gateway fees on trains</p>
                              
                          </div>
                                                    <div><img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/AmazonPay/PD23/QC/Bus_372x232._SY232_CB600937543_.jpg" alt="sofa" className="sofaimg" />
                              <p class="sofapara">Flat 10% back on bus tickets</p>
                              
                          </div>
                                                    <div><img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/AmazonPay/PD23/QC/SW_372x232._SY232_CB600937543_.jpg" alt="sofa" className="sofaimg" />
                              <p class="sofapara">Products for your travel needs</p>
                              
                          </div>
                          </div>
                      
              </div>
            </div>
        </div>
    </div>
  )
}

export default Home