exports.parseYouTubeId = (link)  =>{
  const crazyRegex = /^.*(?:(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/)|(?:(?:watch)?\?v(?:i)?=|\&v(?:i)?=))([^#\&\?]*).*/;
  return link.match(crazyRegex)[1].replace('>', '');
};

exports.handleMongoErrors = (err) => {
  return err.name === 'ValidationError'
    ? 'This link has already been submitted.'
    : JSON.stringify(err);
};
