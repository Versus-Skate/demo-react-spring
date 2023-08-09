export default class ICalFactory {
  id: number;
  content: string;
  datetime: any;

  constructor(id: number, content: string, datetime: any) {
    this.id = id;
    this.content = content;
    this.datetime = datetime;
  }

  static create() {
    const randomIndex = Math.floor(Math.random() * data.length);
    const { id, content, datetime } = data[randomIndex];
    return new ICalFactory(id, content, datetime);
  }
}


const data: any[] = [
  {
    "content": "Venue Pre-Party",
    "datetime": 1451606400
  },
  {
    "content": "Beach Bonfire",
    "datetime": 1467888000
  },
  {
    "content": "Rooftop Jam Session",
    "datetime": 1469035200
  },
  {
    "content": "Movie Marathon",
    "datetime": 1469606400
  },
  {
    "content": "Game Night",
    "datetime": 1471228800
  },
  {
    "content": "Street Food Festival",
    "datetime": 1473662400
  },
  {
    "content": "Hiking Adventure",
    "datetime": 1476105600
  },
  {
    "content": "Art Gallery Opening",
    "datetime": 1478880000
  },
  {
    "content": "Costume Party",
    "datetime": 1477972800
  },
  {
    "content": "Haunted House Tour",
    "datetime": 1477929600
  },
  {
    "content": "Charity 5K Run",
    "datetime": 1480272000
  },
  {
    "content": "Holiday Cookie Baking",
    "datetime": 1481923200
  },
  {
    "content": "New Year's Eve Bash",
    "datetime": 1483228800
  },
  {
    "content": "Comedy Club Night",
    "datetime": 1481558400
  },
  {
    "content": "Dance Workshop",
    "datetime": 1479369600
  },
  {
    "content": "Food Truck Rally",
    "datetime": 1474262400
  },
  {
    "content": "Photography Exhibition",
    "datetime": 1467100800
  },
  {
    "content": "Outdoor Yoga Session",
    "datetime": 1464691200
  },
  {
    "content": "DIY Craft Fair",
    "datetime": 1465574400
  },
  {
    "content": "Vintage Flea Market",
    "datetime": 1459180800
  }
];
