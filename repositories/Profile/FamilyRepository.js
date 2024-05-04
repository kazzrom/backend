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

  static async getFamilyMemberById(id) {
    const familyMember = await FamilyMember.findByPk(id, {
      include: [MemberPersonalData],
    });

    if (!familyMember) {
      return null;
    }

    return familyMember;
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

    const newFamilyMember = await FamilyMember.findByPk(
      createdFamilyMember.id,
      {
        include: [MemberPersonalData],
      }
    );

    return newFamilyMember;
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
