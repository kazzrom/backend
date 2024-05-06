import ParentMeetingService from "../../services/Protocols/ParentMeetingService.js";

export default class ParentMeetingController {
  static async getProtocolsByGroupId(req, res) {
    try {
      const { groupId } = req.params;
      const response = await ParentMeetingService.getProtocolsByGroupId(
        groupId
      );
      res.status(200).json(response);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  }

  static async getParentsByGroupId(req, res) {
    try {
      const { groupId } = req.params;
      const response = await ParentMeetingService.getParentsByGroupId(groupId);
      res.status(200).json(response);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  }

  static async createProtocol(req, res) {
    try {
      await ParentMeetingService.createProtocol(req.body);
      res.sendStatus(201);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  }

  static async updateProtocol(req, res) {
    try {
      const { id } = req.params;
      await ParentMeetingService.updateProtocol({ id, data: req.body });
      res.sendStatus(204);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  }

  static async deleteProtocol(req, res) {
    try {
      const { id } = req.params;
      await ParentMeetingService.deleteProtocol(id);
      res.sendStatus(204);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  }
}
