import React from "react";
import Post from "./Post/Post";
import { Grid,CircularProgress } from "@material-ui/core";
import UseStyles from "./styles";
import {useSelector} from 'react-redux';

const Posts = ({setCurrentId}) => {
  const posts = useSelector(state => state.posts.posts);
  const classes = UseStyles();
  return (
   
    !posts.length ? (  <h1 >No post Available...<CircularProgress/> </h1>) :(
        <Grid  className={classes.mainContainer} container alignItems="stretch" spacing={3}>
          {posts.map((post)=>(
            <Grid key={post.id} item xs={12} sm={6}>
              <Post post={post} setCurrentId={setCurrentId} />
              </Grid>
          ))}
        </Grid>
    )

  )

};

export default Posts;
