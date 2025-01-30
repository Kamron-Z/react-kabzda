export let state = {
  profileDate: [
    {
      label: "Name",
      children: "Komron",
    },
    {
      label: "Live",
      span: "filled",
      // span = 2
      children: "Uzb",
    },
    {
      label: "Remark",
      span: "filled",
      // span = 3
      children: "empty",
    },
    {
      label: "Address",
      span: 1,
      // span will be 3 and warning for span is not align to the end
      children:
        "No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China",
    },
  ],
  postsDate: [
    { id: 1, message: "Hello, how are you", likeCount: 10 },
    { id: 2, message: "Hello, how are you", likeCount: 5 },
    { id: 3, message: "Hello, how are you", likeCount: 15 },
  ],
};

export let addPost = (newMessage) => {
  let newPost = {
    id: 4,
    message: newMessage,
    likeCount: 0,
  };
  state.postsDate.push(newPost);
};
