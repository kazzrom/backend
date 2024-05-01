import initModels from "../../models/initModels.js";

const { IndividualWork } = initModels();

export default class IndividualWorkRepository {
  static async getAllIndividualWorkByStudentId(studentId) {
    const individualWorks = await IndividualWork.findAll({
      where: { studentId },
    });

    if (!individualWorks) {
      return null;
    }

    return individualWorks;
  }

  static async createIndividualWork(data) {
    await IndividualWork.create(data);
  }

  static async updateIndividualWork({ id, individualWork }) {
    await IndividualWork.update(individualWork, { where: { id } });
  }

  static async deleteIndividualWork(id) {
    await IndividualWork.destroy({ where: { id } });
  }
}
