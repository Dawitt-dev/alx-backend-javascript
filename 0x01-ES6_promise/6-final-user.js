// 6-final-user.js
import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const signUpPromise = signUpUser(firstName, lastName);
  const uploadPhotoPromise = uploadPhoto(fileName);

  return Promise.allSettled([signUpPromise, uploadPhotoPromise])
    .then((results) => results.map((result) => {
      if (result.status === 'fulfilled') {
        return { status: 'fulfilled', value: result.value };
      }
      return { status: 'rejected', value: result.reason.message };
    }));
}
