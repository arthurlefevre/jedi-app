import React from 'react';
import PropTypes from 'prop-types';
import { Button, View } from 'react-native';

const ValidationButton = ({ text, onPress }) => {
  return (
    <View>
      <Button color="white" title={text} onPress={onPress} />
    </View>
  );
}

ValidationButton.defaultProps = {
  text: 'Validate',
  onPress: () => {},
};

ValidationButton.propTypes = {
  text: PropTypes.string,
  onPress: PropTypes.func.isRequired,
}

export default ValidationButton;