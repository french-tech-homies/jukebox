import { objectType } from "nexus";

export const Playlist = objectType({
  name: "Playlist",
  definition(t) {
    t.id("id");
    t.string("name");
    t.string("description");
  }
});
