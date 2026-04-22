$(document).ready(function() {
  // 1. 온라인 사용자 목록 생성
  const onlineUsers = ['시형', '엄마', '아빠', '동생놈', '???'];
  const $onlineUsersList = $('#online-users');

  onlineUsers.forEach(user => {
    $onlineUsersList.append(`<li>${user}</li>`);
  });

  // 2. 마우스 위치에 따른 사이드바 감지 로직
  const $sidebar = $('#sidebar');

  // 화면 전체에서 마우스 이동 감지
  $(document).on('mousemove', function(e) {
    // 마우스가 화면 오른쪽 끝 20px 이내로 들어오면 사이드바 표시
    if (e.pageX >= $(window).width() - 20) {
      $sidebar.addClass('active');
    }
  });

  // 마우스가 사이드바 영역을 완전히 벗어나면 사이드바 숨김
  $sidebar.on('mouseleave', function() {
    $sidebar.removeClass('active');
  });

  // 3. 이미지 슬라이드 기능
  const slides = document.querySelectorAll('.slideshow img');
  let currentSlideIndex = 0;

  if (slides.length > 1) {
    function showNextSlide() {
      slides.forEach(slide => slide.classList.remove('active'));
      currentSlideIndex = (currentSlideIndex + 1) % slides.length;
      slides[currentSlideIndex].classList.add('active');
    }
    setInterval(showNextSlide, 3000);
  }

  // 4. 게시글 추가 기능
  $('#submit-btn').on('click', function() {
    const postTitle = $('#post-title').val();
    const postContent = $('#post-content').val();

    if (postTitle.trim() === '' || postContent.trim() === '') {
      alert('제목과 내용을 모두 입력해주세요.');
      return;
    }

    const postHtml = `
      <div style="background: white; padding: 15px; margin-bottom: 10px; border-radius: 5px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
        <h3 style="margin: 0 0 10px 0;">${postTitle}</h3>
        <p style="margin: 0;">${postContent}</p>
      </div>
    `;

    $('#post-container').prepend(postHtml);
    $('#post-title').val('');
    $('#post-content').val('');
  });
});

// 일정 클릭 시 알림 함수
function showAlert(schedule) {
  alert(schedule);
}