import React from 'react';
import {connect} from 'react-redux';
import Category from './category';

const mapStateToProps = (state) => {
  return({
    loading: state.loading,
    projects: state.category
  });
};


const mapDispatchToProps = function(dispatch, ownProps) {
  return ({
    id: ownProps.params.id,
    getCategory: (id) => {
      dispatch({
        type: "GET_CATEGORY",
        category: id
      })
    },
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
