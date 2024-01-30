import auth from '@react-native-firebase/auth';

export const login = (email: string, password: string) => {
  return auth().signInWithEmailAndPassword(email, password);
};

export const logout = () => {
  return auth().signOut();
};

export const register = (email: string, password: string) => {
  return auth()
    .createUserWithEmailAndPassword(email, password)
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
      }
      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
      }
      if (error.code === 'auth/weak-password') {
        console.log('Password should be at least 6 characters');
      }
      console.log(error);
    });
};
