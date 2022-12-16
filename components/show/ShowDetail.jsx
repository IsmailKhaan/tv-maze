import ShowInfo from './ShowInfo'
import Starring from './Starring'
import { showInfo } from './styles/ShowStyle'

const ShowDetail = ({key,stream,day,time,status,genres}) => {

  return (
    <div className={showInfo}>
      <ShowInfo key={key} stream={stream} day={day} time={time} status={status} genres={genres} />
      <Starring />
    </div>
  )
}

export default ShowDetail