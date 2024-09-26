

export const Styles = {
    // 전체 페이지 스타일
    page: {
        width: "100%",         // 페이지의 너비를 100%로 설정
        height: "400px",       // 페이지의 높이를 뷰포트 높이의 90%로 설정
        display: 'flex',       // 플렉스 박스 레이아웃을 사용
        flexDirection: 'column' // 자식 요소들을 수직으로 배치
    },
    
    // 헤더 스타일
    header: {
        width: '100%',        // 헤더의 너비를 100%로 설정
        height: '100px',      // 헤더의 높이를 100px로 설정
        display: "flex",      // 플렉스 박스 레이아웃을 사용
        justifyContent: 'center', // 수평 중앙 정렬
        alignItems: 'center'  // 수직 중앙 정렬
    },
    
    // 콘텐츠 스타일
    content: {
        flex: 1,              // 남은 공간을 모두 차지
        display: 'flex',      // 플렉스 박스 레이아웃을 사용
        justifyContent: 'center', // 수평 중앙 정렬
        alignItems: 'center', // 수직 중앙 정렬
        fontSize: '20px'      // 텍스트 크기를 20px로 설정
    },
    
    // 푸터 스타일
    footer: {
        width: '100%',        // 푸터의 너비를 100%로 설정
        height: '100px',      // 푸터의 높이를 100px로 설정
        display: 'flex',      // 플렉스 박스 레이아웃을 사용
        justifyContent: 'center', // 수평 중앙 정렬
        alignItems: 'center', // 수직 중앙 정렬
        flexDirection: 'column' // 자식 요소들을 수직으로 배치
    }
  }
  