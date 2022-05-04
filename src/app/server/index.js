import { Server, Model } from "miragejs";
import { GALLERY } from "@/assets/mocks/gallery";
import { API_DELAY_MAX, API_DELAY_MIN } from "@/app/helpers/constants";

const randomDelay = () => Math.floor(Math.random() * API_DELAY_MAX) + API_DELAY_MIN;

const mirage = new Server({
  models: {
    gallery: Model,
  },

  seeds(server) {
    server.db.loadData({
      gallery: GALLERY,
    });
  },

  routes() {
    this.namespace = import.meta.env.VITE_APP_API_URL;
    
    // get all gallery items
    this.get("/gallery", (schema, request) => {
      return schema.db.gallery
    }, { timing: randomDelay() });
  },
});
