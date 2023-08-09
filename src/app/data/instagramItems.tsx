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
    "content": "EMBRACE THE LIGHT WITHIN YOU AND LET IT SHINE FOR ALL TO SEE. BLESSINGS UPON YOU!",
    "author": {
      "name": "Mom",
      "avatar": "https://i.pravatar.cc/150?img=2"
    },
    "datetime": 1620000000,
    "imgUrl": '/ig-post-1.jpg'
  },
  {
    "id": 2,
    "content": "EMBRACE THE LIGHT WITHIN YOU AND LET IT SHINE FOR ALL TO SEE. BLESSINGS UPON YOU!",
    "author": {
      "name": "Mom",
      "avatar": "https://i.pravatar.cc/150?img=2"
    },
    "datetime": 1620000000,
    "imgUrl": '/ig-post-2.jpg'
  }
];
