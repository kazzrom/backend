import initModels from "../../models/initModels.js";

const { Student, PersonalData } = initModels();

export default class GeneralInformationRepository {
  static async getGeneralInformation(groupId) {
    const numberStudents = await Student.count({
      where: {
        groupId,
      },
    });

    const numberBoys = await Student.count({
      where: {
        sex: "Мужской",
        groupId,
      },
    });

    const numberGirls = await Student.count({
      where: {
        sex: "Женский",
        groupId,
      },
    });

    const numberUrban = await Student.count({
      where: {
        groupId,
      },
      include: {
        model: PersonalData,
        where: {
          whereFrom: "Городской",
        },
      },
    });

    const numberRural = await Student.count({
      where: {
        groupId,
      },
      include: {
        model: PersonalData,
        where: {
          whereFrom: "Сельский",
        },
      },
    });

    const numberAbroad = await Student.count({
      where: {
        groupId,
      },
      include: {
        model: PersonalData,
        where: {
          whereFrom: "Иногородний",
        },
      },
    });

    return {
      numberStudents,
      numberBoys,
      numberGirls,
      numberUrban,
      numberRural,
      numberAbroad,
    };
  }
}
