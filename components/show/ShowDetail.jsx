import ShowInfo from './ShowInfo'
import Starring from './Starring'

const ShowDetail = ({key,stream,day,time,status,genres}) => {

  return (
    <div className='flex flex-wrap gap-4 md:gap-20 m-4 md:m-20'>
      <ShowInfo key={key} stream={stream} day={day} time={time} status={status} genres={genres} />
      <Starring />
    </div>
  )
}

export default ShowDetail