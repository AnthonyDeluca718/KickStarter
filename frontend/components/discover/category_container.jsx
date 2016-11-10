import React from 'react';
import {connect} from 'react-redux';
import Category from './category';

const mapStateToProps = (state) => {
  return({
    loading: state.loading
  });
};


const mapDispatchToProps = function(dispatch, ownProps) {
  return ({
    id: ownProps.params.id,
    nowLoading: () => {
      dispatch({
        type: "NOW_LOADING"
      });
    },
    endLoading: () => {
      dispatch({
        type: "END_LOADING"
      });
    },
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Category);
