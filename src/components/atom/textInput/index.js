import React from 'react';
import PropTypes from 'prop-types';
import ReactNative, { View } from 'react-native';

const TextInput = ({ placeholder, onChange, value }) => {
  return (
    <View>
      <ReactNative.TextInput
        style={{height: 40, borderColor: 'white', borderWidth: 1, backgroundColor: 'white'}}
        onChangeText={onChange}
        value={value}
        placeholder={placeholder}
      />
    </View>
  );
};

TextInput.defaultProps = {
  placeholder: 'Add',
  value: '',
  onChange: () => {},
};

TextInput.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}



export default TextInput;