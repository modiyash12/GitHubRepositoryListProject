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
        const days=calculateDaysRemaining(targetDate,currentDate);
        setDaysRemaining(days)
    }, [targetDate]);

    // const calculateDaysRemaining = () => {
    //     const timeDifference = currentDate - targetDate;
    //     const daysRemaining = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
    //     setDaysRemaining(daysRemaining);
    // };

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
                            <Chip className="chip" avatar={<Avatar><StarIcon /></Avatar>} label={props.item.stargazers_count} />
                            <Chip className="chip" avatar={<Avatar><FmdBadIcon /></Avatar>} label={props.item.open_issues} />
                            <Chip className="chip" label={props.item.language ? props.item.language : `Not Specified`} />
                        </div>
                        <div className='footer'>
                            <Button variant='contained' className='button' onClick={handleButtonClick}>Read More</Button>
                            <Chip variant="outlined" className="chip" label={`Submitted ${daysRemaining} days ago by ${props.item.owner.login}`} />
                        </div>
                    </Grid>
                </Grid>
            </Card>
        </div>
    );
};
