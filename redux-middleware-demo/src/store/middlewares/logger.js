//parameter + SNA
const logger = parameter => store => next => action => {
  //perform some action here
  console.log(`Logging in middleware with parameter ${JSON.stringify(parameter)}`);
  //call the next middleware function
  next(action);
}

export default logger;