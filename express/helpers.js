function getIdParam(req) {
  const id = req.params.id;
  if (/^\d+$/.test(id)) {
    return Number.parseInt(id, 10);
  }
  throw new TypeError(`Invalid ':id' param: "${id}"`);
}

function getTextParam(req) {
  const search_text = req.params.search;
  if (/^[a-zA-Z\s\u0E00-\u0E7F]*$/.test(search_text)) {
    return search_text;
  }
  throw new TypeError(`Invalid ':search' param: "${search_text}"`);
}

module.exports = { getIdParam, getTextParam };
