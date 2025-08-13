document.addEventListener('DOMContentLoaded', () => {

    // 모든 모달창과 클릭 영역(Hotspot)을 변수로 지정
    const modals = {
        computer: document.getElementById('computer-modal'),
        microscope: document.getElementById('microscope-modal'),
        paper: document.getElementById('paper-modal'),
        flask: document.getElementById('flask-modal'),
        door: document.getElementById('door-modal'),
        success: document.getElementById('success-modal')
    };

    const hotspots = {
        computer: document.getElementById('computer-hotspot'),
        microscope: document.getElementById('microscope-hotspot'),
        paper: document.getElementById('paper-hotspot'),
        flask: document.getElementById('flask-hotspot'),
        door: document.getElementById('door-hotspot')
    };

    // 모든 닫기 버튼을 변수로 지정
    const closeButtons = document.querySelectorAll('.close-button');

    // 모달창을 여는 함수
    function openModal(modal) {
        modal.style.display = 'block';
    }

    // 모달창을 닫는 함수
    function closeModal(modal) {
        modal.style.display = 'none';
    }

    // Hotspot 클릭 이벤트 리스너
    hotspots.computer.addEventListener('click', () => openModal(modals.computer));
    hotspots.microscope.addEventListener('click', () => openModal(modals.microscope));
    hotspots.paper.addEventListener('click', () => openModal(modals.paper));
    hotspots.flask.addEventListener('click', () => openModal(modals.flask));
    hotspots.door.addEventListener('click', () => openModal(modals.door));

    // 닫기(X) 버튼 이벤트 리스너
    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            closeModal(button.closest('.modal'));
        });
    });

    // 모달창 바깥 영역 클릭 시 닫기
    window.addEventListener('click', (event) => {
        if (event.target.classList.contains('modal')) {
            closeModal(event.target);
        }
    });
    
    // --- 퀴즈 로직 ---

    // 1. 컴퓨터 퀴즈
    document.getElementById('computer-submit').addEventListener('click', () => {
        const answer = document.getElementById('computer-answer').value;
        const result = document.getElementById('computer-result');
        if (answer === '8') {
            result.textContent = '정답! [탈출 암호의 두 번째 숫자는 8입니다.]';
            result.style.color = 'green';
        } else {
            result.textContent = '오답입니다. 다시 생각해보세요.';
            result.style.color = 'red';
        }
    });

    // 2. 현미경 퀴즈
    document.getElementById('microscope-submit').addEventListener('click', () => {
        const answer = document.getElementById('microscope-answer').value;
        const result = document.getElementById('microscope-result');
        if (answer === '1') {
            result.textContent = '정답! [탈출 암호의 세 번째 숫자는 1입니다.]';
            result.style.color = 'green';
        } else {
            result.textContent = '오답입니다. 다시 생각해보세요.';
            result.style.color = 'red';
        }
    });

    // 3. 실험종이 퀴즈
    document.getElementById('paper-submit').addEventListener('click', () => {
        const answer = document.getElementById('paper-answer').value;
        const result = document.getElementById('paper-result');
        if (answer === '5') {
            result.textContent = '정답! [탈출 암호의 네 번째 숫자는 5입니다.]';
            result.style.color = 'green';
        } else {
            result.textContent = '오답입니다. 다시 생각해보세요.';
            result.style.color = 'red';
        }
    });

    // 4. 플라스크 퀴즈
    document.getElementById('flask-submit').addEventListener('click', () => {
        const answer = document.getElementById('flask-answer').value;
        const result = document.getElementById('flask-result');
        if (answer === '0') {
            result.textContent = '정답! [탈출 암호의 첫 번째 숫자는 0입니다.]';
            result.style.color = 'green';
        } else {
            result.textContent = '오답입니다. 다시 생각해보세요.';
            result.style.color = 'red';
        }
    });

    // --- 문 비밀번호 로직 ---
    document.getElementById('door-submit').addEventListener('click', () => {
        const password = document.getElementById('door-password').value;
        const result = document.getElementById('door-result');
        const finalPassword = '0815';

        if (password === finalPassword) {
            closeModal(modals.door);
            openModal(modals.success);
        } else {
            result.textContent = '비밀번호가 틀렸습니다.';
            result.style.color = 'red';
        }
    });
});