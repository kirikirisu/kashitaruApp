import axios from 'axios';

const getProfile = (id, rest) => {
  const {
    requestProfileData,
    receiveProfileSuccess,
    receiveProfileFailed,
  } = rest;
  if (id) {
    requestProfileData();
    axios.post('/api/getProfileData', { id })
      .then((response) => {
        const profileData = response.data;
        receiveProfileSuccess(profileData);
      })
      .catch((err) => {
        console.error(new Error(err));
        receiveProfileFailed();
      });
  }
};

export default getProfile;
