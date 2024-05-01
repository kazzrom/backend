import initModels from "../../models/initModels.js";

const { Student, StudentsWithChronicDiseases } = initModels();

export default class ChronicDiseasesRepository {
  static async getRecords(groupId) {
    const students = await Student.findAll({
      where: { groupId },
      include: [StudentsWithChronicDiseases],
    });

    if (!students) {
      return null;
    }

    // TODO: возможно, тут некорректно сделана выборка и преобразование массива, хы
    const chronicDiseases = students.map(
      (student) => student.StudentsWithChronicDiseases
    );

    return chronicDiseases;
  }

  static async createRecord(data) {
    const { studentId, disease, note } = data;
    await StudentsWithChronicDiseases.create({ studentId, disease, note });
  }

  static async updateRecord(id, data) {
    const { disease, note } = data;
    await StudentsWithChronicDiseases.update(
      { disease, note },
      { where: { id } }
    );
  }

  static async deleteRecord(id) {
    await StudentsWithChronicDiseases.destroy({ where: { id } });
  }
}
