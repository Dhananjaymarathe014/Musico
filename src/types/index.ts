export interface GalleryItem {
  id: string;
  title: string;
  description: string | null;
  media_url: string;
  media_type: 'image' | 'video';
  category: string;
  order_index: number;
  created_at: string;
}

export interface ContactSubmission {
  name: string;
  email: string;
  subject?: string;
  message: string;
}
