import React, { useState, useEffect } from 'react';
import { Avatar, Button, Card, Chip, Grid, Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import FmdBadIcon from '@mui/icons-material/FmdBad';
import { calculateDaysRemaining } from './utils';

export const Box = (props) => {
    const targetDate = new Date(props.item.created_at);
    const currentDate = new Date();
    const [daysRemaining, setDaysRemaining] = useState(0);

    useEffect(() => {
        const days = calculateDaysRemaining(targetDate, currentDate);
        setDaysRemaining(days);
    }, [targetDate]);

    const handleButtonClick = () => {
        window.open(`${props.item.html_url}`, "_blank", "noreferrer");
    };

    return (
        <div className='parentContainer'>
            <Card className='cardContainer'>
                <Grid container>
                    <Grid item xs={12} md={3}>
                        <img src={props.item.owner.avatar_url} className='imgContainer' alt="Owner Avatar" />
                    </Grid>
                    <Grid item xs={12} md={9} className='infoContainer'>
                        <Typography className='header'>{props.item.name}</Typography>
                        <Typography className='description'>{props.item.description}</Typography>
                        <div className="badgeContainer">
                            <Grid container justifyContent="space-between">
                                <Grid item xs={12} md={6}>
                                    <Chip className="chip" avatar={<Avatar><StarIcon /></Avatar>} label={props.item.stargazers_count} />
                                    <Chip className="chip" avatar={<Avatar><FmdBadIcon /></Avatar>} label={props.item.open_issues} sx={{ ml: 2 }} />
                                    <Chip className="chip" label={props.item.language ? props.item.language : `Not Specified`} sx={{ ml: 2 }} />
                                </Grid>
                                <Grid item xs={12} md={6} sx={{ mt: 2 }}>
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
