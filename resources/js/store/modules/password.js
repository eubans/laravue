import { change } from '@/api/password';
import { isLogged } from '@/utils/auth';

const state = {
  id: null,
  user: null,
  token: isLogged(),
  name: '',
  avatar: '',
  introduction: '',
  roles: [],
  permissions: [],
};

const actions = {
  // user login
  change({ commit }, passwordInfo) {
    const { id, currentPassword, newPassword, confirmNewPassword } = passwordInfo;
    return new Promise((resolve, reject) => {
      change(id, { currentPassword: currentPassword, password: newPassword, confirmPassword: confirmNewPassword })
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
    });
  },
};

export default {
  namespaced: true,
  state,
  actions,
};
