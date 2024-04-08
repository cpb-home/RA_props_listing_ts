import ItemProps from "../../models/ItemProps"

const Item = ( { item }: ItemProps) => {
  let colorClass: string = '';
  if (item.quantity < 10) {
    colorClass = 'item-quantity level-low';
  } else if (item.quantity > 20) {
    colorClass = 'item-quantity level-high';
  } else {
    colorClass = 'item-quantity level-medium';
  }

  return (
    <div className="item">
      <div className="item-image">
        <a href={item.url}>
          <img src={item.img} />
        </a>
      </div>
      <div className="item-details">
        <p className="item-title">{item.title.length > 50 ? item.title.slice(0, 50) + '...' : item.title}</p>
        <p className="item-price">{item.currency_code} {item.price}</p>
        <p className={colorClass}>{item.quantity + ' left'}</p>
      </div>
    </div>
  )
}

export default Item
