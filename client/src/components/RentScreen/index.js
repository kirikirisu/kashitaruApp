import React from 'react';
import Grid from '@material-ui/core/Grid';
import DetailedCard from './DetailedCard';
import key from '../../utils/listKeyGenerator';

const RentScreen = ({
  isFetching,
  shareInformationsArray,
  currentUser,
  rooms,
  toggleRedirectChat,
  redirectChat,
  ...rest // connectToRoomのアクションたち
}) => (
    <div>
      {
        isFetching // isFetchingの値で分岐
          ? <h2>Now Loading...</h2> // データをFetch中ならばローディングアイコンを表示
          : (
            <div>
              <Grid item xs={12}>
                <Grid container justify="center" spacing={2}>
                  {shareInformationsArray.map((share) => (
                    <Grid key={key()} item>
                      <DetailedCard
                        productName={share.productName}
                        img={share.productImg}
                        description={share.description}
                        period={share.period}
                        shippingArea={share.shippingArea}
                        days={share.days}
                        id={share.id}
                        name={share.name}
                        avatar={share.avatar}
                        comment={share.comment}
                        currentUser={currentUser}
                        rooms={rooms}
                        toggleRedirectChat={toggleRedirectChat}
                        redirectChat={redirectChat}
                        rest={rest}
                      />
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </div>
          )
      }
    </div>
  );

export default RentScreen;
