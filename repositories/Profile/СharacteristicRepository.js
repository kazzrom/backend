import _ from "lodash";
import initModels from "../../models/initModels.js";

const { Student, Hobby, Inclination, StudentAttitudes, StudentPersonality } =
  initModels();

export default class СharacteristicRepository {
  static async getStudentCharacteristicByStudentId(studentId) {
    const studentAttitudes = await StudentAttitudes.findOne({
      where: { studentId },
    });

    const studentPersonality = await StudentPersonality.findOne({
      where: { studentId },
    });

    const hobbies = await Hobby.findAll({
      where: { studentId },
    });

    const inclinations = await Inclination.findAll({
      where: { studentId },
    });

    return { studentAttitudes, studentPersonality, hobbies, inclinations };
  }

  static async updateStudentAttitudesByStudentId({ studentId, data }) {
    const student = await Student.findOne({
      where: { id: studentId },
      include: StudentAttitudes,
    });
    await student.StudentAttitude.update(data);
  }

  static async updateStudentPersonalityByStudentId({
    studentId,
    studentPersonality,
    hobbies,
    inclinations,
  }) {
    const student = await Student.findOne({
      where: { id: studentId },
      include: [StudentPersonality, Hobby, Inclination],
    });

    await student.StudentPersonality.update(studentPersonality);

    // Обновление хобби
    const studentHobbies = student.Hobbies.map((hobby) => ({
      name: hobby.name,
    }));

    const newStudentHobbies = hobbies.map((hobby) => ({
      name: hobby,
    }));

    const xorHobbies = _.xorBy(newStudentHobbies, studentHobbies, "name");

    const newHobbies = newStudentHobbies.filter((hobby) =>
      xorHobbies.includes(hobby)
    );
    const oldHobbies = studentHobbies.filter((hobby) =>
      xorHobbies.includes(hobby)
    );

    const totalHobbies = await Hobby.bulkCreate(newHobbies);
    await student.addHobbies(totalHobbies);

    oldHobbies.forEach(async (hobby) => {
      await Hobby.destroy({ where: { studentId, name: hobby.name } });
    });

    // Обновление склонностей
    const studentInclinations = student.Inclinations.map((inclination) => ({
      name: inclination.name,
    }));

    const newStudentInclinations = inclinations.map((inclination) => ({
      name: inclination,
    }));

    const xorInclinations = _.xorBy(
      newStudentInclinations,
      studentInclinations,
      "name"
    );

    const newInclinations = newStudentInclinations.filter((inclination) =>
      xorInclinations.includes(inclination)
    );

    const oldInclinations = studentInclinations.filter((inclination) =>
      xorInclinations.includes(inclination)
    );

    const totalInclinations = await Inclination.bulkCreate(newInclinations);
    await student.addInclinations(totalInclinations);

    oldInclinations.forEach(async (inclination) => {
      await Inclination.destroy({
        where: { studentId, name: inclination.name },
      });
    });
  }
}
