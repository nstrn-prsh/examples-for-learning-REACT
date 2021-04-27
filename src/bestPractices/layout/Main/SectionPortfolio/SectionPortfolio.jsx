import React from 'react'
import './portfolio.css'

const SectionPortfolio = () => {
    return (  
        <>
        <section id="portfolio">
        <div className="outer_container">
          <div className="container">
            <div className="row">      
              <div className="col col-md-5 col-sm-12"><h1>Portfolio</h1></div>
              <div className="col col-md-7 col-sm-12" id="portfolio_content">
                <div className="row">
                  <div className="col col-md-4 col-sm-4 col-xs-6">
                    <div className="portfolio-item">                  
                      <div className="portfolio-thumb">
                        <img src="./../../images/sunFlower.jpg" alt="portfolio image 1" className="img-responsive" />
                        <div className="overlay-p">
                          <a href="#">
                            <h2>Title One</h2>
                            <p>Lorem ipsum dolor sit amet, adipiscing elit. Vivamus elit nec metus pellentesque.</p> 
                          </a>
                        </div>
                      </div>                     
                    </div>      
                  </div>
                  <div className="col col-md-4 col-sm-4 col-xs-6">  
                    <div className="portfolio-item">
                      <div className="portfolio-thumb">              
                        <img src="./../../images/sunFlower.jpg" alt="portfolio image 2" className="img-responsive" />
                        <div className="overlay-p">
                          <a href="#">
                            <h2>Second Title</h2>
                            <p>Donec elit arcu, accumsan quis sagittis vitae, porttitor et velit.</p> 
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col col-md-4 col-sm-4 col-xs-6">
                    <div className="portfolio-item">
                      <div className="portfolio-thumb">
                        <img src="./../../images/sunFlower.jpg" alt="portfolio image 3" className="img-responsive"/>
                        <div className="overlay-p">
                          <a href="#">
                            <h2>Title Three</h2>
                            <p>Proin porttitor urna et enim semper lobortis eu vitae diam.</p> 
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col col-md-4 col-sm-4 col-xs-6">
                    <div className="portfolio-item">
                      <div className="portfolio-thumb">
                        <img src="./../../images/sunFlower.jpg" alt="portfolio image 4" className="img-responsive" />
                        <div className="overlay-p">
                          <a href="#">
                            <h2>Fourth Title</h2>
                            <p>Maecenas semper quis arcu in porta. Donec elit arcu, vitae, porttitor et velit.</p> 
                          </a>
                        </div>
                      </div>                  
                    </div>      
                  </div>
                  <div className="col col-md-4 col-sm-4 col-xs-6">  
                    <div className="portfolio-item">
                      <div className="portfolio-thumb">              
                        <img src="./../../images/sunFlower.jpg" alt="portfolio image 5" className="img-responsive" />
                        <div className="overlay-p">
                          <a href="#">
                            <h2>Fifth Title</h2>
                            <p>Vivamus tempor elit nec metus pellentesque posuere.</p> 
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col col-md-4 col-sm-4 col-xs-6">
                    <div className="portfolio-item">
                      <div className="portfolio-thumb">
                        <img src="./../../images/sunFlower.jpg" alt="portfolio image 6" className="img-responsive" />
                        <div className="overlay-p">
                          <a href="#">
                            <h2>Sixth Title</h2>
                            <p>Vestibulum ac enim.Vestibulum at mollis justo, eu elementum nisi.</p> 
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>   
                </div>          
              </div>
            </div>
          </div>
        </div>
      </section>
     </>
    );
}
 
export default SectionPortfolio;