import React from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native';

class LibraryList extends React.Component {
  render() {
    return <Text>{this.props.libraries.map(o => o.id)}</Text>;
  }
}

const mapStateToProps = state => (
  { libraries: state.libraries }
);

export default connect(mapStateToProps)(LibraryList);
