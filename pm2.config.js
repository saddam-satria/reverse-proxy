module.exports = {
  apps: [
    {
      name: "server-1",
      script: "~/Servers/build/server.js",
      instances: "1",
      exec_mode: "fork",
      env: {
        NODE_ENV: "production",
        PORT: 5001,
      },
    },
    {
        name: "server-2",
        script: "~/Servers/build/server.js",
        instances: "1",
        exec_mode: "fork",
        env: {
          NODE_ENV: "production",
          PORT: 5002,
        },
      },
	{
        name: "server-3",
        script: "~/Servers/build/server.js",
        instances: "1",
        exec_mode: "fork",
        env: {
          NODE_ENV: "production",
          PORT: 5003,
        },
      },

  ],
};
