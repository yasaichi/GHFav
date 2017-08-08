// @flow
import { connect } from 'react-redux';

import Welcome from '../../components/Welcome';
import mapDispatchToProps from './mapDispatchToProps';

export default connect(null, mapDispatchToProps)(Welcome);
