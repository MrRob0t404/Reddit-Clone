const defaultState = {
  allMemes: [
    {
      id: "1",
      title: 'Slender Man',
      url: `http://knowyourmeme.com/memes/slender-man`,
      comments: []
    }, {
      id: "2",
      title: 'Doge',
      url: `http://knowyourmeme.com/memes/doge`,
      comments: []
    }, {
      id: "3",
      title: 'Arrow in the Knee',
      url: `http://knowyourmeme.com/memes/i-took-an-arrow-in-the-knee`,
      comments: []
    }, {
      id: "4",
      title: 'Tide Pods',
      url: `http://knowyourmeme.com/memes/tide-pod-challenge`,
      comments: []
    }, {
      id: "5",
      title: 'Whomst',
      url: `http://knowyourmeme.com/memes/whomst`,
      comments: []
    }
  ],
  oneMeme: []
};

export default(state = defaultState, action) => {
  let newState = state;

  switch (action.type) {
    case "GET_ALL":
      return newState;

    case "GET_ONE":
      let theOne = newState
        .allMemes
        .filter((meme) => meme.id === action.id);
      if (theOne[0]) {
        return ({allMemes: newState.allMemes, oneMeme: theOne[0]});
      } else {
        return newState
      }

    case 'ADD_ONE':
      var objWithId = {
        id: (newState.allMemes.length + 1).toString(),
        ...action.obj
      }
      newState
        .allMemes
        .push(objWithId);
      return newState;

    case 'ADD_COMMENT':
      let memeObj = newState
        .allMemes
        .find((element) => element.id === action.obj.id.toString()) //Just one memePage obj

        let commentArray = [
        action.obj.userComment, ...memeObj.comments
      ]

      console.log('commentArray: ', commentArray)

      // let memeWithComments = {
      //   comments: commentArray,
      //   url: memeObj.url,
      //   title: memeObj.title,
      //   id: memeObj.id
      // }

      let memeWithComments = {
        ...memeObj,
        comments: commentArray
      }
      console.log('new state with comments: ', memeWithComments)
    default:
      return newState;
  }
};
