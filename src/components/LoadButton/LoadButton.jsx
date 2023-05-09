import PropTypes from 'prop-types';
import css from '../LoadButton/LoadButton.module.css'


const LoadButton = ({ onLoadMore }) => {
    

  return (
    <button className={css.btnLoad} type="button" onClick={onLoadMore}>Load More</button>
  );
};
 


 LoadButton.propTypes = {
  onLoadMore:PropTypes.func.isRequired,
}


export default LoadButton