import Item from "../Item/Item"
import ListingProps from "../../models/ListingProps"

const Listing = ( { items }: ListingProps) => {

  return (
    <div className="item-list">
      {items.map((el) => <Item item={el} key={el.listing_id} />)}
    </div>
  )
}

export default Listing
