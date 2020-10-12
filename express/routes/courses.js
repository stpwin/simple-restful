const { models } = require("../../sequelize");
const { Op } = require("sequelize");
const { getIdParam, getTextParam } = require("../helpers");

async function getAll(req, res) {
  const courses = await models.course.findAll();
  res.json(courses);
}

async function getById(req, res) {
  const id = getIdParam(req);
  const course = await models.course.findByPk(id);
  if (course) {
    res.status(200).json(course);
  } else {
    res.status(404).json({ error: { message: "not found" } });
  }
}

async function search(req, res) {
  const search_text = getTextParam(req);
  const courses = await models.course.findAll({
    where: {
      [Op.or]: [
        {
          course_name: {
            [Op.iLike]: `%${search_text}%`
          }
        },
        {
          course_description: {
            [Op.iLike]: `%${search_text}%`
          }
        }
      ]
    }
  });
  if (courses) {
    res.status(200).json(courses);
  } else {
    res.status(404).json({ error: { message: "not found" } });
  }
}

async function create(req, res) {
  await models.course.create(req.body);
  res.status(201).json({ message: "created" });
}

async function update(req, res) {
  const id = getIdParam(req);
  await models.course.update(req.body, {
    where: {
      id: id
    }
  });
  res.status(200).json({ message: "updated" });
}

async function remove(req, res) {
  const id = getIdParam(req);
  await models.course.destroy({
    where: {
      id: id
    }
  });
  res.status(200).json({ message: "deleted" });
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
  search
};
