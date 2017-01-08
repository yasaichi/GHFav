// @flow
import { connect } from 'react-redux';

import Home from '../../components/Home';
import mapDispatchToProps from './mapDispatchToProps';
import mapStateToProps from './mapStateToProps';

export default connect(mapStateToProps, mapDispatchToProps)(Home);
