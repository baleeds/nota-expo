import React from 'react';
import { useAuth } from '../providers/AuthProvider';
import { CollectionStack } from './CollectionStack';
import { LoginStack } from './LoginStack';

export const CollectionOrLoginStack: React.FC = () => {
  const { isLoading, user } = useAuth();

  if (isLoading) return null;

  return user ? <CollectionStack /> : <LoginStack />;
};
