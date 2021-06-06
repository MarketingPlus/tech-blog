const router = require('express').Router();
const { Blog, Comment, User } = require('../models');
const withAuth = require('../utils/auth'); 

// render homepage with blog posts 
router.get('/', async (req, res) => {
    try {
        const blogData = await Blog.findAll({
            include: [
                {
                    model: User, 
                },
            ], 
        }); 
        const blogs = blogData.map((blog) => blog.get({ plain: true })); 

        res.render('homepage', {
            layout: 'main',
            logged_in: req.session.logged_in, 
            blogs, 
        });
    } catch (err) {
        res.status(500).json(err);
    }
}); 