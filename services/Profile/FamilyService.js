import FamilyRepository from "../../repositories/Profile/FamilyRepository.js";

export default class FamilyService {
  static async getAllFamilyMembersByStudentId(studentId) {
    const response = await FamilyRepository.getAllFamilyMembersByStudentId(
      studentId
    );

    return response;
  }

  static async getFamilyMemberById(id) {
    const familyMember = await FamilyRepository.getFamilyMemberById(id);

    return familyMember;
  }

  static async createFamilyMember(data) {
    const { surname, name, patronymic, relation } = data;

    const newFamilyMember = await FamilyRepository.createFamilyMember({
      studentId: data.studentId,
      familyMember: {
        surname,
        name,
        patronymic,
        relation,
      },
      memberPersonalData: data.MemberPersonalDatum,
    });

    return newFamilyMember;
  }

  static async updateFamilyMember({ id, data }) {
    const { surname, name, patronymic, relation } = data;

    await FamilyRepository.updateFamilyMember({
      id,
      familyMember: {
        surname,
        name,
        patronymic,
        relation,
      },
      memberPersonalData: data.MemberPersonalDatum,
    });
  }

  static async deleteFamilyMember(id) {
    await FamilyRepository.deleteFamilyMember(id);
  }
}
