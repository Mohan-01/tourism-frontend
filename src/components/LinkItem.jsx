import { Link } from "react-router-dom"
import '../css/LinkItem.css';

const LinkItem = ({link, item, text}) => {
  return (
      <Link to={link}>
        <div className="link-item">
            <div className="link"> {item} </div>
            <div className="text">
                <p>{text}</p>
            </div>
        </div>
      </Link>
  )
}

export default LinkItem
