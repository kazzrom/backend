import ParentMeetingService from "../../services/Protocols/ParentMeetingService.js";

export default class ParentMeetingController {
  static async getProtocolsByGroupId(req, res) {
    try {
      const response = await ParentMeetingService.getProtocolsByGroupId(
        req.groupId
      );
      res.status(200).json(response);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  }

  static async getParentsByGroupId(req, res) {
    try {
      const response = await ParentMeetingService.getParentsByGroupId(
        req.groupId
      );
      res.status(200).json(response);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  }

  static async createProtocol(req, res) {
    try {
      const response = await ParentMeetingService.createProtocol({
        data: req.body,
        groupId: req.groupId,
      });
      res.status(201).json(response);
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
