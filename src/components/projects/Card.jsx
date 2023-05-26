import styled from 'styled-components';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import GetAppOutlinedIcon from '@mui/icons-material/GetAppOutlined';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import BrowseGalleryIcon from '@mui/icons-material/BrowseGallery';
import Link  from "next/link";

const StyledLink = styled.a`
  color: black;
  text-decoration: none;
  cursor: pointer;
`;

const Card = styled.div`
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid #e5e5e5;
  border-radius: 0.5rem;
  `;
const Cardwrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  padding: 1rem;
  `;
const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const Header = styled.div`
    padding: 0.5rem 0.7rem;
    margin-bottom: 0.5rem;
    font-size: 1rem;
    width: fit-content;
    border-radius: 0.35rem;
    color: #fff;
    font-weight:500;
    background: #212529;
    cursor: pointer;
`;
const CardLink = styled.p`
color:#0d6efd;
font-weight:400;
font-size:1.25rem;
line-height:1.2;
margin-bottom:0.5rem;
`;
const Rating = styled.span`
margin-bottom:1rem;
`;
const CardDiscription = styled.p`
font-size: 1.2rem;
text-align: justify;
display:block;
margin-block-end: 1em;
`;
const ProjectOwner = styled.div`
display: flex;
`;
const CardFooter = styled.div`
background: black;
color: white;
display: flex;
justify-content: space-around;
align-items: center;
padding: 0.7rem;
border-radius: 0  0 0.5rem 0.5rem;
`;
const Icon = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-right: 1rem;
 `;
const OwberIcon = styled.div`
  display: flex;
  align-items: center;
  margin-right: 1rem;
  color:#0d6efd;
  font-weight:400;
`;
const Text = styled.p`
margin-left: 0.5rem;
`

export default function BasicCard() {
  return (
    <>
    <Card sx={{ minWidth: 341, minHeight:380}}>
    <HeaderContainer>
    <StyledLink><Header>Javascript React.js project</Header></StyledLink>  
    </HeaderContainer>    
      <Cardwrapper>
      <StyledLink><CardLink>Perfect Learning Services project in Javascript React.js</CardLink></StyledLink>
      <Rating><StarOutlineIcon/><StarOutlineIcon/><StarOutlineIcon/><StarOutlineIcon/><StarOutlineIcon/></Rating>
      <CardDiscription>
      Our app is a simple and highly effective tool for taking screenshots with just one click. With this app,
       you no longer need to rely on any other tool or software for taking screenshots. 
       All you have to do is press the Enter key on your keyboard and v...
      </CardDiscription>
      <ProjectOwner>
      <StyledLink><OwberIcon><PersonOutlineIcon/><Text>amulsh2103</Text></OwberIcon></StyledLink>
      <Icon><BrowseGalleryIcon/><Text>21-03-2023</Text></Icon>
      </ProjectOwner>
      </Cardwrapper>
      <CardFooter>
      <Icon><RemoveRedEyeOutlinedIcon/><Text>21-03-2023</Text></Icon>
      <Icon><FavoriteBorderOutlinedIcon/><Text>524</Text></Icon>
      <Icon><GetAppOutlinedIcon/><Text>752</Text></Icon>
      </CardFooter>
    </Card>
    </>
  );
}
