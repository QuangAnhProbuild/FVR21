import './FeatureItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const FeatureItem = props => {
  const { title, description, icon } = props
  return (
    <div className='grid'>
      <div className='icon'>
        <FontAwesomeIcon icon={['fa', icon]} size='3x' />
      </div>
      <div className='desc'>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default FeatureItem
