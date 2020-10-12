const { models } = require("../../sequelize");
const { Op } = require("sequelize");
const { getIdParam, getTextParam } = require("../helpers");

// models.teacher.sync({ force: true });

async function getAll(req, res) {
  const teachers = await models.teacher.findAll();
  res.json(teachers);
}

async function getById(req, res) {
  const id = getIdParam(req);
  const teacher = await models.teacher.findByPk(id);
  if (teacher) {
    res.status(200).json(teacher);
  } else {
    res.status(404).json({ error: { message: "not found" } });
  }
}

async function search(req, res) {
  const teacher_name = getTextParam(req);
  const teachers = await models.teacher.findAll({
    where: {
      [Op.or]: [
        {
          first_name: {
            [Op.iLike]: `%${teacher_name}%`
          }
        },
        {
          last_name: {
            [Op.iLike]: `%${teacher_name}%`
          }
        }
      ]
    }
  });
  if (teachers) {
    res.status(200).json(teachers);
  } else {
    res.status(404).json({ error: { message: "not found" } });
  }
}

async function create(req, res) {
  await models.teacher.create(req.body);
  res.status(201).json({ message: "created" });
}

async function update(req, res) {
  const id = getIdParam(req);
  await models.teacher.update(req.body, {
    where: {
      id: id
    }
  });
  res.status(200).json({ message: "updated" });
}

async function remove(req, res) {
  const id = getIdParam(req);
  await models.teacher.destroy({
    where: {
      id: id
    }
  });
  res.status(200).json({ message: "deleted" });
}

module.exports = {
  getAll,
  getById,
  search,
  create,
  update,
  remove
};
