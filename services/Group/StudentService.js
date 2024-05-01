import StudentRepository from "../../repositories/Group/StudentRepository.js";

export default class StudentService {
  static async getAllStudentByGroupId(groupId) {
    const response = await StudentRepository.getAllStudentByGroupId(groupId);

    return response;
  }

  static async getStudentById(id) {
    const response = await StudentRepository.getStudentById(id);

    return response;
  }

  static async createStudent(data) {
    const { surname, name, patronymic, sex, groupId, PersonalDatum } = data;

    await StudentRepository.createStudent({
      student: { surname, name, patronymic, sex, groupId },
      personalData: PersonalDatum,
    });
  }

  static async updateStudent({ id, data }) {
    const { surname, name, patronymic, sex, PersonalDatum } = data;

    await StudentRepository.updateStudent({
      id,
      student: { surname, name, patronymic, sex },
      personalData: PersonalDatum,
    });
  }

  static async deleteStudent(id) {
    await StudentRepository.deleteStudent(id);
  }
}
