export async function fetchPosts() {
  const response = await fetch("http://127.0.0.1:8787/api/posts");
  const data = await response.json();
  return data;
}
