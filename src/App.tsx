import './App.css'
import Listing from './components/Listing/Listing'
import info from './data/etsy.json';
import ItemInfo from './models/itemInfo';

function App() {
  const data = info;
  const dataReady: ItemInfo[] = [];

  const dataFiltered = data.filter(el => el.state!=='removed');
  dataFiltered.forEach((el: any) => {
    dataReady.push({
      listing_id: el.listing_id,
      url: el.url,
      title: el.title,
      currency_code: el.currency_code,
      price: el.price,
      quantity: el.quantity,
      img: el.MainImage.url_570xN
    });
  });
    
  return (
    <>
      <Listing items={dataReady} />
    </>
  )
}

export default App
