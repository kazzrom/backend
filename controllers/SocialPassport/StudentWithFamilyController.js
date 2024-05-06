import getStudentWithFamilyByGroupId from "../../repositories/SocialPassport/StudentWithFamilyRepository.js";

export default async function StudentsWithFamilyController(req, res) {
  try {
    const { groupId } = req.params;
    const response = await getStudentWithFamilyByGroupId(groupId);
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}
