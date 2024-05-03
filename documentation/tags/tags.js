import YAML from "yamljs";

const tags = YAML.load("./documentation/tags/tags.yaml");

export default tags.tags;
