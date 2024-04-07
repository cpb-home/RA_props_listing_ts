import Item from "../Item/Item"
import ItemInfo from "../../models/itemInfo"

const Listing = ( props: {items: ItemInfo[]}) => {

  return (
    <div className="item-list">
      {props.items.map((el) => <Item item={el} key={el.listing_id} />)}
    </div>
  )
}

export default Listing
