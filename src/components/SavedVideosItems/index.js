import {formatDistanceToNow} from 'date-fns'
import {Link} from 'react-router-dom'
import NxtContext from '../../context/NxtContext'
import {VideoTitle, VideoViewCount, ChannelName} from './styledComponents'
import './index.css'

const SavedVideosItems = props => {
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
            <li className="each-video-container-trending each-video-container-gaming">
              <img
                src={thumbnailUrl}
                alt="video thumbnail"
                className="thumbnail-img-trending"
              />
              <div className="video-details-container-trending">
                <div className="descripton-details">
                  <VideoTitle color={isLightMode}>{title}</VideoTitle>
                  <div className="video-details">
                    <ChannelName className="channel-name">{name}</ChannelName>
                    <div className="published-date-container">
                      <VideoViewCount>{viewCount} views</VideoViewCount>
                      <VideoViewCount>
                        {date[1]} {date[2]} ago
                      </VideoViewCount>
                    </div>
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

export default SavedVideosItems
