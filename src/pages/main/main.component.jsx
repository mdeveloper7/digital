import React from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar'
import DigitalCard from '/components/digital-card/digital-card.component';

import { selectIsFetching, selectMoviesList } from '/redux/movies/movies.selectors';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

const Main = ({ isFetching, movies }) => {
    return (
        <PerfectScrollbar>
            <div>{isFetching && 'Loading...'}</div>
            {
                movies &&
                movies.map((movie, idx) => {
                    return <DigitalCard key={idx} movie={movie}/>
                })
            }
        </PerfectScrollbar>
    )
}

const mapStateToProps = createStructuredSelector({
    isFetching: selectIsFetching,
    movies: selectMoviesList
});

export default connect(mapStateToProps)(Main);