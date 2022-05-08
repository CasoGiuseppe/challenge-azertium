import { describe, it, expect, beforeEach } from "vitest";
import { setActivePinia, createPinia } from 'pinia';
import { useGalleryStore } from '@/gallery/stores/gallery'
import {
  CHANGE_GALLERY_LIST,
  CHANGE_GALLERY_ALBUM,
  CHANGE_GALLERY_DELETED_ITEM,
  CHANGE_GALLERY_DELETED_STATE,
  CHANGE_GALLERY_LOADED_SIZE
} from '@/gallery/stores/gallery/actions';
import GALLERY from '@/assets/mocks/gallery.json';

describe('Gallery store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it("should return list > 1 item", () => {
    const galleryStore = useGalleryStore()
    galleryStore[CHANGE_GALLERY_LIST]({ value: GALLERY })
    expect(galleryStore.gallery.length).toBeGreaterThan(1)
  });

  it("first item gallery array should have correct albumId value and type", () => {
    const galleryStore = useGalleryStore()
    galleryStore[CHANGE_GALLERY_LIST]({ value: GALLERY })
    expect(galleryStore.gallery[0]).toMatchObject({ albumId: 1})
    expect(typeof galleryStore.gallery[0].albumId).toBe('number')
  });

  it("album index should have correct value === 1", () => {
    const galleryStore = useGalleryStore()
    galleryStore[CHANGE_GALLERY_ALBUM]()
    expect(galleryStore.album).toBe(1)
  });

  it("deleted item should have correct deleted key value === true", () => {
    const galleryStore = useGalleryStore()
    galleryStore[CHANGE_GALLERY_DELETED_ITEM]({ value: 1 })
    expect(galleryStore.gallery[0].deleted).toBe(true)
  });

  it("deleted key should have a correct type === boolean", () => {
    const galleryStore = useGalleryStore()
    galleryStore[CHANGE_GALLERY_DELETED_STATE]({ value: true })
    expect(typeof galleryStore.deleted).toBe('boolean')
  });

  it("load items should be > 0 and have a correct lenght === 50", () => {
    const galleryStore = useGalleryStore()
    galleryStore[CHANGE_GALLERY_LOADED_SIZE]({ value: GALLERY.length })
    expect(galleryStore.loadedItems).toBeGreaterThan(0)
    expect(galleryStore.loadedItems).toBe(GALLERY.length)
  });
})
