import React from "react";
import styles from "./Sidebar.module.css"
import SidebarItem from "./SidebarItem";

function Sidebar(props) {
  const { contentTypes, data } = props;

  return (
    <div className={styles.wrapper}>
      {contentTypes.includes('publicationDate') ? <div>[{data.publicationDate}]</div> : null}
      {contentTypes.includes('weeklyGameNews') ? <SidebarItem contentType='weeklyGameNews' data={data} /> : null}
      {contentTypes.includes('gossip') ? <SidebarItem contentType='gossip' data={data} /> : null}
      {contentTypes.includes('comingSoon') ? <SidebarItem contentType='comingSoon' data={data} /> : null}
      {contentTypes.includes('hardwareNews') ? <SidebarItem contentType='hardwareNews' data={data} /> : null}
      {contentTypes.includes('workCited') ? <SidebarItem contentType='workCited' data={data} /> : null}
    </div>
  );
}

export default Sidebar;