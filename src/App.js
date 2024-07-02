import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import NxtContext from './context/NxtContext'
import Login from './components/Login'
import Gaming from './components/Gaming'
import Home from './components/Home'
import Trending from './components/Trending'
import VideoDetails from './components/VideoDetails'
import SavedVideos from './components/SavedVideos'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'

import './App.css'

// Replace your code here
class App extends Component {
  state = {
    isLightMode: true,
    sideBar: 'HOME',
    popAds: true,
    likedVideos: [],
    dislikedVideos: [],
    savedVideos: [],
    savedVideosData: [],
    sideBarSm: false,
  }

  onLightMode = () =>
    this.setState(prevState => ({isLightMode: !prevState.isLightMode}))

  onPopAds = () => this.setState({popAds: false})

  onSideBar = id => this.setState({sideBar: id})

  onLikedVideo = id =>
    this.setState(prevState => {
      if (prevState.likedVideos.includes(id)) {
        return {
          likedVideos: [...prevState.likedVideos.filter(each => id !== each)],
        }
      }
      if (prevState.dislikedVideos.includes(id)) {
        return {
          dislikedVideos: [
            ...prevState.dislikedVideos.filter(each => id !== each),
          ],
          likedVideos: [...prevState.likedVideos, id],
        }
      }
      return {likedVideos: [...prevState.likedVideos, id]}
    })

  onDislikeVideos = id =>
    this.setState(prevState => {
      if (prevState.dislikedVideos.includes(id)) {
        return {
          dislikedVideos: [
            ...prevState.dislikedVideos.filter(each => id !== each),
          ],
        }
      }
      if (prevState.likedVideos.includes(id)) {
        return {
          likedVideos: [...prevState.likedVideos.filter(each => id !== each)],
          dislikedVideos: [...prevState.dislikedVideos, id],
        }
      }
      return {dislikedVideos: [...prevState.dislikedVideos, id]}
    })

  onSavedVideos = (id, data) =>
    this.setState(prevState => {
      if (prevState.savedVideos.includes(id)) {
        return {
          savedVideos: [...prevState.savedVideos.filter(each => id !== each)],
          savedVideosData: [
            ...prevState.savedVideosData.filter(each => id !== each.id),
          ],
        }
      }
      return {
        savedVideos: [...prevState.savedVideos, id],
        savedVideosData: [...prevState.savedVideosData, data],
      }
    })

  // onSavedVideosData = data => console.log('hello')

  onSideBarSm = () =>
    this.setState(prevState => ({sideBarSm: !prevState.sideBarSm}))

  render() {
    const {
      isLightMode,
      sideBar,
      popAds,
      likedVideos,
      dislikedVideos,
      savedVideos,
      savedVideosData,
      sideBarSm,
    } = this.state
    return (
      <NxtContext.Provider
        value={{
          isLightMode,
          onLightMode: this.onLightMode,
          onPopAds: this.onPopAds,
          popAds,
          sideBar,
          onSideBar: this.onSideBar,
          likedVideos,
          onLikedVideo: this.onLikedVideo,
          dislikedVideos,
          onDislikeVideos: this.onDislikeVideos,
          savedVideos,
          onSavedVideos: this.onSavedVideos,
          savedVideosData,
          sideBarSm,
          onSideBarSm: this.onSideBarSm,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute exact path="/videos/:id" component={VideoDetails} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </NxtContext.Provider>
    )
  }
}

export default App
