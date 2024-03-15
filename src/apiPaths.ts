const baseUrl = process.env.BASE_URL;

const apiPaths = {
  getUser() {
    return `${baseUrl}/users/user`;
  },
  getPets() {
    return `${baseUrl}/pets/`;
  },

  signin() {
    return `${baseUrl}/auth/signin`;
  },
  signup() {
    return `${baseUrl}/auth/signup`;
  },
};

export default apiPaths;
