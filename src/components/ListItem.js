import React from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';


class ListItem extends React.Component {


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
export default connect(null, actions)(ListItem);
