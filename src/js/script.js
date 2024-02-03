const updateQueryString = function (url, key, value) {
  const urlObj = new URL(url);
  const { searchParams } = urlObj;

  searchParams.has(key) ? searchParams.set(key, value) : searchParams.append(key, value);

  return urlObj.toString();
};

const updatedUrl = updateQueryString('https://example.com/search?q=query&sort=ascending&page=2', 'name', 'Sam');
console.log(updatedUrl);
