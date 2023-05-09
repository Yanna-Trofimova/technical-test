import { useEffect, useState } from "react";
import UserItem from "../UserItem/UserItem";
import PropTypes from 'prop-types';
import LoadButton from "../LoadButton/LoadButton";


  

const UsersList = () => {
    const [userInfo, setUserInfo] = useState( []);
    const [, setError] = useState(null);
    const [page, setPage] = useState(() => {
    return JSON.parse(window.localStorage.getItem('page')) ?? 1});
    const [buttonLoad, setButtonLoad] = useState(false);
    

    useEffect(() => {
        fetch(`https://6456cd3b2e41ccf169253a49.mockapi.io/users?completed=false&page=${page}&limit=3`)
            .then(response => response.json())
            .then(data => {
                setUserInfo(prevState => ([...prevState, ...data]));
                onButtonLoad(data.length);
            }
        )
        .catch(error => setError(error))
       
    },[page]);

    const onButtonLoad = length => {
    if (length >= 3) {
     return setButtonLoad(true);
    }
    return setButtonLoad( false );
    };
    
    useEffect(() => {

    window.localStorage.setItem('page', JSON.stringify(page));
    
   }, [page]);
    

    const onLoadMore = () => {
        setPage(prevState => prevState + 1);
        
    };
       
  
    return (
        <>
            {userInfo &&
                < ul style={{
                    width: '1437px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '110px',
                        flexWrap: 'wrap',
                        
                        }} >
                    {userInfo.map(({ avatar, tweets, followers,id}) => (
                        <UserItem key={id} id={id} userAvatar={avatar } tweets={tweets} followers={followers} />
                    ))}
                   
            
                </ul >
            }   
            {buttonLoad && <LoadButton onLoadMore={onLoadMore} />}
        </>
  );
    
    
};
 
UsersList.propTypes = {
  userInfo:PropTypes.arrayOf(
        PropTypes.shape({
        id: PropTypes.string.isRequired,
        })),
  
}



export default UsersList
