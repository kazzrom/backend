import YAML from "yamljs";

const todo = YAML.load("./documentation/paths/Todo.yaml");

export default { ...todo };
