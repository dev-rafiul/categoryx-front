
export function isAuthenticated() {
  if (typeof window === 'undefined') return false;
  
  
  const cookies = document.cookie.split(';');
  const authCookie = cookies.find(cookie => 
    cookie.trim().startsWith('auth=')
  );
  
  return authCookie && authCookie.includes('auth=true');
}

export function redirectToLogin() {
  if (typeof window !== 'undefined') {
    window.location.href = '/login';
  }
}

export function logout() {
  if (typeof window !== 'undefined') {
  
    document.cookie = 'auth=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    window.location.href = '/login';
  }
}