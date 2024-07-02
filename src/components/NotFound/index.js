import Header from '../Header'
import SideBar from '../SideBar'
import {
  BackgroundContainer,
  SideBarContainer,
  NotFoundHeading,
  NotFoundImage,
  NotFoundDescription,
} from './styledComponents'
import NxtContext from '../../context/NxtContext'
import './index.css'

let hasCalledOnSideBar = false
const callOnSideBar = onSideBar => {
  if (!hasCalledOnSideBar) {
    onSideBar('')
    hasCalledOnSideBar = true
  }
}

const NotFound = () => (
  <NxtContext.Consumer>
    {value => {
      const {isLightMode, onSideBar} = value

      callOnSideBar(onSideBar)

      const renderNotFoundPage = () => (
        <BackgroundContainer bgColor={isLightMode}>
          {isLightMode ? (
            <NotFoundImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png"
              alt="not found"
            />
          ) : (
            <NotFoundImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png"
              alt="not found"
            />
          )}
          <NotFoundHeading color={isLightMode}>Page Not Found</NotFoundHeading>
          <NotFoundDescription>
            we are sorry, the page you requested could not be found.
          </NotFoundDescription>
        </BackgroundContainer>
      )

      return (
        <>
          <Header />
          <div className="main-container">
            <SideBar className="sm-device" />
            {renderNotFoundPage()}
          </div>
        </>
      )
    }}
  </NxtContext.Consumer>
)

export default NotFound
