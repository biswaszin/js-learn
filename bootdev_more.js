const getMostRecentUser = (usernames) => {
  let users = usernames.length - 1;

  if (usernames.length === 0) {
    return null;
  } else {
    return `${usernames[users]}`;
  }
};

const game = ["gundam", "hollow knight"];
const movies = ["obsession", "something i forgot"];

const allStuff = [...game, ...movies];

const getCleanMessages = (messages, badWord) => {
  const cleanMessages = [];

  for (let msg in messages) {
    if (!msg.includes(badWord)) {
      cleanMessages.push(msg);
    }
  }
};
