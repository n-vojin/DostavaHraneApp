import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const register = async (email, password, firstName, lastName) => {
  let abortController = new AbortController();
  try {
    if (
      email != null &&
      email.length != 0 &&
      email != '' &&
      password != null &&
      password.length != 0 &&
      password != ''
    ) {
      const authResult = await auth().createUserWithEmailAndPassword(
        email,
        password,
      );
      alert('Korisnik uspesno registrovan');
      const {user} = authResult;
      if (user) {
        // Create a user document with the same UID as the user
        await firestore().collection('user').doc(user.uid).set({
          firstName: firstName,
          lastName: lastName,
          userId: user.uid,
          email: email,
          location: '',
        });

        console.log('User document created in Firestore.');
      }
    } else {
      alert('Please enter your email and password');
    }
  } catch (error) {
    alert('Registration error, try again');
  } finally {
    abortController.abort();
  }
};

export {register};
