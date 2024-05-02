export default class DefaultController {
  constructor(repository) {
    this.repository = repository;
  }
  async getRecords(req, res) {
    try {
      const { groupId } = req.params;
      const response = await this.repository.getRecords(groupId);
      res.status(200).json(response);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  }
}
