const { Router } = require("express");
const properties = require("../data.json");

async function read(req, res) {
  const { id } = req.params;

  const property = properties.find(property => property.id === id);

  if (!property) return res.status(404).json({ error: `Property with id ${id} not found` });

  res.json({ property });
}

function filterProperties(filters) {
  const filterKeys = Object.keys(filters);

  const filteredProperties = allProperties.filter(item => filterKeys.every(key => {
    const filterValue = filters[key];

    if (key === "type") return item["type"] === filterValue;
    if (key === "mode") return item["mode"] === filterValue;
    if (key === "bathrooms") return item["bathrooms"] === Number(filterValue);
    if (key === "bedrooms") return item["bedrooms"] === Number(filterValue);
    if (key === "location") return item["location"][1] === filterValue;
    if (key === "minArea") return item["area"] >= Number(filterValue);
    if (key === "maxArea") return item["area"] <= Number(filterValue);
    if (key === "minPrice") return item["price"] >= Number(filterValue);
    if (key === "maxPrice") return item["price"] <= Number(filterValue);
    if (key === "minYearBuilt") return item["year"] >= Number(filterValue);

    return true;
  }));

  return filteredProperties;
}

function optionsObject() {
  const extract = (key) => [
    ...new Set(allProperties.map((property => property[key])))
  ];

  const options = {
    type: extract("type").sort() || [],
    mode: extract("mode").sort() || [],
    bedrooms: extract("bedrooms").sort((a, b) => { return a - b }) || [],
    bathrooms: extract("bathrooms").sort((a, b) => { return a - b }) || [],
    location: [...new Set(allProperties.map((property => property["location"][1])))].sort() || []
  };

  return options;
}

async function index(req, res) {
  const options = optionsObject();
  const { page, ...filters } = req.query;
  const filteredProperties = filterProperties(filters).map(property => {
    return {
      id: property.id,
      title: property.title,
      location: property.location,
      image: property.images[0],
      description: property.description,
      type: property.type,
      mode: property.mode,
      price: property.price,
      area: property.area,
      bedrooms: property.bedrooms,
      bathrooms: property.bathrooms
    }
  });

  let propertiesPages = [];
  const pageSize = 8;

  for (let i = 0; i < filteredProperties.length; i += pageSize) {
    propertiesPages.push(filteredProperties.slice(i, i + pageSize));
  }

  let pageNum = page || 1;

  res.json({
    properties: propertiesPages[pageNum-1],
    options: options,
    pagination: {
      page: pageNum,
      pages: propertiesPages.length
    }
  });
}

module.exports = Router()
  .get('/', index)
  .get("/:id", read)
