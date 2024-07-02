import {formatDistanceToNow} from 'date-fns'
import {Link} from 'react-router-dom'
import NxtContext from '../../context/NxtContext'
import {VideoTitle} from './styledComponents'
import './index.css'

const TrendingVideosItems = props => {
  const {videosData} = props
  const {id, title, thumbnailUrl, channel, viewCount, publishedAt} = videosData
  const {name, profileImageUrl} = channel
  const date = formatDistanceToNow(new Date(publishedAt)).split(' ')

  return (
    <NxtContext.Consumer>
      {value => {
        const {isLightMode} = value
        return (
          <Link to={`/videos/${id}`} className="link">
            <li className="each-video-container-trending">
              <img
                src={thumbnailUrl}
                alt="video thumbnail"
                className="thumbnail-img-trending"
              />
              <div className="video-details-container-trending">
                <img
                  src={profileImageUrl}
                  alt="channel logo"
                  className="trending-channel-img"
                />
                <div className="descripton-details">
                  <VideoTitle color={isLightMode}>{title}</VideoTitle>
                  <div className="video-details">
                    <p className="channel-name">{name}</p>
                    <p className="view-count">{viewCount} views</p>
                    <p className="view-count">
                      {date[1]} {date[2]} ago
                    </p>
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

export default TrendingVideosItems
