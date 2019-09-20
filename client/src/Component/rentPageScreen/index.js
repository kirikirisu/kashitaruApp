import React, { useEffect } from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import Card from '../cardComponent/index';
import key from '../../utils/listKeyGenerator';

const RentPage = ({
  allShare,
  requestData,
  receiveDataSuccess,
  receiveDataFailed,
}) => {

  const { isFetching, shareInformationsArray } = allShare;

  const handleFetchData = () => {
    requestData(); // axios.get()を呼ぶ前にisFetchingをtrueにしておく
    axios.get('/api/share')
      .then((response) => { // データ受け取りに成功した場合
        const products = response.data;
        receiveDataSuccess(products); // データをstoreに保存するとともにisFetchingをfalseに
      })
      .catch((err) => { // データ受け取りに失敗した場合
        console.error(new Error(err));
        receiveDataFailed(); // isFetchingをfalseに
      });
  };

  useEffect(() => {
    handleFetchData();
  }, []);

  return (
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
                      <Card
                        productName={share.productName}
                        img={share.productImg}
                        description={share.description}
                        price={share.price}
                        period={share.period}
                        shippingArea={share.shippingArea}
                        days={share.days}
                        name={share.name}
                        avatar={share.avatar}
                        comment={share.comment}
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
};

export default RentPage;
