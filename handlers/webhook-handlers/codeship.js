const getBuildStatusFromCodeship = (payload) => {
  return payload.build.status;
};

module.exports = {
  getBuildStatusFromCodeship
}
