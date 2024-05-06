import initModels from "../../models/initModels.js";

const { Student, StudentsWithChronicDiseases } = initModels();

export default class ChronicDiseasesRepository {
  static async getRecordsByGroupId(groupId) {
    const chronicDiseases = await StudentsWithChronicDiseases.findAll({
      where: { "$Student.groupId$": groupId },
      include: [Student],
    });

    if (!chronicDiseases) {
      return null;
    }

    return chronicDiseases;
  }

  static async createRecord(data) {
    const { Student: student, disease, note } = data;
    const createdRecord = await StudentsWithChronicDiseases.create({
      studentId: student.id,
      disease,
      note,
    });

    const newRecord = await StudentsWithChronicDiseases.findByPk(
      createdRecord.id,
      {
        include: [Student]
      }
    );

    return newRecord;
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
