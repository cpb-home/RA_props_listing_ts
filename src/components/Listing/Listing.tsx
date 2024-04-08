import Item from "../Item/Item"
//import ListingProps from "../../models/ListingProps"
import ItemInfo from '../../models/ItemInfo'


//const Listing = ( { items }: ListingProps) => {
const Listing = ( {items}: {items: ItemInfo[]}) => {

  return (
    <div className="item-list">
      {items.map((el) => <Item item={el} key={el.listing_id} />)}
    </div>
  )
}

export default Listing
