import {Link} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {FaFire} from 'react-icons/fa'
import {SiYoutubegaming} from 'react-icons/si'
import {RiMenuAddFill} from 'react-icons/ri'
import NxtContext from '../../context/NxtContext'
import Header from '../Header'
import {
  BackgroundContainer,
  SideBarName,
  ContactHeading,
  ContactDescription,
  SmallDeviceSideBar,
} from './styledComponents'
import './index.css'

const sideBarData = [
  {id: 'HOME', displayText: 'Home'},
  {id: 'TRENDING', displayText: 'Trending'},
  {id: 'GAMING', displayText: 'Gaming'},
  {id: 'SAVED', displayText: 'Saved videos'},
]

const SideBar = () => (
  <NxtContext.Consumer>
    {value => {
      const {sideBar, onSideBar, isLightMode} = value

      const onActiveBtn = id => onSideBar(id)

      return (
        <SmallDeviceSideBar bgColor={isLightMode}>
          <BackgroundContainer bgColor={isLightMode}>
            <Link to="/" className="link">
              <button
                className={
                  sideBar === sideBarData[0].id
                    ? isLightMode
                      ? 'side-bar-options home'
                      : 'side-bar-options home dark-mode-active-btn'
                    : 'side-bar-options'
                }
                key={sideBarData[0].id}
                onClick={() => onActiveBtn(sideBarData[0].id)}
              >
                <AiFillHome
                  className={
                    sideBar === sideBarData[0].id
                      ? 'side-icons home-icon'
                      : 'side-icons'
                  }
                />
                <SideBarName color={isLightMode}>
                  {sideBarData[0].displayText}
                </SideBarName>
              </button>
            </Link>
            <Link to="/trending" className="link">
              <button
                className={
                  sideBar === sideBarData[1].id
                    ? isLightMode
                      ? 'side-bar-options trending'
                      : 'side-bar-options trending dark-mode-active-btn'
                    : 'side-bar-options'
                }
                key={sideBarData[1].id}
                onClick={() => onActiveBtn(sideBarData[1].id)}
              >
                <FaFire
                  className={
                    sideBar === sideBarData[1].id
                      ? 'side-icons trending-icon'
                      : 'side-icons'
                  }
                />
                <SideBarName color={isLightMode}>
                  {sideBarData[1].displayText}
                </SideBarName>
              </button>
            </Link>
            <Link to="/gaming" className="link">
              <button
                className={
                  sideBar === sideBarData[2].id
                    ? isLightMode
                      ? 'side-bar-options gaming'
                      : 'side-bar-options gaming dark-mode-active-btn'
                    : 'side-bar-options'
                }
                key={sideBarData[2].id}
                onClick={() => onActiveBtn(sideBarData[2].id)}
              >
                <SiYoutubegaming
                  className={
                    sideBar === sideBarData[2].id
                      ? 'side-icons gaming-icon'
                      : 'side-icons'
                  }
                />
                <SideBarName color={isLightMode}>
                  {sideBarData[2].displayText}
                </SideBarName>
              </button>
            </Link>
            <Link to="/saved-videos" className="link">
              <button
                className={
                  sideBar === sideBarData[3].id
                    ? isLightMode
                      ? 'side-bar-options saved-video'
                      : 'side-bar-options saved-video dark-mode-active-btn'
                    : 'side-bar-options'
                }
                key={sideBarData[3].id}
                onClick={() => onActiveBtn(sideBarData[3].id)}
              >
                <RiMenuAddFill
                  className={
                    sideBar === sideBarData[3].id
                      ? 'side-icons saved-video-icon'
                      : 'side-icons'
                  }
                />
                <SideBarName color={isLightMode}>
                  {sideBarData[3].displayText}
                </SideBarName>
              </button>
            </Link>
          </BackgroundContainer>
        </SmallDeviceSideBar>
      )
    }}
  </NxtContext.Consumer>
)

export default SideBar
