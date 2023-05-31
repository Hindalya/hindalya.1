import styles from './sidebar.module.css';
import {RssFeed, Chat, PlayCircle, Group, Bookmark, HelpOutline, WorkOutline, Event, School} from "@mui/icons-material";
function Sidebar() {
  return (
    <div className={styles.sidebar}>
    <div className={styles.sidebarWrapper}>
        <ul className={styles.sidebarList}>
            <li className={styles.sidebarListItem}>
              <RssFeed/>
              <span className={styles.sidebarItemText}>Feed</span>
            </li>

            <li className={styles.sidebarListItem}>
              <Chat/>
              <span className={styles.sidebarItemText}>Chats</span>
            </li>

            <li className={styles.sidebarListItem}>
              <PlayCircle/>
              <span className={styles.sidebarItemText}>videos</span>
            </li>

            <li className={styles.sidebarListItem}>
              <Group/>
              <span className={styles.sidebarItemText}>Groups</span>
            </li>
            <li className={styles.sidebarListItem}>
              <Bookmark/>
              <span className={styles.sidebarItemText}>Bookmarks</span>
            </li>

            <li className={styles.sidebarListItem}>
              <HelpOutline/>
              <span className={styles.sidebarItemText}>Questions</span>
            </li>

            <li className={styles.sidebarListItem}>
              <WorkOutline/>
              <span className={styles.sidebarItemText}>Job</span>
            </li>

            <li className={styles.sidebarListItem}>
              <Event/>
              <span className={styles.sidebarItemText}>Events</span>
            </li>

            <li className={styles.sidebarListItem}>
              <School/>
              <span className={styles.sidebarItemText}>Course</span>
            </li>
        </ul>     
        <button className={styles.sidebarButton}>Show More</button>
        <hr className={styles.sidehr}></hr>
        <ul className={styles.sidebarFreindList}>
          
        </ul>
    </div>
    </div>
  )
}

export default Sidebar
