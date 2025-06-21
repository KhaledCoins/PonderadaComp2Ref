const validate = (schema) => {
  return (req, res, next) => {
    // Convert empty strings to null
    const processedBody = {};
    for (const [key, value] of Object.entries(req.body)) {
      processedBody[key] = value === '' ? null : value;
    }

    const { error, value } = schema.validate(processedBody, { abortEarly: false });
    if (error) {
      return res.status(400).json({ errors: error.details.map((d) => d.message) });
    }

    // Update req.body with processed values
    req.body = value;
    next();
  };
};

module.exports = validate; 