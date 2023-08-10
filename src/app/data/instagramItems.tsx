export default class InstagramFactory {
  id: number;
  content: string;
  author: any;
  imgUrl: string;
  datetime: number;

  constructor(id: number, content: string, author: any, imgUrl: string, datetime: number) {
    this.id = id;
    this.content = content;
    this.author = author;
    this.imgUrl = imgUrl;
    this.datetime = datetime;
  }

  static create() {
    const randomIndex = Math.floor(Math.random() * data.length);
    const { id, content, author, datetime, imgUrl } = data[randomIndex];
    return new InstagramFactory(id, content, author, imgUrl, datetime);
  }
}


const data: any[] = [
  {
    "id": 1,
  },
  {
    "id": 2,
  },
  {
    "id": 3,
  },
  {
    "id": 4,
  },
  {
    "id": 5,
  },
  {
    "id": 6,
  },
  {
    "id": 7,
  },
  {
    "id": 8,
  },
  {
    "id": 9,
  },
  {
    "id": 10,
  },
  {
    "id": 11,
  },
  {
    "id": 12,
  },
  {
    "id": 13,
  },
  {
    "id": 14,
  },
  {
    "id": 15,
  },
  {
    "id": 16,
  },
  {
    "id": 17,
  },
  {
    "id": 18,
  },
  {
    "id": 19,
  },
  {
    "id": 20,
  },
];
