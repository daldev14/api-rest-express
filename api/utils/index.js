function filterData({ data, limit, offset }) {
  limit = Number(limit);
  offset = Number(offset);

  if (offset) data = data.slice(offset, data.length);
  if (limit) data = data.slice(0, limit);
  return data;
}

module.exports = { filterData };
