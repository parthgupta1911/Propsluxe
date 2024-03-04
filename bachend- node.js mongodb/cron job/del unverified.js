const cron = require("node-cron");
const User = require("./../models/user"); // Import your User model

// Create a cron job and export it
const cronJob = cron.schedule("* * * * *", async () => {
  // console.log("started");
  const expiredUnverifiedUsers = await User.find({
    verified: false,
    delat: { $lte: new Date() },
  });

  for (const user of expiredUnverifiedUsers) {
    await User.deleteOne({ _id: user._id });
    // console.log(`Deleted unverified user with name: ${user.name}`);
  }
});

module.exports = cronJob; // Export the cron job instance
