import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import ReactPlayer from 'react-player'
import {formatDistanceToNow} from 'date-fns'
import {BiLike, BiDislike} from 'react-icons/bi'
import {RiMenuAddFill} from 'react-icons/ri'
import Header from '../Header'
import SideBar from '../SideBar'
import {
  BackgroundContainer,
  SideBarContainer,
  VideoDescription,
  VideoTitle,
  LikeBtn,
  DisLikeBtn,
  SaveBtn,
  NoDataFoundHeading,
  NoDataFoundDescription,
  ChannelName,
} from './styledComponents'
import NxtContext from '../../context/NxtContext'
import './index.css'

const status = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN PROGRESS',
}

class VideoDetails extends Component {
  state = {videoDetails: [], pageStatus: status.inProgress}

  componentDidMount() {
    this.getVideoDetails()
  }

  getVideoDetails = async event => {
    this.setState({pageStatus: status.inProgress})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const url = `https://apis.ccbp.in/videos/${id}`
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      const data = await response.json()
      const newData = {
        id: data.video_details.id,
        title: data.video_details.title,
        videoUrl: data.video_details.video_url,
        thumbnailUrl: data.video_details.thumbnail_url,
        channel: {
          name: data.video_details.channel.name,
          profileImageUrl: data.video_details.channel.profile_image_url,
          subscriberCount: data.video_details.channel.subscriber_count,
        },
        viewCount: data.video_details.view_count,
        publishedAt: data.video_details.published_at,
        description: data.video_details.description,
      }

      this.setState({pageStatus: status.success, videoDetails: newData})
    } else {
      this.setState({pageStatus: status.failure})
    }
  }

  renderSuccess = (
    isLightMode,
    likedVideos,
    onLikedVideo,
    onDislikeVideos,
    onSavedVideos,
    dislikedVideos,
    savedVideos,
    onSavedVideosData,
    savedVideosData,
  ) => {
    const {videoDetails, channelData} = this.state
    const {
      id,
      title,
      description,
      thumbnailUrl,
      channel,
      videoUrl,
      viewCount,
      publishedAt,
    } = videoDetails
    const {name, profileImageUrl, subscriberCount} = channel

    const date = formatDistanceToNow(new Date(publishedAt)).split(' ')

    const likeBtnActive = !likedVideos.includes(id)
    const diLikeBtnActive = !dislikedVideos.includes(id)
    const saveBtnActive = !savedVideos.includes(id)

    return (
      <BackgroundContainer bgColor={isLightMode} data-testid="videoItemDetails">
        <ReactPlayer
          url={videoUrl}
          controls
          className="video-player-sm"
          width="100%"
        />

        <ReactPlayer
          url={videoUrl}
          controls
          className="video-player-lg"
          width="100%"
          height="60%"
        />

        <div className="each-video-details-container">
          <VideoTitle color={isLightMode}>{title}</VideoTitle>
          <div className="view-count-container">
            <p className="views-count">{viewCount}</p>
            <p className="views-count">.</p>
            <p className="views-count">
              {' '}
              {date[1]} {date[2]} ago
            </p>
          </div>
          <ul className="like-icons-container">
            <li>
              <LikeBtn
                color={likeBtnActive}
                type="button"
                className="hide-btn"
                onClick={() => onLikedVideo(id)}
              >
                <BiLike className="like-icons-size" />
                Like
              </LikeBtn>
            </li>
            <li>
              <DisLikeBtn
                color={diLikeBtnActive}
                type="button"
                className="hide-btn"
                onClick={() => onDislikeVideos(id)}
              >
                <BiDislike className="like-icons-size" />
                Dislike
              </DisLikeBtn>
            </li>
            <li>
              {saveBtnActive ? (
                <SaveBtn
                  color={saveBtnActive}
                  type="button"
                  className="hide-btn"
                  onClick={() => onSavedVideos(id, videoDetails)}
                >
                  <RiMenuAddFill className="like-icons-size" />
                  Save
                </SaveBtn>
              ) : (
                <SaveBtn
                  color={saveBtnActive}
                  type="button"
                  className="hide-btn"
                  onClick={() => onSavedVideos(id, videoDetails)}
                >
                  <RiMenuAddFill className="like-icons-size" />
                  Saved
                </SaveBtn>
              )}
              
            </li>
          </ul>
        </div>
        <div className="channel-data-container">
          <img
            src={profileImageUrl}
            alt="channel logo"
            className="channel-logo"
          />
          <div className="channel-name-container">
            <ChannelName>{name}</ChannelName>
            <ChannelName>{subscriberCount}</ChannelName>
          </div>
        </div>
        <VideoDescription color={isLightMode}>{description}</VideoDescription>
      </BackgroundContainer>
    )
  }

  renderLoader = isLightMode => (
    <BackgroundContainer bgColor={isLightMode}>
      <div className="products-loader-container loader" data-testid="loader">
        <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
      </div>
    </BackgroundContainer>
  )

  renderFailure = isLightMode => (
    <div>
      <BackgroundContainer bgColor={isLightMode}>
        <div className="no-data-container">
          {isLightMode ? (
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
              alt="failure view"
              className="no-data"
            />
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png"
              alt="failure view"
              className="no-data"
            />
          )}

          <NoDataFoundHeading color={isLightMode}>
            Oops! Something Went Wrong
          </NoDataFoundHeading>
          <NoDataFoundDescription>
            We are having some trouble to complete your request. Please try
            again.
          </NoDataFoundDescription>
          <button
            type="button"
            className="retry-btn"
            onClick={this.getVideoDetails}
          >
            Retry
          </button>
        </div>
      </BackgroundContainer>
    </div>
  )

  renderLastResult = () => (
    <NxtContext.Consumer>
      {value => {
        const {
          isLightMode,
          likedVideos,
          onLikedVideo,
          onDislikeVideos,
          onSavedVideos,
          dislikedVideos,
          savedVideos,
          onSavedVideosData,
          savedVideosData,
          onSideBar,
        } = value
        // onSideBar('GAMING')
        const {pageStatus} = this.state
        switch (pageStatus) {
          case status.success:
            return this.renderSuccess(
              isLightMode,
              likedVideos,
              onLikedVideo,
              onDislikeVideos,
              onSavedVideos,
              dislikedVideos,
              savedVideos,
              onSavedVideosData,
              savedVideosData,
            )
          case status.failure:
            return this.renderFailure(isLightMode)
          case status.inProgress:
            return this.renderLoader(isLightMode)
          default:
            return null
        }
      }}
    </NxtContext.Consumer>
  )

  render() {
    return (
      <div data-testid="videoItemDetails">
        <Header />
        <div className="main-container">
          <SideBar className="sm-device" />
          {this.renderLastResult()}
        </div>
      </div>
    )
  }
}

export default VideoDetails

// <div className="sm-device">{this.renderLastResult()}</div>
