const FileSystem = (function() {
  let _fileSystem = null;

  function _FileSystem() {
    if (_fileSystem) return console.log("Instance exists");

    _fileSystem = this;
  }

  return _FileSystem;
})();

const winOS = new FileSystem();
const macOS = new FileSystem();

