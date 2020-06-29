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
  createClub: (context, data) => {
    axios
      .post("/club/createClub", data, {
        headers: {
          "Content-Type": "application/formdata",
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  },
  getClub: () => {
    axios
      .get("/club/getClub")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  },
  getClubProject: (context, params) => {
    axios
      .get(`/club/getClubProject/${params}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  },
  image: (context, data) => {
    axios
      .post(
        "/club/image",
        {
          headers: {
            "Content-Type": "application/formdata",
          },
        },
        data
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  },
  getClubMembers: (context, params) => {
    axios
      .get("/club/getClubMembers", params)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  },
  addClubMembers: (context, { data, params }) => {
    axios
      .put("/club/addClubMembers", data, params)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  },
  addPassbook: (context, { data, params }) => {
    axios
      .put("/club/addPassbook", data, params)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  },
  getPassbook: (context, params) => {
    axios.get("/club/getPassbook", params).then((res) => {
      console.log(res);
    });
  },
  updateIntro: (context, { data, params }) => {
    axios
      .put("/club/updateIntro", data, params)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  },
  addAnnounce: (context, { data, params }) => {
    axios
      .put("/club/addAnnounce", data, params)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  },
  deleteAnnounce: (context, params) => {
    axios
      .delete("/club/deleteAnnounce", params)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  },
  getAnnounce: (context, params) => {
    axios
      .get("/club/getAnnounce", params)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  },
  updateAnnounce: (context, { data, params }) => {
    axios
      .put("/club/updateAnnounce", data, params)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  },
  searchClub: (context, params) => {
    axios
      .get("/club/searchClub", params)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  },
  joinApplication: (context, { data, params }) => {
    axios
      .put("/club/joinApplication", data, params)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  },
  getApplication: (context, params) => {
    axios
      .get("/club/getApplication", params)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  },
  updateApplication: (context, { data, params }) => {
    axios
      .put("/club/updateApplication", data, params)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  },
};

export { server as default };
