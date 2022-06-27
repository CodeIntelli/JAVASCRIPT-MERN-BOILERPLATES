const ObjectId = require("mongoose").Types.ObjectId;


const CheckMongoId = (id) => {
     if (ObjectId.isValid(id)) {
    if (String(new ObjectId(id)) === id) {
      return true;
    }
    return false;
  }
  return false;
};

export default CheckMongoId;
