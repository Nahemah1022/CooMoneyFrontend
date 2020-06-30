import axios from "./axios";
import router from "@/router";


const server = {
  signUp: (context) => {
    axios
    .post("/user/signUp", context.state.signUp)
    .then((res) => {
      console.log(res);
      router.push("/Login");
    })
    .catch((err) => {
      console.error(err);
    });
  },
  login: (context) => {
    axios
    .post("/user/login", {
      email: context.state.login.email,
      password: context.state.login.password,
    })
    .then((res) => {
      console.log(res);
      router.push("/Home");
    })
    .catch((err) => {
      console.error(err);
    });
  },
  createClub: (context, data) => axios.post("/club/createClub", data, {
    headers: { "Content-Type": "multipart/formdata" },
  }),
  getClub: () => axios.get("/club/getClub"),
  getClubProject: (context, params) => axios.get(`/club/getClubProject/${params}`),
  clubImage: (context, data) => axios.post("/club/image", data, {
    headers: { "Content-Type": "multipart/formdata" },
  }),
  getClubMembers: (context, params) => axios.get("/club/getClubMembers", { params }),
  addClubMembers: (context, { data, params }) => axios.put("/club/addClubMembers", data, { params }),
  addPassbook: (context, { data, params }) => axios.put("/club/addPassbook", data, { params }),
  getPassbook: (context, params) => axios.get("/club/getPassbook", { params }),
  updateIntro: (context, { data, params }) => axios.put("/club/updateIntro", data, { params }),
  addAnnounce: (context, { data, params }) => axios.put("/club/addAnnounce", data, { params }),
  deleteAnnounce: (context, params) => axios.delete("/club/deleteAnnounce", { params }),
  getAnnounce: (context, params) => axios.get("/club/getAnnounce", { params }),
  updateAnnounce: (context, { data, params }) => axios.put("/club/updateAnnounce", data, { params }),
  searchClub: async (context, params) => axios.get("/club/searchClub", { params }),
  joinApplication: (context, { data, params }) => axios.put("/club/joinApplication", data, { params }),
  getApplication: (context, params) => axios.get("/club/getApplication", { params }),
  updateApplication: (context, { data, params }) => axios.put("/club/updateApplication", data, { params })
};

export { server as default };
