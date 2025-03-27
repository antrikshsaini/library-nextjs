interface Book {
  id: string;
  title: string;
  author: string;
  genre: string;
  rating: number;
  total_copies: number;
  available_copies: number;
  description: string;
  coverColor: string;
  cover: string;
  videoUrl: string;
  summary: string;
  createdAt: Date | null;
}
