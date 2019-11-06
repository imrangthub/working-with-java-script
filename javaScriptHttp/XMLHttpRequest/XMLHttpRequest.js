
  const getReqBtn = document.getElementById('getReqBtn');
  const postReqBtn = document.getElementById('postReqBtn');
  const resultShow  =  document.getElementById("resultShow");

  const getDataReq = () => {
    console.log("getDataReq:");

    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:8090/api/consulation/list')
    xhr.responseType = 'json';

    xhr.onload = () => {
     // const resData = JSON.parse(xhr.response);
     const resData = xhr.response;
      console.log("RES# ", resData);
      resultShow.innerText =JSON.stringify (resData.items);

    }

    xhr.send();
  }

  const postDataReq = () => {
    console.log("postDataReq:");
  }


getReqBtn.addEventListener('click', getDataReq);

postReqBtn.addEventListener('click', postDataReq);




