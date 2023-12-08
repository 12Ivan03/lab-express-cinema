const router = require('express').Router();

const Movies = require('../models/Movie.model')

router.get('/movies', (req, res) => {
    Movies.find()
        .then(allMovies => {
            console.log('show all movies:', allMovies);
            res.render('movies.hbs', {renderMovies: allMovies, title: 'allMovies', bgPage: 'allMoviesPage'});
        })
        .catch(err=>console.log(err));
})

router.get('/movies/:movieId', (req, res) => {
    const MovieDetailsId = req.params.movieId
    Movies.findById(MovieDetailsId)
        .then(foundMovie => {
            console.log('Found Movie',foundMovie)
            res.render('movie-details.hbs', {movie: foundMovie, title: 'movieDetails', bgPage: 'moviesDetail'})
        })
        .catch(err => console.log(err))
})

module.exports = router;