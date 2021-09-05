import React from 'react'
import Chart from '../Components/Charts/Chart'
import FeatureInfo from '../Components/FeatureInfo/FeatureInfo'
import WidgetLg from '../Components/WidgetLg/WidgetLg'
import WidgetSm from '../Components/WidgetSm/WidgetSm'
import "./Home.css"
function Home() {
    return (
        <div className="home">
            <FeatureInfo/>
            <Chart/>
            <div className="widget">
            <WidgetSm/>
            <WidgetLg/>
            </div>
        </div>
    )
}

export default Home
