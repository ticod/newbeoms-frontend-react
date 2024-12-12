import React from "react";
import Gossip from "./items/Gossip";
import ComingSoon from "./items/ComingSoon";
import HardwareNews from "./items/HardwareNews";
import WorkCited from "./items/WorkCited";
import styles from "./SidebarItem.module.css";

function SidebarItem(props) {
  const { contentType, data } = props;

  switch (contentType) {
    case 'gossip':
      return (
        <div className={styles.gossip}>
          <div className={styles.title}>GOSSIP</div>
          <div className={styles.content}>
            <Gossip gossipList={data.gossipDtoList} />
          </div>
        </div>
      );
    case 'comingSoon':
      return (
        <div className={styles.comingSoon}>
          <div className={styles.title}>COMING SOON</div>
          <div className={styles.content}>
            <ComingSoon comingSoonList={data.comingSoonDtoList} />
          </div>
        </div>
      );
    case 'hardwareNews':
      return (
        <div className={styles.hardwareNews}>
          <div className={styles.title}>HARDWARE NEWS</div>
          <div className={styles.content}>
            <HardwareNews className={styles.content} hardwareNewsList={data.hardwareNewsDtoList} />
          </div>
        </div>
      );
    case 'workCited':
      return (
        <details className={styles.workCited}>
          <summary className={styles.title}>WORK CITED</summary>
          <div className={styles.content}>
            <WorkCited className={styles.content} workCitedList={data.workCitedDtoList} />
          </div>
        </details>
      );
    case 'weeklyGameNews':
    default:
      return (
        <div className={styles.weeklyGameNews}>
          <div className={styles.title}>WEEKLY GAME NEWS</div>
          <div className={styles.content}>
            <div>Analyst 최범규</div>
            <div>
              <a href="https://blog.naver.com/ddongmmelier" 
              target="_blank" 
              rel="noreferrer noopener">
                https://blog.naver.com/ddongmmelier
              </a>
            </div>
            <br/>
            <div>Developer 권도훈</div>
          </div>
        </div>
      );
  }
}

export default SidebarItem;