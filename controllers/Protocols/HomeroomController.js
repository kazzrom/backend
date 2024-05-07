import HomeroomService from "../../services/Protocols/HomeroomService.js";

export default class HomeroomController {
  static async getProtocolsByGroupId(req, res) {
    try {
      const { groupId } = req.params;
      const protocols = await HomeroomService.getProtocolsByGroupId(groupId);
      res.status(200).send(protocols);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }

  static async createProtocol(req, res) {
    try {
      const response = await HomeroomService.createProtocol(req.body);
      res.status(201).json(response);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }

  static async updateProtocol(req, res) {
    try {
      const { id } = req.params;
      await HomeroomService.updateProtocol({ id, data: req.body });
      res.sendStatus(204);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }

  static async deleteProtocol(req, res) {
    try {
      const { id } = req.params;
      await HomeroomService.deleteProtocol(id);
      res.sendStatus(204);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }
}
