import type { NextPage } from 'next'
import NotifyDeviceOnlineComponent from "../Components/NotifyDisplay/NotifyDeviceOnline.Component";
import withAuth from "../HOC/withAuth";

const Home: NextPage = () => {
  return (
      <NotifyDeviceOnlineComponent />
  )
}

export default withAuth(Home)
