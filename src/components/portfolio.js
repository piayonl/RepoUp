import React from "react";

//import stock
import stock from "../img/CovidDash.jpg";
import stock1 from "../img/wine-production.jpg";
import stock2 from "../img/redtails.jpg";
import stock3 from "../img/EmployeeDirectory.jpg";
import stock4 from "../img/BudgetTracker.jpg";
import stock5 from "../img/PasswordGenerator.jpg";

class Portfolio extends React.Component {
  render() {
    return (
      <section id="work" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">Portfolio</h3>
                <p className="subtitle-a">
                  Highlights of my work product
                </p>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="work-box">
                <a href= "https://jamesravelle.github.io/covid-dash/" className="">
                  <div className="work-img">
                    <img src={stock} alt="CovidDash" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Project 1: Covid-19 Dash</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                          Used APIs to develop an application to display Covid-19 data. 
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                
              </div>
            </div>

            {/* 2 of 6 */}
            <div className="col-md-4">
              <div className="work-box">
                <a href= "https://project-2-group1.herokuapp.com/7" className="">
                  <div className="work-img">
                    <img src={stock1} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Project 2: Wine-A-Lot</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                          Wines Sales Tracker: User Tracks Product Inventory Sales
                          </span>{" "}
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href= "https://vetdiscount.herokuapp.com/" className="">
                  <div className="work-img">
                    <img src={stock2} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">React:Veteran Discount App</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                          Application finds Veteran Discount Businesses Nearest your Location.
                          </span>
                          
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
            
              </div>
            </div>


            <div className="col-md-4">
              <div className="work-box">
                <a href= "https://piayonl.github.io/EmployeeSearch/" className="">
                  <div className="work-img">
                    <img src={stock3} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Employee Locator</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            App to Search for an Employee in Database, Based on Specific Search Criteria.
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href= "https://thawing-fjord-89896.herokuapp.com/" className="">
                  <div className="work-img">
                    <img src={stock4} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Budget Tracker</h2>
                        <div className="w-more">
                          <span className="w-ctegory">Application that tracks withdrawals and deposits with or without a data/internet connection</span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href= "https://piayonl.github.io/PWGENERATOR/" className="" >              
                <div className="work-img">
                    <img src={stock5} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Password Generator</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                           Generates a random secured password
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
