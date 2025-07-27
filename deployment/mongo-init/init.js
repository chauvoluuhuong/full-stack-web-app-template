// MongoDB initialization script
db = db.getSiblingDB("nestjs-app");

// Create a test user
db.users.insertOne({
  name: "Test User",
  email: "test@example.com",
  createdAt: new Date(),
});

print("Database initialized successfully");
