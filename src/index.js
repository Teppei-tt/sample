import "./styles.css";

// document.getElementById("app").innerHTML = `
// <h1>Hello Vanilla!</h1>
// <div>
//   We use the same configuration as Parcel to bundle this sandbox, you can find more
//   info about Parcel 
//   <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
// </div>
// `;
console.log(123456);


// $('#app').on('click', function name() {
//   console.log(1234);
// })
$('#app').on('click', (hoge)=> {
  console.log(1234);
  console.log(hoge.value);
  
})


/* 考えメモ
①挿入するhtmlをこのサンプルのように、作ってしまう。
その中で、変数で、だし分けしたいhtmlを管理する？
*/