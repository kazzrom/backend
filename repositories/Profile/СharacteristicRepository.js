import _ from "lodash";
import initModels from "../../models/initModels.js";

const { Student, Hobby, Inclination, StudentAttitudes, StudentPersonality } =
  initModels();

export default class СharacteristicRepository {
  static async getStudentCharacteristic(studentId) {
    const student = Student.findOne({
      where: { id: studentId },
      include: [Hobby, Inclination, StudentAttitudes, StudentPersonality],
    });

    if (!student) {
      return null;
    }

    return student;
  }

  static async createStudentCharacteristic(data) {
    const { studentId } = data;
    const student = await Student.findOne({
      where: { id: studentId },
      include: [Hobby, Inclination, StudentAttitudes, StudentPersonality],
    });

    const studentAttitudes = await StudentAttitudes.create();
    const studentPersonality = await StudentPersonality.create();

    await student.setStudentAttitude(studentAttitudes);
    await student.setStudentPersonality(studentPersonality);
  }

  static async updateStudentAttitudes(studentId, data) {
    const student = await Student.findOne({
      where: { id: studentId },
      include: StudentAttitudes,
    });
    await student.StudentAttitude.update(data);
  }

  static async updateStudentPersonality(studentId, data) {
    const student = await Student.findOne({
      where: { id: studentId },
      include: [StudentPersonality, Hobby, Inclination],
    });

    const { positiveSides, negativeSides, presenceOffenses } = data;

    await student.StudentPersonality.update({
      positiveSides,
      negativeSides,
      presenceOffenses,
    });

    // Обновление хобби
    const { Hobbies } = data;
    const studentHobbies = student.Hobbies.map((hobby) => ({
      name: hobby.name,
    }));

    const xorHobbies = _.xorBy(Hobbies, studentHobbies, "name");

    const newHobbies = Hobbies.filter((hobby) => xorHobbies.includes(hobby));
    const oldHobbies = studentHobbies.filter((hobby) =>
      xorHobbies.includes(hobby)
    );

    const hobbies = await Hobby.bulkCreate(newHobbies);
    await student.addHobbies(hobbies);

    oldHobbies.forEach(async (hobby) => {
      await Hobby.destroy({ where: { studentId, name: hobby.name } });
    });

    // Обновление склонностей
    const { Inclinations } = data;
    const studentInclinations = student.Inclinations.map((inclination) => ({
      name: inclination.name,
    }));

    const xorInclinations = _.xorBy(Inclinations, studentInclinations, "name");

    const newInclinations = Inclinations.filter((inclination) =>
      xorInclinations.includes(inclination)
    );

    const oldInclinations = studentInclinations.filter((inclination) =>
      xorInclinations.includes(inclination)
    );

    const inclinations = await Inclination.bulkCreate(newInclinations);
    await student.addInclinations(inclinations);

    oldInclinations.forEach(async (inclination) => {
      await Inclination.destroy({
        where: { studentId, name: inclination.name },
      });
    });
  }
}
