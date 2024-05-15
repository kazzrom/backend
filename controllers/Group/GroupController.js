import GroupRepository from "../../repositories/Group/GroupRepository.js";

export default class GroupController {
  static async getGroupNames(req, res) {
    try {
      const response = await GroupRepository.getGroupNames();
      res.status(200).json(response);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  }
}
