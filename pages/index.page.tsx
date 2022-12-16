import { Grid, Pagination, Stack } from "@mui/material";
import Card from "dh-marvel/components/card/card";
import BodySingle from "dh-marvel/components/layouts/body/single/body-single";
import { getComics } from "dh-marvel/services/marvel/marvel.service";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { ChangeEvent, useEffect, useState } from "react";

interface Comic {
  id: number;
  title: string;
  thumbnail: {
    path: string;
    extension: string;
  }
}

const Index = () => {
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [comics, setComics] = useState<Comic[]>();
  const handleChange = (event: ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  useEffect(() => {
    (async () => {
      const data = await getComics((page - 1) * 12, 12).then(res => {
        setTotal(Number((res.data.total / 12).toFixed()));
        return res.data.results.map(({ title, id, thumbnail }: Comic) => {
        return { title, id, thumbnail };
      })
    })
      setComics(data)
    })()
  }, [page])

  return (
    <>
      <Head>
        <title>DH-Marvel | Home</title>
        <meta property="og:title" content="DH-Marvel | Home" />
        <meta property="og:image" content="/favicon.ico" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <BodySingle title={"Obras da Marvel Comics"}>
      <Stack spacing={2} alignItems={'center'} marginTop={2} marginBottom={2}>
        <Pagination count={total} page={page} onChange={handleChange} color="primary"/>
      </Stack>
        <Grid container justifyContent="center" spacing={2}>
          {comics &&
            comics.map((comic) => (
              <Grid item key={comic.id}>
                <Card
                  id={comic.id}
                  title={comic.title}
                  imgSrc={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                />
              </Grid>
            ))}
        </Grid>
      <Stack spacing={2} alignItems={'center'} marginTop={2} marginBottom={2}>
        <Pagination count={total} page={page} onChange={handleChange}  color="primary" />
      </Stack>
      </BodySingle>
    </>
  );
};

export default Index;
