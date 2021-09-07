const objectId = (value, helpers) => {
  const regexp = /^[0-9a-zA-Z]{24}$/;
  if (!regexp.test(value)) {
    return helpers.message('Invalid Id');
  }
  return value;
};

const password = (value, helpers) => {
  const regexp = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

  if (value.length < 8) {
    return helpers.message('Password must be atleast 8 characters long');
  }
  if (!regexp.test(value)) {
    return helpers.message(
      'Password must contain at least one letter, one number and one special character.',
    );
  }
  return value;
};

module.exports = {
  objectId,
  password,
};
