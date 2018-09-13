import Ajv from 'ajv'

const ajv = new Ajv({allErrors: true, removeAdditional:'all'})

class Sanitizer {

  constructor(data, schema, schemaName) {
    this.data = data;
    this.schema = schema;
    this.schemaName = schemaName;
  }

  validateSchema() {
    return (req, res, next) => {
      let valid = ajv.validate(this.schemaName, req.body)
      if (!valid) {
        return res.send(this.errorResponse(ajv.errors))
      }
      next()
    }
  }

  errorResponse (schemaErrors) {
    let errors = schemaErrors.map((error) => {
      return {
        path: error.dataPath,
        message: error.message
      }
    })
    return {
      status: 'failed',
      errors: errors
    }
  }

}

export default Sanitizer;
