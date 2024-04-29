import initAuthModels from "./Auth/_initAssociations.js";
import initGroupModels from "./Group/_initAssociations.js";
import initProfileModels from "./Profile/_initAssociations.js";
import initProtocolsModels from "./Protocols/_initAssociations.js";
import initSocialPassportModels from "./SocialPassport/_initAssociations.js";

export default () => {
  initAuthModels();
  initGroupModels();
  initProfileModels();
  initProtocolsModels();
  initSocialPassportModels();
};
