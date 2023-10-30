import React, { useState, useEffect } from 'react';
import { Avatar, Button, Card, Chip, Grid, Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import FmdBadIcon from '@mui/icons-material/FmdBad';
import { calculateDaysRemaining } from './utils';

export const Box = (props) => {
    const [daysRemaining, setDaysRemaining] = useState(0);
    const stars = props.item.stargazers_count > 999 ? (props.item.stargazers_count / 1000).toFixed(1) + 'k' : props.item.stargazers_count;


    useEffect(() => {
        const targetDate = new Date(props.item.created_at);
        const days = calculateDaysRemaining(targetDate);
        setDaysRemaining(days);
    }, [props.item.created_at]);

    const handleButtonClick = () => {
        window.open(`${props.item.html_url}`, "_blank", "noreferrer");
    };

    return (
        <div className='parentContainer'>
            <Card className='cardContainer'>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={3}>
                        <img src={props.item.owner.avatar_url} className='imgContainer' alt="Owner Avatar" />
                    </Grid>
                    <Grid item xs={12} md={9}>
                        <Typography variant='h6' className='header'>{props.item.name}</Typography>
                        <Typography variant='h7' className='description'>{props.item.description}</Typography>
                        <div className="badgeContainer">
                            <Grid container justifyContent="space-between" spacing={2}>
                                <Grid item xs={12} md={6}>
                                    <Chip className="chip" avatar={<Avatar><StarIcon /></Avatar>} label={stars} />
                                    <Chip className="chip" avatar={<Avatar><FmdBadIcon /></Avatar>} label={props.item.open_issues} sx={{ ml: 1 }} />
                                    <Chip className="chip" label={props.item.language ? props.item.language : `Not Specified`} sx={{ ml: 1 }} />
                                </Grid>
                                <Grid item xs={12} md={6} >
                                    <Chip variant="outlined" className="chip" label={`Submitted ${daysRemaining} days ago by ${props.item.owner.login}...`} />
                                </Grid>
                            </Grid>
                        </div>
                        <div className='footer'>
                            <Button variant='contained' className='button' onClick={handleButtonClick}>Read More</Button>
                        </div>
                    </Grid>
                </Grid>
            </Card>
        </div>
    );
};
