import React from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';


class ListItem extends React.Component {

  renderDescription() {
    const { library, expanded } = this.props;

    if (expanded) {
      return <Text> { library.description } </Text>;
    }
  }

  render() {
    const { library, selectLibrary } = this.props;

    return (
      <TouchableWithoutFeedback onPress={() => selectLibrary(library.id)}>
        <View>
          <CardSection>
            <Text style={styles.title}>
              {library.title}
            </Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  title: {
    fontSize: 18,
    paddingLeft: 15
  }
};

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.library.id;
  return { expanded };
};

export default connect(mapStateToProps, actions)(ListItem);
