// @flow
import { connect } from 'react-redux';

import Home from '../../components/Home';
import mapStateToProps from './mapStateToProps';

export default connect(mapStateToProps)(Home);
