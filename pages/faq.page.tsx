import { Accordion, AccordionDetails, AccordionSummary, Container, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { faqsData } from "dh-marvel/components/faqs/faqsData";
import Head from "next/head";

export default function Faq() {

    return (

        <Container sx={{ width: '100%', margin: '40px' }}>
            <Head>
                <title>DH-Marvel | FAQ</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {faqsData.map(faq => (
                <Accordion key={faq.id}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>{faq.question}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            {faq.answer}
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            ))}

        </Container>
    )
}