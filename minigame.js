var questions = [
  {
      zh_CN: {
          question: "李飞飞是哪个领域的专家？",
          options: ["人工智能", "量子物理", "生物学", "航天工程"],
          answer: 0
      },
      en: {
          question: "In which field is Li Feifei an expert?",
          options: ["Artificial Intelligence", "Quantum Physics", "Biology", "Aerospace Engineering"],
          answer: 0
      }
  },
  {
      zh_CN: {
          question: "李飞飞最为著名的贡献之一是什么？",
          options: ["AlphaGo", "Google", "ResNet", "Word2Vec"],
          answer: 3
      },
      en: {
          question: "One of Li Feifei's most famous contributions is?",
          options: ["AlphaGo", "Google", "ResNet", "Word2Vec"],
          answer: 3
      }
  },
  {
      zh_CN: {
          question: "李飞飞曾在哪所大学任教？",
          options: ["斯坦福大学", "哈佛大学", "清华大学", "牛津大学"],
          answer: 2
      },
      en: {
          question: "Where did Li Feifei teach?",
          options: ["Stanford University", "Harvard University", "Tsinghua University", "Oxford University"],
          answer: 2
      }
  },
  {
      zh_CN: {
          question: "李飞飞的研究方向主要是？",
          options: ["机器学习", "计算机网络", "量子计算", "心理学"],
          answer: 0
      },
      en: {
          question: "What is Li Feifei's main research direction?",
          options: ["Machine Learning", "Computer Networks", "Quantum Computing", "Psychology"],
          answer: 0
      }
  },
  {
      zh_CN: {
          question: "李飞飞是哪个机构的院士？",
          options: ["IEEE", "ACM", "CAS", "AAAS"],
          answer: 2
      },
      en: {
          question: "Li Feifei is a fellow of which institution?",
          options: ["IEEE", "ACM", "CAS", "AAAS"],
          answer: 2
      }
  },
  {
      zh_CN: {
          question: "李飞飞主要研究的是哪个学科中的计算模型？",
          options: ["神经科学", "心理学", "计算机科学", "物理学"],
          answer: 0
      },
      en: {
          question: "Which computational model is Li Feifei's team primarily researching in which field?",
          options: ["Neuroscience", "Psychology", "Computer Science", "Physics"],
          answer: 0
      }
  },
  {
      zh_CN: {
          question: "李飞飞是哪个国家的人？",
          options: ["中国", "美国", "英国", "加拿大"],
          answer: 0
      },
      en: {
          question: "Which country does Li Feifei come from?",
          options: ["China", "USA", "UK", "Canada"],
          answer: 0
      }
  },
  {
      zh_CN: {
          question: "李飞飞的哪个算法被广泛用于自然语言处理中的词向量表示？",
          options: ["SVM", "LSTM", "CNN", "Word2Vec"],
          answer: 3
      },
      en: {
          question: "Which algorithm developed by Li Feifei is widely used for word vector representation in natural language processing?",
          options: ["SVM", "LSTM", "CNN", "Word2Vec"],
          answer: 3
      }
  },
  {
      zh_CN: {
          question: "李飞飞领导的团队在什么比赛中击败了围棋世界冠军？",
          options: ["人类与机器人大战", "全国大学生程序设计竞赛", "计算机视觉竞赛", "围棋人机大战"],
          answer: 3
      },
      en: {
          question: "In what competition did Li Feifei's team defeat the world champion of Go?",
          options: ["Human vs. Robot Battle", "National Collegiate Programming Contest", "Computer Vision Competition", "Go Man vs. Machine Battle"],
          answer: 3
      }
  },
  {
      zh_CN: {
          question: "李飞飞的团队设计的深度学习框架是？",
          options: ["TensorFlow", "PyTorch", "Keras", "Caffe"],
          answer: 0
      },
      en: {
          question: "Which deep learning framework designed by Li Feifei's team?",
          options: ["TensorFlow", "PyTorch", "Keras", "Caffe"],
          answer: 0
      }
  }
];

var currentQuestion = 0;
var score = 0;
var language = "zh_CN"; // 默认语言为中文

function startQuiz() {
  var selectedLanguage = document.getElementById("languageSelect").value;
  language = selectedLanguage;
  currentQuestion = 0; // 重置当前问题索引为0
  score = 0; // 重置分数为0
  document.getElementById("main").style.display = "none";
  document.getElementById("quiz").style.display = "block";
  document.getElementById("submitBtn").innerText = (language === "zh_CN") ? "提交答案" : "Submit Answer";
  displayQuestion();
}


function displayQuestion() {
  if (currentQuestion < questions.length) {
      var questionText = questions[currentQuestion][language].question;
      document.getElementById("question").innerHTML = questionText;
      var optionsHTML = "";
      for (var i = 0; i < questions[currentQuestion][language].options.length; i++) {
          optionsHTML += "<input type='radio' name='option' value='" + i + "'> " + questions[currentQuestion][language].options[i] + "<br>";
      }
      document.getElementById("options").innerHTML = optionsHTML;
  } else {
      endQuiz();
  }
}

function checkAnswer() {
  var selectedOption = document.querySelector('input[name="option"]:checked');
  if (selectedOption) {
      var userAnswer = parseInt(selectedOption.value);
      var correctAnswer = questions[currentQuestion][language].answer;
      if (userAnswer === correctAnswer) {
          score++;
          var feedback = (language === "zh_CN") ? "正确" : "Correct!";
          document.getElementById("result").innerHTML = "<span class='correct'><span class='emoji'>&#x1F44D;</span> " + feedback + "</span>";
      } else {
          var correctOption = questions[currentQuestion][language].options[correctAnswer];
          var feedback = (language === "zh_CN") ? "错误。正确答案是：" + correctOption : "Incorrect. The correct answer is: " + correctOption;
          document.getElementById("result").innerHTML = "<span class='incorrect'><span class='emoji'>&#x1F62D;</span> " + feedback + "</span>";
      }
      currentQuestion++;
      if (currentQuestion < questions.length) {
          displayQuestion();
      } else {
          endQuiz();
      }
  } else {
      alert("Please select an option!");
  }
}


function endQuiz() {
  document.getElementById("quiz").style.display = "none";
  var scoreElement = document.getElementById("scoreValue");
  scoreElement.textContent = score;
  document.getElementById("scoreContainer").style.display = "block";
}

function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  document.getElementById("scoreContainer").style.display = "none";
  document.getElementById("main").style.display = "block";
  document.getElementById("quiz").style.display = "none";
  document.getElementById("result").innerHTML = ""; // 清空上一轮的结果
}