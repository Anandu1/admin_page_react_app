import React from 'react'
import "./FeatureInfo.css"
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
function FeatureInfo() {
    return (
        <div className="featured">
          <div className="featuredItem">
              <span className="featuredTitle">
                  Revenue
              </span>
              <div className="featuredMoneyContainer">
                  <span className="featuredMoney">$24533</span>
                  <span className="featuredMoneyRate">-11.4<ArrowDownwardIcon className="arrow-down"/></span>
              </div>
              <span className="featuredSub">Compared to last month</span>
              </div>  
              <div className="featuredItem">
              <span className="featuredTitle">
                  Sales
              </span>
              <div className="featuredMoneyContainer">
                  <span className="featuredMoney">$24323</span>
                  <span className="featuredMoneyRate">1.4<ArrowDownwardIcon className="arrow-down"/></span>
              </div>
              <span className="featuredSub">Compared to last month</span>
              </div>  
              <div className="featuredItem">
              <span className="featuredTitle">
                  Cost
              </span>
              <div className="featuredMoneyContainer">
                  <span className="featuredMoney">$24323</span>
                  <span className="featuredMoneyRate">1.4<ArrowUpwardIcon className="arrow-up"/></span>
              </div>
              <span className="featuredSub">Compared to last month</span>
              </div>  
        </div>
    )
}

export default FeatureInfo
