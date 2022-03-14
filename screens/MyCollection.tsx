import React from 'react';
import { Text, View } from 'react-native';
import { useAuth } from '../providers/AuthProvider';
import { Button } from '../components/Button';

export const MyCollection: React.FC = () => {
  const { user, logout } = useAuth();

  return (
    <View>
      <Text>My Collection: {user?.email ?? '-'}</Text>
      <Button type="primary" onPress={() => logout()}>
        Logout
      </Button>
    </View>
  );
};
