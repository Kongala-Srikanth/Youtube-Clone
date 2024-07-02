import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {FaFire} from 'react-icons/fa'
import {SiYoutubegaming} from 'react-icons/si'
import SideBar from '../SideBar'
import Header from '../Header'
import NxtContext from '../../context/NxtContext'
import {
  BackgroundContainer,
  NoDataFoundHeading,
  NoDataFoundDescription,
  TrendingCard,
  TrendingHeading,
  FireIcon,
} from './styledComponents'
import SideBarSM from '../SideBarSM'
import GamingVideoItems from '../GamingVideoItems'
import './index.css'

const status = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN PROGRESS',
}

class Gaming extends Component {
  state = {gamingData: [], pageStatus: status.inProgress}

  componentDidMount() {
    this.getgamingData()
  }

  getgamingData = async () => {
    this.setState({pageStatus: status.inProgress})

    const url = `https://apis.ccbp.in/videos/gaming`
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

      const newData = data.videos.map(each => ({
        id: each.id,
        title: each.title,
        thumbnailUrl: each.thumbnail_url,
        viewCount: each.view_count,
      }))

      this.setState({gamingData: newData, pageStatus: status.success})
    } else {
      this.setState({pageStatus: status.failure})
    }
  }

  renderSuccess = () => (
    <NxtContext.Consumer>
      {value => {
        const {isLightMode} = value
        const {gamingData} = this.state

        return (
          <div className="fixed-position">
            <TrendingCard bgColor={isLightMode}>
              <FireIcon bgColor={isLightMode}>
                <SiYoutubegaming />
              </FireIcon>
              <TrendingHeading color={isLightMode}>Gaming</TrendingHeading>
            </TrendingCard>
            <BackgroundContainer bgColor={isLightMode} data-testid="gaming">
              <ul className="all-gaming-videos-container">
                {gamingData.map(each => (
                  <GamingVideoItems key={each.id} videosData={each} />
                ))}
              </ul>
            </BackgroundContainer>
          </div>
        )
      }}
    </NxtContext.Consumer>
  )

  renderFailure = () => (
    <NxtContext.Consumer>
      {value => {
        const {isLightMode} = value
        const {searchInput} = this.state
        return (
          <div>
            <BackgroundContainer bgColor={isLightMode} data-testid="gaming">
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
                  We are having some trouble to complete your request. Please
                  try again.
                </NoDataFoundDescription>
                <button
                  type="button"
                  className="retry-btn"
                  onClick={this.getgamingData}
                >
                  Retry
                </button>
              </div>
            </BackgroundContainer>
          </div>
        )
      }}
    </NxtContext.Consumer>
  )

  renderLoader = () => (
    <NxtContext.Consumer>
      {value => {
        const {isLightMode} = value

        return (
          <BackgroundContainer bgColor={isLightMode} data-testid="gaming">
            <Header />
            <div
              className="products-loader-container loader"
              data-testid="loader"
            >
              <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
            </div>
          </BackgroundContainer>
        )
      }}
    </NxtContext.Consumer>
  )

  renderLastResult = () => {
    const {pageStatus} = this.state

    switch (pageStatus) {
      case status.success:
        return this.renderSuccess()
      case status.failure:
        return this.renderFailure()
      case status.inProgress:
        return this.renderLoader()
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <Header />
        <div className="main-container">
          <SideBar className="sm-device" />
          {this.renderLastResult()}
        </div>
      </>
    )
  }
}

export default Gaming
// <div >{this.renderLastResult()}</div>
