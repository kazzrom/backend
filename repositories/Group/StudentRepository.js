import initModels from "../../models/initModels.js";

const { Student, PersonalData } = initModels();

export default class StudentRepository {
  static async getAllStudent(groupId) {
    const students = await Student.findAll({
      where: { groupId },
      include: [PersonalData],
    });

    if (!students) {
      return null;
    }

    return students;
  }

  static async getStudentById(id) {
    const student = await Student.findByPk(id, {
      include: [PersonalData],
    });

    if (!student) {
      return null;
    }

    return student;
  }

  static async createStudent(data) {
    const { surname, name, patronymic, sex, groupId } = data;
    const student = await Student.create({
      surname,
      name,
      patronymic,
      sex,
      groupId,
    });

    const { PersonalDatum } = data;
    const personalData = await PersonalData.create(PersonalDatum);

    await student.setPersonalDatum(personalData);
  }

  static async updateStudent(id, data) {
    const student = await Student.findByPk(id, {
      include: [PersonalData],
    });

    const { surname, name, patronymic, sex } = data;
    await student.update({ surname, name, patronymic, sex });

    const { PersonalDatum } = data;
    await student.PersonalDatum.update(PersonalDatum);
  }

  static async deleteStudent(id) {
    await Student.destroy({ where: { id } });
  }
}
