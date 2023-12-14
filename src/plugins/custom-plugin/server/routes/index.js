module.exports = {
  admin: {
    type: "admin",
    routes: [
      {
        method: "GET",
        path: "/fetch-custom-data",
        handler: async (ctx) => {
          ctx.send("Hi there");
        },
      },
    ],
  },
};
