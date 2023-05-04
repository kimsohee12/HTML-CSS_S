//ajax ->비동기통신 방법
//j쿼리에 접근 -> $.
//ajax 메소드 사용->ajax()
//데이터는 json 형태로 -> {key:value,~}
let movieUrl = "http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20230501"
const getAPI = ()=>{
    $.ajax({
        // 어느 데이터를 가져올 건지
        url : movieUrl,
        // 어떤 방식으로 통신할 건지
        type : 'get',
        // 통신 성공 시 실행 로직
        success :(response)=>{
            alert('통신 성공!');
            let movieList = response.boxOfficeResult.dailyBoxOfficeList;
            for(let i=0; i<movieList.length;i++){
                console.log(movieList[i].rank,movieList[i].movieNm,movieList[i].openDt);
            }
           //테이블이 출력될 공간인 container에 
           //보내줄 코드를 누적해서 작성해준 다음 
           //마지막에 넣어주자 !
           let tableForm = `
           <table border="1px solid black">
                <tr>
                    <th>순위</th>
                    <th>영화제목</th>
                    <th>개봉일</th>
                </tr>`;
            // tableForm = `
            //     <tr>
            //         <th>${movieList[0],rank}</td>
            //         <th>${movieList[0],rank}</td>
            //         <th>${movieList[0],rank}</td>
            //     </tr>
            // `
            for(let i of movieList){
                tableForm += `
                <tr>
                    <td>${i.rank}</td>
                    <td>${i.movieNm}</td>
                    <td>${i.openDt}</td>
                </tr>
            `
            }
            tableForm +=`
            </table>`;
            $('.contniner').html(tableForm);
        },
        // 통신 실패 시 실행 로직
        error :()=>{
            alert('통신실패!');
        }

    })
}