import YAML from "yamljs";

const todo = YAML.load("./documentation/schemas/Todo.yaml");

export default { ...todo };
