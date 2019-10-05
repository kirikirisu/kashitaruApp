import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
// import FavoriteIcon from '@material-ui/icons/Favorite';
import Chat from '@material-ui/icons/Chat';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import connectToRoom from '../../utils/connectToRoom';

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 345,
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
    margin: 10,
  },
}));

const DetailedCard = ({
  productName,
  img,
  description,
  price,
  period,
  shippingArea,
  days,
  name,
  avatar,
  comment,
  currentUser,
  rooms,
  redirectChat,
  toggleRedirectChat,
  rest,
}) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const createPrivateRoom = (id) => {
    const roomName = `${currentUser.id}_${id}`;

    const isPrivateChatCreated = rooms.filter((room) => {
      if (room.customData && room.customData.isDirectMessage) {
        const arr = [currentUser.id, id];
        const { userIds } = room.customData;

        if (arr.sort().join('') === userIds.sort().join('')) {
          return {
            room,
          };
        }
      }

      return false;
    });

    if (isPrivateChatCreated.length > 0) {
      return Promise.resolve(isPrivateChatCreated[0]);
    }

    return currentUser.createRoom({
      name: `${roomName}`,
      private: true,
      addUserIds: [`${id}`],
      customData: {
        isDirectMessage: true,
        userIds: [currentUser.id, id],
      },
    });
  };

  const sendDM = (id) => {
    createPrivateRoom(id).then((room) => {
      toggleRedirectChat(true);
      connectToRoom(room.id, currentUser, rest);
    });
  };

  const renderDetailedCard = () => (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar} src={avatar} />
        }
        action={(
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        )}
        title={name}
        subheader="投稿日2019_3_9"
      />
      <CardMedia
        className={classes.media}
        image={img}
        title="product image"
      />
      <CardContent>
        <Typography variant="h6" color="textSecondary" component="p">
          {productName}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="chat" onClick={() => sendDM(name)}>
          <Chat />
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
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>商品説明:</Typography>
          <Typography paragraph>
            {description}
          </Typography>
          <Typography paragraph>価格:</Typography>
          <Typography paragraph>
            {price}
          </Typography>
          <Typography paragraph>貸し出し期間:</Typography>
          <Typography paragraph>
            {period}
          </Typography>
          <Typography paragraph>発送元エリア:</Typography>
          <Typography paragraph>
            {shippingArea}
          </Typography>
          <Typography paragraph>発送日数:</Typography>
          <Typography paragraph>
            {days}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );

  return (
    <Route
      render={() => (
        redirectChat ? (
          <Redirect to="chat" />
        ) : (
            renderDetailedCard()
          )
      )}
    />
  );
};

export default DetailedCard;
