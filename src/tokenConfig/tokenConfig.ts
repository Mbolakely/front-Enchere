export const getTokenFromLocalStorage = () => {
  return localStorage.getItem('token');
 };

 export const logout = () => {
  localStorage.removeItem('token');
  // Rediriger l'utilisateur vers la page de connexion ou la page d'accueil
  window.location.href = '/home';
 };


//  Pour parser les users
 export const ParsedUser = () => {
  const user = localStorage.getItem('user')

  if(user)return  JSON.parse(user)
  
}