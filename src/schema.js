const mongoose = require('mongoose');
const { accessibleRecordsPlugin, accessibleFieldsPlugin } = require('@casl/mongoose');

const SiteSchema = new mongoose.Schema({
    siteName: String,
    orgName: String,
    is_active: Boolean,
  })

SiteSchema.plugin(accessibleRecordsPlugin);
SiteSchema.plugin(accessibleFieldsPlugin);

module.exports = mongoose.model('Site', SiteSchema);

