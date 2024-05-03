import tags from "./documentation/tags/tags.js";
import paths from "./documentation/paths/paths.js";
import schemas from "./documentation/schemas/schemas.js";

export default {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Curator's journal API",
      version: "1.0.0",
      description: "Библиотека API для журнала педагогических наблюдений",
    },
    servers: [
      {
        url: "http://localhost:5000",
        description: "Local server",
      },
    ],
    tags: tags,
    paths: {
      ...paths,
    },
    components: {
      schemas: {
        ...schemas,
      },
    },
  },
  apis: ["index.js"],
};
