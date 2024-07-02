import {formatDistanceToNow} from 'date-fns'
import {Link} from 'react-router-dom'
import NxtContext from '../../context/NxtContext'
import {VideoTitle} from './styledComponents'
import './index.css'

const GamingVideoItems = props => {
  const {videosData} = props
  const {id, title, thumbnailUrl, viewCount} = videosData

  return (
    <NxtContext.Consumer>
      {value => {
        const {isLightMode} = value
        return (
          <Link to={`/videos/${id}`} className="link">
            <li className="each-gaming-video-container">
              <img
                src={thumbnailUrl}
                alt="video thumbnail"
                className="thumbnail-img-gaming"
              />
              <div className="video-details-container-trending">
                <div>
                  <VideoTitle color={isLightMode}>{title}</VideoTitle>
                  <div className="video-details">
                    <p className="view-count">{viewCount} Watching</p>
                    <p className="worldwide">Worldwide</p>
                  </div>
                </div>
              </div>
            </li>
          </Link>
        )
      }}
    </NxtContext.Consumer>
  )
}

export default GamingVideoItems
