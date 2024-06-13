const express = require('express');

const multer = require('multer');

const router = express.Router();

const path = require('path');

const affiliateOffers = require('../models/affiliate-offers');

const affiliateNetwork = require('../models/advertising-network');

const newBlogs = require('../models/blog');

const fs = require('fs');

router.get('/', async (req, res) => {
    return res.send("Welcome")
});

router.post('/affiliate', async (req, res) => {
    try {
        const affiliate = new affiliateOffers({
            offerImage: req.body.offerImage,
            offerName: req.body.offerName,
            landingPage: req.body.landingPage,
            country: req.body.country,
            payouts: req.body.payouts,
            tags: req.body.tags,
            tagslink: req.body.tagslink

        });
        const dataSave = await affiliate.save();
        res.status(200).json(dataSave);
        console.log(affiliate);
    } catch (error) {
        res.status(400).json(error);
    }
});


/* =========== Get All Affiliate Offers =========== */

router.get('/affiliate-all', async (req, res) => {
    const pages = parseInt(req.query.page) || 0;
    const affiliatePageLimit = 5;
    const skip = (pages -1) * affiliatePageLimit;

    try {
        const data = await affiliateOffers.find().skip(skip)
            .limit(affiliatePageLimit);
        const total = await affiliateOffers.countDocuments();    
        res.json({
            data,
            totalPages: Math.ceil(total / affiliatePageLimit),
            currentPage: pages,
        });
    } catch (error) {
        res.status(400).json(error);
    }
});

/* =========== Get Affiliate Offers By ID =========== */

router.get('/affiliate/:id', async (req, res) => {
    try {
        const data = await affiliateOffers.findById(req.params.id);
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json(error);
    }
});

/* =========== Update Affiliate Offers =========== */

router.put('/affiliate/:id', async (req, res) => {
    try {
        const data = await affiliateOffers.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json(error);
    }
});

/* =========== Delete Affiliate Offers =========== */

router.delete('/affiliate/:id', async (req, res) => {
    try {
        const deletedData = await affiliateOffers.findByIdAndDelete(req.params.id);
        if (!deletedData) {
            return res.status(404).json({
                message: "No Data Found"
            })
        }
        res.status(200).json({ message: "Affiliate Offers deleted successfully!" });
    } catch (error) {
        res.status(400).json(error);
    }
});

/* =========== Delete All Affiliate Offers =========== */

router.delete('/affiliate-all', async (req, res) => {
    try {
        const data = await affiliateOffers.deleteMany();
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json(error);
    }
});

/* =========== upload Image File api End Point  =================== */

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads', express.static(path.join(__dirname, 'uploads'))); // Specify upload directory
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));// Generate unique filenames
    }
});

const upload = multer({ storage: storage, limits: { fileSize: 5 * 1024 * 1024 } }); // Limit file size to 5MB (adjust as needed)

router.get('/images', async (req, res) => {
    try {
        const images = await Image.find();
        res.json(images);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

router.get('/images/:id', async (req, res) => {
    try {
        const image = await Image.findById(req.params.id);
        res.json(image);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

/* =========== Advertising Network Api Ends Points ==== */

router.post('/advertising-network', async (req, res) => {
    try {
        const advertisingNetworkRequest = new affiliateNetwork({
            affiliateImage: req.file.path,
            advertisingDescription: req.body.advertisingDescription,
            advertisingSubDescription: req.body.advertisingSubDescription,
            advertisingOtherDescription: req.body.advertisingOtherDescription,
            advertisingsearchByMinDeposit: req.body.advertisingsearchByMinDeposit,
            advertisingtagsLink: req.body.advertisingtagsLink,
            advertisingsearchByRating: req.body.advertisingsearchByRating,
            advertisingjoinNowLink: req.body.advertisingjoinNowLink
        });
        const dataSave = await advertisingNetworkRequest.save();
        res.status(200).json(dataSave);
    } catch (error) {
        res.status(400).json(error);
    }
});

/* =========== Get All Affiliate Network =========== */

router.get('/advertising-network-all', async (req, res) => {
    try {
        const data = await affiliateNetwork.find();
        res.status(200).json(data);
        // res.json(affiliateNetworkOffer);
    } catch (error) {
        res.status(400).json(error);
    }
});

/* =========== Get Affiliate Network By ID =========== */

router.get('/advertising-network/:id', async (req, res) => {
    try {
        const data = await affiliateNetwork.findById(req.params.id);
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json(error);
    }
});

/* =========== Update Affiliate Network =========== */

router.put('/advertising-network/:id', async (req, res) => {
    try {
        const data = await affiliateNetwork.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json(error);
    }
});

/* =========== Delete Affiliate Network =========== */

router.delete('/advertising-network/:id', async (req, res) => {
    try {
        const deletedData = await affiliateNetwork.findByIdAndDelete(req.params.id);
        if (!deletedData) {
            return res.status(404).json({
                message: "No Data Found"
            })
        }
        res.status(200).json({ message: "Affiliate Network deleted successfully!" });
    } catch (error) {
        res.status(400).json(error);
    }
});

/* =========== Delete All Affiliate Network =========== */

router.delete('/advertising-network-all', async (req, res) => {
    try {
        const data = await affiliateNetwork.deleteMany();
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json(error);
    }
});


/* ============ New Blog API Routes =========== */

router.post('/new-blog', upload.single('image'), async (req, res) => {
    try {
        const alreadyExitsImage = await newBlogs.findOne({ filename: req.file.filename });

        if (alreadyExitsImage) {
            return res.status(400).json({ message: 'Image already exists' });
        }
        const { blogTitle, blogDescription } = req.body;
        const blogImage = req.file.path; 
        const blog = new newBlogs({ blogTitle, blogDescription, blogImage });
        const saveBlog = await blog.save();
        console.log(saveBlog);
        res.status(200).json({ message: 'New Blog Added successfully!'});
    } catch (error) {
        res.status(500).json({ error: 'Error saving blog post' });
    }

});

/* =========== Get All New Blogs =========== */

router.get('/blog-all', async (req, res) => {
    try {
        const data = await newBlogs.find();
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json(error);
    }
});

/* =========== Get New Blogs By ID =========== */

router.get('/blog/:id', async (req, res) => {
    try {
        const postId = req.params.id;
        const data = await newBlogs.findById(postId);
        if (!data) {
            return res.status(404).json({
                message: "No Blog Data Found"
            });
        }
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json(error);
    }
});

/* =========== Update New Blogs =========== */

router.put('/blog/:id', async (req, res) => {
    try {
        const data = await newBlogs.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json(error);
    }
});

/* =========== Delete New Blogs =========== */

router.delete('/blog/:id', async (req, res) => {
    try {
        const deletedData = await newBlogs.findByIdAndDelete(req.params.id);
        if (!deletedData) {
            return res.status(404).json({
                message: "No Data Found"
            })
        }
        res.status(200).json({ message: "New Blogs deleted successfully!" });
    } catch (error) {
        res.status(400).json(error);
    }
});

/* =========== Delete All New Blogs =========== */

router.delete('/blog-all', async (req, res) => {
    try {
        const data = await newBlogs.deleteMany();
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json(error);
    }
});


module.exports = router;