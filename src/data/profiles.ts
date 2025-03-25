
import { Profile } from "../types/profile";

const profiles: Profile[] = [
  {
    id: "1",
    name: "Alexandra",
    age: 28,
    location: "San Francisco, CA",
    distance: 5,
    bio: "Professional photographer with a passion for capturing life's beautiful moments. Coffee enthusiast and avid hiker. Looking for someone who appreciates art and adventure just as much as a quiet evening at home.",
    interests: ["Photography", "Hiking", "Coffee", "Art", "Travel"],
    imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    detailImageUrls: [
      "https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80",
      "https://images.unsplash.com/photo-1527856263669-12c3a0af2aa6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    ],
    compatibility: 85,
  },
  {
    id: "2",
    name: "Marcus",
    age: 31,
    location: "Los Angeles, CA",
    distance: 12,
    bio: "Software engineer by day, musician by night. I love creating things both with code and with music. Looking for someone who's passionate about what they do and wants to share their world with me.",
    interests: ["Coding", "Music", "Guitar", "Cycling", "Cooking"],
    imageUrl: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80",
    detailImageUrls: [
      "https://images.unsplash.com/photo-1501559751634-082a71c7b5ca?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1546422401-68b415cbf8de?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    ],
    compatibility: 72,
  },
  {
    id: "3",
    name: "Sophia",
    age: 26,
    location: "New York, NY",
    distance: 3,
    bio: "Book lover, yoga instructor, and foodie. I'm a firm believer in balance - between work and play, health and indulgence. I'm looking for a genuine connection with someone who values authenticity and growth.",
    interests: ["Yoga", "Reading", "Cooking", "Writing", "Meditation"],
    imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    detailImageUrls: [
      "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1483811950814-aec2bd5b4110?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    ],
    compatibility: 92,
  },
  {
    id: "4",
    name: "Jackson",
    age: 29,
    location: "Chicago, IL",
    distance: 8,
    bio: "Architect with a love for design in all forms. When I'm not sketching buildings, you can find me at local exhibitions or exploring the city for inspiration. Seeking someone creative and curious.",
    interests: ["Architecture", "Design", "Art", "Urban Exploration", "Coffee"],
    imageUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80",
    detailImageUrls: [
      "https://images.unsplash.com/photo-1476900543704-4312b78632f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1473172707857-f9e276582ab6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    ],
    compatibility: 68,
  },
  {
    id: "5",
    name: "Emma",
    age: 27,
    location: "Boston, MA",
    distance: 15,
    bio: "Marine biologist with a deep love for the ocean and everything in it. I spend my weekends scuba diving or volunteering at the local aquarium. Looking for someone who shares my passion for conservation and adventure.",
    interests: ["Marine Biology", "Scuba Diving", "Conservation", "Photography", "Swimming"],
    imageUrl: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80",
    detailImageUrls: [
      "https://images.unsplash.com/photo-1544672412-9f9fe6b9c4a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1520943219761-6ca840d1f5a4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    ],
    compatibility: 78,
  },
  {
    id: "6",
    name: "Liam",
    age: 32,
    location: "Seattle, WA",
    distance: 7,
    bio: "Chef who specializes in farm-to-table cuisine. I'm passionate about sustainable food practices and supporting local farmers. When I'm not in the kitchen, I'm hiking in the mountains or exploring farmers markets. Looking for a fellow food enthusiast.",
    interests: ["Cooking", "Hiking", "Farmers Markets", "Sustainability", "Wine Tasting"],
    imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80",
    detailImageUrls: [
      "https://images.unsplash.com/photo-1513267048331-5611cad62e41?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1515669097368-22e68427d265?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    ],
    compatibility: 81,
  },
  {
    id: "7",
    name: "Olivia",
    age: 30,
    location: "Austin, TX",
    distance: 10,
    bio: "Tech startup founder with a background in AI. I'm fascinated by how technology can improve our lives, but I also know when to disconnect. Music festival enthusiast and amateur painter. Looking for someone ambitious yet balanced.",
    interests: ["Technology", "Startups", "Painting", "Festivals", "Innovation"],
    imageUrl: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    detailImageUrls: [
      "https://images.unsplash.com/photo-1522198734915-76c764a8454d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1550784073-1e26e3abc036?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    ],
    compatibility: 90,
  },
];

export default profiles;
