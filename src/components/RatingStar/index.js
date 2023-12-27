import { Rating } from 'react-simple-star-rating';
import './style.scss';
const RatingStar = ({rating}) => {
    return (<div className='ratting-section'><Rating initialValue={rating} /></div>);
}

export default RatingStar;