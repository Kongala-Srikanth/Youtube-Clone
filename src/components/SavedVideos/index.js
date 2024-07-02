import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {FaFire} from 'react-icons/fa'
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
import SavedVideosItems from '../SavedVideosItems'
import SideBarSM from '../SideBarSM'
import './index.css'

const status = {
  success: 'SUCCESS',
  noData: 'NO DATA',
  inProgress: 'IN PROGRESS',
}

class SavedVideos extends Component {
  state = {trendingData: [], pageStatus: status.inProgress}

  static contextType = NxtContext

  componentDidMount() {
    this.getTrendingData()
  }

  getTrendingData = () => {
    const {savedVideosData} = this.context
    if (savedVideosData.length !== 0) {
      this.setState({
        trendingData: savedVideosData,
        pageStatus: status.success,
      })
    } else {
      this.setState({pageStatus: status.noData})
    }
  }

  renderSuccess = () => (
    <NxtContext.Consumer>
      {value => {
        const {isLightMode} = value
        const {trendingData} = this.state

        return (
          <div className="fixed-position">
            <TrendingCard bgColor={isLightMode}>
              <FireIcon bgColor={isLightMode}>
                <FaFire />
              </FireIcon>
              <TrendingHeading color={isLightMode}>
                Saved Videos
              </TrendingHeading>
            </TrendingCard>
            <BackgroundContainer
              bgColor={isLightMode}
              data-testid="savedVideos"
            >
              <ul className="all-trending-videos-container">
                {trendingData.map(each => (
                  <SavedVideosItems key={each.id} videosData={each} />
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
            <BackgroundContainer
              bgColor={isLightMode}
              data-testid="savedVideos"
            >
              <div className="no-saved-data-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                  alt="no saved videos"
                  className="no-data"
                />

                <NoDataFoundHeading color={isLightMode}>
                  No saved videos found
                </NoDataFoundHeading>
                <NoDataFoundDescription>
                  You can save your videos while watching them
                </NoDataFoundDescription>
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
          <BackgroundContainer bgColor={isLightMode} data-testid="savedVideos">
            <Header />
            <div className="products-loader-container loader">
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
      case status.noData:
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

export default SavedVideos
//<div>{this.renderLastResult()}</div>
