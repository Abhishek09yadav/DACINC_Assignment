// Auth

export const handleLogin = (formData) =>
  axiosClient
    .post("/login", formData, {
      headers: {
        "x-api-key": "reqres-free-v1",
      },
    })
    .then((data) => {
      toast.success("welcome back");
      console.log(data);
      if (data?.data?.token) {
        localStorage.setItem("DACINC_AUTH_TOKEN", data?.data?.token);
      }
    })
    .catch((err) => {
      toast.error(err?.response?.data?.error);
      console.log(err);
      throw err
    });
