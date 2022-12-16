import { Button, CardMedia, Container, Typography } from "@mui/material";
import { getCharacter } from "dh-marvel/services/marvel/marvel.service"
import Head from "next/head";
import { Comic, Character } from "shared/types/apiSchema"
import { getImgSrcFromThumbnail } from "utils/srcImgFromThumbnail";


export const getStaticPaths = async () => {
    return {
        paths: [{ params: { id: "1009156" } }],
        fallback: true
    };
}
export async function getStaticProps({ params }: any) {

    const data = await getCharacter(Number(params.id))

    return {
        props: {
            data
        }
    }
}

type PropsDetails = {
    data: Character

}



export default function CharacterDetail({ data }: PropsDetails) {

    const character = data;



    console.log(character)
    return (
        <Container>

            <Head>
                <title>{`DH-Marvel | ${character?.name}`}</title>
            </Head>
            <Container sx={{ marginTop: "10px" }}>
                <Typography fontSize={32} fontWeight="bold">
                    {character?.name}
                </Typography>
                <CardMedia
                    sx={{ width: "100%", maxWidth: "400px", borderRadius: "30px" }}
                    component="img"
                    image={getImgSrcFromThumbnail(character?.thumbnail)}
                    alt={`principal image of ${character?.name}`}
                />

                <Typography fontSize={22}>
                    {character?.description
                        ? character?.description
                        : "Este personagem não tem descrição ainda"}
                </Typography>
            </Container>
        </Container>
    )
}