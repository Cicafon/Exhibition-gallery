import ExhibitionDetail from "../../../components/exhibition/ExhibitionDetail";
import { Exhibition } from "../../../components/models";
import type { NextPage, GetStaticProps } from "next";
import React from "react";
import Head from "next/head";
import { getSingleExhibition } from "../../../lib/lib";

const ExhibitionDetails: NextPage<{ exhibition: Exhibition | null, status: string }> = ({
  exhibition, status
}) => {
  return (
    <React.Fragment>
      <Head>
        <title>{exhibition?.title}</title>
        <meta name="description" content="This is an exhibition gallery" />
      </Head>
      {exhibition && <ExhibitionDetail exhibition={exhibition} />}
      {status === "error" && <p className="error">Not found</p>}
    </React.Fragment>
  );
};

export async function getStaticPaths() {
  return {
    fallback: "blocking",
    paths: [
      {
        params: {
          id: "1",
        },
      },
    ],
  };
}

export const getStaticProps: GetStaticProps = async (context) => {
  const id: any = context.params!.id;
  console.log(typeof id)
  const loadedExhibitionData = await getSingleExhibition(id);

  return {
    props: {
      exhibition: loadedExhibitionData.data,
      status: loadedExhibitionData.status
    },
  };
};

export default ExhibitionDetails;
