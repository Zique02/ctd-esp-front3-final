import { CardMedia, Container, Typography } from "@mui/material";
import { useCheckoutState } from "contexts/Context";
import Head from "next/head";
import { priceFormatter } from 'utils/formatPrice';

export default function SuccessFullOrder() {

    const { checkout, order } = useCheckoutState()

    return (

        <Container>
            <Head>
                <title>DH-Marvel | Aproveite!</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Container sx={{
                width: '500px', height: '100px', margin: '20px auto', display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
                <Typography
                    gutterBottom
                    noWrap
                    variant="h4"
                    component="div"
                >
                    Aproveite sua compra!
                </Typography>
            </Container >

            <Container sx={{ gap: '20px', margin: '20px', display: 'flex', flexDirection: 'column' }}>
                <Typography
                    gutterBottom
                    noWrap
                    variant="h5"
                    component="div"
                    fontSize={'40px'}
                    marginBottom={'-1px'}
                >
                    {order?.title}
                </Typography>

                <CardMedia sx={{ borderRadius: '30px', width: '345px', display: 'flex' }}
                    component="img"
                    height="300px"
                    image={`${order?.path}.${order?.extension}`}
                    alt={order?.title}
                />

                <Typography
                    gutterBottom
                    noWrap
                    variant="h5"
                    component="div"
                >Preço:{priceFormatter(order.price)}
                </Typography>

                <Typography
                    gutterBottom
                    noWrap
                    variant="h5"
                    component="div"
                >
                    Comprador: {checkout.name} {checkout.lastname}
                </Typography >
                <Typography
                    gutterBottom
                    noWrap
                    variant="h5"
                    component="div"
                ><strong>Endereço de entrega: </strong>
                    {checkout?.address1},
                    {!!checkout?.address2 ? ` ${checkout?.address2}, ${checkout?.city}, ${checkout?.state}` : ` ${checkout?.city},  ${checkout?.state}`}
                </Typography>


            </Container>

        </Container >
    )
}