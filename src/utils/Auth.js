const TOKEN_KEY = 'jwt';
export const userLogin =() => {
    localStorage.setItem(TOKEN_KEY,'test@123');
    console.log('userLogin localStorage',localStorage);
}
export const userLogOut =() => {
    localStorage.removeItem(TOKEN_KEY);
    console.log('userLogOut localStorage',localStorage);
}
export const isLogin =() => {
    console.log('isLogin localStorage',localStorage)
     if(localStorage.getItem(TOKEN_KEY)){
        return true;
    };
    return false
}