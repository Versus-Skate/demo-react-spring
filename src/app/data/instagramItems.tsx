export default class InstagramFactory {
  id: number;
  content: string;
  author: any;
  imgUrl: string;
  placeholderUrl: string;
  datetime: number;

  constructor(id: number, content: string, author: any, imgUrl: string, placeholderUrl: string, datetime: number) {
    this.id = id;
    this.content = content;
    this.author = author;
    this.imgUrl = imgUrl;
    this.placeholderUrl = placeholderUrl;
    this.datetime = datetime;
  }

  static create() {
    const randomIndex = Math.floor(Math.random() * data.length);
    const { id, content, author, datetime, placeholderUrl, imgUrl } = data[randomIndex];
    return new InstagramFactory(id, content, author, imgUrl, placeholderUrl, datetime);
  }
}


const data: any[] = [
  {
    "id": 1,
    "imgUrl": "/ig-post-1.jpg",
    "placeholderUrl": "/ig-post-1@0.25.jpg",
  },
  {
    "id": 2,
    "imgUrl": "/ig-post-2.jpg",
    "placeholderUrl": "/ig-post-2@0.25.jpg"
  },
  {
    "id": 3,
    "imgUrl": "/ig-post-3.jpg",
    "placeholderUrl": "/ig-post-3@0.25.jpg"
  },
  {
    "id": 4,
    "imgUrl": "/ig-post-4.gif",
    "placeholderUrl": "/ig-post-4@0.25.jpg"
  },
  {
    "id": 5,
    "imgUrl": "/ig-post-5.jpg",
    "placeholderUrl": "/ig-post-5@0.25.jpg"
  },
  {
    "id": 6,
    "imgUrl": "/ig-post-6.jpg",
    "placeholderUrl": "/ig-post-6@0.25.jpg"
  },
  {
    "id": 7,
    "imgUrl": "/ig-post-7.jpg",
    "placeholderUrl": "/ig-post-7@0.25.jpg"
  },
  {
    "id": 8,
    "imgUrl": "/ig-post-8.jpg",
    "placeholderUrl": "/ig-post-8@0.25.jpg"
  },
  {
    "id": 9,
    "imgUrl": "/ig-post-9.jpg",
    "placeholderUrl": "/ig-post-9@0.25.jpg"
  },
  {
    "id": 10,
    "imgUrl": "/ig-post-10.jpg",
    "placeholderUrl": "/ig-post-10@0.25.jpg"
  },
  {
    "id": 11,
    "imgUrl": "/ig-post-11.jpg",
    "placeholderUrl": "/ig-post-11@0.25.jpg"
  },
  {
    "id": 12,
    "imgUrl": "/ig-post-12.jpg",
    "placeholderUrl": "/ig-post-12@0.25.jpg"
  },
  {
    "id": 13,
    "imgUrl": "/ig-post-13.jpg",
    "placeholderUrl": "/ig-post-13@0.25.jpg"
  },
  {
    "id": 14,
    "imgUrl": "/ig-post-14.jpg",
    "placeholderUrl": "/ig-post-14@0.25.jpg"
  },
  {
    "id": 15,
    "imgUrl": "/ig-post-15.jpg",
    "placeholderUrl": "/ig-post-15@0.25.jpg"
  },
  {
    "id": 16,
    "imgUrl": "/ig-post-16.jpg",
    "placeholderUrl": "/ig-post-16@0.25.jpg"
  },
  {
    "id": 17,
    "imgUrl": "/ig-post-17.jpg",
    "placeholderUrl": "/ig-post-17@0.25.jpg"
  },
  {
    "id": 18,
    "imgUrl": "/ig-post-18.jpg",
    "placeholderUrl": "/ig-post-18@0.25.jpg"
  },
  {
    "id": 19,
    "imgUrl": "/ig-post-19.jpg",
    "placeholderUrl": "/ig-post-19@0.25.jpg"
  },
  {
    "id": 20,
    "imgUrl": "/ig-post-20.jpg",
    "placeholderUrl": "/ig-post-20@0.25.jpg"
  },
];
