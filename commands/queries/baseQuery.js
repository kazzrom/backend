import initModels from "../../models/initModels.js";

const models = initModels();

async function main() {
  await models.RelationName.bulkCreate([
    { name: "Мать" },
    { name: "Отец" },
    { name: "Бабушка" },
    { name: "Дедушка" },
    { name: "Сестра" },
    { name: "Брат" },
    { name: "Опекун" },
  ]);

  await models.InclinationName.bulkCreate([
    { name: "К курению" },
    { name: "К распитию спиртного" },
    { name: "К бродяжничеству" },
  ]);
}

export default main;
