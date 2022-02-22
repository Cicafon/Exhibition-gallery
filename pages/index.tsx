import type { NextPage, GetServerSideProps } from "next";
import Head from "next/head";
import ExhibitionList from "../components/exhibition/ExhibitionList";
import { Exhibition } from "../components/models";
import { getAllExhibitions } from "../lib/lib";
import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";
import LoadingSpinner from "../components/spinner/LoadingSpinner";
import { throttle } from "lodash";

const Home: NextPage<{ exhibitions: Exhibition[]; status: string }> = (
  props
) => {
  const [listItems, setListItems] = useState<Exhibition[]>(props.exhibitions);
  const [isFetching, setIsFetching] = useState(false);
  const [page, setPage] = useState(2);

  useEffect(() => {
    window.addEventListener("scroll", throttle(handleScroll, 1000));
    return () => {
      setListItems(props.exhibitions);
    };
  }, []);

  const handleScroll = () => {
    console.log("handleScroll");
    if (
      window.innerHeight + Math.ceil(window.scrollY) + window.scrollY * 0.2 >=
      document.body.scrollHeight
    ) {
      setIsFetching(true);
    }
  };

  const fetchData = async () => {
    // setTimeout(async () => {
    const data: { data: Exhibition[] | []; status: string } =
      await getAllExhibitions(page);
    setPage(page + 1);

    setListItems((prevState) => [...prevState, ...data.data]);

    setIsFetching(false);
    // }, 1000);
  };

  useEffect(() => {
    if (!isFetching) return;
    fetchMoreListItems();
  }, [isFetching]);

  const fetchMoreListItems = () => {
    console.log("fetchdata");
    fetchData();
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Exhibition</title>
        <meta name="description" content="This is an exhibition gallery" />
      </Head>
      <h3 className={styles.title}>Our exhibitions</h3>
      {listItems && <ExhibitionList exhibitions={listItems} />}
      {props.status === "error" && (
        <p className="error">Error during fetching the data</p>
      )}
      {isFetching && <LoadingSpinner />}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const loadedExhibitions = await getAllExhibitions(1);

  return {
    props: {
      exhibitions: loadedExhibitions.data || null,
      status: loadedExhibitions.status,
    },
  };
};

export default Home;
