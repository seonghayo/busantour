/* 정보입력 */

const TourItem = ({article}) => {
    const {
        MAIN_TITLE,/* 콘텐츠명 */
        TITLE,/* 제목 */
        GUGUN_NM,/* 구군 */
        HOMEPAGE_URL,/* 홈페이지 */
        MAIN_IMG_NORMAL,/* 이미지URL */
        ADDR1,
        USAGE_DAY_WEEK_AND_TIME
        } = article;
    return (
        <div className="item">
            <div className="title">
                <span>{GUGUN_NM}</span>
                <strong>{MAIN_TITLE}</strong>
                <h4>{TITLE}</h4>
            </div> {/* .title end */} 
            <img src={MAIN_IMG_NORMAL} alt={TITLE} />
            <p>주소 : {ADDR1}</p>
            <p>영업시간 : {USAGE_DAY_WEEK_AND_TIME}</p>
            {/* noreferrer : 해당페이지로 넘어가기 위해 http에게 요청함 */}
            {HOMEPAGE_URL && <a href={HOMEPAGE_URL} target="_blank" rel="noreferrer" >바로가기</a>}

        </div> /* .item end */
    )
}

export default TourItem;
