import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { addJedi, modifyJedi } from '../../reducer';
import TextInput from '../../components/atom/textInput';
import ValidationButton from '../../components/atom/validationButton';

class AddScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      id: null,
    }
  }

  componentDidMount() {
    const { navigation } = this.props;
    const data = navigation.getParam('data');
    if (data) {
      this.setState({
        id: data.id,
        name: data.name,
      });
    }
  }

  render() {
    const { navigation } = this.props;
    const { id, name } = this.state;
    return (
      <View style={{width: '100%', height:'100%', backgroundColor:'black', paddingTop: 20}}>
        <TextInput
          onChange={(name) => this.setState({name})}
          value={this.state.name}
          placeholder="Jedi's name"
        />
        <ValidationButton text={id ? "Modify" : 'Add'} onPress={() => {
          if (id) {
            this.props.modifyJediAction({ id, name });
          } else {
            this.props.addJediAction(this.state.name);
          }
          navigation.goBack();
        }} />
      </View>
    );
  }
}

export default connect(null, {
  addJediAction: addJedi,
  modifyJediAction: modifyJedi,
})(AddScreen);