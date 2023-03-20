import axios from "axios"

const instance = axios.create({
      withCredentials: true,
      baseURL: 'https://social-network.samuraijs.com/api/1.0/',
      headers: {
            'API-KEY': '5fbf88a1-9f59-4de7-90d4-29f738448957'
         }
})

const usersAPI = {
      getUsers(currentPage=1, pageSize=10) {
            return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(resposnse => resposnse.data)
      },
      toUnfollow(id) {
            return instance.delete(`follow/` + id).then(response => response.data)
      },
      toFollow(id) {
            return instance.post(`follow/` + id).then(response => response.data)
      }
};

export const profileAPI = {
      getProfile(userID) {
            return instance.get(`profile/` + userID).then(response => response.data);
      },
      getStatus(userID) {
            return instance.get('profile/status/' + userID).then(resposne => resposne.data);
      },
      setStatus(status) {
            return instance.put('profile/status', {status}).then(resposne => resposne.data);
      }
};

export const authAPI = {
      toGetLogin() {
            return instance.get('auth/me').then(response => response.data.data);
      },
      toLogin(email, password, rememberMe = true) {
            return instance.post('auth/login', {email, password, rememberMe }).then(response => response.data);
      },
      toLogout() {
            return instance.delete('auth/login').then(response => response.data);
      }
}

export default usersAPI;