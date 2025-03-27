import { Profile } from "../types/profile";

const group1 = [
  { id: "1", name: "Ahmad", age: 50, dalil: "A parent is the closest family member. (Surah Al-Isra 17:23)", interests: ["Male", "Islam", "Baligh"], imageUrl: "https://source.unsplash.com/random/200x200?face", detailImageUrls: ["https://source.unsplash.com/random/300x300?face"], hint: "dummy" },
  { id: "2", name: "Fatimah", age: 48, dalil: "A mother has the highest respect. (Hadith: Bukhari 5971)", interests: ["Female", "Islam", "Baligh"], imageUrl: "https://source.unsplash.com/random/200x200?face", detailImageUrls: ["https://source.unsplash.com/random/300x300?face"], hint: "dummy" },
  { id: "3", name: "Ali", age: 25, dalil: "Siblings are part of the close family.", interests: ["Male", "Islam", "Baligh"], imageUrl: "https://source.unsplash.com/random/200x200?face", detailImageUrls: ["https://source.unsplash.com/random/300x300?face"], hint: "dummy" },
  { id: "4", name: "Aminah", age: 23, dalil: "Sisters are mahram.", interests: ["Female", "Islam", "Baligh"], imageUrl: "https://source.unsplash.com/random/200x200?face", detailImageUrls: ["https://source.unsplash.com/random/300x300?face"], hint: "dummy" },
  { id: "5", name: "Ibrahim", age: 60, dalil: "Grandparents are respected elders.", interests: ["Male", "Islam", "Baligh"], imageUrl: "https://source.unsplash.com/random/200x200?face", detailImageUrls: ["https://source.unsplash.com/random/300x300?face"], hint: "dummy" },
  { id: "6", name: "Zainab", age: 58, dalil: "Grandmothers hold wisdom.", interests: ["Female", "Islam", "Baligh"], imageUrl: "https://source.unsplash.com/random/200x200?face", detailImageUrls: ["https://source.unsplash.com/random/300x300?face"], hint: "dummy" },
  { id: "7", name: "Khalid", age: 18, dalil: "Baligh children follow adult rulings.", interests: ["Male", "Islam", "Baligh"], imageUrl: "https://source.unsplash.com/random/200x200?face", detailImageUrls: ["https://source.unsplash.com/random/300x300?face"], hint: "dummy" },
  { id: "8", name: "Siti", age: 16, dalil: "Daughters have special protection.", interests: ["Female", "Islam", "Not Baligh"], imageUrl: "https://source.unsplash.com/random/200x200?face", detailImageUrls: ["https://source.unsplash.com/random/300x300?face"], hint: "dummy" },
  { id: "9", name: "Hafiz", age: 12, dalil: "Pre-baligh children are treated differently.", interests: ["Male", "Islam", "Not Baligh"], imageUrl: "https://source.unsplash.com/random/200x200?face", detailImageUrls: ["https://source.unsplash.com/random/300x300?face"], hint: "dummy" },
  { id: "10", name: "Alya", age: 10, dalil: "Young girls do not have adult rulings.", interests: ["Female", "Islam", "Not Baligh"], imageUrl: "https://source.unsplash.com/random/200x200?face", detailImageUrls: ["https://source.unsplash.com/random/300x300?face"], hint: "dummy" }
];

const group2 = [
  { id: "11", name: "Hassan", age: 35, dalil: "Cousins are not considered mahram. (Surah An-Nur 24:31)", interests: ["Male", "Islam", "Baligh"], imageUrl: "https://source.unsplash.com/random/200x200?face", detailImageUrls: ["https://source.unsplash.com/random/300x300?face"], hint: "dummy" },
  { id: "12", name: "Aisyah", age: 32, dalil: "Uncles and aunts have different rulings.", interests: ["Female", "Islam", "Baligh"], imageUrl: "https://source.unsplash.com/random/200x200?face", detailImageUrls: ["https://source.unsplash.com/random/300x300?face"], hint: "dummy" },
  { id: "13", name: "Rizal", age: 40, dalil: "Uncles may or may not be mahram.", interests: ["Male", "Islam", "Baligh"], imageUrl: "https://source.unsplash.com/random/200x200?face", detailImageUrls: ["https://source.unsplash.com/random/300x300?face"], hint: "dummy" },
  { id: "14", name: "Salmah", age: 38, dalil: "Aunts are respected family members.", interests: ["Female", "Islam", "Baligh"], imageUrl: "https://source.unsplash.com/random/200x200?face", detailImageUrls: ["https://source.unsplash.com/random/300x300?face"], hint: "dummy" },
  { id: "15", name: "Kamil", age: 45, dalil: "Step-relations follow different rulings.", interests: ["Male", "Islam", "Baligh"], imageUrl: "https://source.unsplash.com/random/200x200?face", detailImageUrls: ["https://source.unsplash.com/random/300x300?face"], hint: "dummy" },
  { id: "16", name: "Halimah", age: 42, dalil: "Grand-aunts/uncles have varied rulings.", interests: ["Female", "Islam", "Baligh"], imageUrl: "https://source.unsplash.com/random/200x200?face", detailImageUrls: ["https://source.unsplash.com/random/300x300?face"], hint: "dummy" }
];

// const group3 = [...]; // Similarly extend for far relatives

// const group4 = [...]; // Similarly extend for outsiders

export { group1, group2, 
  // group3, group4 
};
