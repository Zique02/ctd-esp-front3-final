import { Button, CardContent, CardMedia, Container, Grid, Typography } from "@mui/material";
import { getComic } from "dh-marvel/services/marvel/marvel.service"
import Head from "next/head";
import Link from "next/link";
import { Comic } from "shared/types/apiSchema"
import { priceFormatter } from "utils/formatPrice";

export const getStaticPaths = async () => {
    return {
        paths: [{ params: { id: "1886" } }],
        fallback: true
    };
}
export async function getStaticProps({ params }: any) {
    const data = await getComic(Number(params.id))

    return {
        props: {
            data
        }
    }
}

type PropsDetails = {
    data: Comic

}



export default function ComicDetail(props: PropsDetails) {
    const data = props
    const comic = data?.data;



    console.log(data)
    return (
        <Container sx={{ display: 'flex', flexDirection: 'column' }}>
            <Head>
                <title>DH-Marvel | Detalhes</title>
            </Head>

            <Typography
                gutterBottom
                noWrap
                variant="h3"
                component="div"
            >
                {comic?.title}
            </Typography>
            <CardMedia
                component="img"
                height="350"
                image={`${comic?.thumbnail.path}.${comic?.thumbnail.extension}`}
                alt={comic?.title}
            />
            <Typography variant="h6">{comic?.description ? comic.description : "Sem descrição :("}</Typography>
            <h2>Preço: {priceFormatter(comic?.price)}</h2>
            {comic?.stock > 0 ?
                <Link href={`/checkout/${comic.id}`}>
                    <Button variant="contained">Comprar</Button>
                </Link>
                : <Typography
                    gutterBottom
                    noWrap
                    variant="h6"
                    component="div"
                >SEM ESTOQUE!!</Typography>
            }
            <Container sx={{ borderStyle: 'solid', borderRadious:'200px'}}>
                <Typography
                    sx={{ marginTop: '5px', marginBottom:'-5px', color: '#1976d2', }}
                    gutterBottom
                    noWrap
                    variant="h5"
                    component="div"
                >Personagens: </Typography>
                <Typography
                    sx={{ color: '#1976d2', fontSize: '15px'}}
                    gutterBottom
                    noWrap
                    variant="h6"
                    component="div"
                >(Clique neles para saber um pouco mais sobre cada um) </Typography>
                {comic?.characters.items.map((item) => (
                    <Link href={`/characters/${item.resourceURI.split("characters/").pop()}`}>
                        <Typography key={item.name}
                            sx={{ cursor: 'pointer' }}
                            gutterBottom
                            noWrap
                            variant="h6"
                            component="div"
                        >{item.name}</Typography>
                    </Link>

                ))}
            </Container>


        </Container>
    )
}