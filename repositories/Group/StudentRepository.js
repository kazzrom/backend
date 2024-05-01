import initModels from "../../models/initModels.js";

const { Student, PersonalData } = initModels();

export default class StudentRepository {
  static async getAllStudentByGroupId(groupId) {
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

  static async createStudent({ student, personalData }) {
    const student = await Student.create(student);
    const personalData = await PersonalData.create(personalData);
    await student.setPersonalDatum(personalData);
  }

  static async updateStudent({ id, student, personalData }) {
    await Student.update(student, { where: { id } });

    await PersonalData.update(personalData, {
      where: { studentId: id },
    });
  }

  static async deleteStudent(id) {
    await Student.destroy({ where: { id } });
  }
}
