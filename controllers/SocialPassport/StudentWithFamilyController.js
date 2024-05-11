import getStudentWithFamilyByGroupId from "../../repositories/SocialPassport/StudentWithFamilyRepository.js";

export default async function StudentsWithFamilyController(req, res) {
  try {
    const response = await getStudentWithFamilyByGroupId(req.groupId);
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}
