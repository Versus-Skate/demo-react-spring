export default class IMessageFactory {
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
    const {id, content, author} = data[randomIndex];
    return new IMessageFactory(id, content, author);
  }
}


const data: any[] = [
  {
    id: 1,
    content: 'Yo bro',
    author: {
      name: 'Mahdi',
      avatar: 'https://i.pravatar.cc/150?img=1',
    }
  },
  {
    id: 2,
    content: 'How are you?',
    author: {
      name: 'Mahdi',
      avatar: 'https://i.pravatar.cc/150?img=1',
    }
  },
  {
    id: 3,
    content: 'How are you?',
    author: {
      name: 'Mahdi',
      avatar: 'https://i.pravatar.cc/150?img=1',
    }
  },
  {
    id: 4,
    content: 'How are you?',
    author: {
      name: 'Mahdi',
      avatar: 'https://i.pravatar.cc/150?img=1',
    }
  },
  {
    id: 5,
    content: 'How are you?',
    author: {
      name: 'Mahdi',
      avatar: 'https://i.pravatar.cc/150?img=1',
    }
  },
];
