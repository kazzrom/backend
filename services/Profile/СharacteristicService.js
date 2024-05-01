import CharacteristicRepository from "../../repositories/Profile/СharacteristicRepository.js";

export default class CharacteristicService {
  static async getStudentCharacteristicByStudentId(studentId) {
    const response =
      await CharacteristicRepository.getStudentCharacteristicByStudentId(
        studentId
      );

    return response;
  }

  static async updateStudentAttitudesByStudentId({ studentId, data }) {
    await CharacteristicRepository.updateStudentAttitudesByStudentId(
      studentId,
      data
    );
  }

  static async updateStudentPersonalityByStudentId({ studentId, data }) {
    const { positiveSides, negativeSides, presenceOffenses } = data;
    await CharacteristicRepository.updateStudentPersonalityByStudentId({
      studentId,
      studentPersonality: {
        positiveSides,
        negativeSides,
        presenceOffenses,
      },
      hobbies: data.Hobbies,
      inclinations: data.Inclinations,
    });
  }
}
