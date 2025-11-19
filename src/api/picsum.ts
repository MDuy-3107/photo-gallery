export interface Photo {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
}

const BASE_URL = 'https://picsum.photos';

export const picsumApi = {
  /**
   * Fetch a paginated list of photos
   */
  async getPhotos(page: number = 1, limit: number = 30): Promise<Photo[]> {
    const response = await fetch(
      `${BASE_URL}/v2/list?page=${page}&limit=${limit}`
    );
    
    if (!response.ok) {
      throw new Error(`Failed to fetch photos: ${response.statusText}`);
    }
    
    return response.json();
  },

  /**
   * Fetch details for a single photo by ID
   */
  async getPhotoById(id: string): Promise<Photo> {
    const response = await fetch(`${BASE_URL}/id/${id}/info`);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch photo details: ${response.statusText}`);
    }
    
    return response.json();
  },

  /**
   * Get URL for a photo at specific dimensions
   */
  getPhotoUrl(id: string, width: number, height?: number): string {
    return height 
      ? `${BASE_URL}/id/${id}/${width}/${height}`
      : `${BASE_URL}/id/${id}/${width}`;
  },

  /**
   * Get the original full-size download URL
   */
  getDownloadUrl(photo: Photo): string {
    return photo.download_url;
  },
};
