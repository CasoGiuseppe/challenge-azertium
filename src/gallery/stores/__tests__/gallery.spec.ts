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

})
