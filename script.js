function showSection(sectionId) {
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => {
    section.style.display = 'none';
  });

  const selected = document.getElementById(sectionId);
  if (selected) selected.style.display = 'block';
}
const questions = [
  {
    question: "Thác Bản Giốc thuộc huyện nào?",
    correct: "A",
    options: {
      A: "Trùng Khánh",
      B: "Bảo Lâm",
      C: "Nguyên Bình",
      D: "Hà Quảng"
    }
  },
  {
    question: "Khu di tích Pác Bó gắn với ai?",
    correct: "C",
    options: {
      A: "Vua Hùng",
      B: "Ngô Quyền",
      C: "Hồ Chí Minh",
      D: "Trần Hưng Đạo"
    }
  },
  {
    question: "Cao Bằng giáp biên giới với nước nào?",
    correct: "B",
    options: {
      A: "Lào",
      B: "Trung Quốc",
      C: "Thái Lan",
      D: "Campuchia"
    }
  }
];

let current = 0;

function loadQuestion() {
  const q = questions[current];
  document.getElementById("question").innerHTML = q.question + "<br>" +
    A: ${q.options.A} | B: ${q.options.B} | C: ${q.options.C} | D: ${q.options.D};
  document.getElementById("result").innerText = "";
}

function answer(choice) {
  const q = questions[current];
  const result = document.getElementById("result");
  if (choice === q.correct) {
    result.innerText = "Chính xác!";
  } else {
    result.innerText = Sai rồi. Đáp án đúng là ${q.correct}: ${q.options[q.correct]};
  }

  setTimeout(() => {
    current++;
    if (current < questions.length) {
      loadQuestion();
    } else {
      document.getElementById("question").innerText = "Bạn đã hoàn thành trò chơi!";
      document.getElementById("result").innerText = "";
    }
  }, 3000);
}

// Khi chuyển sang phần trò chơi thì tự động hiển thị câu hỏi
if (window.location.hash === "#game") {
  loadQuestion();
}
