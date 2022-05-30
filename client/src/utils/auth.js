import decode from 'jwt-decode';

class AuthService {
    getProfile() {
        return decode(this.getToken());
    }

    isLoggedIn() {
        const token = this.getToken();
        return !!token && !this.isTokenExpired(token);
    }

    isTokenExpired(token) {
        try {
            const decodedToken = decode(token);

            if(decodedToken.exp < Date.now() / 1000) {
                return true;
            } else {
               return false; 
            }
        } catch (err) {
            return false;
        }
    }

    getToken() {
        return localStorage.getItem('id_token');
    }

    login(token) {
        localStorage.setItem('id_token', token);
    }

    logout() {
        localStorage.removeItem('id_token');
    }
}

export default new AuthService();