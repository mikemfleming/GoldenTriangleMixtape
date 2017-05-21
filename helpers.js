exports.parseYouTubeId = function(link) {
  const crazyRegex = /^.*(?:(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/)|(?:(?:watch)?\?v(?:i)?=|\&v(?:i)?=))([^#\&\?]*).*/;
  return link.match(crazyRegex)[1].replace('>', '');
};