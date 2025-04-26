import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const getStatusIcon = (status: string, validated: boolean) => {
  switch(status) {
    case 'finished':
      return validated 
        ? <Icon name="check-circle" size={20} color="#4CAF50" />
        : <Icon name="close-circle" size={20} color="#f44336" />;
    case 'in_progress':
      return <Icon name="progress-clock" size={20} color="#2196F3" />;
    case 'waiting_for_correction':
      return <Icon name="alert-circle-outline" size={20} color="#FF9800" />;
    case 'searching_a_group':
      return <Icon name="account-search" size={20} color="#9E9E9E" />;
    default:
      return <Icon name="clock-alert-outline" size={20} color="#9E9E9E" />;
  }
};

const ProjectLine = ({ item }) => (
    <View style={styles.listItem}>
      <Text style={styles.projectName}>
        {item.project.name
          .replace(/42cursus-/gi, '')
          .replace(/(internship i - )/gi, '')}
      </Text>
      <View style={styles.iconContainer}>
        {getStatusIcon(item.status, item['validated?'])}
      </View>
    </View>
);

const UserProjectList = ({ projects }) => {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{"Projects"}</Text>
        {projects.map((item, index) => (
          <ProjectLine item={item} key={index}/>
        ))}
      </View>
    )
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 8,
    paddingBottom: 12,
  },
  listItem: {
    flexDirection: 'row',
    // alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  projectName: {
    flex: 1,
    fontSize: 16,
  },
  iconContainer: {
    marginLeft: 20,
  },
});


export default UserProjectList;
