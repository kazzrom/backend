import initAuthModels from "./Auth/_initAssociations.js";
import initGroupModels from "./Group/_initAssociations.js";
import initProfileModels from "./Profile/_initAssociations.js";

export default () => {
  initAuthModels();
  initGroupModels();
  initProfileModels();
};
