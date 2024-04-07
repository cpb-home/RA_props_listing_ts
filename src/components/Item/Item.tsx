import ItemInfo from "../../models/itemInfo"

const Item = (props: {item: ItemInfo}) => {
  let colorClass: string = '';
  if (props.item.quantity < 10) {
    colorClass = 'item-quantity level-low';
  } else if (props.item.quantity > 20) {
    colorClass = 'item-quantity level-high';
  } else {
    colorClass = 'item-quantity level-medium';
  }

  return (
    <div className="item">
      <div className="item-image">
        <a href={props.item.url}>
          <img src={props.item.img} />
        </a>
      </div>
      <div className="item-details">
        <p className="item-title">{props.item.title.length > 50 ? props.item.title.slice(0, 50) + '...' : props.item.title}</p>
        <p className="item-price">{props.item.currency_code} {props.item.price}</p>
        <p className={colorClass}>{props.item.quantity + ' left'}</p>
      </div>
    </div>
  )
}

export default Item
