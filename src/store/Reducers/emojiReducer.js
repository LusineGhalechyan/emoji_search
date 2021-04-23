const defaultState = {
  emojis: [
    { id: 1, description: `100`, emoji: "💯" },
    { id: 2, description: `1234`, emoji: "🔢" },
    { id: 3, description: `Grinning`, emoji: "😀" },
    { id: 4, description: `Grimacing`, emoji: "😬" },
    { id: 5, description: `Grin`, emoji: "😁" },
    { id: 6, description: `Joy`, emoji: "😂" },
    { id: 7, description: `Smiley`, emoji: "😃" },
    { id: 8, description: `Smile`, emoji: "😄" },
    { id: 9, description: `Sweat Smile`, emoji: "😅" },
    { id: 10, description: `Laughing`, emoji: "😆" },
    { id: 11, description: `Innocent`, emoji: "😇" },
    { id: 12, description: `Wink`, emoji: "😉" },
    { id: 13, description: `Blush`, emoji: "😊" },
    { id: 14, description: `Slight Smile`, emoji: "🙂" },
    { id: 15, description: `Upside Down`, emoji: "🙃" },
    { id: 16, description: `Relaxed`, emoji: "😊" },
    { id: 17, description: `Yum`, emoji: "😋" },
    { id: 18, description: `Relieved`, emoji: "😌" },
    { id: 19, description: `Heart Eyes`, emoji: "😍" },
    { id: 20, description: `Kissing Heart`, emoji: "😘" },
  ],
};

const emojiReducer = (state = defaultState, action) => {
  return state;
};

export default emojiReducer;
