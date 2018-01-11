// increment like
export function increment(index){
  return {
    type: 'FLAVOUR::INCREMENT_LIKES',
    index
  }
}

// add comment
export function addComment(postId, author, comment){
  return {
    type: 'FLAVOUR::ADD_COMMENT',
    postId,
    author,
    comment
  }
}

//remove comment
export function removeComment(postId, index){
  return {
    type: 'FLAVOUR::REMOVE_COMMENT',
    postId,
    index
  }
}