import initModels from "../../models/initModels.js";

const { Student, FamilyMember, MemberPersonalData } = initModels();

export default class FamilyRepository {
  static async getAllFamilyMembersByStudentId(studentId) {
    const currentStudent = await Student.findByPk(studentId, {
      include: {
        model: FamilyMember,
        include: [MemberPersonalData],
      },
    });

    if (!currentStudent) {
      return null;
    }

    return currentStudent.FamilyMembers;
  }

  static async createFamilyMember({
    studentId,
    familyMember,
    memberPersonalData,
  }) {
    const currentStudent = await Student.findByPk(studentId, {
      include: {
        model: FamilyMember,
        include: [MemberPersonalData],
      },
    });

    const createdFamilyMember = await FamilyMember.create(familyMember);

    const personalData = await MemberPersonalData.create(memberPersonalData);
    await createdFamilyMember.setMemberPersonalDatum(personalData);

    await currentStudent.addFamilyMember(createdFamilyMember);
  }

  static async updateFamilyMember({ id, familyMember, memberPersonalData }) {
    const updatedFamilyMember = await FamilyMember.findByPk(id, {
      include: [MemberPersonalData],
    });

    await updatedFamilyMember.update(familyMember);
    await updatedFamilyMember.MemberPersonalDatum.update(memberPersonalData);
  }

  static async deleteFamilyMember(id) {
    await FamilyMember.destroy({ where: { id } });
  }
}
