export default function getBaseUrl(){
  const isDevlopment = window.location.hostname === 'localhost'
  return isDevlopment ? 'http://localhost:3001/' : '/'
}