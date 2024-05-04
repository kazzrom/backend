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
    const individualWork = await IndividualWork.create(data);
    const newIndividualWork = await IndividualWork.findByPk(individualWork.id);

    return newIndividualWork;
  }

  static async updateIndividualWork({ id, data }) {
    await IndividualWork.update(data, { where: { id } });
  }

  static async deleteIndividualWork(id) {
    await IndividualWork.destroy({ where: { id } });
  }
}
