import initModels from "../../models/initModels.js";

const models = initModels();

const user = await models.User.create({
  login: "admin",
  password: "admin",
});

const curator = await models.Curator.create({
  surname: "Иванов",
  name: "Иван",
  patronymic: "Иванович",
});

await user.setCurator(curator);

const groupName = await models.GroupName.create({
  name: "Информационные системы и программирование",
});

const groupNumber = await models.GroupNumber.create({
  number: 403,
});

await models.Group.create({
  groupName: groupName.name,
  groupNumber: groupNumber.number,
  curatorId: user.id,
});

await models.RelationName.bulkCreate([
  { name: "Мать" },
  { name: "Отец" },
  { name: "Бабушка" },
  { name: "Дедушка" },
  { name: "Сестра" },
  { name: "Брат" },
]);

await models.InclinationName.bulkCreate([
  { name: "К курению" },
  { name: "К распитию спиртного" },
  { name: "К бродяжничеству" },
]);

const student = await models.Student.create({
  surname: "Иванов",
  name: "Иван",
  patronymic: "Иванович",
  sex: "Мужской",
  groupId: 1,
});

const personalData = await models.PersonalData.create({
  birthday: "2000-01-01",
  reportCardNumber: 10000,
  phoneNumber: "+7 800 555-35-35",
  residentialAddress: "г. Москва, ул. Ленина, д. 1",
  SNILS: "1234567890",
  medicalPolicy: "1234567890",
});

await student.setPersonalDatum(personalData);

const familyMember = await models.FamilyMember.create({
  surname: "Иванова",
  name: "Мария",
  patronymic: "Ивановна",
  relation: "Мать",
});

await student.addFamilyMember(familyMember);
