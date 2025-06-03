import { AuthContext } from './AuthContext';

const AuthProvider = ( {children} ) => {

    const userInfo = {
         email: 'potato@alu.com'
    }
    
    return (
         <AuthContext value={userInfo}>
            {children}
         </AuthContext>
    );
};

export default AuthProvider;