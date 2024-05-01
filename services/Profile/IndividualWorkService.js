import IndividualWorkRepository from "../../repositories/Profile/IndividualWorkRepository.js";

export default class IndividualWorkService {
  static async getAllIndividualWorkByStudentId(studentId) {
    const response =
      await IndividualWorkRepository.getAllIndividualWorkByStudentId(studentId);

    return response;
  }

  static async createIndividualWork(data) {
    await IndividualWorkRepository.createIndividualWork(data);
  }

  static async updateIndividualWork({ id, data }) {
    await IndividualWorkRepository.updateIndividualWork({
      id,
      data,
    });
  }

  static async deleteIndividualWork(id) {
    await IndividualWorkRepository.deleteIndividualWork(id);
  }
}
