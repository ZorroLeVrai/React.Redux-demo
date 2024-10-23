const logger = text => store => next => action => {
  //perform some action here
  console.log({ text: `Logger Middleware ${text}`, action });
  //call the next middleware function
  next(action);
}

export default logger;