import Head from 'next/head'
import App from '../pages/App'
import ChartComponent from '../components/ChartComponent'

export default function Home() {
  return (
    <div>
      <h3>CHARTJS TEST</h3>
      <App />
      <ChartComponent />
    </div>
  )
}
