const mongoose = require("mongoose");

const AdvertisingNetwork = new mongoose.Schema({
    affiliateImage: { type: String },
    advertisingDescription: { type: String },
    advertisingSubDescription: { type: String },
    advertisingOtherDescription: { type: String },
    advertisingsearchByMinDeposit: { type: String },
    advertisingtagsLink: { type: String },
    advertisingsearchByRating: { type: String },
    advertisingjoinNowLink: { type: String },
});

module.exports = mongoose.model("AdvertisingNetwork", AdvertisingNetwork);