import React from 'react';
import {connect} from 'react-redux';
import Category from './category';

const mapStateToProps = () => {
  return({});
};


const mapDispatchToProps = function(dispatch, ownProps) {
  return ({
    id: ownProps.params.id
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Category);
