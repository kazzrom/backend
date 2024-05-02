export default class DefaultController {
  constructor(repository) {
    this.repository = repository;
  }
  async getRecords(req, res) {
    try {
      const { groupId } = req.params;
      const response = await this.repository.getRecordsByGroupId(groupId);
      res.status(200).json(response);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  }

  async createRecord(req, res) {
    try {
      await this.repository.createRecord(req.body);
      res.sendStatus(201);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  }

  async updateRecord(req, res) {
    try {
      const { id } = req.params;
      await this.repository.updateRecord(id, req.body);
      res.sendStatus(204);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  }

  async deleteRecord(req, res) {
    try {
      const { id } = req.params;
      await this.repository.deleteRecord(id);
      res.sendStatus(204);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  }
}
