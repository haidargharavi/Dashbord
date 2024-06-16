import React from 'react'
import './home.css'
import Features from '../../components/features/Features'
import Chart from '../../components/chart/Chart'
import { xAxisData } from '../../data'
import WidgetSm from '../../components/widgetSm/WidgetSm'
import WidgetLg from '../../components/widgetLg/WidgetLg'

export default function Home() {
  return (
    <div className="home">
      <Features/>
      <Chart grid="true"title="Month Ssle" data={xAxisData} datakey="Sale"/>
      <div className="homeWidgets">
        <WidgetSm/>
        <WidgetLg/>
      </div>
    </div>
  )
}