import styles from './Post.module.css';
import {useEffect, useState} from 'react';
import { Avatar, IconButton } from '@material-ui/core';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import ShareIcon from '@material-ui/icons/Share';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import { faComment, faRetweet, faHeart, faShareAlt } from '@fortawesome/free-solid-svg-icons';

const Post = (props) => {
    const[likes, setLikes] = useState(props.user.likes);
    const[isLiked, setIsLiked] = useState(false);
   const[seed, setSeed] = useState("");
    useEffect(() => {
     setSeed(Math.floor(Math.random() * 5000));
   }, [])
    const onLikeHandler = (event) => {
            if(isLiked == false)
            {
                setLikes(likes+1);
                setIsLiked(true);
            }
            else
            {
                setLikes(likes-1);
                setIsLiked(false);
            }
           
           
            
    }
    return (
        <div className={styles.post}>
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
            <div className={styles.side}>
            <div className={styles.info}>
                <div className={styles.name}>
                    {props.user.name}
                </div>
                <div className= {styles.icon}>
                    <VerifiedUserIcon/>
                </div>
                <div className={styles.username}>
                    {props.user.username}
                </div>
                <div className={styles.dot}>
                    <span>•</span>
                    
                </div>
                <div className={styles.time}>
                    <span>3h</span>
                </div>
            </div>
            <div className={styles.hashtag}>
                <span>#love #bts #yolo</span>
            </div>
            <div className={styles.image} onClick={onLikeHandler}>
                <img src= {props.user.img}></img>
            </div>
            <div className={styles.actions}>
                <div className={styles.comment}>
                <FontAwesomeIcon icon={faComment} size="lg" />
                <span>25k</span>
                </div>
                <div className={styles.comment}>
                <FontAwesomeIcon icon={faRetweet} size="lg"/>
                <span>44.3k</span>
                </div>
                <div onClick={onLikeHandler} className={styles.like}>
                    
                    <FontAwesomeIcon icon={faHeart} size="lg" />
                    
                  
                    <span>{likes}</span>                         
                </div>
                <div className={styles.share}>
                <FontAwesomeIcon icon={faShareAlt} size="lg" />
                </div>
               
            </div>
            </div>
            
        </div>
    )

}

export default Post;