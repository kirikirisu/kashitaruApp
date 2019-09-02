import React, { useEffect } from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import Card from '../cardComponent/index';

const RentPage = ({ store, requestData, receiveDataSuccess, receiveDataFailed }) => {
  const { isFetching, shareInformationsArray } = store.shareInformations;

  const handleFetchData = () => {
    requestData();  // axios.get()を呼ぶ前にisFetchingをtrueにしておく
    axios.get('/api/share')
      .then(response => {  // データ受け取りに成功した場合
        const _characterArray = response.data;
        receiveDataSuccess(_characterArray);    // データをstoreに保存するとともにisFetchingをfalseに
      })
      .catch(err => {  // データ受け取りに失敗した場合
        console.error(new Error(err))
        receiveDataFailed();  // isFetchingをfalseに
      })
  }

  useEffect(() => {
    handleFetchData();
  }, []);

  return (
    <div>
      {
        isFetching  // isFetchingの値で分岐
          ? <h2>Now Loading...</h2>  // データをFetch中ならばローディングアイコンを表示
          : <div>
            <Grid item xs={12}>
              <Grid container justify="center" spacing={2}>
                {shareInformationsArray.map(share => (
                  <Grid key={share._id} item>
                    <Card productName={share.productName} name={share.name} comment={share.comment} />
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </div>
      }
    </div>
  )
}

export default RentPage;
