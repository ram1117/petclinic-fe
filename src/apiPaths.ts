const baseUrl = process.env.NEXT_PUBLIC_API_URL;

const apiPaths = {
  getUser() {
    return `${baseUrl}/users/user`;
  },
  getPets() {
    return `${baseUrl}/pets/`;
  },

  createPet() {
    return `${baseUrl}/pets/new`;
  },

  getPetTypes() {
    return `${baseUrl}/pets/pettypes`;
  },
  signin() {
    return `${baseUrl}/auth/signin`;
  },
  signup() {
    return `${baseUrl}/auth/signup`;
  },

  getDoctors() {
    return `${baseUrl}/doctors`;
  },

  getTreatments() {
    return `${baseUrl}/treatments`;
  },

  getAllAppointment() {
    return `${baseUrl}/appointment`;
  },

  getOneAppointemnt(id: string) {
    return `${baseUrl}/appointment/${id}`;
  },

  cancelAppointemnt(id: string) {
    return `${baseUrl}/appointment/${id}`;
  },

  createAppointment() {
    return `${baseUrl}/appointment`;
  },
};

export default apiPaths;
