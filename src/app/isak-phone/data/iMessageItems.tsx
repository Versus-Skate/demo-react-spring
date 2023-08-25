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
    const { id, content, author } = data[randomIndex];
    return new IMessageFactory(id, content, author);
  }
}


const data: any[] = [
  {
    "id": 1,
    "content": "EMBRACE THE LIGHT WITHIN YOU AND LET IT SHINE FOR ALL TO SEE. BLESSINGS UPON YOU!",
    "author": {
      "name": "Mom",
      "avatar": "https://i.pravatar.cc/150?img=2"
    }
  },
  {
    "id": 2,
    "content": "IN THE EMBRACE OF FAITH, WE FIND HOPE. MAY YOUR DAYS BE FILLED WITH DIVINE INSPIRATION.",
    "author": {
      "name": "Mom",
      "avatar": "https://i.pravatar.cc/150?img=3"
    }
  },
  {
    "id": 3,
    "content": "WITH FAITH AS YOUR COMPASS, YOU SHALL NEVER LOSE YOUR WAY. STAY BLESSED AND GUIDED.",
    "author": {
      "name": "Mom",
      "avatar": "https://i.pravatar.cc/150?img=4"
    }
  },
  {
    "id": 4,
    "content": "LET'S JOURNEY TOGETHER TOWARDS A BRIGHTER TOMORROW. MAY WE BE GUIDED AND GUARDED.",
    "author": {
      "name": "Mom",
      "avatar": "https://i.pravatar.cc/150?img=5"
    }
  },
  {
    "id": 5,
    "content": "AS WE WALK OUR PATHS, LET'S SPREAD LOVE, KINDNESS, AND POSITIVITY. BLESSINGS TO YOU!",
    "author": {
      "name": "Mom",
      "avatar": "https://i.pravatar.cc/150?img=6"
    }
  },
  {
    "id": 6,
    "content": "IN OUR HEARTS, FAITH BLOSSOMS LIKE A FLOWER, BRINGING FRAGRANCE TO THE LIVES WE TOUCH.",
    "author": {
      "name": "Mom",
      "avatar": "https://i.pravatar.cc/150?img=7"
    }
  },
  {
    "id": 7,
    "content": "MAY YOUR FAITH BE UNWAVERING, YOUR HOPE BE STRONG, AND YOUR SPIRIT BE UPLIFTED. AMEN.",
    "author": {
      "name": "Mom",
      "avatar": "https://i.pravatar.cc/150?img=8"
    }
  },
  {
    "id": 8,
    "content": "WITH EVERY DAWN, A NEW BLESSING AWAITS. TRUST IN THE JOURNEY AND KEEP MOVING FORWARD.",
    "author": {
      "name": "Mom",
      "avatar": "https://i.pravatar.cc/150?img=9"
    }
  },
  {
    "id": 9,
    "content": "LET YOUR ACTIONS BE A REFLECTION OF YOUR FAITH. TOGETHER, WE CREATE A BETTER WORLD.",
    "author": {
      "name": "Mom",
      "avatar": "https://i.pravatar.cc/150?img=10"
    }
  },
  {
    "id": 10,
    "content": "MAY YOUR DAYS BE PAINTED WITH THE COLORS OF JOY, LOVE, AND PEACE. STAY BLESSED.",
    "author": {
      "name": "Mom",
      "avatar": "https://i.pravatar.cc/150?img=11"
    }
  },
  {
    "id": 11,
    "content": "IN THE BOOK OF LIFE, MAY EACH CHAPTER BRING YOU WISDOM AND EACH PAGE TURN REVEAL BLESSINGS.",
    "author": {
      "name": "Mom",
      "avatar": "https://i.pravatar.cc/150?img=12"
    }
  },
  {
    "id": 12,
    "content": "AS YOU WALK THE PATH OF LIFE, MAY YOU BE GUIDED BY FAITH AND COMFORTED BY GRACE.",
    "author": {
      "name": "Mom",
      "avatar": "https://i.pravatar.cc/150?img=13"
    }
  },
  {
    "id": 13,
    "content": "WITH A HEART FULL OF GRATITUDE AND A SPIRIT FULL OF FAITH, YOU SHALL OVERCOME ANY CHALLENGE.",
    "author": {
      "name": "Mom",
      "avatar": "https://i.pravatar.cc/150?img=14"
    }
  },
  {
    "id": 14,
    "content": "MAY YOUR FAITH BE A GUIDING STAR, LEADING YOU THROUGH BOTH CALM SEAS AND STORMY WATERS.",
    "author": {
      "name": "Mom",
      "avatar": "https://i.pravatar.cc/150?img=15"
    }
  },
  {
    "id": 15,
    "content": "IN UNITY AND LOVE, WE FIND STRENGTH. LET'S UPLIFT AND SUPPORT ONE ANOTHER. GOD BLESS!",
    "author": {
      "name": "Mom",
      "avatar": "https://i.pravatar.cc/150?img=16"
    }
  },
  {
    "id": 16,
    "content": "WITH EVERY PRAYER WHISPERED, A HOPEFUL MELODY FILLS THE AIR. TRUST IN THE POWER OF FAITH.",
    "author": {
      "name": "Mom",
      "avatar": "https://i.pravatar.cc/150?img=17"
    }
  },
  {
    "id": 17,
    "content": "MAY YOUR DAYS BE TOUCHED BY MIRACLES, YOUR HEART BE FULL OF GRATITUDE, AND YOUR SOUL BE AT PEACE.",
    "author": {
      "name": "Mom",
      "avatar": "https://i.pravatar.cc/150?img=18"
    }
  },
  {
    "id": 18,
    "content": "LIKE A CANDLE'S GLOW IN THE DARKNESS, LET YOUR FAITH ILLUMINATE EVEN THE DIMMEST CORNERS.",
    "author": {
      "name": "Mom",
      "avatar": "https://i.pravatar.cc/150?img=19"
    }
  },
  {
    "id": 19,
    "content": "ON THE TAPESTRY OF LIFE, MAY FAITH WEAVE VIBRANT THREADS OF PURPOSE AND MEANING.",
    "author": {
      "name": "Mom",
      "avatar": "https://i.pravatar.cc/150?img=20"
    }
  },
  {
    "id": 20,
    "content": "WITH OPEN HEARTS AND BOUNDLESS FAITH, WE CAN OVERCOME AND ACHIEVE THE EXTRAORDINARY.",
    "author": {
      "name": "Mom",
      "avatar": "https://i.pravatar.cc/150?img=21"
    }
  }
];
