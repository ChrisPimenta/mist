import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import Main from './Main';

//These functions are needed to hook up state and dispatch from the store to props that can be passed down to components.
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

const App = connect(mapStateToProps,
  mapDispatchToProps)(Main);

export default App;  