export default class MessengerFactory {
  id: number;
  content: string;
  author: any;

  constructor(id: number, content: string, author: any) {
    this.id = id;
    this.content = content;
    this.author = author;
  }

  static create() {
    const randomIndex = Math.floor(Math.random() * data.length);
    const { id, content, author } = data[randomIndex];
    return new MessengerFactory(id, content, author);
  }
}


const data: any[] = [
  {
    "id": 1,
    "content": "Hey! Let's grab lunch this weekend 🍔👀",
    "author": {
      "name": "Magnus",
      "avatar": "https://i.pravatar.cc/150?img=22"
    }
  },
  {
    "id": 2,
    "content": "Partyyy time tonight! You in? 🎉🕺",
    "author": {
      "name": "Magnus",
      "avatar": "https://i.pravatar.cc/150?img=22"
    }
  },
  {
    "id": 3,
    "content": "Dude, remember the good times... #TBT 🤣👌",
    "author": {
      "name": "Magnus",
      "avatar": "https://i.pravatar.cc/150?img=22"
    }
  },
  {
    "id": 4,
    "content": "Netflix binge soon? Bring the snacks! 🍕📺",
    "author": {
      "name": "Jonas",
      "avatar": "https://i.pravatar.cc/150?img=23"
    }
  },
  {
    "id": 5,
    "content": "Guess what? New video game drop! Let's play? 🎮🕹️",
    "author": {
      "name": "Jonas",
      "avatar": "https://i.pravatar.cc/150?img=23"
    }
  },
  {
    "id": 6,
    "content": "Chillin' with the crew. You should roll thru! 🤙👋",
    "author": {
      "name": "Jonas",
      "avatar": "https://i.pravatar.cc/150?img=23"
    }
  },
  {
    "id": 7,
    "content": "Sup, my dude? Exam grind is real! 😫📚",
    "author": {
      "name": "Mahdi",
      "avatar": "https://i.pravatar.cc/150?img=24"
    }
  },
  {
    "id": 8,
    "content": "Found this cool art exhibition. Lmk if you're down! 🎨🖼️",
    "author": {
      "name": "Mahdi",
      "avatar": "https://i.pravatar.cc/150?img=24"
    }
  },
  {
    "id": 9,
    "content": "Bro, have you tried that new street food joint? 🌮🔥",
    "author": {
      "name": "Mahdi",
      "avatar": "https://i.pravatar.cc/150?img=24"
    }
  },
  {
    "id": 10,
    "content": "Late-night study sesh! Coffee needed. ☕📝",
    "author": {
      "name": "Mahdi",
      "avatar": "https://i.pravatar.cc/150?img=24"
    }
  },
  {
    "id": 11,
    "content": "GNO on Saturday! You better be there! 💃🕺",
    "author": {
      "name": "Magnus",
      "avatar": "https://i.pravatar.cc/150?img=22"
    }
  },
  {
    "id": 12,
    "content": "Can't believe the semester is ending. Let's celebrate! 🎉🥳",
    "author": {
      "name": "Jonas",
      "avatar": "https://i.pravatar.cc/150?img=23"
    }
  },
  {
    "id": 13,
    "content": "Yo Isak! Football match tomorrow. You're in, right? ⚽🤙",
    "author": {
      "name": "Magnus",
      "avatar": "https://i.pravatar.cc/150?img=22"
    }
  },
  {
    "id": 14,
    "content": "Last-minute road trip plan! Pack your bags! 🚗🗺️",
    "author": {
      "name": "Jonas",
      "avatar": "https://i.pravatar.cc/150?img=23"
    }
  },
  {
    "id": 15,
    "content": "Study group at my place. Pizza and textbooks! 🍕📚",
    "author": {
      "name": "Mahdi",
      "avatar": "https://i.pravatar.cc/150?img=24"
    }
  },
  {
    "id": 16,
    "content": "Jamming this weekend. Get your guitar! 🎸🎶",
    "author": {
      "name": "Jonas",
      "avatar": "https://i.pravatar.cc/150?img=23"
    }
  },
  {
    "id": 17,
    "content": "Sunday brunch squad! Eggs and avo! 🍳🥑",
    "author": {
      "name": "Magnus",
      "avatar": "https://i.pravatar.cc/150?img=22"
    }
  },
  {
    "id": 18,
    "content": "Party at my place tonight! It's gonna be 🔥🎈",
    "author": {
      "name": "Magnus",
      "avatar": "https://i.pravatar.cc/150?img=22"
    }
  },
  {
    "id": 19,
    "content": "Got two words for you: Karaoke night! 🎤🎶",
    "author": {
      "name": "Jonas",
      "avatar": "https://i.pravatar.cc/150?img=23"
    }
  },
  {
    "id": 20,
    "content": "Late-night study crew, assemble! ☕📚👽",
    "author": {
      "name": "Mahdi",
      "avatar": "https://i.pravatar.cc/150?img=24"
    }
  },
  {
    "id": 21,
    "content": "Yo Isak! Football match tomorrow. You're in, right? ⚽🤙",
    "author": {
      "name": "Magnus",
      "avatar": "https://i.pravatar.cc/150?img=22"
    }
  },
  {
    "id": 22,
    "content": "Last-minute road trip plan! Pack your bags! 🚗🗺️",
    "author": {
      "name": "Jonas",
      "avatar": "https://i.pravatar.cc/150?img=23"
    }
  },
  {
    "id": 23,
    "content": "Study group at my place. Pizza and textbooks! 🍕📚",
    "author": {
      "name": "Mahdi",
      "avatar": "https://i.pravatar.cc/150?img=24"
    }
  },
  {
    "id": 24,
    "content": "Jamming this weekend. Get your guitar! 🎸🎶",
    "author": {
      "name": "Jonas",
      "avatar": "https://i.pravatar.cc/150?img=23"
    }
  },
  {
    "id": 25,
    "content": "Sunday brunch squad! Eggs and avo! 🍳🥑",
    "author": {
      "name": "Magnus",
      "avatar": "https://i.pravatar.cc/150?img=22"
    }
  },
  {
    "id": 26,
    "content": "Party at my place tonight! It's gonna be 🔥🎈",
    "author": {
      "name": "Magnus",
      "avatar": "https://i.pravatar.cc/150?img=22"
    }
  },
  {
    "id": 27,
    "content": "Got two words for you: Karaoke night! 🎤🎶",
    "author": {
      "name": "Jonas",
      "avatar": "https://i.pravatar.cc/150?img=23"
    }
  },
  {
    "id": 28,
    "content": "Late-night study crew, assemble! ☕📚👽",
    "author": {
      "name": "Mahdi",
      "avatar": "https://i.pravatar.cc/150?img=24"
    }
  },
  {
    "id": 29,
    "content": "Yo Isak! Football match tomorrow. You're in, right? ⚽🤙",
    "author": {
      "name": "Magnus",
      "avatar": "https://i.pravatar.cc/150?img=22"
    }
  },
  {
    "id": 30,
    "content": "Last-minute road trip plan! Pack your bags! 🚗🗺️",
    "author": {
      "name": "Jonas",
      "avatar": "https://i.pravatar.cc/150?img=23"
    }
  },
  {
    "id": 31,
    "content": "Study group at my place. Pizza and textbooks! 🍕📚",
    "author": {
      "name": "Mahdi",
      "avatar": "https://i.pravatar.cc/150?img=24"
    }
  },
  {
    "id": 32,
    "content": "Jamming this weekend. Get your guitar! 🎸🎶",
    "author": {
      "name": "Jonas",
      "avatar": "https://i.pravatar.cc/150?img=23"
    }
  },
  {
    "id": 33,
    "content": "Sunday brunch squad! Eggs and avo! 🍳🥑",
    "author": {
      "name": "Magnus",
      "avatar": "https://i.pravatar.cc/150?img=22"
    }
  },
  {
    "id": 34,
    "content": "Party at my place tonight! It's gonna be 🔥🎈",
    "author": {
      "name": "Magnus",
      "avatar": "https://i.pravatar.cc/150?img=22"
    }
  },
  {
    "id": 35,
    "content": "Got two words for you: Karaoke night! 🎤🎶",
    "author": {
      "name": "Jonas",
      "avatar": "https://i.pravatar.cc/150?img=23"
    }
  },
  {
    "id": 36,
    "content": "Late-night study crew, assemble! ☕📚👽",
    "author": {
      "name": "Mahdi",
      "avatar": "https://i.pravatar.cc/150?img=24"
    }
  },
  {
    "id": 37,
    "content": "Yo Isak! Football match tomorrow. You're in, right? ⚽🤙",
    "author": {
      "name": "Magnus",
      "avatar": "https://i.pravatar.cc/150?img=22"
    }
  },
  {
    "id": 38,
    "content": "Last-minute road trip plan! Pack your bags! 🚗🗺️",
    "author": {
      "name": "Jonas",
      "avatar": "https://i.pravatar.cc/150?img=23"
    }
  },
  {
    "id": 39,
    "content": "Study group at my place. Pizza and textbooks! 🍕📚",
    "author": {
      "name": "Mahdi",
      "avatar": "https://i.pravatar.cc/150?img=24"
    }
  },
  {
    "id": 40,
    "content": "Jamming this weekend. Get your guitar! 🎸🎶",
    "author": {
      "name": "Jonas",
      "avatar": "https://i.pravatar.cc/150?img=23"
    }
  }

];
