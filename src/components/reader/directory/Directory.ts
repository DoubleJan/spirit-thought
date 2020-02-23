// 收集markdown标题的hooks
import { DirectoryType, DirectoryList } from './../index.d';

function Directory() {
  const directory: DirectoryList = [];

  const getDirectory = () => directory;
  const pushDirectory = (dir: DirectoryType) => directory.push(dir);

  return { getDirectory: () => getDirectory(), pushDirectory: (props: DirectoryType) => pushDirectory(props) }
}

export default Directory;