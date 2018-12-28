import React from 'react';
import { TouchableOpacity, View, FlatList, Text, Button, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';

import { listJedis, deleteJedi } from '../../reducer';
import AddButton from '../../components/atom/addButton';
import List from '../../components/molecul/list';

class HomeScreen extends React.Component {
    static navigationOptions = {
      title: 'Jedi List',
    };

    componentDidMount() {
      setTimeout(() => {
        this.props.listJedisAction();
      }, 2000);
    }

    render() {
      const { navigate } = this.props.navigation;
      const { jedis, loading } = this.props;
      return (
        <View style={{ width: '100%', height: '100%', backgroundColor: 'black', flex: 1, justifyContent: 'center' }}>
          {
            loading ? (
              <ActivityIndicator size="large" color="white"/>
            ) : (
              <React.Fragment>
                <View
                  style={{
                    flexDirection: "row",
                    marginBottom: 30,
                  }}
                >
                  <Text
                    style={{
                      color: 'white',
                      fontSize: 22,
                      paddingTop: 21
                    }}
                  >Jedi list :</Text>
                  <View style={{ marginTop: 20, marginRight: 20, marginLeft: 20}}>
                    <AddButton 
                      onPress={() => {
                        navigate('Add');
                      }}
                    />
                  </View>
                </View>
                <List 
                  datas={jedis}
                  onModify={(item) => {
                    return () => {
                      navigate('Add', {
                        data: item,
                      });
                    };
                  }}
                  onDelete={(item) => {
                    return () => {
                      this.props.deleteJediAction(item.id);
                    };
                  }}
                />
              </React.Fragment>
            )
          }
        </View>
      );
    }
  }

export default connect(state => ({
  jedis: state.jedis,
  loading: state.loading,
}), {
  listJedisAction: listJedis,
  deleteJediAction: deleteJedi,
})(HomeScreen);