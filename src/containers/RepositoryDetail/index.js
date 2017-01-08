// @flow
import { connect } from 'react-redux';

import RepositoryDetail from '../../components/RepositoryDetail';
import mapStateToProps from './mapStateToProps';

export default connect(mapStateToProps)(RepositoryDetail);
