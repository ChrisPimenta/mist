import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import Main from './Main';

function mapStateToProps(state) {
  return {
    flavours: state.flavours,
    comments: state.comments
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators,
    dispatch)
}

//This binds the store state and dispatch to props in Main and renders Main
const App = connect(mapStateToProps,
  mapDispatchToProps)(Main);

export default App;  