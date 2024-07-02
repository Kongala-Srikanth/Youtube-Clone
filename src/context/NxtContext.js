import React from 'react'

const NxtContext = React.createContext({
  isLightMode: true,
  onLightMode: () => {},
  popAds: true,
  onPopAds: () => {},
  sideBar: '',
  onSideBar: () => {},
  likedVideos: [],
  onLikedVideo: () => {},
  dislikedVideos: [],
  onDislikeVideos: () => {},
  savedVideos: [],
  onSavedVideos: () => {},
  savedVideosData: [],
  onSavedVideosData: () => {},
  sideBarSm: false,
  onSideBarSm: () => {},
})

export default NxtContext
