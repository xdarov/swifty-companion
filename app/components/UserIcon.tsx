import { View } from 'react-native';
import { Image } from 'expo-image';


const UserIcon = ({ imageUrl }) => {
  return (
    <View style={{ 
      width: 200,
      height: 200,
      borderRadius: 100,
      overflow: 'hidden'
    }}>
      <Image 
        source={imageUrl}
        style={{ 
          flex: 1,
          borderRadius: 100
        }}
        contentFit="cover"
        transition={500}
      />
    </View>
  );
};


export default UserIcon;
