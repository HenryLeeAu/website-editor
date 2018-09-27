const targetSites = json => {
  let publish_to = {
    arn_au: false,
    cio_au: false,
    cio_nz: false,
    cmo_au: false,
    cw_au: false,
    cw_nz: false,
    cso_au: false,
    reseller_nz: false,
    tw: false,
    ggg: false,
  };
  for (let value of json.sites) {
    value = parseInt(value);
    value === 11 ? (publish_to.arn_au = true) : null;
    value === 7 ? (publish_to.cio_au = true) : null;
    value === 27 ? (publish_to.cio_nz = true) : null;
    value === 23 ? (publish_to.cmo_au = true) : null;
    value === 5 ? (publish_to.cw_au = true) : null;
    value === 26 ? (publish_to.cw_nz = true) : null;
    value === 10 ? (publish_to.cso_au = true) : null;
    value === 28 ? (publish_to.reseller_nz = true) : null;
    value === 6 ? (publish_to.tw = true) : null;
    value === 3 ? (publish_to.ggg = true) : null;
  }
  json['publish_to'] = publish_to;

  return json;
};
export default targetSites;
