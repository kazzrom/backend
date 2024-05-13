import StudentRepository from "../../repositories/Group/StudentRepository.js";
import { Conflict } from "../../utils/Errors.js";

export default class StudentService {
  static async getAllStudentByGroupId(groupId) {
    const response = await StudentRepository.getAllStudentByGroupId(groupId);

    return response;
  }

  static async getStudentById(id) {
    const response = await StudentRepository.getStudentById(id);

    return response;
  }

  static async createStudent({ data, groupId }) {
    const { surname, name, patronymic, sex, PersonalDatum } = data;

    const studentBySNILS = await StudentRepository.getStudentBySNILS(
      PersonalDatum.SNILS
    );

    if (studentBySNILS) {
      throw new Conflict("Студент с таким СНИЛС уже существует");
    }

    const studentByPhoneNumber =
      await StudentRepository.getStudentsByPhoneNumber(
        PersonalDatum.phoneNumber
      );

    if (studentByPhoneNumber) {
      throw new Conflict("Студент с таким номером телефона уже существует");
    }

    const studentByReportCartNumber =
      await StudentRepository.getStudentByReportCardNumber(
        PersonalDatum.reportCardNumber
      );

    if (studentByReportCartNumber) {
      throw new Conflict("Студент с таким табельным номером уже существует");
    }

    const studentByMedicalPolicy =
      await StudentRepository.getStudentByMedicalPolicy(
        PersonalDatum.medicalPolicy
      );

    if (studentByMedicalPolicy) {
      throw new Conflict("Студент с таким медицинским полисом уже существует");
    }

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
