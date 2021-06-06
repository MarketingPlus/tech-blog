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

//render user's dashboard - contains the blog posts they've created with comments 
router.get('/dashboard', withAuth, async (req, res) => {
    try {
        const userData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ['password'] },
            include: [
                {
                    model: Blog,
                    include: [{
                        model: Comment,
                        include: {model: User, attributes: ['username']}

                    }]
                }, 
            ]
        });

        const user = userData.get({ plain: true }); 

        res.render('dashboard', {
            layout: 'main',
            user,
            logged_in: true
        });
    } catch (err) {
        res.status(500).json(err); 
    }
}); 