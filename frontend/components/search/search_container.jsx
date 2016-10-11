import {getSearch} from "../../actions/search_actions";
import Search from './search';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  search: state.search
});

const mapDispatchToProps = dispatch => ({
  getSearch: (data) => dispatch(getSearch(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
