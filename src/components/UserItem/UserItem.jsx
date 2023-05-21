import css from '../UserItem/UserItem.module.css'
import logo from '../images/Logo.png'
import background from '../images/background.png'

import PropTypes from 'prop-types';
import {useLocalStorage} from '../../../src/hook/useLocalStorage'



const UserItem = ({ userAvatar, tweets, followers, id }) => {
  
  const [btnFlag, setBtnFlag] = useLocalStorage(`select${id}`, false);
  const [buttonFollow, setButtonFollow] = useLocalStorage(`lable${id}`, "FOLLOW");
  const [userFollowers, setUserFollowers] = useLocalStorage(`followers${id}`, followers );
  
  
  
  
  
  const addFollower = () => {
     btnFlag === false?setUserFollowers(prevState => prevState + 1): setUserFollowers(prevState => prevState - 1)
    }
  
  

  const press = () => {
      let className = (buttonFollow === "FOLLOW") ? "FOLLOWING" : "FOLLOW";
      setButtonFollow( className )
     

      let btnColor = (btnFlag === true) ? false: true;
      setBtnFlag( btnColor )

      addFollower();
      
    };
  
  


  return (
    <li className={css.list}  >

          <div className={css.container}>
              <img src={logo} alt="logo" width={'76px'} height={'22px'} className={css.logo}/>
              <img src={background} alt="standart" className={css.backgroundImg}/>

        <div className={css.userContainer}>
            <div className={css.wrapperUser}> 
              <div className={css.avatarContainer}>
                    <img src={userAvatar} alt="avatar"  width={'62px'} height={'62px'}  className={css.avatar} />
              </div>
            </div>
                  <p className={css.userTextTweets }> {tweets} tweets</p>
                  <p className={css.userTextFollowers}>{ userFollowers.toLocaleString("en-GB")} Followers</p>
        </div>
              
            <button onClick={ press} className={css.buttonFollow} style={{ backgroundColor: btnFlag === true ? '#5CD3A8': '#EBD8FF'}}>{buttonFollow}</button>
        
        </div>
   </li>
  );
};
 
UserItem.propTypes = {
  userAvatar: PropTypes.string.isRequired, 
  tweets: PropTypes.number.isRequired,
  followers: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired, 
 
}




export default UserItem