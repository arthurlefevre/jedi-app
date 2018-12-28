import React from 'react';
import PropTypes from 'prop-types';
import { FlatList, View } from 'react-native';
import ListElement from '../../atom/listElement';
import DeleteButton from '../../atom/deleteButton';

const List = ({ datas, onModify, onDelete }) => {
  return (
    <FlatList 
      data={datas.map(data => ({...data, key: `data-${data.id}`}))}
      renderItem={({item}) => (
        <View style={{flex: 1, flexDirection: "row", justifyContent: 'space-between'}} key={`item-${item.id}`}>
          <ListElement 
            onPress={onModify(item)}
            text={item.name}
          />
          <View
            style={{paddingRight: 20, paddingTop: 20}}
          >
            <DeleteButton 
              onPress={onDelete(item)}
            />
          </View>
        </View>
      )}
    />
  );
};

List.defaultProps = {
  datas: [],
  onModify: () => () => {},
  onDelete: () => () => {},
};

List.propTypes = {
  datas: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.any.isRequired,
    name: PropTypes.string.isRequired,
  })),
  onModify: PropTypes.func,
  onDelete: PropTypes.func,
};

export default List;