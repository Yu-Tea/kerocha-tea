import { useState, useEffect } from 'react';
import { UserInfo } from '../types/diagnosis';

export const useUserName = () => {
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // ローカルストレージからユーザー情報を取得
    const savedUserInfo = localStorage.getItem('userInfo');
    if (savedUserInfo) {
      setUserInfo(JSON.parse(savedUserInfo));
    }
    setIsLoading(false);
  }, []);

  const saveUserName = (name: string) => {
    const newUserInfo: UserInfo = {
      name: name.trim(),
      registeredAt: new Date().toISOString(),
    };
    setUserInfo(newUserInfo);
    localStorage.setItem('userInfo', JSON.stringify(newUserInfo));
  };

  const clearUserName = () => {
    setUserInfo(null);
    localStorage.removeItem('userInfo');
  };

  return {
    userInfo,
    isLoading,
    saveUserName,
    clearUserName,
    isUserRegistered: !!userInfo,
  };
};