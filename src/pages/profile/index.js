import Image from 'next/image';
import styled from 'styled-components';
import styles from './profile.module.css';
import Sidebar from '@/components/profile/Sidebar';
import Feed from '@/components/profile/Feed';
import Share from '@/components/profile/Share';
const ProfileContainer = styled.div`
display: flex;
padding-top:3.6rem;
margin:0 1rem 3rem 1rem;
`;

const Username = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;
`;

const Bio = styled.p`
  font-size: 16px;
  text-align: center;
  font-weight: 300;
`;

const UserProfile = () => {
  return (
    <ProfileContainer>
      <Sidebar/>
      <div className="profileRight">
        <div className="profileRightTop">
          <div className={styles.profileCover}>
            <Image 
            className={styles.profileCoverImg}
            width={1000} 
            height={200} 
            src={`/assets/images/darkbg.png`}
            alt="Profile Picture" 
            />
            <Image 
            className={styles.profileUserImg}
            width={150} 
            height={150} 
            src={`/assets/person/1.jpeg`}
            alt="Profile Picture" 
            />
          </div>
          <div className={styles.profileInfo}>
            <Username>Shree Ram</Username>
            <Bio>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo
              bibendum massa sed aliquam.
            </Bio>
            </div>
          <div className={styles.profileRightBottom}>
            <Share/>
          </div>
        </div>
      </div>
    </ProfileContainer>
  );
};

export default UserProfile;
