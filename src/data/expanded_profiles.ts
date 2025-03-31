import { Profile } from "../types/profile";

const group1 = [
  {
    "id": "1",
    "name": "Ahmad",
    "age": 50,
    "dalil": [
      {
        "maleUser": "Al-Isra:23 – This shows that greeting one's father with Salam is encouraged and does not break wudu.",
        "femaleUser": "Al-Isra:23 – This shows that greeting one's father with Salam is encouraged and does not break wudu."
      }
    ],
    "interests": ["Male", "Islam", "Baligh"],
    "imageUrl": "https://images.unsplash.com/photo-1560807707-8cc77767d783?fit=crop&w=800&q=80",
    "detailImageUrls": [
      "https://images.unsplash.com/photo-1560807707-8cc77767d783?fit=crop&w=800&q=80"
    ],
    "hint": "Head of family",
    "relationship": "Father"
  },
  {
    "id": "2",
    "name": "Fatimah",
    "age": 48,
    "dalil": "A mother has the highest respect. (Hadith: Bukhari 5971)",
    "interests": ["Female", "Islam", "Baligh"],
    "imageUrl": "https://images.unsplash.com/photo-1575936123452-b67c3203c357?fit=crop&w=800&q=80",
    "detailImageUrls": [
      "https://images.unsplash.com/photo-1575936123452-b67c3203c357?fit=crop&w=800&q=80"
    ],
    "hint": "Nurturing caregiver",
    "relationship": "Mother"
  },
  {
    "id": "3",
    "name": "Ali",
    "age": 25,
    "dalil": "Siblings are part of the close family.",
    "interests": ["Male", "Islam", "Baligh"],
    "imageUrl": "https://images.unsplash.com/photo-1604076913837-9e9c5d0c6378?fit=crop&w=800&q=80",
    "detailImageUrls": [
      "https://images.unsplash.com/photo-1604076913837-9e9c5d0c6378?fit=crop&w=800&q=80"
    ],
    "hint": "Brotherly bond",
    "relationship": "Brother"
  },
  {
    "id": "4",
    "name": "Aminah",
    "age": 23,
    "dalil": "Sisters are mahram.",
    "interests": ["Female", "Islam", "Baligh"],
    "imageUrl": "https://images.unsplash.com/photo-1621882358510-c300de3f2c35?fit=crop&w=800&q=80",
    "detailImageUrls": [
      "https://images.unsplash.com/photo-1621882358510-c300de3f2c35?fit=crop&w=800&q=80"
    ],
    "hint": "Sisterly love",
    "relationship": "Sister"
  }
]


const group2 = [
  {
    id: "11",
    name: "Hassan",
    age: 35,
    dalil: [
      {
        maleUser: "Sahih Bukhari:5678 – Exchanging Salam with cousins strengthens extended family bonds.",
        femaleUser: "Sahih Bukhari:5678 – Exchanging Salam with cousins strengthens extended family bonds."
      }
    ],
    interests: ["Male", "Islam", "Baligh"],
    imageUrl: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?fit=crop&w=800&q=80",
    detailImageUrls: [
      "https://images.unsplash.com/photo-1552058544-f2b08422138a?fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1548449112-96a38a643324?fit=crop&w=800&q=80"
    ],
    hint: "From father's side",
    relationship: "Cousin"
  },
  {
    id: "12",
    name: "Aisyah",
    age: 32,
    dalil: "Uncles and aunts have different rulings.",
    interests: ["Female", "Islam", "Baligh"],
    imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    detailImageUrls: [
      "https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80",
      "https://images.unsplash.com/photo-1527856263669-12c3a0af2aa6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    ],
    hint: "dummy",
    relationship: "Aunt"
  },
  {
    id: "13",
    name: "Rizal",
    age: 40,
    dalil: "Uncles may or may not be mahram.",
    interests: ["Male", "Islam", "Baligh"],
    imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    detailImageUrls: [
      "https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80",
      "https://images.unsplash.com/photo-1527856263669-12c3a0af2aa6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    ],
    hint: "dummy",
    relationship: "Uncle"
  },
  {
    id: "14",
    name: "Salmah",
    age: 38,
    dalil: "Aunts are respected family members.",
    interests: ["Female", "Islam", "Baligh"],
    imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    detailImageUrls: [
      "https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80",
      "https://images.unsplash.com/photo-1527856263669-12c3a0af2aa6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    ],
    hint: "dummy",
    relationship: "Aunt"
  },
  {
    id: "15",
    name: "Kamil",
    age: 45,
    dalil: "Step-relations follow different rulings.",
    interests: ["Male", "Islam", "Baligh"],
    imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    detailImageUrls: [
      "https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80",
      "https://images.unsplash.com/photo-1527856263669-12c3a0af2aa6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    ],
    hint: "dummy",
    relationship: "Step-Father"
  },
  {
    id: "16",
    name: "Halimah",
    age: 42,
    dalil: "Grand-aunts/uncles have varied rulings.",
    interests: ["Female", "Islam", "Baligh"],
    imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    detailImageUrls: [
      "https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80",
      "https://images.unsplash.com/photo-1527856263669-12c3a0af2aa6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    ],
    hint: "dummy",
    relationship: "Grand-Aunt"
  }
];

const group3 = [
  {
    id: "17",
    name: "Abdul",
    age: 55,
    dalil: [
      {
        maleUser: "Sahih Muslim:8901 – A measured Salam to a father's cousin is permissible when done respectfully.",
        femaleUser: "Sahih Muslim:8901 – A measured Salam to a father's cousin is permissible when done respectfully."
      }
    ],
    interests: ["Male", "Islam", "Baligh"],
    imageUrl: "https://images.unsplash.com/photo-1578635073897-3809598b775f?fit=crop&w=800&q=80",
    detailImageUrls: [
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=800&q=80"
    ],
    hint: "Extended family elder",
    relationship: "Father's Cousin"
  },
  {
    id: "18",
    name: "Nur",
    age: 50,
    dalil: [
      {
        maleUser: "Sahih Muslim:8901 – A measured Salam to a father's cousin is permissible when done respectfully.",
        femaleUser: "Sahih Muslim:8901 – A measured Salam to a father's cousin is permissible when done respectfully."
      }
    ],
    interests: ["Male", "Islam", "Baligh"],
    imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    detailImageUrls: [
      "https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80",
      "https://images.unsplash.com/photo-1527856263669-12c3a0af2aa6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    ],
    hint: "dummy",
    relationship: "Cousin's Uncle"
  },
  {
    id: "19",
    name: "Fatima",
    age: 48,
    dalil: [
      {
        maleUser: "Sahih Muslim:8901 – A measured Salam to a father's cousin is permissible when done respectfully.",
        femaleUser: "Sahih Muslim:8901 – A measured Salam to a father's cousin is permissible when done respectfully."
      }
    ],
    interests: ["Female", "Islam", "Baligh"],
    imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    detailImageUrls: [
      "https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80",
      "https://images.unsplash.com/photo-1527856263669-12c3a0af2aa6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    ],
    hint: "dummy",
    relationship: "Step-Auntie's Father"
  },
  {
    id: "20",
    name: "Rashid",
    age: 52,
    dalil: [
      {
        maleUser: "Sahih Muslim:8901 – A measured Salam to a father's cousin is permissible when done respectfully.",
        femaleUser: "Sahih Muslim:8901 – A measured Salam to a father's cousin is permissible when done respectfully."
      }
    ],
    interests: ["Male", "Islam", "Baligh"],
    imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    detailImageUrls: [
      "https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80",
      "https://images.unsplash.com/photo-1527856263669-12c3a0af2aa6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    ],
    hint: "dummy",
    relationship: "Mother's Cousin"
  },
  {
    id: "21",
    name: "Aisha",
    age: 45,
    dalil: [
      {
        maleUser: "Sahih Muslim:8901 – A measured Salam to a father's cousin is permissible when done respectfully.",
        femaleUser: "Sahih Muslim:8901 – A measured Salam to a father's cousin is permissible when done respectfully."
      }
    ],
    interests: ["Female", "Islam", "Baligh"],
    imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    detailImageUrls: [
      "https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80",
      "https://images.unsplash.com/photo-1527856263669-12c3a0af2aa6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    ],
    hint: "dummy",
    relationship: "Cousin's Aunt"
  },
  {
    id: "22",
    name: "Jamal",
    age: 40,
    dalil: [
      {
        maleUser: "Sahih Muslim:8901 – A measured Salam to a father's cousin is permissible when done respectfully.",
        femaleUser: "Sahih Muslim:8901 – A measured Salam to a father's cousin is permissible when done respectfully."
      }
    ],
    interests: ["Male", "Islam", "Baligh"],
    imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    detailImageUrls: [
      "https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80",
      "https://images.unsplash.com/photo-1527856263669-12c3a0af2aa6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    ],
    hint: "dummy",
    relationship: "Step-Uncle's Father"
  },
  {
    id: "23",
    name: "Sara",
    age: 38,
    dalil: [
      {
        maleUser: "Sahih Muslim:8901 – A measured Salam to a father's cousin is permissible when done respectfully.",
        femaleUser: "Sahih Muslim:8901 – A measured Salam to a father's cousin is permissible when done respectfully."
      }
    ],
    interests: ["Female", "Islam", "Baligh"],
    imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    detailImageUrls: [
      "https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80",
      "https://images.unsplash.com/photo-1527856263669-12c3a0af2aa6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    ],
    hint: "dummy",
    relationship: "Grandmother's Sister"
  },
  {
    id: "24",
    name: "Tariq",
    age: 35,
    dalil: [
      {
        maleUser: "Sahih Muslim:8901 – A measured Salam to a father's cousin is permissible when done respectfully.",
        femaleUser: "Sahih Muslim:8901 – A measured Salam to a father's cousin is permissible when done respectfully."
      }
    ],
    interests: ["Male", "Islam", "Baligh"],
    imageUrl: "https://source.unsplash.com/random/200x200?face",
    detailImageUrls: ["https://source.unsplash.com/random/300x300?face"],
    hint: "dummy",
    relationship: "Grandfather's Brother"
  }
];

const group4 = [
  {
    id: "25",
    name: "Rahul",
    age: 30,
    dalil: [
      {
        maleUser: "Sahih Bukhari:2020 – Handshakes among male friends are permissible.",
        femaleUser: "Sahih Muslim:2021 – Handshakes with non-mahrams are not advised for females."
      }
    ],
    interests: ["Male", "Hindu", "Non-Baligh"],
    imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fit=crop&w=800&q=80",
    detailImageUrls: [
      "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?fit=crop&w=800&q=80"
    ],
    hint: "Known from work",
    relationship: "Friend"
  },
  {
    id: "26",
    name: "Emily",
    age: 28,
    dalil: [
      {
        maleUser: "Sahih Bukhari:2020 – Handshakes among male friends are permissible.",
        femaleUser: "Sahih Muslim:2021 – Handshakes with non-mahrams are not advised for females."
      }
    ],
    interests: ["Female", "Christian", "Baligh"],
    imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    detailImageUrls: [
      "https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80",
      "https://images.unsplash.com/photo-1527856263669-12c3a0af2aa6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    ],
    hint: "dummy",
    relationship: "Colleague"
  },
  {
    id: "27",
    name: "Liam",
    age: 32,
    dalil: [
      {
        maleUser: "Sahih Bukhari:2020 – Handshakes among male friends are permissible.",
        femaleUser: "Sahih Muslim:2021 – Handshakes with non-mahrams are not advised for females."
      }
    ],
    interests: ["Male", "Atheist", "Baligh"],
    imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    detailImageUrls: [
      "https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80",
      "https://images.unsplash.com/photo-1527856263669-12c3a0af2aa6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    ],
    hint: "dummy",
    relationship: "Stranger"
  },
  {
    id: "28",
    name: "Ava",
    age: 29,
    dalil: [
      {
        maleUser: "Sahih Bukhari:2020 – Handshakes among male friends are permissible.",
        femaleUser: "Sahih Muslim:2021 – Handshakes with non-mahrams are not advised for females."
      }
    ],
    interests: ["Female", "Buddhist", "Baligh"],
    imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    detailImageUrls: [
      "https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80",
      "https://images.unsplash.com/photo-1527856263669-12c3a0af2aa6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    ],
    hint: "dummy",
    relationship: "Neighbor"
  },
  {
    id: "29",
    name: "Ethan",
    age: 31,
    dalil: [
      {
        maleUser: "Sahih Bukhari:2020 – Handshakes among male friends are permissible.",
        femaleUser: "Sahih Muslim:2021 – Handshakes with non-mahrams are not advised for females."
      }
    ],
    interests: ["Male", "Jewish", "Baligh"],
    imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    detailImageUrls: [
      "https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80",
      "https://images.unsplash.com/photo-1527856263669-12c3a0af2aa6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    ],
    hint: "dummy",
    relationship: "Classmate"
  },
  {
    id: "30",
    name: "Lily",
    age: 27,
    dalil: [
      {
        maleUser: "Sahih Bukhari:2020 – Handshakes among male friends are permissible.",
        femaleUser: "Sahih Muslim:2021 – Handshakes with non-mahrams are not advised for females."
      }
    ],
    interests: ["Female", "Sikh", "Baligh"],
    imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    detailImageUrls: [
      "https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80",
      "https://images.unsplash.com/photo-1527856263669-12c3a0af2aa6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    ],
    hint: "dummy",
    relationship: "Acquaintance"
  },
  {
    id: "31",
    name: "Noah",
    age: 33,
    dalil: [
      {
        maleUser: "Sahih Bukhari:2020 – Handshakes among male friends are permissible.",
        femaleUser: "Sahih Muslim:2021 – Handshakes with non-mahrams are not advised for females."
      }
    ],
    interests: ["Male", "Catholic", "Baligh"],
    imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    detailImageUrls: [
      "https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80",
      "https://images.unsplash.com/photo-1527856263669-12c3a0af2aa6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    ],
    hint: "dummy",
    relationship: "Associate"
  },
  {
    id: "32",
    name: "Olivia",
    age: 26,
    dalil: [
      {
        maleUser: "Sahih Bukhari:2020 – Handshakes among male friends are permissible.",
        femaleUser: "Sahih Muslim:2021 – Handshakes with non-mahrams are not advised for females."
      }
    ],
    interests: ["Female", "Hindu", "Baligh"],
    imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    detailImageUrls: [
      "https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80",
      "https://images.unsplash.com/photo-1527856263669-12c3a0af2aa6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    ],
    hint: "dummy",
    relationship: "Peer"
  },
  {
    id: "33",
    name: "William",
    age: 34,
    dalil: [
      {
        maleUser: "Sahih Bukhari:2020 – Handshakes among male friends are permissible.",
        femaleUser: "Sahih Muslim:2021 – Handshakes with non-mahrams are not advised for females."
      }
    ],
    interests: ["Male", "Protestant", "Baligh"],
    imageUrl: "https://source.unsplash.com/random/200x200?face",
    detailImageUrls: ["https://source.unsplash.com/random/300x300?face"],
    hint: "dummy",
    relationship: "Mentor"
  },
  {
    id: "34",
    name: "Sophie",
    age: 25,
    dalil: [
      {
        maleUser: "Sahih Bukhari:2020 – Handshakes among male friends are permissible.",
        femaleUser: "Sahih Muslim:2021 – Handshakes with non-mahrams are not advised for females."
      }
    ],
    interests: ["Female", "Jewish", "Baligh"],
    imageUrl: "https://source.unsplash.com/random/200x200?face",
    detailImageUrls: ["https://source.unsplash.com/random/300x300?face"],
    hint: "dummy",
    relationship: "Role Model"
  }
];


export { 
  group1, group2, group3, group4 
};
