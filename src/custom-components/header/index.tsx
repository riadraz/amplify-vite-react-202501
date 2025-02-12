import { HeaderDiv, TextDiv } from "./styled";
import amplifyIcon from '../../assets/amplify.png';



interface HeaderProps {
    signOut?: () => void;
    user?: {
      username?: string;
      attributes?: {
        email?: string;
        sub?: string;
      };
    };
  }


  const Header: React.FC<HeaderProps> = ({ signOut, user }) => { 
       return (
        <HeaderDiv>
            <>
                <img src={amplifyIcon} style={{ width: '60px', height: '50px' }} />
            </> 
            <TextDiv>
                AWS Amplify Gen 2 Vite React
                <div className="user-info">
                    <h1>Welcome {user?.username}</h1>
                    <p>Signed in as: {user?.attributes?.email}</p>
                    <p>User ID: {user?.attributes?.sub}</p>
                    {signOut && <button onClick={signOut}>Sign Out</button>}
                </div>
            </TextDiv>
        </HeaderDiv>

        
    );
}

export default Header;