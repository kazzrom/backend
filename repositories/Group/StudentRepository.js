import initModels from "../../models/initModels.js";

const {
  Student,
  PersonalData,
  FamilyMember,
  StudentAttitudes,
  StudentPersonality,
} = initModels();

export default class StudentRepository {
  static async getAllStudentByGroupId(groupId) {
    let students = await Student.findAll({
      where: {
        groupId,
      },
      include: [PersonalData],
    });

    if (!students) {
      return null;
    }

    const expelledStudents = students.filter((student) => {
      if (student.note) {
        return student.note.toLowerCase().includes("отчислен");
      }

      return false;
    });

    if (expelledStudents.length > 0) {
      students = students.filter(
        (student) => !expelledStudents.includes(student)
      );
      students = students.concat(expelledStudents);
    }

    return students;
  }

  static async getStudentById(id) {
    const student = await Student.findByPk(id, {
      include: [PersonalData],
    });

    if (!student) {
      return null;
    }

    return student;
  }

  static async getStudentsByPhoneNumber(phoneNumber) {
    const student = await Student.findOne({
      include: {
        model: PersonalData,
        where: {
          phoneNumber,
        },
      },
    });

    if (!student) {
      return null;
    }

    return student;
  }

  static async getStudentBySNILS(SNILS) {
    const student = await Student.findOne({
      include: {
        model: PersonalData,
        where: {
          SNILS,
        },
      },
    });

    if (!student) {
      return null;
    }

    return student;
  }

  static async getStudentByMedicalPolicy(medicalPolicy) {
    const student = await Student.findOne({
      include: {
        model: PersonalData,
        where: {
          medicalPolicy,
        },
      },
    });

    if (!student) {
      return null;
    }

    return student;
  }

  static async getStudentByReportCardNumber(reportCardNumber) {
    const student = await Student.findOne({
      include: {
        model: PersonalData,
        where: {
          reportCardNumber,
        },
      },
    });

    if (!student) {
      return null;
    }

    return student;
  }

  static async getStudentByEmail(email) {
    const student = await Student.findOne({
      include: {
        model: PersonalData,
        where: {
          email,
        },
      },
    });

    if (!student) {
      return null;
    }

    return student;
  }

  static async createStudent({ student, personalData }) {
    const createdStudent = await Student.create(student);

    const createdPersonalData = await PersonalData.create(personalData);
    await createdStudent.setPersonalDatum(createdPersonalData);

    const studentAttitudes = await StudentAttitudes.create();
    const studentPersonality = await StudentPersonality.create();

    await createdStudent.setStudentAttitude(studentAttitudes);
    await createdStudent.setStudentPersonality(studentPersonality);

    const newStudent = await Student.findByPk(createdStudent.id, {
      include: [PersonalData],
    });

    return newStudent;
  }

  static async updateStudent({ id, student, personalData }) {
    await Student.update(student, { where: { id } });

    await PersonalData.update(personalData, {
      where: { studentId: id },
    });
  }

  static async deleteStudent(id) {
    const student = await Student.findByPk(id, { include: [FamilyMember] });
    student.FamilyMembers.forEach((familyMember) => {
      familyMember.destroy({
        force: true,
      });
    });
    student.destroy({ force: true });
  }

  static async updateImage({ id, image }) {
    await PersonalData.update({ image }, { where: { studentId: id } });
  }
}
