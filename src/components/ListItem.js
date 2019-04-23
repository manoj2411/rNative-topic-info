import React from 'react';
import { Text } from 'react-native';
import { CardSection } from './common';

const ListItem = ({ library }) => (
  <CardSection>
    <Text style={styles.title}>
      {library.title}
    </Text>
  </CardSection>
);

const styles = {
  title: {
    fontSize: 18,
    paddingLeft: 15
  }
};
export default ListItem;
