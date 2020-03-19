// 获取文章标题
function getContentTitle(value: string):string {
  const arr = value.match(/#+\s\S+/g);
  if (Array.isArray(arr)) {
    const title = arr.find((v: string) => v.substr(0, 2) === '# ');
    if (title != null) {  
      return title.substr(2);
    }
  }
  return '';
}

export default getContentTitle;