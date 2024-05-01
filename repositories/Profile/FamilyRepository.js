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

  static async createFamilyMember(data) {
    const { studentId } = data;
    const currentStudent = await Student.findByPk(studentId, {
      include: {
        model: FamilyMember,
        include: [MemberPersonalData],
      },
    });

    const { surname, name, patronymic, relation } = data;
    const familyMember = await FamilyMember.create({
      surname,
      name,
      patronymic,
      relation,
    });

    const { MemberPersonalDatum } = data;
    const personalData = await MemberPersonalData.create(MemberPersonalDatum);

    await familyMember.setMemberPersonalDatum(personalData);

    await currentStudent.addFamilyMember(familyMember);
  }

  static async updateFamilyMember(id, data) {
    const familyMember = await FamilyMember.findByPk(id, {
      include: [MemberPersonalData],
    });

    const { surname, name, patronymic, relation } = data;
    await familyMember.update({ surname, name, patronymic, relation });

    const { MemberPersonalDatum } = data;
    await familyMember.MemberPersonalDatum.update(MemberPersonalDatum);
  }

  static async deleteFamilyMember(id) {
    await FamilyMember.destroy({ where: { id } });
  }
}
