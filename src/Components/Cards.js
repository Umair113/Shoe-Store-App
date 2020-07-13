import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { blue } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Shoes from "../Shoes.json";
import { Link } from 'react-router-dom';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
        margin: 50
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: blue[500],
    },
}));

export default function Cards() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const [value, setValue] = React.useState(4);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <div className="productContainer">
            {Object.keys(Shoes).map(keyName => {
                const shoe = Shoes[keyName];
                return (<Link to={`/product/${keyName}`} key={keyName} >
                <Card className={`${classes.root} homer`}  >
                    <CardHeader
                        title={shoe["name"]}
                        subheader={shoe["Price"]}
                    />
                    <CardMedia
                        className={classes.media}
                        image={shoe["img"]}
                        title={shoe["name"]}
                    />
                    <CardContent>

                        <div>
                            <Box component="fieldset" mb={3} borderColor="transparent">
                                <Rating
                                    name="simple-controlled"
                                    value={value}
                                    onChange={(event, newValue) => {
                                        setValue(newValue);
                                    }}
                                />
                            </Box>
                        </div>
                        <IconButton aria-label="Add to Cart">
                            < AddShoppingCartIcon />

                        </IconButton>
                        <IconButton aria-label="Add to Favorite">
                            <FavoriteIcon />

                        </IconButton>
                        <IconButton aria-label="share">
                            <ShareIcon />
                        </IconButton>
                        <IconButton
                            className={clsx(classes.expand, {
                                [classes.expandOpen]: expanded,
                            })}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                        >
                            <ExpandMoreIcon />
                        </IconButton>
                        <Collapse in={expanded} timeout="auto" unmountOnExit>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {shoe["Description"]}
                            </Typography>
                        </Collapse>
                    </CardContent>
                </Card></Link>)
            })}
        </div>
    );
}