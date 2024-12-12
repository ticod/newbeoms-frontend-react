import React from "react";
import { useParams } from 'react-router-dom';
import Header from "../components/header/Header";
import useGetData from "../api/useGetData";
import Sidebar from "../components/sidebar/Sidebar";
import News from "../components/news/News";
import styles from "./PublicationPage.module.css";

const PUBLICATION_URI = 'publication/';

const firstContainerSidebarItem = [
  "publicationDate",
  "weeklyGameNews",
  "gossip",
  "comingSoon"
];

const secondContainerSidebarItem = [
  "hardwareNews",
  "workCited"
];

function PublicationPage(props) {
  const { date } = useParams();
  const { data, isLoading } = useGetData(PUBLICATION_URI + date);

  return (
    <div className={styles.wrapper}>
      <Header align="right" />
      <hr/>
      { isLoading ? null : 
        <div>
          <div className={styles.firstContainer}>
            <Sidebar 
              contentTypes={firstContainerSidebarItem} 
              data={data} 
            />
            <div className={styles.newsContainer}>
              <News news={data.newsDtoList[0]} />
              <News news={data.newsDtoList[1]} />
            </div>
          </div>
          <hr/>
          <div className={styles.secondContainer}>
            <Sidebar 
              contentTypes={secondContainerSidebarItem} 
              data={data} 
            />
            <div>
              <News news={data.newsDtoList[2]} />
              <News news={data.newsDtoList[3]} />
            </div>
          </div>
        </div>
      }
    </div>
  );
}

export default PublicationPage;