module.exports = client => {
    console.log("Status: online");

    client.user.setPresence({
        status: "online",
        activity: {
            name: "you suffer through life",
            type: "WATCHING"
    }
  })
}