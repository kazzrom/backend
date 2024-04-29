import initCharacteristicModels from "./Сharacteristic/_initAssociations.js";
import initFamilyModels from "./Family/_initAssociations.js";

import Student from "../Group/Student.js";
import IndividualWork from "./IndividualWork.js";
import PersonalData from "./PersonalData.js";

export default () => {
  const characteristicModels = initCharacteristicModels();
  const familyModels = initFamilyModels();

  Student.hasOne(PersonalData, {
    foreignKey: "studentId",
    onDelete: "CASCADE",
  });
  PersonalData.belongsTo(Student, { foreignKey: "studentId" });

  Student.hasMany(IndividualWork, {
    foreignKey: "studentId",
    onDelete: "CASCADE",
  });
  IndividualWork.belongsTo(Student, { foreignKey: "studentId" });

  return {
    Student,
    PersonalData,
    IndividualWork,
    ...characteristicModels,
    ...familyModels,
  };
};
