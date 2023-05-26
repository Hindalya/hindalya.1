import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import Link  from "next/link";
import Image from 'next/image';
import { Button} from '@mui/material';
import Drawer from './Drawer';

const StyledLink = styled.li`
  color: black;
  list-style: none;
  margin-Right: 1rem;
  cursor:pointer;
  font-size:18px;

  &:hover {
    text-decoration: underline;
  }
`;

const NavButton = styled.div`
  @media (max-width: 768px) {
    display: none;
  }`

const Contener = styled.header`
    margin-bottom: 1rem;
    height: 3.5rem;
    box-shadow: 2px 2px 4px 1px rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    position: fixed;
    width: 100%;
    background-color: white;
  `;

  const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  `;

  const Center = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
  `;
  const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    padding:5px 15px;
    width:100%;
    border-radius: 20px;
  `;
  const SearchInput = styled.input`
    border: none;
    width:100%;

    &:focus {
      outline: none;
    }
  `;
const Right = styled.ul`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  @media (max-width: 768px) {
    display: none;
  }
`;


const Navbar = () => {
  const user = false;
  return (
    <Contener>
      <Left>
        <Drawer/>
        <Link href="/">
        <Image src = {`/assets/images/logo.jpeg`}
        alt = "logo"
        width={200}
        height={100}
        />
        </Link>
      </Left>
          
      <Center>
          <SearchContainer>
            <SearchInput type="text" placeholder="Search"/>
            <SearchIcon/>
          </SearchContainer>
      </Center>

      <Right>
      <Link href="/"><StyledLink >Home</StyledLink></Link>
      <Link href="/courses"><StyledLink >Courses</StyledLink></Link>
      <Link href="/projects"><StyledLink>Projects</StyledLink></Link>
      <Link href="/blogs"><StyledLink>Blogs</StyledLink></Link>
      </Right>
      <NavButton>
      {
        user ? <Menu/>:<Link href="/login"><Button color="inherit"><StyledLink>Login</StyledLink></Button></Link>
      }
      </NavButton> 
    </Contener>        

  )
}

export default Navbar
