import { View, Text, FlatList, StyleSheet } from 'react-native';


const SkillLine = ({ item }) => (
  <View style={styles.listItem}>
    <Text style={styles.skillName}>{item.name.replace(/\u0026/g, '&')}</Text>
    <Text style={styles.skillLevel}>{item.level.toFixed(1)}</Text>
    <Text style={styles.skillLevel}>| {(item.level / 20 * 100).toFixed(0)}%</Text>
  </View>
);

const UserSkillsList = ({ skills }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{"Skills"}</Text>
      {skills.map((item, index) => (
        <SkillLine item={item} key={index} />
      ))}
    </View>
  );
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
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#eee'
  },
  skillName: {
    flex: 1,
    fontSize: 16
  },
  skillLevel: {
    color: '#666',
    fontSize: 16,
    padding: 3
  }
});

export default UserSkillsList;
