import './App.css'
import Card from './components/Card'

function App() {
  return (
    <>
      <h1 className='bg-sky-500 text-white font-bold rounded-lg p-5 text-4xl'>Ecommerce Cards Using Props</h1>
      <div className='mt-5 flex flex-wrap gap-16 justify-center'>
        <Card image="https://m.media-amazon.com/images/I/61TKlubNM9L._SY741_.jpg" cardTitle= "Vivo T2 5G" ram="6GB" rom="128GB" battery="4500mAh" price="18,000" actPrice="20,000" netType="5G"/>
        <Card image="https://m.media-amazon.com/images/I/31DlTrldSnL.jpg" cardTitle= "Oppo A53" ram="4GB" rom="128GB" battery="5000mAh" price="11,999" actPrice="16,000" netType="4G"/>
        <Card image="https://m.media-amazon.com/images/I/61g35Y-TH0L._AC_UY218_.jpg" cardTitle= "Vivo T1" ram="4GB" rom="128GB" battery="5000mAh" price="16,990" actPrice="19,000" netType="4G"/>
        <Card image="https://m.media-amazon.com/images/I/81QW4IDVidL._SL1500_.jpg" cardTitle= "Samsung Galaxy A14" ram="6GB" rom="128GB" battery="4300mAh" price="16,999" actPrice="20,999" netType="5G"/>
        <Card image="https://m.media-amazon.com/images/I/91fonhAtoAL._SL1500_.jpg" cardTitle= "Samsung Galaxy M34" ram="6GB" rom="128GB" battery="6000mAh" price="15,999" actPrice="24,999" netType="5G"/>
        <Card image="https://m.media-amazon.com/images/I/81NEVf26quL._SX679_.jpg" cardTitle= "Samsung Galaxy S24 Ultra" ram="12GB" rom="256GB" battery="5000mAh" price="1,19,999" actPrice="1,34,999" netType="5G"/>
      </div>
    </>
  )
}

export default App
