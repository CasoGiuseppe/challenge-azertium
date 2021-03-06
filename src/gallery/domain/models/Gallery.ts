type GalleryId = number;

export type Gallery = {
  albumId: number;
  title: string;
  url: string;
  thumbnailUrl: string;
  id: GalleryId;
  deleted: boolean;
  index: number
};
