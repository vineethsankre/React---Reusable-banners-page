import './index.css'

const BannerCardItem = props => {
  const {cardItem} = props
  const {headerText, description, className} = cardItem
  return (
    <li className={`${className} banner-card-item`}>
      <div className="card-details">
        <h1 className="heading">{headerText}</h1>
        <p className="description">{description}</p>
        <button className="show-more-btn" type="button">
          Show More
        </button>
      </div>
    </li>
  )
}

export default BannerCardItem
