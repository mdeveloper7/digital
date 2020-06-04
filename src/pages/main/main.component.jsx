import React from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar'
import DigitalCard from '/components/digital-card/digital-card.component';
import MovieDialog from '/components/movie-dialog/movie-dialog.component';
import { selectIsFetching, selectMoviesList } from '/redux/movies/movies.selectors';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

const Main = ({ isFetching, movies }) => {
    const [open, setOpen] = React.useState(false);
    const [selectedMovie, setSelectedMovie] = React.useState({});


    const selectMovie = movie => {
        setSelectedMovie(movie);
        setOpen(true);
    }

    return (
        <>
            <MovieDialog open={open} show={setOpen} movie={selectedMovie}/>
            <PerfectScrollbar>
                <div>{isFetching && 'Loading...'}</div>
                {
                    movies &&
                    movies.map((movie, idx) => {
                        return <DigitalCard key={idx} movie={movie} selectMovie={selectMovie} />
                    })
                }
            </PerfectScrollbar>
        </>
    )
}

const mapStateToProps = createStructuredSelector({
    isFetching: selectIsFetching,
    movies: selectMoviesList
});

export default connect(mapStateToProps)(Main);