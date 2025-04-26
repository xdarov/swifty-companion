import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import UserSkillsList from './UserSkillsList';
import UserProjectList from './UserProjectList';


const UserProfileCard = ({ userData }) => {
  const levelData = userData.cursus_users;
  const level = levelData[levelData.length - 1].level;
  const skills = levelData[levelData.length - 1].skills;
  const userProjects = userData.projects_users;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{userData.login}</Text>

      <View style={styles.infoRow}>
          <Text style={styles.title}>{`LvL - ${level || '-'}`}</Text>
      </View>

      <View style={styles.infoContainer}>
        <View style={styles.infoRow}>
          <Icon name="email-outline" size={20} color="#4F46E5" />
          <Text style={styles.infoText}>{userData.email}</Text>
        </View>

        <View style={styles.infoRow}>
          <Icon name="account-outline" size={20} color="#4F46E5" />
          <Text style={styles.infoText}>{userData.displayname || '-'}</Text>
        </View>

        <View style={styles.infoRow}>
          <Icon name="phone" size={20} color="#4F46E5" />
          <Text style={styles.infoText}>{userData.phone || '-'}</Text>
        </View>

        <View style={styles.infoRowBottom}>
          <Icon name="wallet" size={20} color="#4F46E5" />
          <Text style={styles.infoText}>{userData.wallet || '-'}</Text>
        </View>
        
      </View>
      <UserSkillsList skills={skills} />
      <UserProjectList projects={userProjects} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(255, 255, 255, 0.07)',
    borderRadius: 16,
    width: '90%',
    padding: 20,
    margin: 16,
    // elevation: 3,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 16,
    paddingBottom: 12,
  },
  infoContainer: {
    gap: 14,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  infoRowBottom: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
    marginBottom: 50
  },
  infoText: {
    fontSize: 16,
    color: '#374151',
    flexShrink: 1,
  },
});


export default UserProfileCard;
