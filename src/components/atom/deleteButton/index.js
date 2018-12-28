import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text } from 'react-native';

const DeleteButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={{
        borderWidth:1,
        borderColor:'rgba(0,0,0,0.2)',
        alignItems:'center',
        justifyContent:'center',
        width:30,
        height:30,
        backgroundColor:'red',
        borderRadius:100,
      }}>
      <Text style={{color: 'white', fontSize: 17}}>X</Text>
    </TouchableOpacity>
  );
};

DeleteButton.defaultProps = {
  onPress: () => {},
};

DeleteButton.propTypes = {
  onPress: PropTypes.func.isRequired,
};

export default DeleteButton;