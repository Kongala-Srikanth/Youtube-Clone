import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {IoCloseOutline} from 'react-icons/io5'
import {FaSearch} from 'react-icons/fa'
import Header from '../Header'
import VideoItem from '../VideoItem'
import SideBar from '../SideBar'

import {
  BackgroundContainer,
  SearchInputBox,
  SearchInputContainer,
  SearchBtnContainer,
  NoDataFoundHeading,
  NoDataFoundDescription,
  AdsContainer,
} from './styledComponents'
import './index.css'
import NxtContext from '../../context/NxtContext'

const status = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN PROGRESS',
  noData: 'NO DATA',
}

class Home extends Component {
  state = {
    searchInput: '',
    videosData: [],
    sideBar: false,
    dataStatus: status.inProgress,
  }

  static contextType = NxtContext

  componentDidMount() {
    this.getVideosData()
  }

  onSearchInput = event => this.setState({searchInput: event.target.value})

  onSearchVideo = event => {
    if (event.key === 'Enter') {
      this.getVideosData()
    }
  }

  onClickHomeRetry = () => {
    this.setState({searchInput: ''}, this.getVideosData)
  }

  onEnterSearch = () => this.getVideosData()

  getVideosData = async () => {
    this.setState({dataStatus: status.inProgress})
    const {searchInput} = this.state
    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    console.log(url)
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
      if (data.total !== 0) {
        const newData = data.videos.map(each => ({
          id: each.id,
          title: each.title,
          thumbnailUrl: each.thumbnail_url,
          channel: {
            name: each.channel.name,
            profileImageUrl: each.channel.profile_image_url,
          },
          viewCount: each.view_count,
          publishedAt: each.published_at,
        }))
        this.setState({videosData: newData, dataStatus: status.success})
      } else {
        console.log('noData')
        this.setState({videosData: [], dataStatus: status.noData})
      }
    } else {
      this.setState({dataStatus: status.failure})
    }
  }

  // const {popAds, onPopAds} = this.context
  renderAdsContainer = () => {
    const {onPopAds} = this.context
    return (
      <AdsContainer data-testid="banner">
        <div className="ads-content">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="nxt watch logo"
            className="ads-img"
          />
          <p className="ads-description">
            Buy Nxt Watch Premium prepaid plans with UPI
          </p>
          <button type="button" className="ads-btn">
            GET IT NOW
          </button>
        </div>
        <button
          type="button"
          className="hide-btn"
          onClick={onPopAds}
          data-testid="close"
        >
          <IoCloseOutline />
        </button>
      </AdsContainer>
    )
  }

  renderLoader = (isLightMode, popAds, searchInput) => (
    <BackgroundContainer bgColor={isLightMode} data-testid="home">
      <Header />
      {popAds && this.renderAdsContainer()}
      <SearchInputContainer bgColor={isLightMode}>
        <SearchInputBox
          type="search"
          placeholder="Search"
          onChange={this.onSearchInput}
          onKeyDown={this.onSearchVideo}
          value={searchInput}
        />
        <SearchBtnContainer bgColor={isLightMode}>
          <button
            type="button"
            className="search-btn"
            data-testid="searchButton"
            onClick={this.onEnterSearch}
          >
            <FaSearch className="search-icon" />
          </button>
        </SearchBtnContainer>
      </SearchInputContainer>
      <div className="products-loader-container loader" data-testid="loader">
        <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
      </div>
    </BackgroundContainer>
  )

  renderSuccess = (isLightMode, popAds, videosData, searchInput) => (
    <div className="fixed-position">
      {popAds && this.renderAdsContainer()}
      <BackgroundContainer bgColor={isLightMode} data-testid="home">
        <SearchInputContainer bgColor={isLightMode}>
          <SearchInputBox
            type="search"
            placeholder="Search"
            onChange={this.onSearchInput}
            onKeyDown={this.onSearchVideo}
            value={searchInput}
          />
          <SearchBtnContainer bgColor={isLightMode}>
            <button
              type="button"
              className="search-btn"
              onClick={this.onEnterSearch}
              data-testid="searchButton"
            >
              <FaSearch className="search-icon" />
            </button>
          </SearchBtnContainer>
        </SearchInputContainer>
        <ul className="all-videos-container">
          {videosData.map(each => (
            <VideoItem key={each.id} videosData={each} />
          ))}
        </ul>
      </BackgroundContainer>
    </div>
  )

  renderNoData = (isLightMode, popAds, searchInput) => (
    <div>
      <Header />
      {popAds && this.renderAdsContainer()}
      <BackgroundContainer bgColor={isLightMode} data-testid="home">
        <SearchInputContainer bgColor={isLightMode}>
          <SearchInputBox
            type="search"
            placeholder="Search"
            onChange={this.onSearchInput}
            onKeyDown={this.onSearchVideo}
            value={searchInput}
          />
          <SearchBtnContainer bgColor={isLightMode}>
            <button
              type="button"
              className="search-btn"
              onClick={this.onEnterSearch}
              data-testid="searchButton"
            >
              <FaSearch className="search-icon" />
            </button>
          </SearchBtnContainer>
        </SearchInputContainer>
        <div className="no-data-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
            alt="no videos"
            className="no-data"
          />
          <NoDataFoundHeading color={isLightMode}>
            No Search results found
          </NoDataFoundHeading>
          <NoDataFoundDescription>
            Try different key words or remove search filter
          </NoDataFoundDescription>
          <button
            type="button"
            className="retry-btn"
            onClick={this.onClickHomeRetry}
          >
            Retry
          </button>
        </div>
      </BackgroundContainer>
    </div>
  )

  renderFailure = (isLightMode, popAds, searchInput) => (
    <div>
      <Header />
      {popAds && this.renderAdsContainer()}
      <BackgroundContainer bgColor={isLightMode} data-testid="home">
        <SearchInputContainer bgColor={isLightMode}>
          <SearchInputBox
            type="search"
            placeholder="Search"
            onChange={this.onSearchInput}
            onKeyDown={this.onSearchVideo}
            value={searchInput}
          />
          <SearchBtnContainer bgColor={isLightMode}>
            <button
              type="button"
              className="search-btn"
              onClick={this.onEnterSearch}
              data-testid="searchButton"
            >
              <FaSearch className="search-icon" />
            </button>
          </SearchBtnContainer>
        </SearchInputContainer>
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
            onClick={this.onClickHomeRetry}
          >
            Retry
          </button>
        </div>
      </BackgroundContainer>
    </div>
  )

  renderLastResult = () => {
    const {dataStatus, searchInput, videosData} = this.state
    const {isLightMode, popAds} = this.context
    switch (dataStatus) {
      case status.success:
        return this.renderSuccess(isLightMode, popAds, videosData, searchInput)
      case status.failure:
        return this.renderFailure(isLightMode, popAds, searchInput)
      case status.noData:
        return this.renderNoData(isLightMode, popAds, searchInput)
      case status.inProgress:
        return this.renderLoader(isLightMode, popAds, searchInput)
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

export default Home

/*

<>
        <Header />
        <div className="side-bar-container">
          <div className="main-container">
            <SideBar />
            {this.renderLastResult()}
          </div>
        </div>
        <div className="sm-device">{this.renderLastResult()}</div>
      </>

      */
