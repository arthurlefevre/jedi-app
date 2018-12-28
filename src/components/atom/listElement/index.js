import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text } from 'react-native';

const ListElement = ({ onPress, text }) => {
  return (
    <TouchableOpacity 
      onPress={onPress} 
      style={{
        padding: 20
      }}
    >
      <Text style={{color: 'white', fontSize: 17}}>{text}</Text>
    </TouchableOpacity>
  );
};

ListElement.defaultProps = {
  onPress: () => {},
  text: 'Lorem ipsum',
};

ListElement.propTypes = {
  onPress: PropTypes.func,
  text: PropTypes.string,
};

export default ListElement;