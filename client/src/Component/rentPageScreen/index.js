import React from 'react';
import axios from 'axios';

const RentPage = ({ store, requestData, receiveDataSuccess, receiveDataFailed }) => {
  const { isFetching, characterArray } = store.characters;
  console.log(characterArray);

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

  return (
    <div>
      {
        isFetching  // isFetchingの値で分岐
          ? <h2>Now Loading...</h2>  // データをFetch中ならばローディングアイコンを表示
          : <div>
            <button onClick={() => handleFetchData()}>fetch data</button>
            <ul>
              {characterArray.map(character => (
                <li key={character._id}>
                  {`${character.productName} ${character.companyName} ${character.name} ${character.mailAddress} ${character.companyAddress} ${character.comment}`}
                </li>
              ))}
            </ul>
          </div>
      }
    </div>
  )
}

export default RentPage;
