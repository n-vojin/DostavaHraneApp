import firestore from '@react-native-firebase/firestore';

export async function updateUser(userId, firstName, lastName, location) {
  try {
    await firestore().collection('user').doc(userId).update({
      firstName: firstName,
      lastName: lastName,
      location: location,
    });

    alert('Uspesno promenjeni podaci');
  } catch (error) {
    alert('Greska!');
    console.error('Update error:', error);
  }
}
