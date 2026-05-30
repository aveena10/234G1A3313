export const log = (level, packageName, message) => {
  console.log({
    stack: "frontend",
    level,
    package: packageName,
    message,
    timestamp: new Date().toISOString(),
  });
};