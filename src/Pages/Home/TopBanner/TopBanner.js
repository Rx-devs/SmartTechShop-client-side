import { Button, Container, Grid } from "@mui/material";
import Typography from '@mui/material/Typography';
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import bannerImg from "../../../images/banner/top-banner.jpeg";

const TopBanner = () => {
    return (
        <div>
            <Container>
                <Grid container spacing={2} sx={{py:5}}>
                    <Grid item xs={12} md={6}>
                    <Box sx={{py:5}}>
                    <Typography sx={{fontWeight:'500'}} variant="h3" gutterBottom component="div">
                    Put your world on <br /> your wrist
                    </Typography>
                    <Typography sx={{ mb:3}} variant="subtitle1" gutterBottom component="div">
                    Wear OS lets you stay connected in style. Enjoy unparalleled fitness tracking, music controls, messaging and more—all just one glance away.
                    </Typography>
                    <Button variant="contained">
                        <Link style={{textDecoration:'none',color:'#fff'}} to="/exploreProducts">Explore all watches</Link>
                    </Button>
                </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img style={{width:'100%'}} src={bannerImg} alt="Banner Image" />
                    </Grid>
                </Grid>
                
            </Container>
            
        </div>
    );
};

export default TopBanner ;