const mongoose = require("mongoose");

const AffiliateOffers = new mongoose.Schema({
    offerImage: { type: String },
    offerName: { type: String },
    landingPage: { type: String },
    country: { type: String },
    payouts: { type: String },
    tags: { type: Array },
    tagslink: { type: String },
    tagsLinkUrl: { type: String },
});

module.exports = mongoose.model("AffiliateOffers", AffiliateOffers);